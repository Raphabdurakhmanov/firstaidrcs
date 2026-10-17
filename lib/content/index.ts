import { l, type CategoryId, type L, type Topic } from "../types";
import { lifeTopics } from "./topics-life";
import { injuryTopics } from "./topics-injuries";
import { otherTopics } from "./topics-other";

export const CATEGORIES: { id: CategoryId; title: L; text: L }[] = [
  {
    id: "basics",
    title: l("Основы", "Basics", "Asoslar"),
    text: l("Порядок действий, вызов 103, человек без сознания.", "The sequence of actions, calling 103, the unconscious casualty.", "Harakatlar tartibi, 103 ni chaqirish, hushsiz odam."),
  },
  {
    id: "life",
    title: l("Угроза жизни", "Life-threatening", "Hayotga xavf"),
    text: l("СЛР, удушье, сердце, инсульт, шок, кровотечение.", "CPR, choking, heart, stroke, shock, bleeding.", "YOʻR, tiqilish, yurak, insult, shok, qon ketishi."),
  },
  {
    id: "injuries",
    title: l("Травмы и раны", "Injuries and wounds", "Jarohatlar va yaralar"),
    text: l("Повязки, ожоги, переломы, голова и позвоночник.", "Dressings, burns, fractures, head and spine.", "Bogʻlamlar, kuyish, sinish, bosh va umurtqa."),
  },
  {
    id: "environment",
    title: l("Состояния и среда", "Conditions and environment", "Holatlar va muhit"),
    text: l("Судороги, жара и холод, отравления, укусы.", "Seizures, heat and cold, poisoning, bites.", "Tutqanoq, issiq va sovuq, zaharlanish, chaqishlar."),
  },
  {
    id: "volunteer",
    title: l("Для волонтёров", "For volunteers", "Koʻngillilar uchun"),
    text: l("Перенос, ДТП, аптечка, принципы Движения.", "Moving casualties, road accidents, the kit, Movement principles.", "Koʻchirish, YTH, quticha, Harakat tamoyillari."),
  },
];

export const BUILTIN_TOPICS: Topic[] = [...lifeTopics, ...injuryTopics, ...otherTopics]
  .map((t) => ({ ...t, source: "builtin" as const, published: true }))
  .sort((a, b) => a.order - b.order);

/**
 * Объединяет встроенные темы с темами из базы.
 * Тема из базы с тем же slug заменяет встроенную (так админ может исправить текст
 * или скрыть тему, сняв галочку «опубликовано»).
 */
export function mergeTopics(dbTopics: Topic[], includeHidden = false): Topic[] {
  const map = new Map<string, Topic>();
  for (const t of BUILTIN_TOPICS) map.set(t.slug, t);
  for (const t of dbTopics) map.set(t.slug, { ...t, source: "db" });
  const all = [...map.values()].sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
  return includeHidden ? all : all.filter((t) => t.published !== false);
}
