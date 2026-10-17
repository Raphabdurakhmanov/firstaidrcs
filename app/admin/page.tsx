import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { createClient } from "@/lib/supabase/server";
import { getTopics } from "@/lib/data";
import { totalQuestions, EXAM_PASS } from "@/lib/quiz";

export default async function AdminHome() {
  const { t } = await getDict();
  const supabase = (await createClient())!;
  const [users, exams, studied, topics] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("quiz_attempts").select("id", { count: "exact", head: true }).eq("kind", "exam").gte("score", EXAM_PASS),
    supabase.from("topic_progress").select("slug", { count: "exact", head: true }),
    getTopics(true),
  ]);

  const kpis: [number | string, string][] = [
    [users.count ?? 0, t.adm.users],
    [exams.count ?? 0, t.adm.exams],
    [studied.count ?? 0, t.adm.studied],
    [topics.length, t.topicsCount],
    [totalQuestions(topics), t.quiz.bank],
  ];

  return (
    <div className="stack" style={{ gap: 22 }}>
      <div className="kpis" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {kpis.map(([n, label]) => (
          <div className="kpi" key={label} style={{ background: "#fff" }}>
            <b>{n}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="row">
        <Link href="/admin/topics/edit" className="btn">
          + {t.adm.newTopic}
        </Link>
        <Link href="/admin/news/edit" className="btn dark">
          + {t.adm.newNews}
        </Link>
      </div>
    </div>
  );
}
