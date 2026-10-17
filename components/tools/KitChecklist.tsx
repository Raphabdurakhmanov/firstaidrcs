"use client";
import { useEffect, useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import { l, type Lang } from "@/lib/types";

const ITEMS = [
  l("Одноразовые перчатки (2 пары)", "Disposable gloves (2 pairs)", "Bir martalik qoʻlqop (2 juft)"),
  l("Маска для СЛР", "CPR face shield", "YOʻR niqobi"),
  l("Стерильные салфетки", "Sterile pads", "Steril salfetkalar"),
  l("Бинты 5 и 10 см", "Bandages 5 and 10 cm", "5 va 10 sm bintlar"),
  l("Эластичный бинт", "Elastic bandage", "Elastik bint"),
  l("Индивидуальный перевязочный пакет", "Individual dressing pack", "Individual bogʻlov paketi"),
  l("Пластыри разных размеров", "Plasters of different sizes", "Turli oʻlchamdagi plastirlar"),
  l("Лейкопластырь в рулоне", "Adhesive tape roll", "Rulonli leykoplastir"),
  l("Косынка", "Triangular bandage", "Uchburchak roʻmol"),
  l("Жгут", "Tourniquet", "Jgut"),
  l("Ножницы", "Scissors", "Qaychi"),
  l("Английские булавки", "Safety pins", "Toʻgʻnagʻichlar"),
  l("Термоодеяло", "Foil blanket", "Termoadyol"),
  l("Холодовой пакет", "Instant cold pack", "Sovuq paket"),
  l("Список номеров: 103, 101, 102, 112", "Number list: 103, 101, 102, 112", "Raqamlar roʻyxati: 103, 101, 102, 112"),
];

const KEY = "kit-checklist-v1";

export default function KitChecklist({ lang }: { lang: Lang }) {
  const t = DICTS[lang].kit;
  const [done, setDone] = useState<boolean[]>(() => ITEMS.map(() => false));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) setDone(ITEMS.map((_, i) => Boolean(arr[i])));
      }
    } catch {
      /* хранилище недоступно */
    }
  }, []);

  const toggle = (i: number) =>
    setDone((d) => {
      const n = d.map((v, k) => (k === i ? !v : v));
      try {
        localStorage.setItem(KEY, JSON.stringify(n));
      } catch {
        /* хранилище недоступно */
      }
      return n;
    });

  const count = done.filter(Boolean).length;

  return (
    <div>
      <div className="quiz-progress" style={{ marginBottom: 10 }}>
        <span>
          {count}/{ITEMS.length} {t.done}
        </span>
        <span className="bar green" aria-hidden>
          <i style={{ width: `${(count / ITEMS.length) * 100}%` }} />
        </span>
        <button
          className="btn ghost small"
          onClick={() => {
            setDone(ITEMS.map(() => false));
            try {
              localStorage.removeItem(KEY);
            } catch {
              /* хранилище недоступно */
            }
          }}
        >
          {t.reset}
        </button>
      </div>
      <div className="grid c2" style={{ gap: "0 30px" }}>
        {ITEMS.map((item, i) => (
          <label key={i} className={`check ${done[i] ? "on" : ""}`}>
            <input type="checkbox" checked={done[i]} onChange={() => toggle(i)} />
            <span>{item[lang]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
