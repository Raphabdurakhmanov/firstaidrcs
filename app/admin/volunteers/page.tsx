import { getDict } from "@/lib/i18n/server";
import { createClient } from "@/lib/supabase/server";
import { getSession, getTopics, type Profile, type Role } from "@/lib/data";
import { setRole } from "@/app/actions";
import { EXAM_PASS, EXAM_SIZE } from "@/lib/quiz";
import { fmtDate } from "@/components/NewsCard";

export default async function Volunteers({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const { lang, t } = await getDict();
  const supabase = (await createClient())!;
  const session = await getSession();
  const isAdmin = session?.profile?.role === "admin";

  const [{ data: profiles }, { data: progress }, { data: attempts }, topics] = await Promise.all([
    supabase.from("profiles").select("*").order("created_at", { ascending: false }).limit(500),
    supabase.from("topic_progress").select("user_id, slug").limit(20000),
    supabase.from("quiz_attempts").select("user_id, score, total").eq("kind", "exam").limit(20000),
    getTopics(),
  ]);

  const core = new Set(topics.filter((x) => x.core).map((x) => x.slug));
  const coreCount = new Map<string, number>();
  for (const p of (progress ?? []) as { user_id: string; slug: string }[]) {
    if (core.has(p.slug)) coreCount.set(p.user_id, (coreCount.get(p.user_id) ?? 0) + 1);
  }
  const best = new Map<string, number>();
  for (const a of (attempts ?? []) as { user_id: string; score: number }[]) {
    best.set(a.user_id, Math.max(best.get(a.user_id) ?? 0, a.score));
  }
  const list = (profiles ?? []) as Profile[];

  return (
    <div className="panel">
      <h2>
        {t.adm.volunteers} · {list.length}
      </h2>
      {error === "self" && <div className="callout red">Нельзя менять собственную роль / You cannot change your own role.</div>}
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>{t.cab.name}</th>
              <th>{t.cab.region}</th>
              <th>{t.cab.coreDone}</th>
              <th>{t.cab.exam}</th>
              <th>{t.cab.role}</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p) => {
              const b = best.get(p.id);
              return (
                <tr key={p.id}>
                  <td>
                    <b>{p.full_name || "—"}</b>
                    <div className="small muted">{p.email}</div>
                    <div className="small muted">{fmtDate(p.created_at, lang)}</div>
                  </td>
                  <td className="small">{p.region || "—"}</td>
                  <td>
                    {coreCount.get(p.id) ?? 0}/{core.size}
                  </td>
                  <td style={{ color: b !== undefined && b >= EXAM_PASS ? "var(--ok)" : undefined, fontWeight: 800 }}>{b !== undefined ? `${b}/${EXAM_SIZE}` : "—"}</td>
                  <td>
                    {isAdmin && p.id !== session?.user.id ? (
                      <form action={setRole} className="row" style={{ gap: 6 }}>
                        <input type="hidden" name="id" value={p.id} />
                        <select name="role" defaultValue={p.role} style={{ border: "1px solid #ddd", borderRadius: 8, padding: "6px 8px" }}>
                          {(["volunteer", "coordinator", "admin"] as Role[]).map((r) => (
                            <option key={r} value={r}>
                              {t.roles[r]}
                            </option>
                          ))}
                        </select>
                        <button className="btn ghost small">OK</button>
                      </form>
                    ) : (
                      <span className="tag">{t.roles[p.role]}</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
