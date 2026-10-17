"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import { LANGS, type Lang } from "@/lib/types";

type User = { name: string; avatar: string | null; staff: boolean } | null;

export default function TopBar({ lang, user }: { lang: Lang; user: User }) {
  const t = DICTS[lang];
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  const setLang = (l: Lang) => {
    document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  const links: [string, string][] = [
    ["/topics", t.nav.topics],
    ["/tools", t.nav.tools],
    ["/exam", t.nav.exam],
    ["/news", t.nav.news],
    ["/about", t.nav.about],
  ];
  const active = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header className="topbar">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={t.nav.home}>
          <img src="/media/logo.png" alt="" width={50} height={50} />
          <span>
            <b>{t.brand}</b>
            <small>{t.brandSub}</small>
          </span>
        </Link>
        <nav className="nav">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={active(href) ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="head-actions">
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l} className={l === lang ? "on" : ""} onClick={() => setLang(l)} aria-pressed={l === lang}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="call" href="tel:103" aria-label={`${t.ambulance} 103`}>
            <small>{t.ambulance}</small>
            <b>103</b>
          </a>
          <Link href="/join" className="btn ghost small hide-md">
            {t.nav.join}
          </Link>
          {user ? (
            <Link href={user.staff ? "/admin" : "/cabinet"} className="avatar" title={user.name}>
              {user.avatar ? <img src={user.avatar} alt="" /> : (user.name[0] ?? "?").toUpperCase()}
            </Link>
          ) : null}
          <button className="menu-btn" aria-label={t.menu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <Link href="/">{t.nav.home}</Link>
        <Link href="/join" style={{ color: "var(--r)" }}>
          {t.nav.join}
        </Link>
        {links.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        {user && <Link href="/cabinet">{t.cabinet}</Link>}
        {user?.staff && <Link href="/admin">{t.admin}</Link>}
      </nav>
    </header>
  );
}
