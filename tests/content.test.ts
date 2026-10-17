import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BUILTIN_TOPICS, mergeTopics } from "../lib/content";
import { searchTopics } from "../lib/search";
import { validateTopic } from "../lib/validate";
import { LANGS, type L, type Topic } from "../lib/types";

const publicDir = join(__dirname, "..", "public");

function allTexts(t: Topic): L[] {
  return [
    t.title, t.summary, t.warning,
    ...(t.update ? [t.update] : []),
    ...t.steps, ...(t.signs ?? []), ...(t.donts ?? []), ...(t.callIf ?? []),
    ...(t.gallery ?? []).map((g) => g.caption),
    ...t.quiz.flatMap((q) => [q.q, ...q.a, q.e]),
  ];
}

describe("встроенные темы", () => {
  it("адреса тем уникальны", () => {
    const slugs = BUILTIN_TOPICS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("каждая тема проходит проверку админки", () => {
    for (const t of BUILTIN_TOPICS) expect([t.slug, ...validateTopic(t)]).toEqual([t.slug]);
  });

  it("все тексты заполнены на трёх языках", () => {
    for (const t of BUILTIN_TOPICS)
      for (const x of allTexts(t))
        for (const lang of LANGS) expect(`${t.slug}:${lang}:${x[lang].trim().length > 0}`).toBe(`${t.slug}:${lang}:true`);
  });

  it("у каждой картинки есть файл", () => {
    for (const t of BUILTIN_TOPICS)
      for (const src of ([t.cover, ...(t.gallery ?? []).map((g) => g.src)].filter(Boolean) as string[]).filter((u) => !u.startsWith("http")))
        expect(`${src}:${existsSync(join(publicDir, src))}`).toBe(`${src}:true`);
  });

  it("в каждом вопросе 4 разных варианта ответа", () => {
    for (const t of BUILTIN_TOPICS)
      for (const q of t.quiz) for (const lang of LANGS) expect(new Set(q.a.map((a) => a[lang])).size).toBe(4);
  });

  it("в каждой теме минимум 3 вопроса", () => {
    for (const t of BUILTIN_TOPICS) expect(t.quiz.length).toBeGreaterThanOrEqual(3);
  });

  it("фото с Unsplash берутся с CDN и в единой обработке", () => {
    for (const t of BUILTIN_TOPICS)
      if (t.cover?.startsWith("http")) expect(`${t.slug}:${/^https:\/\/images\.unsplash\.com\/photo-[\w-]+\?.*blend=E5231F/.test(t.cover)}`).toBe(`${t.slug}:true`);
  });
});

describe("mergeTopics", () => {
  it("тема из базы заменяет встроенную, скрытая не показывается", () => {
    const edited = { ...BUILTIN_TOPICS[0], title: { ru: "Новое", en: "New", uz: "Yangi" }, published: false };
    expect(mergeTopics([edited]).find((t) => t.slug === edited.slug)).toBe(undefined);
    expect(mergeTopics([edited], true).find((t) => t.slug === edited.slug)?.title.ru).toBe("Новое");
  });
});

describe("поиск", () => {
  it("находит по основе слова: «сердце» → темы про сердце", () => {
    const found = searchTopics(BUILTIN_TOPICS, "сердце", "ru").map((t) => t.slug);
    expect(found).toContain("cpr-adult");
    expect(found).toContain("heart-attack");
  });

  it("ищет на узбекском с апострофом и без", () => {
    const a = searchTopics(BUILTIN_TOPICS, "kuyish", "uz").map((t) => t.slug);
    const b = searchTopics(BUILTIN_TOPICS, "bogʻlam", "uz").map((t) => t.slug);
    expect(a).toContain("burns");
    expect(b.length).toBeGreaterThan(0);
  });

  it("название важнее текста", () => {
    expect(searchTopics(BUILTIN_TOPICS, "ожог", "ru")[0].slug).toBe("burns");
  });
});
