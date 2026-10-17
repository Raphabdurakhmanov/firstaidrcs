import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { getNews, getProgress, getSession, getTopics } from "@/lib/data";
import { CATEGORIES } from "@/lib/content";
import { totalQuestions } from "@/lib/quiz";
import TopicCard from "@/components/TopicCard";
import Widget from "@/components/Widget";
import NewsCard from "@/components/NewsCard";
import RcsNewsCard from "@/components/RcsNewsCard";
import { getRcsNews } from "@/lib/rcs-news";
import { l } from "@/lib/types";
import { PHOTOS, unsplash } from "@/lib/photos";

const QUICK = ["cpr-adult", "choking", "bleeding", "recovery", "heart-attack", "burns", "stroke", "seizures"];

const PRINCIPLES = [
  l("Гуманность", "Humanity", "Insoniylik"),
  l("Беспристрастность", "Impartiality", "Xolislik"),
  l("Нейтральность", "Neutrality", "Betaraflik"),
  l("Независимость", "Independence", "Mustaqillik"),
  l("Добровольность", "Voluntary service", "Ixtiyoriylik"),
  l("Единство", "Unity", "Birlik"),
  l("Универсальность", "Universality", "Umumjahonlik"),
];

export default async function Home() {
  const { lang, t } = await getDict();
  const [topics, session, news, rcs] = await Promise.all([getTopics(), getSession(), getNews(3), getRcsNews(lang, 3)]);
  const studied = session ? await getProgress(session.user.id) : [];
  const done = new Set(studied);
  const quick = QUICK.map((s) => topics.find((x) => x.slug === s)).filter((x) => x !== undefined);
  const counts = [topics.length, totalQuestions(topics), 3, 5];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <i />
            {t.hero.eyebrow}
          </span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <div className="hero-actions">
            <Link href="/topics" className="btn">
              {t.hero.start} →
            </Link>
            <Link href="/exam" className="btn ghost">
              {t.hero.exam}
            </Link>
          </div>
          <div className="stats">
            {counts.map((n, i) => (
              <div key={i}>
                <b>{n}</b>
                <span>{t.hero.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img className="main" src={unsplash(PHOTOS.heroCpr, 1400)} alt="" />
          <img src={unsplash(PHOTOS.heroKit, 700)} alt="" />
          <img src={unsplash(PHOTOS.heroStreet, 700)} alt="" />
          <Link href="/tools#cpr" className="metric top" style={{ textDecoration: "none", color: "inherit" }}>
            <b>30:2</b>
            <span>CPR · 110/min</span>
          </Link>
          <a href="tel:103" className="metric bottom">
            <span>Emergency</span>
            <b>103</b>
          </a>
        </div>
      </section>

      <div className="alert-strip">
        <div className="wrap">
          <b>103</b>
          <span>{t.alert}</span>
          <a href="tel:103">{t.callShort} ↗</a>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                <i />
                {t.quickHelp}
              </span>
              <h2 className="h2">{t.quickHelp}</h2>
              <p className="lead">{t.quickHelpText}</p>
            </div>
            <Link href="/topics" className="btn ghost">
              {t.allTopics} · {topics.length}
            </Link>
          </div>
          <div className="grid c4">
            {quick.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} lang={lang} studied={done.has(topic.slug)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap grid c2" style={{ alignItems: "start", gap: 50 }}>
          <div>
            <span className="eyebrow">
              <i />
              Action sequence
            </span>
            <h2 className="h2">{t.algorithmTitle}</h2>
            <p className="lead">{t.algorithmText}</p>
            <a href="/media/basics/scheme.webp" target="_blank" rel="noreferrer">
              <img src="/media/basics/scheme.webp" alt={t.algorithmTitle} width={1439} height={1093} style={{ borderRadius: 18, marginTop: 24, background: "#fff" }} loading="lazy" />
            </a>
          </div>
          <Widget id="algorithm" lang={lang} bare />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">
            <i />
            {t.categories}
          </span>
          <h2 className="h2">{t.categories}</h2>
          <div className="grid c3" style={{ marginTop: 30 }}>
            {CATEGORIES.map((c) => {
              const n = topics.filter((x) => x.cat === c.id).length;
              return (
                <Link key={c.id} href={`/topics?cat=${c.id}`} className="cat-card">
                  <b>{n}</b> <span className="muted small">{t.topicsCount}</span>
                  <h3>{c.title[lang]}</h3>
                  <p>{c.text[lang]}</p>
                </Link>
              );
            })}
            <Link href="/exam" className="cat-card" style={{ background: "var(--r)", color: "#fff", borderColor: "var(--r)" }}>
              <b style={{ color: "#fff" }}>15</b> <span className="small">/ {totalQuestions(topics)}</span>
              <h3>{t.quiz.examTitle}</h3>
              <p style={{ color: "#ffe1df" }}>{t.quiz.examText}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                <i />
                {t.toolsTitle}
              </span>
              <h2 className="h2">{t.toolsTitle}</h2>
              <p className="lead">{t.toolsText}</p>
            </div>
            <Link href="/tools" className="btn ghost">
              {t.nav.tools} →
            </Link>
          </div>
          <Widget id="cpr" lang={lang} />
          <div className="grid c3" style={{ marginTop: 18 }}>
            {(["call103", "kit", "fast"] as const).map((id) => (
              <Link key={id} href={`/tools#${id}`} className="cat-card">
                <h3>{t.tools[id][0]}</h3>
                <p>{t.tools[id][1]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {(news.length > 0 || rcs.length > 0) && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">
                  <i />
                  {t.nav.news}
                </span>
                <h2 className="h2">{t.newsTitle}</h2>
              </div>
              <Link href="/news" className="btn ghost">
                {t.allNews} →
              </Link>
            </div>
            <div className="grid c3">
              {news.map((n) => (
                <NewsCard key={n.id} item={n} lang={lang} />
              ))}
              {rcs.slice(0, Math.max(0, 3 - news.length)).map((n) => (
                <RcsNewsCard key={n.id} item={n} lang={lang} readLabel={t.rcsRead} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section dark">
        <div className="wrap grid c2" style={{ gap: 50, alignItems: "center" }}>
          <div>
            <span className="eyebrow">
              <i />
              {t.principlesTitle}
            </span>
            <h2 className="h2">{session ? t.cab.progress : t.joinTitle}</h2>
            <p className="lead">{t.joinText}</p>
            <div className="row" style={{ marginTop: 24 }}>
              <Link href="/join" className="btn">
                {t.nav.join}
              </Link>
              {session ? (
                <Link href="/cabinet" className="btn ghost">
                  {t.cabinet}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="grid c2" style={{ gap: 10 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="tool" style={{ padding: "18px 20px" }}>
                <span className="small" style={{ color: "#ff6b66", fontWeight: 900 }}>
                  0{i + 1}
                </span>
                <div style={{ fontWeight: 800, marginTop: 4 }}>{p[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
