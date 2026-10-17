"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TopicCard from "./TopicCard";
import { DICTS } from "@/lib/i18n/dict";
import { searchTopics } from "@/lib/search";
import type { CategoryId, L, Lang, Topic } from "@/lib/types";

type Cat = { id: CategoryId; title: L };

export default function TopicBrowser({ topics, categories, lang, studied }: { topics: Topic[]; categories: Cat[]; lang: Lang; studied: string[] }) {
  const t = DICTS[lang];
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<CategoryId | "all">((params.get("cat") as CategoryId) ?? "all");
  const done = useMemo(() => new Set(studied), [studied]);

  const list = useMemo(() => {
    const byCat = cat === "all" ? topics : topics.filter((x) => x.cat === cat);
    return searchTopics(byCat, q, lang);
  }, [topics, cat, q, lang]);

  return (
    <>
      <div className="filters">
        <label className="search">
          <span aria-hidden>⌕</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search} aria-label={t.search} />
        </label>
        <button className={`chip ${cat === "all" ? "on" : ""}`} onClick={() => setCat("all")}>
          {t.allTopics} · {topics.length}
        </button>
        {categories.map((c) => (
          <button key={c.id} className={`chip ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>
            {c.title[lang]}
          </button>
        ))}
      </div>
      {list.length ? (
        <div className="grid c4">
          {list.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} lang={lang} studied={done.has(topic.slug)} />
          ))}
        </div>
      ) : (
        <div className="empty">
          {lang === "ru" ? "Ничего не найдено. Попробуйте другое слово." : lang === "uz" ? "Hech narsa topilmadi. Boshqa soʻzni sinab koʻring." : "Nothing found. Try another word."}
        </div>
      )}
    </>
  );
}
