"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveAttempt } from "@/app/actions";
import { DICTS } from "@/lib/i18n/dict";
import { buildExam, buildTopicQuiz, EXAM_PASS, EXAM_SIZE, type PreparedQuestion } from "@/lib/quiz";
import type { Lang, Topic } from "@/lib/types";

type Props =
  | { mode: "exam"; topics: Topic[]; lang: Lang; loggedIn: boolean }
  | { mode: "topic"; topic: Topic; lang: Lang; loggedIn: boolean };

const LETTERS = ["A", "B", "C", "D"];

function questionsLabel(n: number, lang: Lang) {
  if (lang === "en") return `${n} question${n === 1 ? "" : "s"}`;
  if (lang === "uz") return `${n} ta savol`;
  const m10 = n % 10, m100 = n % 100;
  const word = m10 === 1 && m100 !== 11 ? "вопрос" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? "вопроса" : "вопросов";
  return `${n} ${word}`;
}

export default function Quiz(props: Props) {
  const { lang, loggedIn } = props;
  const t = DICTS[lang];
  const router = useRouter();
  const [questions, setQuestions] = useState<PreparedQuestion[] | null>(null);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [saved, setSaved] = useState(false);
  const [, startTransition] = useTransition();

  const start = () => {
    setQuestions(props.mode === "exam" ? buildExam(props.topics, EXAM_SIZE) : buildTopicQuiz(props.topic));
    setI(0);
    setChosen(null);
    setAnswers([]);
    setSaved(false);
  };

  if (!questions) {
    return (
      <div className="quiz-card results">
        <span style={{ fontSize: 46, color: "var(--r)" }} aria-hidden>
          ✓
        </span>
        <h3 style={{ margin: "6px 0" }}>{props.mode === "exam" ? t.quiz.examTitle : t.topic.quiz}</h3>
        <p className="muted">{props.mode === "exam" ? t.quiz.examText : questionsLabel(props.topic.quiz.length, lang)}</p>
        <button className="btn" onClick={start}>
          {t.quiz.start} →
        </button>
      </div>
    );
  }

  const total = questions.length;
  const finished = answers.length === total && chosen === null;
  const score = answers.reduce((n, a, k) => n + (a === questions[k].correctIndex ? 1 : 0), 0);
  const passMark = props.mode === "exam" ? EXAM_PASS : Math.ceil(total * 0.66);

  if (finished) {
    const passed = score >= passMark;
    const mistakes = questions.map((q, k) => ({ q, a: answers[k] })).filter((x) => x.a !== x.q.correctIndex);
    return (
      <div className="quiz-card results">
        <span className="score">
          {score}/{total}
        </span>
        <h3 style={{ margin: 0 }}>{t.quiz.result}</h3>
        <p className="muted">{passed ? t.quiz.passed : t.quiz.failed}</p>
        {saved && <p className="small" style={{ color: "var(--ok)" }}>✓ {t.quiz.saved}</p>}
        {mistakes.length > 0 && (
          <details className="review" open={mistakes.length <= 3}>
            <summary style={{ cursor: "pointer", fontWeight: 800, padding: "10px 0" }}>
              {t.quiz.review} ({mistakes.length})
            </summary>
            {mistakes.map(({ q, a }) => (
              <article key={q.id}>
                <b>{q.q[lang]}</b>
                <div className="x">
                  ✕ {t.quiz.yourAnswer}: {q.options[a][lang]}
                </div>
                <div className="v">
                  ✓ {t.quiz.rightAnswer}: {q.options[q.correctIndex][lang]}
                </div>
                <div className="muted">{q.e[lang]}</div>
                {props.mode === "exam" && (
                  <Link className="link" href={`/topics/${q.topicSlug}`}>
                    {q.topicTitle[lang]} →
                  </Link>
                )}
              </article>
            ))}
          </details>
        )}
        <button className="btn" style={{ marginTop: 16 }} onClick={start}>
          {t.quiz.retry} ↻
        </button>
      </div>
    );
  }

  const q = questions[i];
  const answered = chosen !== null;
  // на экзамене ответ не подсвечиваем, можно передумать до "Дальше"
  const isExam = props.mode === "exam";

  const pick = (k: number) => {
    if (answered && !isExam) return;
    setChosen(k);
  };

  const next = () => {
    if (chosen === null) return;
    const nextAnswers = [...answers, chosen];
    setAnswers(nextAnswers);
    setChosen(null);
    if (i + 1 < total) {
      setI(i + 1);
      return;
    }
    const finalScore = nextAnswers.reduce((n, a, k) => n + (a === questions[k].correctIndex ? 1 : 0), 0);
    if (loggedIn) {
      startTransition(async () => {
        const res = await saveAttempt({
          kind: props.mode,
          slug: props.mode === "topic" ? props.topic.slug : null,
          score: finalScore,
          total,
        });
        if (res.ok) {
          setSaved(true);
          router.refresh();
        }
      });
    }
  };

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <span>
          {t.quiz.question} {i + 1} {t.quiz.of} {total}
        </span>
        <span className="bar" aria-hidden>
          <i style={{ width: `${((i + (answered ? 1 : 0)) / total) * 100}%` }} />
        </span>
      </div>
      <div className="question">
        {props.mode === "exam" && <span className="tag red" style={{ marginTop: 20 }}>{q.topicTitle[lang]}</span>}
        <h3>{q.q[lang]}</h3>
        <div className="answers">
          {q.options.map((o, k) => {
            const cls = isExam ? (k === chosen ? "picked" : "") : !answered ? "" : k === q.correctIndex ? "correct" : k === chosen ? "wrong" : "dim";
            return (
              <button key={k} className={cls} onClick={() => pick(k)} disabled={answered && !isExam}>
                <span>{LETTERS[k]}</span>
                {o[lang]}
              </button>
            );
          })}
        </div>
        {answered && !isExam && (
          <div className={`feedback ${chosen === q.correctIndex ? "good" : "bad"}`} aria-live="polite">
            <b>{chosen === q.correctIndex ? `✓ ${t.quiz.correct}` : `✕ ${t.quiz.wrong}`}</b>
            <p>{q.e[lang]}</p>
          </div>
        )}
        {answered && (
          <div className="row" style={{ justifyContent: "flex-end", marginTop: 16 }}>
            <button className="btn" onClick={next}>
              {i + 1 < total ? t.quiz.next : t.quiz.finish} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
