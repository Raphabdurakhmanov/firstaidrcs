import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getNews } from "@/lib/data";
import { getRcsNews } from "@/lib/rcs-news";
import NewsCard from "@/components/NewsCard";
import RcsNewsCard from "@/components/RcsNewsCard";

export const metadata: Metadata = { title: "Новости" };
export const revalidate = 3600;

export default async function NewsPage() {
  const { lang, t } = await getDict();
  const [ours, rcs] = await Promise.all([getNews(30), getRcsNews(lang, 12)]);
  const site = lang === "uz" ? "https://redcrescent.uz/uz/category/news/" : "https://redcrescent.uz/ru/category/news/";

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">
          <i />
          {t.nav.news}
        </span>
        <h1 className="h2">{t.newsTitle}</h1>
        <p className="lead" style={{ marginBottom: 34 }}>
          {t.newsText}
        </p>

        {ours.length > 0 && (
          <div style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: 24 }}>{t.announcements}</h2>
            <div className="grid c3">
              {ours.map((n) => (
                <NewsCard key={n.id} item={n} lang={lang} />
              ))}
            </div>
          </div>
        )}

        <div className="row" style={{ marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 24, margin: 0 }}>{t.rcsTitle}</h2>
            <p className="muted small" style={{ margin: "6px 0 0" }}>
              {t.rcsText} {t.rcsLangNote}
            </p>
          </div>
          <span className="spacer" />
          <a href={site} target="_blank" rel="noreferrer" className="btn ghost small">
            {t.rcsAll} ↗
          </a>
        </div>
        {rcs.length ? (
          <div className="grid c3">
            {rcs.map((n) => (
              <RcsNewsCard key={n.id} item={n} lang={lang} readLabel={t.rcsRead} />
            ))}
          </div>
        ) : (
          <div className="empty">{t.rcsDown}</div>
        )}
      </div>
    </section>
  );
}
