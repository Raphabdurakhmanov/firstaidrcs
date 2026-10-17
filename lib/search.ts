import type { Lang, Topic } from "./types";

export function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[ʻʼ'`‘’]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// отрезаем окончание, чтобы "сердце" находило "сердца"
export function stem(word: string) {
  if (word.length <= 4) return word;
  return word.slice(0, Math.max(4, word.length - 2));
}

export function topicText(t: Topic, lang: Lang) {
  const parts = [
    t.title[lang],
    t.summary[lang],
    ...(t.signs ?? []).map((x) => x[lang]),
    ...t.steps.map((x) => x[lang]),
    ...(t.donts ?? []).map((x) => x[lang]),
    t.warning[lang],
  ];
  return normalize(parts.join(" "));
}

export function matches(t: Topic, query: string, lang: Lang) {
  const words = normalize(query).split(" ").filter(Boolean);
  if (!words.length) return true;
  const text = topicText(t, lang);
  return words.every((w) => text.includes(stem(w)));
}

export function searchTopics(topics: Topic[], query: string, lang: Lang) {
  const q = normalize(query);
  const found = topics.filter((t) => matches(t, query, lang));
  if (!q) return found;
  const inTitle = (t: Topic) => (normalize(t.title[lang]).includes(stem(q.split(" ")[0])) ? 0 : 1);
  return [...found].sort((a, b) => inTitle(a) - inTitle(b));
}
