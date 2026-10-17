import Link from "next/link";
import { redirect } from "next/navigation";
import { getDict } from "@/lib/i18n/server";
import { getAttempts, getProgress, getSession, getTopics } from "@/lib/data";
import { summarize } from "@/lib/progress";
import { fmtDate } from "@/components/NewsCard";
import PrintButton from "@/components/PrintButton";

export default async function CertificatePage() {
  const { lang, t } = await getDict();
  const session = await getSession();
  if (!session) redirect("/");
  const [topics, studied, attempts] = await Promise.all([getTopics(), getProgress(session.user.id), getAttempts(session.user.id)]);
  const s = summarize(topics, studied, attempts);
  if (!s.certificateReady || !s.passedExam) redirect("/cabinet");
  const exam = s.passedExam;
  const name = session.profile?.full_name || session.user.email || "";

  return (
    <section className="section">
      <div className="wrap">
        <div className="row no-print" style={{ justifyContent: "space-between" }}>
          <Link href="/cabinet" className="link">
            ← {t.cabinet}
          </Link>
          <PrintButton label={t.cert.print} />
        </div>
        <div className="cert">
          <img src="/media/logo.png" alt="" />
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {t.brand}
          </span>
          <h1 style={{ marginTop: 14 }}>{t.cert.title}</h1>
          <div className="name">{name}</div>
          <p style={{ fontSize: 18, maxWidth: 620, margin: "0 auto" }}>{t.cert.body}</p>
          <div className="cert-meta">
            <div>
              <span className="muted small">{t.cert.score}</span>
              <b>
                {exam.score}/{exam.total}
              </b>
            </div>
            <div>
              <span className="muted small">{t.cert.date}</span>
              <b>{fmtDate(exam.created_at, lang)}</b>
            </div>
            <div>
              <span className="muted small">{t.cert.number}</span>
              <b>{exam.id.slice(0, 8).toUpperCase()}</b>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 34 }}>
            {t.cert.note}
          </p>
        </div>
      </div>
    </section>
  );
}
