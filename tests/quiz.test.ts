import { describe, expect, it } from "vitest";
import { BUILTIN_TOPICS } from "../lib/content";
import { buildExam, buildTopicQuiz, EXAM_SIZE, shuffle } from "../lib/quiz";

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

describe("shuffle", () => {
  it("сохраняет все элементы", () => {
    const a = [1, 2, 3, 4, 5, 6, 7];
    expect([...shuffle(a, seeded(1))].sort()).toEqual(a);
  });

  it("правильный ответ попадает на каждую позицию примерно одинаково часто", () => {
    const rng = seeded(42);
    const counts = [0, 0, 0, 0];
    const topic = BUILTIN_TOPICS[0];
    for (let i = 0; i < 4000; i++) counts[buildTopicQuiz(topic, rng)[0].correctIndex]++;
    for (const c of counts) {
      expect(c).toBeGreaterThan(800);
      expect(c).toBeLessThan(1200);
    }
  });
});

describe("buildExam", () => {
  it("30 разных вопросов без повторов", () => {
    for (let seed = 1; seed <= 50; seed++) {
      const exam = buildExam(BUILTIN_TOPICS, EXAM_SIZE, seeded(seed));
      expect(exam).toHaveLength(EXAM_SIZE);
      expect(new Set(exam.map((q) => q.id)).size).toBe(EXAM_SIZE);
    }
  });

  it("сначала берёт по вопросу из каждой темы", () => {
    const exam = buildExam(BUILTIN_TOPICS, EXAM_SIZE, seeded(7));
    expect(new Set(exam.map((q) => q.topicSlug)).size).toBe(BUILTIN_TOPICS.length);
  });

  it("если тем мало — добирает вторые вопросы, но не повторяет их", () => {
    const few = BUILTIN_TOPICS.slice(0, 4);
    const all = few.reduce((n, t) => n + t.quiz.length, 0);
    const exam = buildExam(few, EXAM_SIZE, seeded(3));
    expect(exam).toHaveLength(Math.min(all, EXAM_SIZE));
    expect(new Set(exam.map((q) => q.id)).size).toBe(exam.length);
  });

  it("правильный индекс указывает на правильный ответ", () => {
    const exam = buildExam(BUILTIN_TOPICS, EXAM_SIZE, seeded(11));
    for (const q of exam) {
      const topic = BUILTIN_TOPICS.find((t) => t.slug === q.topicSlug)!;
      const original = topic.quiz[Number(q.id.split("#")[1])];
      expect(q.options[q.correctIndex]).toEqual(original.a[0]);
    }
  });
});
