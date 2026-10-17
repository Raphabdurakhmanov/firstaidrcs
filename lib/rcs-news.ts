import type { Lang } from "./types";

// новости с официального сайта redcrescent.uz (WordPress)
// английской версии у них нет, поэтому для EN берём русскую ленту

const SITE = "https://redcrescent.uz";
const REFRESH_SECONDS = 60 * 60; // раз в час

export type RcsNews = {
  id: string;
  title: string;
  date: string;
  link: string;
  excerpt: string;
  image: string | null;
};

const feedLang = (lang: Lang) => (lang === "uz" ? "uz" : "ru");

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", laquo: "«", raquo: "»", hellip: "…", ndash: "–", mdash: "—" };

export function cleanText(html: string) {
  return html
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

function shorten(text: string, max = 180) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)) + "…";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parsePosts(posts: any[]): RcsNews[] {
  return posts.map((p) => {
    const media = p._embedded?.["wp:featuredmedia"]?.[0];
    const sizes = media?.media_details?.sizes;
    const image = sizes?.medium_large?.source_url ?? sizes?.large?.source_url ?? media?.source_url ?? null;
    return {
      id: String(p.id),
      title: cleanText(p.title?.rendered ?? ""),
      date: p.date_gmt ? p.date_gmt + "Z" : p.date,
      link: p.link,
      excerpt: shorten(cleanText(p.excerpt?.rendered ?? "")),
      image,
    };
  });
}

export function parseRss(xml: string): RcsNews[] {
  const items = xml.split("<item>").slice(1);
  return items.map((raw, i) => {
    const get = (tag: string) => raw.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))?.[1] ?? "";
    const content = get("content:encoded");
    const img = content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
    return {
      id: "rss-" + i,
      title: cleanText(get("title")),
      date: new Date(get("pubDate")).toISOString(),
      link: cleanText(get("link")),
      excerpt: shorten(cleanText(get("description"))),
      image: img,
    };
  });
}

export async function getRcsNews(lang: Lang, limit = 12): Promise<RcsNews[]> {
  const l = feedLang(lang);
  try {
    const res = await fetch(`${SITE}/${l}/wp-json/wp/v2/posts?per_page=${limit}&_embed=wp:featuredmedia`, {
      next: { revalidate: REFRESH_SECONDS },
    });
    if (!res.ok) throw new Error("api " + res.status);
    const list = parsePosts(await res.json());
    if (list.length) return list;
  } catch {
    // если api упал, пробуем rss
  }
  try {
    const res = await fetch(`${SITE}/${l}/category/news/feed/`, { next: { revalidate: REFRESH_SECONDS } });
    if (!res.ok) return [];
    return parseRss(await res.text()).slice(0, limit);
  } catch {
    return [];
  }
}
