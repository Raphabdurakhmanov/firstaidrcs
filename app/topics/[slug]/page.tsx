import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getProgress, getSession, getTopic, getTopics, isStaff } from "@/lib/data";
import { CATEGORIES } from "@/lib/content";
import Gallery from "@/components/Gallery";
import Quiz from "@/components/Quiz";
import Widget from "@/components/Widget";
import MarkStudied from "@/components/MarkStudied";
import TopicIcon from "@/components/TopicIcon";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await getDict();
  const topic = await getTopic(slug);
  if (!topic) return {};
  return {
    title: topic.title[lang],
    description: topic.summary[lang],
    openGraph: { title: topic.title[lang], description: topic.summary[lang], images: topic.cover ? [topic.cover] : undefined },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const { lang, t } = await getDict();
  const session = await getSession();
  const staff = isStaff(session?.profile);
  const topic = await getTopic(slug, staff);
  if (!topic) notFound();

  const all = await getTopics();
  const idx = all.findIndex((x) => x.slug === topic.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const studied = session ? (await getProgress(session.user.id)).includes(topic.slug) : false;
  const cat = CATEGORIES.find((c) => c.id === topic.cat);

  return (
    <>
      <div className="wrap">
        <div className="topic-hero">
          <div>
            <nav className="crumbs" aria-label="breadcrumbs">
              <Link href="/">{t.nav.home}</Link> / <Link href="/topics">{t.nav.topics}</Link>
              {cat && (
                <>
                  {" "}
                  / <Link href={`/topics?cat=${cat.id}`}>{cat.title[lang]}</Link>
                </>
              )}
            </nav>
            <h1>
              <span style={{ color: "var(--r)" }}><TopicIcon icon={topic.icon} /></span> {topic.title[lang]}
            </h1>
            <p className="lead">{topic.summary[lang]}</p>
            <div className="row" style={{ marginTop: 20 }}>
              {topic.core && <span className="tag red">{t.topic.core}</span>}
              {topic.published === false && <span className="tag gray">{t.adm.hidden}</span>}
              {staff && (
                <Link className="link" href={`/admin/topics/edit?slug=${topic.slug}`}>
                  ✎ {t.adm.edit}
                </Link>
              )}
            </div>
          </div>
          <div className="topic-cover">
            {topic.cover ? <img src={topic.cover} alt={topic.title[lang]} className={topic.coverFit === "contain" ? "logo" : undefined} /> : <span className="glyph"><TopicIcon icon={topic.icon} /></span>}
          </div>
        </div>

        <div className="topic-layout">
          <article>
            {topic.signs && topic.signs.length > 0 && (
              <div className="block">
                <h2>{topic.signsTitle?.[lang] ?? t.topic.signs}</h2>
                <ul className="bullets">
                  {topic.signs.map((s, i) => (
                    <li key={i}>{s[lang]}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="block">
              <h2>{topic.stepsTitle?.[lang] ?? t.topic.steps}</h2>
              <ol className="steps">
                {topic.steps.map((s, i) => (
                  <li key={i}>
                    <span>{s[lang]}</span>
                  </li>
                ))}
              </ol>
            </div>

            {topic.donts && topic.donts.length > 0 && (
              <div className="block">
                <h2>{t.topic.donts}</h2>
                <ul className="bullets no">
                  {topic.donts.map((s, i) => (
                    <li key={i}>{s[lang]}</li>
                  ))}
                </ul>
              </div>
            )}

            {topic.callIf && topic.callIf.length > 0 && (
              <div className="block">
                <h2>{t.topic.callIf}</h2>
                <ul className="bullets call">
                  {topic.callIf.map((s, i) => (
                    <li key={i}>{s[lang]}</li>
                  ))}
                </ul>
              </div>
            )}

            {topic.gallery && topic.gallery.length > 0 && (
              <div className="block">
                <h2>{t.topic.gallery}</h2>
                <Gallery images={topic.gallery} lang={lang} />
              </div>
            )}

            {topic.widget && (
              <div className="block">
                <Widget id={topic.widget} lang={lang} />
              </div>
            )}

            {topic.quiz.length > 0 && (
              <div className="block" id="quiz">
                <h2>{t.topic.quiz}</h2>
                <Quiz mode="topic" topic={topic} lang={lang} loggedIn={Boolean(session)} />
              </div>
            )}

            <nav className="pager">
              {prev ? (
                <Link href={`/topics/${prev.slug}`}>
                  <small>← {t.topic.prev}</small>
                  <b>{prev.title[lang]}</b>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/topics/${next.slug}`} style={{ textAlign: "right" }}>
                  <small>{t.topic.next} →</small>
                  <b>{next.title[lang]}</b>
                </Link>
              )}
            </nav>
          </article>

          <aside className="topic-side">
            <div className="callout red">
              <b>⚠ {t.topic.warning}</b>
              {topic.warning[lang]}
            </div>
            {topic.update && (
              <div className="callout yellow">
                <b>↻ {t.topic.update}</b>
                {topic.update[lang]}
              </div>
            )}
            <a href="tel:103" className="emergency-btn">
              <span>{t.topic.callBtn}</span>
              <b>103</b>
            </a>
            <MarkStudied slug={topic.slug} lang={lang} initial={studied} loggedIn={Boolean(session)} />
            <p className="small muted">{t.disclaimer}</p>
          </aside>
        </div>
      </div>
    </>
  );
}
