import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import { getSession } from "@/lib/data";
import { supabaseConfigured } from "@/lib/supabase/env";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = { title: "Админ", robots: { index: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  const goTo = next?.startsWith("/") ? next : "/admin";
  const { lang, t } = await getDict();
  if (await getSession()) redirect(goTo);
  return (
    <section className="section alt">
      <div className="wrap" style={{ maxWidth: 460 }}>
        <div className="panel center stack" style={{ padding: 36 }}>
          <img src="/media/logo.png" alt="" width={80} height={80} style={{ margin: "0 auto" }} />
          <h1 style={{ margin: 0 }}>{t.auth.title}</h1>
          <p className="muted">{t.auth.text}</p>
          {supabaseConfigured() ? <LoginForm lang={lang} next={goTo} /> : <div className="notice">{t.auth.notConfigured}</div>}
        </div>
      </div>
    </section>
  );
}
