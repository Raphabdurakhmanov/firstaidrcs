import type { L, TopicImage } from "../types";

export const cover = (slug: string) => `/media/${slug}/1.webp`;

export const gal = (slug: string, captions: L[]): TopicImage[] =>
  captions.map((caption, i) => ({ src: `/media/${slug}/${i + 2}.webp`, caption }));

export const galLead = (slug: string, lead: L, captions: L[] = []): TopicImage[] => [
  { src: `/media/${slug}/1.webp`, caption: lead },
  ...gal(slug, captions),
];
