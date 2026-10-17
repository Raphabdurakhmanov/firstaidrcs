import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getNews } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = { title: "Новости" };

export default async function NewsPage() {
  const { lang, t } = await getDict();
  const news = await getNews(60);
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
        {news.length ? (
          <div className="grid c3">
            {news.map((n) => (
              <NewsCard key={n.id} item={n} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="empty">{t.newsEmpty}</div>
        )}
      </div>
    </section>
  );
}
