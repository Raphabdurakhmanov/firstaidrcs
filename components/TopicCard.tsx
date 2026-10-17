import Link from "next/link";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang, Topic } from "@/lib/types";
import TopicIcon from "@/components/TopicIcon";
import { sized } from "@/lib/photos";

export default function TopicCard({ topic, lang, studied = false }: { topic: Topic; lang: Lang; studied?: boolean }) {
  const t = DICTS[lang];
  return (
    <Link href={`/topics/${topic.slug}`} className="topic-card">
      <div className="topic-media">
        {topic.cover ? (
          <img src={sized(topic.cover, 640)} alt="" loading="lazy" style={topic.coverFit === "contain" ? { objectFit: "contain", padding: 14, background: "#fff" } : undefined} />
        ) : (
          <span className="glyph" aria-hidden>
            <TopicIcon icon={topic.icon} />
          </span>
        )}
        {studied && <span className="badge done">✓ {t.topic.studied}</span>}
        <span className="badge">{String(topic.order).padStart(2, "0")}</span>
      </div>
      <div className="topic-body">
        <i aria-hidden><TopicIcon icon={topic.icon} /></i>
        <h3>{topic.title[lang]}</h3>
        <p>{topic.summary[lang]}</p>
        <span className="link">{t.open} →</span>
      </div>
    </Link>
  );
}
