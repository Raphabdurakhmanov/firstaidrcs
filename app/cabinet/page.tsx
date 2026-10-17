import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getAttempts, getProgress, getSession, getTopics, isStaff } from "@/lib/data";
import { summarize } from "@/lib/progress";
import { updateProfile } from "@/app/actions";
import { fmtDate } from "@/components/NewsCard";

export const metadata: Metadata = { title: "Кабинет" };

export default async function CabinetPage({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  const { saved } = await searchParams;
  const { lang, t } = await getDict();
  const session = await getSession();
  if (!session) redirect("/login?next=/cabinet");
  const { user, profile } = session;
  const [topics, studied, attempts] = await Promise.all([getTopics(), getProgress(user.id), getAttempts(user.id)]);
  const s = summarize(topics, studied, attempts);
  const pct = s.core.length ? Math.round((s.coreDone.length / s.core.length) * 100) : 0;
  const titleOf = (slug: string | null) => topics.find((x) => x.slug === slug)?.title[lang] ?? slug ?? "";

  return (
    <section className="section alt">
      <div className="wrap stack" style={{ gap: 22 }}>
        <div className="row">
          <div>
            <span className="eyebrow">
              <i />
              {t.roles[profile?.role ?? "volunteer"]}
            </span>
            <h1 className="h2" style={{ marginBottom: 0 }}>
              {profile?.full_name || user.email}
            </h1>
          </div>
          <span className="spacer" />
          {isStaff(profile) && (
            <Link href="/admin" className="btn dark">
              {t.admin} →
            </Link>
          )}
          <form action="/auth/signout" method="post">
            <button className="btn ghost">{t.logout}</button>
          </form>
        </div>

        <div className="kpis">
          <div className="kpi">
            <b>
              {s.coreDone.length}/{s.core.length}
            </b>
            <span>{t.cab.coreDone}</span>
            <div className="bar green" style={{ maxWidth: "100%", marginTop: 10 }}>
              <i style={{ width: `${pct}%` }} />
            </div>
          </div>
          <div className="kpi">
            <b>
              {s.allDone}/{topics.length}
            </b>
            <span>{t.cab.allDone}</span>
          </div>
          <div className="kpi">
            <b>{s.best ? `${s.best.score}/${s.best.total}` : "—"}</b>
            <span>{t.cab.exam}</span>
          </div>
        </div>

        <div className={`callout ${s.certificateReady ? "green" : "yellow"}`}>
          <b>{t.cab.certificate}</b>
          {s.certificateReady ? t.cab.certReady : t.cab.certNeed}
          <div className="row" style={{ marginTop: 12 }}>
            {s.certificateReady ? (
              <Link href="/cabinet/certificate" className="btn small">
                {t.cab.certOpen} →
              </Link>
            ) : (
              !s.passedExam && (
                <Link href="/exam" className="btn small dark">
                  {t.hero.exam} →
                </Link>
              )
            )}
          </div>
        </div>

        <div className="grid c2" style={{ alignItems: "start" }}>
          <div className="panel">
            <h2>{t.cab.todo}</h2>
            {s.remaining.length ? (
              <ul className="bullets">
                {s.remaining.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/topics/${x.slug}`}>{x.title[lang]}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">✓</p>
            )}
            <h2 style={{ marginTop: 26 }}>{t.cab.attempts}</h2>
            {attempts.length ? (
              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    {attempts.slice(0, 15).map((a) => (
                      <tr key={a.id}>
                        <td>{a.kind === "exam" ? <b>{t.cab.exam}</b> : titleOf(a.slug)}</td>
                        <td style={{ color: a.score * 3 >= a.total * 2 ? "var(--ok)" : "var(--r)", fontWeight: 800 }}>
                          {a.score}/{a.total}
                        </td>
                        <td className="muted small">{fmtDate(a.created_at, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="muted">{t.cab.noAttempts}</p>
            )}
          </div>

          <form className="panel stack" action={updateProfile}>
            <h2>{t.cab.profile}</h2>
            {saved && <div className="callout green">✓ {t.cab.saved}</div>}
            <div className="field">
              <label htmlFor="full_name">{t.cab.name}</label>
              <input id="full_name" name="full_name" defaultValue={profile?.full_name ?? ""} maxLength={120} required />
            </div>
            <div className="field">
              <label htmlFor="region">{t.cab.region}</label>
              <input id="region" name="region" defaultValue={profile?.region ?? ""} maxLength={120} placeholder="Ташкент" />
            </div>
            <p className="small muted">{user.email}</p>
            <button className="btn">{t.cab.save}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
