import type { RcsNews } from "@/lib/rcs-news";
import type { Lang } from "@/lib/types";
import { fmtDate } from "./NewsCard";
import { Crescent } from "./TopicIcon";

export default function RcsNewsCard({ item, lang, readLabel }: { item: RcsNews; lang: Lang; readLabel: string }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="news-card">
      {item.image ? <img src={item.image} alt="" loading="lazy" className="graded" /> : <div className="news-ph">
          <Crescent />
        </div>}
      <div>
        <span className="small muted">{fmtDate(item.date, lang)}</span>
        <h3>{item.title}</h3>
        {item.excerpt && <p>{item.excerpt}</p>}
        <span className="link" style={{ display: "inline-block", marginTop: 12 }}>
          {readLabel} ↗
        </span>
      </div>
    </a>
  );
}
