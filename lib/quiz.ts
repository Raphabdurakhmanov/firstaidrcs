import type { L, QuizQuestion, Topic } from "./types";

export type Rng = () => number;

export type PreparedQuestion = {
  id: string;
  topicSlug: string;
  topicTitle: L;
  q: L;
  options: L[];
  correctIndex: number;
  e: L;
};

/** Перемешивание Фишера — Йетса: каждая перестановка равновероятна. */
export function shuffle<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function prepareQuestion(topic: Topic, question: QuizQuestion, index: number, rng: Rng = Math.random): PreparedQuestion {
  const order = shuffle([0, 1, 2, 3], rng);
  return {
    id: `${topic.slug}#${index}`,
    topicSlug: topic.slug,
    topicTitle: topic.title,
    q: question.q,
    options: order.map((i) => question.a[i]),
    correctIndex: order.indexOf(0),
    e: question.e,
  };
}

/** Мини-тест по одной теме: все её вопросы в случайном порядке. */
export function buildTopicQuiz(topic: Topic, rng: Rng = Math.random): PreparedQuestion[] {
  return shuffle(
    topic.quiz.map((q, i) => prepareQuestion(topic, q, i, rng)),
    rng,
  );
}

/**
 * Экзамен: `count` разных вопросов из всех тем.
 * Сначала берём по одному вопросу из разных тем (так охват шире),
 * и только если тем меньше, чем вопросов, добираем вторые вопросы.
 * Один и тот же вопрос дважды не попадёт.
 */
export function buildExam(topics: Topic[], count = 15, rng: Rng = Math.random): PreparedQuestion[] {
  const pools = shuffle(
    topics.filter((t) => t.quiz.length > 0).map((t) => ({ topic: t, idx: shuffle(t.quiz.map((_, i) => i), rng) })),
    rng,
  );
  const picked: PreparedQuestion[] = [];
  let round = 0;
  while (picked.length < count) {
    let added = false;
    for (const p of pools) {
      if (picked.length >= count) break;
      const qi = p.idx[round];
      if (qi === undefined) continue;
      picked.push(prepareQuestion(p.topic, p.topic.quiz[qi], qi, rng));
      added = true;
    }
    if (!added) break;
    round++;
  }
  return shuffle(picked, rng);
}

export const EXAM_SIZE = 15;
export const EXAM_PASS = 12;

export function totalQuestions(topics: Topic[]) {
  return topics.reduce((n, t) => n + t.quiz.length, 0);
}
