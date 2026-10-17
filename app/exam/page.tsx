import type { Metadata } from "next";
import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { getSession, getTopics } from "@/lib/data";
import { totalQuestions } from "@/lib/quiz";
import Quiz from "@/components/Quiz";
import { supabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "Экзамен" };

export default async function ExamPage() {
  const { lang, t } = await getDict();
  const [topics, session] = await Promise.all([getTopics(), getSession()]);
  return (
    <section className="section alt">
      <div className="wrap split">
        <div>
          <span className="eyebrow">
            <i />
            Assessment
          </span>
          <h1 className="h2">{t.quiz.examTitle}</h1>
          <p className="lead">{t.quiz.examText}</p>
          <div style={{ borderTop: "1px solid #ddd", marginTop: 30, paddingTop: 22 }}>
            <b style={{ fontSize: 40 }}>{totalQuestions(topics)}</b>
            <div className="small muted" style={{ textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.1em" }}>
              {t.quiz.bank} · {topics.length} {t.topicsCount}
            </div>
          </div>
          {!session && supabaseConfigured() && (
            <p className="small muted" style={{ marginTop: 20 }}>
              <Link href="/login?next=/exam" className="link">
                {t.login}
              </Link>{" "}
              — {t.topic.loginToSave.toLowerCase()}
            </p>
          )}
        </div>
        <Quiz mode="exam" topics={topics} lang={lang} loggedIn={Boolean(session)} authEnabled={supabaseConfigured()} />
      </div>
    </section>
  );
}
