"use client";
import { useState } from "react";
import { createBrowser } from "@/lib/supabase/client";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang } from "@/lib/types";

export default function LoginButton({ lang, next }: { lang: Lang; next: string }) {
  const t = DICTS[lang].auth;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  const signIn = async () => {
    const supabase = createBrowser();
    if (!supabase) return;
    setBusy(true);
    const site = (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin).replace(/\/$/, "");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${site}/auth/callback?next=${encodeURIComponent(next)}` },
    });
    if (error) {
      setErr(true);
      setBusy(false);
    }
  };

  return (
    <>
      <button className="btn" onClick={signIn} disabled={busy}>
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
          <path fill="#fff" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
        </svg>
        {t.google}
      </button>
      {err && <div className="callout red">{t.error}</div>}
    </>
  );
}
