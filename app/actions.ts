"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSession, isStaff, type Role } from "@/lib/data";
import { validateTopic } from "@/lib/validate";
import { LANGS, type L, type Topic } from "@/lib/types";
import { AGREEMENT_VERSION, DIRECTIONS, REGIONS } from "@/lib/agreement";

type Result = { ok: true } | { ok: false; error: string };

async function requireUser() {
  const supabase = await createClient();
  const session = await getSession();
  if (!supabase || !session) return null;
  return { supabase, session };
}

async function requireStaff() {
  const ctx = await requireUser();
  if (!ctx || !isStaff(ctx.session.profile)) return null;
  return ctx;
}

// волонтёр

export async function setStudied(slug: string, studied: boolean): Promise<Result> {
  const ctx = await requireUser();
  if (!ctx) return { ok: false, error: "auth" };
  const { supabase, session } = ctx;
  const res = studied
    ? await supabase.from("topic_progress").upsert({ user_id: session.user.id, slug })
    : await supabase.from("topic_progress").delete().eq("user_id", session.user.id).eq("slug", slug);
  if (res.error) return { ok: false, error: res.error.message };
  revalidatePath("/cabinet");
  return { ok: true };
}

export async function saveAttempt(input: { kind: "topic" | "exam"; slug: string | null; score: number; total: number }): Promise<Result> {
  const ctx = await requireUser();
  if (!ctx) return { ok: false, error: "auth" };
  const { supabase, session } = ctx;
  const total = Math.trunc(input.total);
  const score = Math.trunc(input.score);
  if (!["topic", "exam"].includes(input.kind) || total < 1 || total > 30 || score < 0 || score > total) {
    return { ok: false, error: "invalid" };
  }
  const { error } = await supabase.from("quiz_attempts").insert({
    user_id: session.user.id,
    kind: input.kind,
    slug: input.kind === "topic" ? input.slug : null,
    score,
    total,
  });
  if (error) return { ok: false, error: error.message };
  // если мини-тест сдан на 2/3 и больше — считаем тему изученной
  if (input.kind === "topic" && input.slug && score * 3 >= total * 2) {
    await supabase.from("topic_progress").upsert({ user_id: session.user.id, slug: input.slug });
  }
  revalidatePath("/cabinet");
  return { ok: true };
}

export async function updateProfile(formData: FormData) {
  const ctx = await requireUser();
  if (!ctx) redirect("/login");
  const full_name = String(formData.get("full_name") ?? "").trim().slice(0, 120);
  const region = String(formData.get("region") ?? "").trim().slice(0, 120);
  await ctx.supabase.from("profiles").update({ full_name, region }).eq("id", ctx.session.user.id);
  revalidatePath("/cabinet");
  redirect("/cabinet?saved=1");
}

// координатор / администратор

export async function saveTopic(json: string): Promise<Result> {
  const ctx = await requireStaff();
  if (!ctx) return { ok: false, error: "forbidden" };
  let topic: Topic;
  try {
    topic = JSON.parse(json);
  } catch {
    return { ok: false, error: "JSON" };
  }
  const problems = validateTopic(topic);
  if (problems.length) return { ok: false, error: problems.join("; ") };
  const { slug, published, source: _s, ...data } = topic;
  const { error } = await ctx.supabase.from("topics").upsert({
    slug,
    data,
    published: published !== false,
    updated_by: ctx.session.user.id,
    updated_at: new Date().toISOString(),
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath("/", "layout");
  return { ok: true };
}

export async function deleteTopic(slug: string): Promise<Result> {
  const ctx = await requireStaff();
  if (!ctx) return { ok: false, error: "forbidden" };
  const { error } = await ctx.supabase.from("topics").delete().eq("slug", slug);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/", "layout");
  return { ok: true };
}

const readL = (formData: FormData, key: string): L =>
  Object.fromEntries(LANGS.map((lang) => [lang, String(formData.get(`${key}_${lang}`) ?? "").trim()])) as L;

export async function saveNews(formData: FormData) {
  const ctx = await requireStaff();
  if (!ctx) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  const title = readL(formData, "title");
  const body = readL(formData, "body");
  // если перевода нет — показываем русский текст
  for (const lang of LANGS) {
    if (!title[lang]) title[lang] = title.ru;
    if (!body[lang]) body[lang] = body.ru;
  }
  if (!title.ru) redirect(`/admin/news/edit?${id ? `id=${id}&` : ""}error=title`);
  const row = {
    title,
    body,
    cover_url: String(formData.get("cover_url") ?? "").trim() || null,
    audience: formData.get("audience") === "volunteers" ? "volunteers" : "public",
    published: formData.get("published") === "on",
    author_id: ctx.session.user.id,
  };
  const res = id ? await ctx.supabase.from("news").update(row).eq("id", id) : await ctx.supabase.from("news").insert(row);
  if (res.error) redirect(`/admin/news/edit?${id ? `id=${id}&` : ""}error=${encodeURIComponent(res.error.message)}`);
  revalidatePath("/", "layout");
  redirect("/admin/news");
}

export async function deleteNews(formData: FormData) {
  const ctx = await requireStaff();
  if (!ctx) redirect("/admin");
  await ctx.supabase.from("news").delete().eq("id", String(formData.get("id")));
  revalidatePath("/", "layout");
  redirect("/admin/news");
}

export async function setRole(formData: FormData) {
  const ctx = await requireStaff();
  if (!ctx || ctx.session.profile?.role !== "admin") redirect("/admin");
  const id = String(formData.get("id"));
  const role = String(formData.get("role")) as Role;
  if (!["volunteer", "coordinator", "admin"].includes(role)) redirect("/admin/volunteers");
  if (id === ctx.session.user.id) redirect("/admin/volunteers?error=self");
  await ctx.supabase.from("profiles").update({ role }).eq("id", id);
  revalidatePath("/admin/volunteers");
  redirect("/admin/volunteers");
}

// заявка волонтёра

const APPLICATION_STATUSES = ["new", "contacted", "accepted", "rejected"] as const;

export async function submitApplication(input: {
  full_name: string;
  phone: string;
  email: string;
  region: string;
  age_group: string;
  occupation: string;
  directions: string[];
  telegram: string;
  comment: string;
  website: string;
  accepted: boolean;
  lang: string;
}): Promise<Result> {
  // honeypot: заполнил бот
  if (input.website) return { ok: true };
  if (!input.accepted) return { ok: false, error: "consent" };
  const name = input.full_name.trim().replace(/\s+/g, " ").slice(0, 120);
  if (name.split(" ").length < 2) return { ok: false, error: "name" };
  const digits = input.phone.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) return { ok: false, error: "phone" };
  if (!REGIONS.ru.includes(input.region)) return { ok: false, error: "region" };

  const supabase = await createClient();
  if (!supabase) return { ok: false, error: "not_configured" };
  const session = await getSession();
  const allowedDirections = new Set<string>(DIRECTIONS.map((d) => d.id));

  const { error } = await supabase.from("volunteer_applications").insert({
    user_id: session?.user.id ?? null,
    full_name: name,
    phone: input.phone.trim().slice(0, 20),
    email: input.email.trim().slice(0, 120) || null,
    region: input.region,
    age_group: input.age_group.slice(0, 20) || null,
    occupation: input.occupation.slice(0, 60) || null,
    directions: input.directions.filter((d) => allowedDirections.has(d)),
    telegram: input.telegram.trim().slice(0, 40) || null,
    comment: input.comment.trim().slice(0, 1000) || null,
    lang: ["ru", "en", "uz"].includes(input.lang) ? input.lang : "ru",
    agreement_version: AGREEMENT_VERSION,
  });
  if (error) return { ok: false, error: "db" };
  revalidatePath("/admin/applications");
  return { ok: true };
}

export async function setApplicationStatus(formData: FormData) {
  const ctx = await requireStaff();
  if (!ctx) redirect("/admin");
  const status = String(formData.get("status"));
  if (!(APPLICATION_STATUSES as readonly string[]).includes(status)) redirect("/admin/applications");
  await ctx.supabase
    .from("volunteer_applications")
    .update({ status, staff_note: String(formData.get("staff_note") ?? "").slice(0, 500) || null, handled_by: ctx.session.user.id })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/applications");
  redirect(`/admin/applications${formData.get("filter") ? `?status=${formData.get("filter")}` : ""}`);
}
