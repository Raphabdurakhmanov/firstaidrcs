import { LANGS, type CategoryId, type L, type Topic, type WidgetId } from "./types";

const CATS: CategoryId[] = ["basics", "life", "injuries", "environment", "volunteer"];
const WIDGETS: WidgetId[] = ["algorithm", "call103", "cpr", "kit", "fast"];

const isL = (v: unknown): v is L => !!v && typeof v === "object" && LANGS.every((k) => typeof (v as L)[k] === "string");
const filledL = (v: unknown) => isL(v) && v.ru.trim().length > 0;
const isLList = (v: unknown) => v === undefined || (Array.isArray(v) && v.every(isL));

export function validateTopic(t: Topic): string[] {
  const p: string[] = [];
  if (!t || typeof t !== "object") return ["пустая тема"];
  if (!/^[a-z0-9][a-z0-9-]{1,60}$/.test(t.slug ?? "")) p.push("slug: только латиница, цифры и дефис");
  if (!CATS.includes(t.cat)) p.push("неизвестный раздел");
  if (typeof t.order !== "number" || !Number.isFinite(t.order)) p.push("порядок должен быть числом");
  if (!filledL(t.title)) p.push("нет названия (RU)");
  if (!filledL(t.summary)) p.push("нет описания (RU)");
  if (!Array.isArray(t.steps) || t.steps.length === 0 || !t.steps.every(isL)) p.push("нужен хотя бы один шаг");
  if (!filledL(t.warning)) p.push("нет предупреждения (RU)");
  for (const key of ["signs", "donts", "callIf"] as const) if (!isLList(t[key])) p.push(`${key}: неверный формат`);
  if (t.update !== undefined && !isL(t.update)) p.push("update: неверный формат");
  if (t.widget !== undefined && !WIDGETS.includes(t.widget)) p.push("неизвестный тренажёр");
  if (t.gallery !== undefined && !(Array.isArray(t.gallery) && t.gallery.every((g) => typeof g?.src === "string" && isL(g.caption)))) p.push("галерея: неверный формат");
  if (!Array.isArray(t.quiz)) p.push("quiz: нужен список");
  else
    t.quiz.forEach((q, i) => {
      if (!filledL(q?.q) || !Array.isArray(q.a) || q.a.length !== 4 || !q.a.every(filledL) || !isL(q.e)) {
        p.push(`вопрос ${i + 1}: нужен текст и 4 варианта ответа`);
      }
    });
  return p;
}
