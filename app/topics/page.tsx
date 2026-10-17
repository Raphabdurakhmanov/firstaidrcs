import { Suspense } from "react";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getProgress, getSession, getTopics } from "@/lib/data";
import { CATEGORIES } from "@/lib/content";
import TopicBrowser from "@/components/TopicBrowser";

export const metadata: Metadata = { title: "Темы" };

export default async function TopicsPage() {
  const { lang, t } = await getDict();
  const [topics, session] = await Promise.all([getTopics(), getSession()]);
  const studied = session ? await getProgress(session.user.id) : [];
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">
          <i />
          Knowledge hub
        </span>
        <h1 className="h2">{t.allTopics}</h1>
        <p className="lead" style={{ marginBottom: 30 }}>
          {t.quickHelpText}
        </p>
        <Suspense>
          <TopicBrowser topics={topics} categories={CATEGORIES.map(({ id, title }) => ({ id, title }))} lang={lang} studied={studied} />
        </Suspense>
      </div>
    </section>
  );
}
