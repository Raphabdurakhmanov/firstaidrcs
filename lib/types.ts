export const LANGS = ["ru", "en", "uz"] as const;
export type Lang = (typeof LANGS)[number];

/** Текст на трёх языках. */
export type L = { ru: string; en: string; uz: string };

export type CategoryId = "basics" | "life" | "injuries" | "environment" | "volunteer";

export type WidgetId = "algorithm" | "call103" | "cpr" | "kit" | "fast";

export type QuizQuestion = {
  q: L;
  /** Первый вариант всегда правильный; порядок перемешивается при показе. */
  a: [L, L, L, L];
  e: L;
};

export type TopicImage = { src: string; caption: L };

export type Topic = {
  slug: string;
  cat: CategoryId;
  icon: string;
  order: number;
  /** Входит в обязательный курс для сертификата. */
  core: boolean;
  title: L;
  summary: L;
  cover?: string;
  gallery?: TopicImage[];
  signs?: L[];
  steps: L[];
  donts?: L[];
  callIf?: L[];
  warning: L;
  /** Что изменилось по сравнению со старым пособием. */
  update?: L;
  widget?: WidgetId;
  quiz: QuizQuestion[];
  /** Источник: встроенная тема или добавлена через админ-панель. */
  source?: "builtin" | "db";
  published?: boolean;
};

export const l = (ru: string, en: string, uz: string): L => ({ ru, en, uz });
