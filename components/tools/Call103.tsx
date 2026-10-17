"use client";
import { useMemo, useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang } from "@/lib/types";

type Tri = "yes" | "no" | "unknown";
const EVENTS = ["accident", "fall", "illness", "burn", "poison", "other"] as const;

const TEMPLATES: Record<Lang, (d: Data, ev: string, tri: (v: Tri) => string) => string> = {
  ru: (d, ev, tri) =>
    [
      `Адрес: ${d.address || "…"}.`,
      `Случилось: ${ev}.`,
      `Пострадавших: ${d.count}${d.age ? `, возраст около ${d.age}` : ""}.`,
      `Сознание: ${tri(d.conscious)}. Дыхание: ${tri(d.breathing)}.${d.bleeding ? " Сильное кровотечение." : ""}`,
      d.help ? `Оказываю помощь: ${d.help}.` : "",
      "Жду указаний, трубку не кладу.",
    ].filter(Boolean).join("\n"),
  en: (d, ev, tri) =>
    [
      `Address: ${d.address || "…"}.`,
      `What happened: ${ev}.`,
      `Casualties: ${d.count}${d.age ? `, about ${d.age} years old` : ""}.`,
      `Conscious: ${tri(d.conscious)}. Breathing: ${tri(d.breathing)}.${d.bleeding ? " Heavy bleeding." : ""}`,
      d.help ? `Help given: ${d.help}.` : "",
      "I am staying on the line for instructions.",
    ].filter(Boolean).join("\n"),
  uz: (d, ev, tri) =>
    [
      `Manzil: ${d.address || "…"}.`,
      `Nima boʻldi: ${ev}.`,
      `Jabrlanuvchilar: ${d.count}${d.age ? `, taxminan ${d.age} yosh` : ""}.`,
      `Hushi: ${tri(d.conscious)}. Nafasi: ${tri(d.breathing)}.${d.bleeding ? " Kuchli qon ketyapti." : ""}`,
      d.help ? `Koʻrsatayotgan yordamim: ${d.help}.` : "",
      "Koʻrsatma kutyapman, goʻshakni qoʻymayman.",
    ].filter(Boolean).join("\n"),
};

type Data = { address: string; event: (typeof EVENTS)[number]; count: number; age: string; conscious: Tri; breathing: Tri; bleeding: boolean; help: string };

export default function Call103({ lang }: { lang: Lang }) {
  const t = DICTS[lang].call;
  const [d, setD] = useState<Data>({ address: "", event: "illness", count: 1, age: "", conscious: "unknown", breathing: "unknown", bleeding: false, help: "" });
  const [copied, setCopied] = useState(false);
  const set = <K extends keyof Data>(k: K, v: Data[K]) => setD((x) => ({ ...x, [k]: v }));
  const tri = (v: Tri) => (v === "yes" ? t.yes : v === "no" ? t.no : t.unknown).toLowerCase();
  const text = useMemo(() => TEMPLATES[lang](d, t.events[d.event].toLowerCase(), tri), [d, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* буфер обмена недоступен */
    }
  };

  const TriSelect = ({ k, label }: { k: "conscious" | "breathing"; label: string }) => (
    <div className="field">
      <span>{label}</span>
      <div className="seg">
        {(["yes", "no", "unknown"] as Tri[]).map((v) => (
          <button key={v} type="button" className={d[k] === v ? "on" : ""} onClick={() => set(k, v)}>
            {v === "yes" ? t.yes : v === "no" ? t.no : t.unknown}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid c2" style={{ alignItems: "start" }}>
      <div className="form-grid">
        <div className="field full">
          <label htmlFor="c-addr">{t.address}</label>
          <input id="c-addr" value={d.address} onChange={(e) => set("address", e.target.value)} placeholder={t.addressPh} />
        </div>
        <div className="field">
          <label htmlFor="c-ev">{t.what}</label>
          <select id="c-ev" value={d.event} onChange={(e) => set("event", e.target.value as Data["event"])}>
            {EVENTS.map((ev) => (
              <option key={ev} value={ev}>
                {t.events[ev]}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-n">{t.count}</label>
          <input id="c-n" type="number" min={1} max={99} value={d.count} onChange={(e) => set("count", Math.max(1, Number(e.target.value) || 1))} />
        </div>
        <div className="field">
          <label htmlFor="c-age">{t.age}</label>
          <input id="c-age" value={d.age} onChange={(e) => set("age", e.target.value)} placeholder="35" />
        </div>
        <TriSelect k="conscious" label={t.conscious} />
        <TriSelect k="breathing" label={t.breathing} />
        <label className="check field full" style={{ borderTop: 0 }}>
          <input type="checkbox" checked={d.bleeding} onChange={(e) => set("bleeding", e.target.checked)} />
          <span style={{ textDecoration: "none", color: "inherit" }}>{t.bleeding}</span>
        </label>
        <div className="field full">
          <label htmlFor="c-help">{t.help}</label>
          <input id="c-help" value={d.help} onChange={(e) => set("help", e.target.value)} placeholder={t.helpPh} />
        </div>
      </div>
      <div className="stack">
        <span className="eyebrow">
          <i />
          {t.script}
        </span>
        <div className="script" aria-live="polite">
          {text}
        </div>
        <div className="row">
          <a className="btn" href="tel:103">
            ☎ {t.callNow}
          </a>
          <button className="btn ghost" onClick={copy}>
            {copied ? `✓ ${t.copied}` : t.copy}
          </button>
        </div>
      </div>
    </div>
  );
}
