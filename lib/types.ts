export const LANGS = ["ru", "en", "uz"] as const;
export type Lang = (typeof LANGS)[number];

export type L = { ru: string; en: string; uz: string };

export type CategoryId = "basics" | "life" | "injuries" | "environment" | "volunteer";

export type WidgetId = "algorithm" | "call103" | "cpr" | "kit" | "fast";

export type QuizQuestion = {
  q: L;
  // a[0] — правильный ответ, при показе перемешиваем
  a: [L, L, L, L];
  e: L;
};

export type TopicImage = { src: string; caption: L };

export type Topic = {
  slug: string;
  cat: CategoryId;
  icon: string;
  order: number;
  // нужна для сертификата
  core: boolean;
  title: L;
  summary: L;
  cover?: string;
  coverFit?: "cover" | "contain";
  gallery?: TopicImage[];
  signs?: L[];
  signsTitle?: L;
  stepsTitle?: L;
  steps: L[];
  donts?: L[];
  callIf?: L[];
  warning: L;
  update?: L;
  widget?: WidgetId;
  quiz: QuizQuestion[];
  source?: "builtin" | "db";
  published?: boolean;
};

export const l = (ru: string, en: string, uz: string): L => ({ ru, en, uz });
