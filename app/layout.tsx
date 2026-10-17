import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getDict } from "@/lib/i18n/server";
import { getSession, isStaff } from "@/lib/data";
import { supabaseConfigured } from "@/lib/supabase/env";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: { default: "Первая помощь — Красный Полумесяц Узбекистана", template: "%s · Первая помощь" },
  description: "Учебный портал первой помощи и волонтёров Красного Полумесяца Узбекистана: протоколы, тренажёры, тесты. RU / EN / UZ.",
  icons: { icon: "/media/logo.png", apple: "/media/apple-icon.png" },
  openGraph: {
    title: "Первая помощь — Красный Полумесяц Узбекистана",
    description: "Пошаговые протоколы, тренажёр СЛР, звонок в 103 и экзамен на трёх языках.",
    images: ["/media/cpr-adult/1.webp"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang, t } = await getDict();
  const session = await getSession();
  const profile = session?.profile ?? null;
  const user = session
    ? {
        name: profile?.full_name || session.user.email || "",
        avatar: profile?.avatar_url ?? null,
        staff: isStaff(profile),
      }
    : null;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TopBar lang={lang} user={user} authEnabled={supabaseConfigured()} />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <Link href="/" className="brand">
              <img src="/media/logo.png" alt="" width={50} height={50} />
              <span>
                <b>{t.brand}</b>
                <small>{t.brandSub}</small>
              </span>
            </Link>
            <div className="stack">
              <div className="links">
                <Link href="/topics">{t.nav.topics}</Link>
                <Link href="/tools">{t.nav.tools}</Link>
                <Link href="/exam">{t.nav.exam}</Link>
                <Link href="/news">{t.nav.news}</Link>
                <Link href="/about">{t.nav.about}</Link>
              </div>
              <p>{t.disclaimer}</p>
            </div>
            <a className="tel" href="tel:103">
              ☎ 103
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
