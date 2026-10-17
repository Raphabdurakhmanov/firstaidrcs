import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import Widget from "@/components/Widget";

export const metadata: Metadata = { title: "Тренажёры" };

export default async function ToolsPage() {
  const { lang, t } = await getDict();
  return (
    <section className="section alt">
      <div className="wrap">
        <span className="eyebrow">
          <i />
          {t.toolsTitle}
        </span>
        <h1 className="h2">{t.toolsPage.title}</h1>
        <p className="lead" style={{ marginBottom: 34 }}>
          {t.toolsPage.text}
        </p>
        <div className="stack" style={{ gap: 22 }}>
          <Widget id="cpr" lang={lang} />
          <Widget id="algorithm" lang={lang} />
          <Widget id="call103" lang={lang} />
          <Widget id="fast" lang={lang} />
          <Widget id="kit" lang={lang} />
        </div>
      </div>
    </section>
  );
}
