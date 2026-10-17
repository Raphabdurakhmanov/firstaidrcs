import { cache } from "react";
import { BUILTIN_TOPICS, mergeTopics } from "./content";
import { createClient } from "./supabase/server";
import type { L, Topic } from "./types";

export type Role = "volunteer" | "coordinator" | "admin";

export type Profile = {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  region: string | null;
  role: Role;
  created_at: string;
};

export type NewsItem = {
  id: string;
  title: L;
  body: L;
  cover_url: string | null;
  audience: "public" | "volunteers";
  published: boolean;
  created_at: string;
};

export type Attempt = { id: string; kind: "topic" | "exam"; slug: string | null; score: number; total: number; created_at: string };

type TopicRow = { slug: string; data: Omit<Topic, "slug">; published: boolean };

const rowToTopic = (r: TopicRow): Topic => ({ ...r.data, slug: r.slug, published: r.published, source: "db" });

export const getSession = cache(async () => {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  if (!data.user) return null;
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).maybeSingle();
  return { user: data.user, profile: (profile as Profile | null) ?? null };
});

export const isStaff = (p: Profile | null | undefined) => p?.role === "coordinator" || p?.role === "admin";

export const getDbTopics = cache(async (): Promise<Topic[]> => {
  const supabase = await createClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from("topics").select("slug, data, published");
  if (error || !data) return [];
  return (data as TopicRow[]).map(rowToTopic);
});

export const getTopics = cache(async (includeHidden = false) => mergeTopics(await getDbTopics(), includeHidden));

export async function getTopic(slug: string, includeHidden = false) {
  return (await getTopics(includeHidden)).find((t) => t.slug === slug) ?? null;
}

export function builtinTopic(slug: string) {
  return BUILTIN_TOPICS.find((t) => t.slug === slug) ?? null;
}

export async function getNews(limit = 50, opts: { includeDrafts?: boolean } = {}): Promise<NewsItem[]> {
  const supabase = await createClient();
  if (!supabase) return [];
  let q = supabase.from("news").select("*").order("created_at", { ascending: false }).limit(limit);
  if (!opts.includeDrafts) q = q.eq("published", true);
  const { data } = await q;
  return (data as NewsItem[] | null) ?? [];
}

export async function getNewsItem(id: string): Promise<NewsItem | null> {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data } = await supabase.from("news").select("*").eq("id", id).maybeSingle();
  return (data as NewsItem | null) ?? null;
}

export async function getProgress(userId: string): Promise<string[]> {
  const supabase = await createClient();
  if (!supabase) return [];
  const { data } = await supabase.from("topic_progress").select("slug").eq("user_id", userId);
  return (data ?? []).map((r: { slug: string }) => r.slug);
}

export async function getAttempts(userId: string): Promise<Attempt[]> {
  const supabase = await createClient();
  if (!supabase) return [];
  const { data } = await supabase
    .from("quiz_attempts")
    .select("id, kind, slug, score, total, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(50);
  return (data as Attempt[] | null) ?? [];
}
