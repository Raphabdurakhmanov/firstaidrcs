import type { L, TopicImage } from "../types";

/** Обложка темы — первый файл в папке /public/media/<slug>/. */
export const cover = (slug: string) => `/media/${slug}/1.webp`;

/** Галерея темы: подписи по порядку соответствуют файлам 2.webp, 3.webp, … */
export const gal = (slug: string, captions: L[]): TopicImage[] =>
  captions.map((caption, i) => ({ src: `/media/${slug}/${i + 2}.webp`, caption }));
