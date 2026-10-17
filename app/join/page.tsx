import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getSession } from "@/lib/data";
import { supabaseConfigured } from "@/lib/supabase/env";
import JoinFlow from "@/components/JoinFlow";
import type { Lang } from "@/lib/types";

export const metadata: Metadata = { title: "Стать волонтёром" };

const HEAD: Record<Lang, { eyebrow: string; title: string; text: string }> = {
  ru: {
    eyebrow: "Регистрация волонтёра",
    title: "Стать волонтёром Красного Полумесяца",
    text: "Прочитайте соглашение о волонтёрской деятельности, подтвердите согласие и заполните короткую анкету.",
  },
  en: {
    eyebrow: "Volunteer registration",
    title: "Become a Red Crescent volunteer",
    text: "Read the volunteer agreement, confirm your consent and fill in a short application.",
  },
  uz: {
    eyebrow: "Koʻngilli roʻyxati",
    title: "Qizil Yarim Oy koʻngillisi boʻling",
    text: "Koʻngillilik faoliyati toʻgʻrisidagi kelishuvni oʻqing, roziligingizni tasdiqlang va qisqa anketani toʻldiring.",
  },
};

export default async function JoinPage() {
  const { lang } = await getDict();
  const session = await getSession();
  const h = HEAD[lang];
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">
          <i />
          {h.eyebrow}
        </span>
        <h1 className="h2">{h.title}</h1>
        <p className="lead" style={{ marginBottom: 30 }}>
          {h.text}
        </p>
        <JoinFlow
          lang={lang}
          online={supabaseConfigured()}
          prefill={{ name: session?.profile?.full_name ?? "", email: session?.user.email ?? "" }}
        />
      </div>
    </section>
  );
}
