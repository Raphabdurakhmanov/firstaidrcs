import Link from "next/link";
import { DICTS } from "@/lib/i18n/dict";
import type { NewsItem } from "@/lib/data";
import type { Lang } from "@/lib/types";

export const fmtDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : lang === "uz" ? "uz-UZ" : "ru-RU", { day: "numeric", month: "long", year: "numeric" });

export default function NewsCard({ item, lang }: { item: NewsItem; lang: Lang }) {
  const t = DICTS[lang];
  const preview = item.body[lang].split("\n").find(Boolean)?.slice(0, 160) ?? "";
  return (
    <Link href={`/news/${item.id}`} className="news-card">
      {item.cover_url && <img src={item.cover_url} alt="" loading="lazy" />}
      <div>
        <div className="row" style={{ gap: 8 }}>
          <span className="small muted">{fmtDate(item.created_at, lang)}</span>
          {item.audience === "volunteers" && <span className="tag red">{t.volunteersOnly}</span>}
        </div>
        <h3>{item.title[lang]}</h3>
        <p>{preview}…</p>
      </div>
    </Link>
  );
}
