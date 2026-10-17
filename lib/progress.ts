import type { Attempt } from "./data";
import { EXAM_PASS, EXAM_SIZE } from "./quiz";
import type { Topic } from "./types";

/** Сводка прогресса волонтёра: обязательные темы, лучший экзамен, готовность подтверждения. */
export function summarize(topics: Topic[], studied: string[], attempts: Attempt[]) {
  const done = new Set(studied);
  const core = topics.filter((t) => t.core);
  const coreDone = core.filter((t) => done.has(t.slug));
  const exams = attempts.filter((a) => a.kind === "exam");
  const best = exams.reduce<Attempt | null>((b, a) => (!b || a.score / a.total > b.score / b.total ? a : b), null);
  const passedExam = exams
    .filter((a) => a.total >= EXAM_SIZE && a.score >= EXAM_PASS)
    .sort((a, b) => b.created_at.localeCompare(a.created_at))[0] ?? null;
  return {
    core,
    coreDone,
    remaining: core.filter((t) => !done.has(t.slug)),
    allDone: topics.filter((t) => done.has(t.slug)).length,
    best,
    passedExam,
    certificateReady: coreDone.length === core.length && passedExam !== null,
  };
}
