"use client";
import { useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import { l, type Lang } from "@/lib/types";

const SIGNS = [
  { k: "F", title: l("Улыбка", "Face", "Tabassum"), text: l("Один угол рта опущен", "One side of the mouth droops", "Ogʻizning bir burchagi tushgan") },
  { k: "A", title: l("Рука", "Arms", "Qoʻl"), text: l("Одна рука опускается", "One arm drifts down", "Bir qoʻl tushib ketadi") },
  { k: "S", title: l("Речь", "Speech", "Nutq"), text: l("Речь невнятная", "Speech is slurred", "Nutq tushunarsiz") },
];

export default function FastCheck({ lang }: { lang: Lang }) {
  const t = DICTS[lang].fast;
  const [on, setOn] = useState<boolean[]>([false, false, false]);
  const [time, setTime] = useState<string | null>(null);
  const any = on.some(Boolean);

  const toggle = (i: number) => {
    const next = on.map((v, k) => (k === i ? !v : v));
    setOn(next);
    if (next.some(Boolean) && !time) setTime(new Date().toLocaleTimeString(lang === "en" ? "en-GB" : lang === "uz" ? "uz-UZ" : "ru-RU", { hour: "2-digit", minute: "2-digit" }));
    if (!next.some(Boolean)) setTime(null);
  };

  return (
    <div className="stack">
      <div className="fast-grid">
        {SIGNS.map((s, i) => (
          <button key={s.k} className={on[i] ? "on" : ""} onClick={() => toggle(i)} aria-pressed={on[i]}>
            <b>{on[i] ? "✓" : s.k}</b>
            <strong>{s.title[lang]}</strong>
            <div className="small muted">{s.text[lang]}</div>
          </button>
        ))}
      </div>
      <div className={`callout ${any ? "red" : "green"}`} aria-live="polite">
        <b>{t.title}</b>
        {any ? (
          <>
            {t.call} {time && <strong>⏱ {time}</strong>}
            <div style={{ marginTop: 10 }}>
              <a className="btn small" href="tel:103">
                ☎ 103
              </a>
            </div>
          </>
        ) : (
          t.none
        )}
      </div>
    </div>
  );
}
