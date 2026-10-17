import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getSession } from "@/lib/data";
import { supabaseConfigured } from "@/lib/supabase/env";
import LoginButton from "@/components/LoginButton";

export const metadata: Metadata = { title: "Вход" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const { next, error } = await searchParams;
  const { lang, t } = await getDict();
  if (await getSession()) redirect(next?.startsWith("/") ? next : "/cabinet");
  return (
    <section className="section alt">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <div className="panel center stack" style={{ padding: 40 }}>
          <img src="/media/logo.png" alt="" width={90} height={90} style={{ margin: "0 auto" }} />
          <h1 style={{ margin: 0 }}>{t.auth.title}</h1>
          <p className="muted">{t.auth.text}</p>
          {error && <div className="callout red">{t.auth.error}</div>}
          <a href="/join" className="link">
            {t.nav.join} →
          </a>
          {supabaseConfigured() ? <LoginButton lang={lang} next={next?.startsWith("/") ? next : "/cabinet"} /> : <div className="notice">{t.auth.notConfigured}</div>}
        </div>
      </div>
    </section>
  );
}
