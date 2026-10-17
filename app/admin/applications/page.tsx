import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { createClient } from "@/lib/supabase/server";
import { setApplicationStatus } from "@/app/actions";
import { DIRECTIONS } from "@/lib/agreement";
import { fmtDate } from "@/components/NewsCard";
import type { Lang } from "@/lib/types";

type App = {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  region: string;
  age_group: string | null;
  occupation: string | null;
  directions: string[];
  telegram: string | null;
  comment: string | null;
  agreement_version: string;
  accepted_at: string;
  status: "new" | "contacted" | "accepted" | "rejected";
  staff_note: string | null;
};

const S: Record<Lang, Record<App["status"] | "all" | "title" | "empty" | "agreed" | "save" | "note", string>> = {
  ru: { all: "Все", new: "Новые", contacted: "Связались", accepted: "Приняты", rejected: "Отказ", title: "Заявки волонтёров", empty: "Заявок пока нет.", agreed: "Соглашение принято", save: "Сохранить", note: "Заметка координатора" },
  en: { all: "All", new: "New", contacted: "Contacted", accepted: "Accepted", rejected: "Declined", title: "Volunteer applications", empty: "No applications yet.", agreed: "Agreement accepted", save: "Save", note: "Coordinator note" },
  uz: { all: "Barchasi", new: "Yangi", contacted: "Bogʻlanildi", accepted: "Qabul qilindi", rejected: "Rad etildi", title: "Koʻngillilar arizalari", empty: "Hozircha arizalar yoʻq.", agreed: "Kelishuv qabul qilingan", save: "Saqlash", note: "Koordinator izohi" },
};

const STATUSES = ["new", "contacted", "accepted", "rejected"] as const;

export default async function Applications({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const { lang } = await getDict();
  const s = S[lang];
  const supabase = (await createClient())!;
  let q = supabase.from("volunteer_applications").select("*").order("created_at", { ascending: false }).limit(500);
  if (status && (STATUSES as readonly string[]).includes(status)) q = q.eq("status", status);
  const { data } = await q;
  const apps = (data ?? []) as App[];
  const dir = (id: string) => DIRECTIONS.find((d) => d.id === id)?.[lang] ?? id;

  return (
    <div className="panel">
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0 }}>
          {s.title} · {apps.length}
        </h2>
      </div>
      <div className="filters" style={{ marginBottom: 18 }}>
        <Link href="/admin/applications" className={`chip ${!status ? "on" : ""}`}>
          {s.all}
        </Link>
        {STATUSES.map((st) => (
          <Link key={st} href={`/admin/applications?status=${st}`} className={`chip ${status === st ? "on" : ""}`}>
            {s[st]}
          </Link>
        ))}
      </div>
      {apps.length === 0 ? (
        <div className="empty">{s.empty}</div>
      ) : (
        <div className="stack">
          {apps.map((a) => (
            <article key={a.id} className="app-card">
              <div className="row" style={{ alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <b style={{ fontSize: 17 }}>{a.full_name}</b>
                  <div className="row small" style={{ gap: 10, marginTop: 4 }}>
                    <a href={`tel:${a.phone.replace(/[^\d+]/g, "")}`} className="link" style={{ textTransform: "none", letterSpacing: 0, fontSize: 14 }}>
                      ☎ {a.phone}
                    </a>
                    {a.telegram && <span>{a.telegram}</span>}
                    {a.email && <a href={`mailto:${a.email}`}>{a.email}</a>}
                  </div>
                  <div className="small muted" style={{ marginTop: 6 }}>
                    {[a.region, a.age_group, a.occupation].filter(Boolean).join(" · ")}
                  </div>
                  {a.directions.length > 0 && (
                    <div className="row" style={{ gap: 6, marginTop: 8 }}>
                      {a.directions.map((d) => (
                        <span key={d} className="tag">
                          {dir(d)}
                        </span>
                      ))}
                    </div>
                  )}
                  {a.comment && <p className="small" style={{ marginBottom: 0, whiteSpace: "pre-line" }}>{a.comment}</p>}
                  <div className="small muted" style={{ marginTop: 8 }}>
                    {fmtDate(a.created_at, lang)} · ✓ {s.agreed} ({a.agreement_version})
                  </div>
                </div>
                <form action={setApplicationStatus} className="stack" style={{ gap: 8, minWidth: 220 }}>
                  <input type="hidden" name="id" value={a.id} />
                  {status && <input type="hidden" name="filter" value={status} />}
                  <select name="status" defaultValue={a.status} className={`status-select st-${a.status}`}>
                    {STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {s[st]}
                      </option>
                    ))}
                  </select>
                  <input name="staff_note" defaultValue={a.staff_note ?? ""} placeholder={s.note} maxLength={500} className="note-input" />
                  <button className="btn small dark">{s.save}</button>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
