import type { Lang, WidgetId } from "@/lib/types";
import { DICTS } from "@/lib/i18n/dict";
import CprTrainer from "./tools/CprTrainer";
import Call103 from "./tools/Call103";
import Algorithm from "./tools/Algorithm";
import KitChecklist from "./tools/KitChecklist";
import FastCheck from "./tools/FastCheck";

const MAP = { cpr: CprTrainer, call103: Call103, algorithm: Algorithm, kit: KitChecklist, fast: FastCheck } as const;

/** Интерактивный тренажёр в рамке с заголовком. */
export default function Widget({ id, lang, bare = false }: { id: WidgetId; lang: Lang; bare?: boolean }) {
  const C = MAP[id];
  const [title, text] = DICTS[lang].tools[id];
  if (bare) return <C lang={lang} />;
  return (
    <section className="tool" id={id}>
      <span className="eyebrow">
        <i />
        {DICTS[lang].nav.tools}
      </span>
      <h3 style={{ marginTop: 12 }}>{title}</h3>
      <p className="muted" style={{ marginTop: 0, marginBottom: 22 }}>
        {text}
      </p>
      <C lang={lang} />
    </section>
  );
}
