"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createBrowser } from "@/lib/supabase/client";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang } from "@/lib/types";

export default function LoginForm({ lang, next }: { lang: Lang; next: string }) {
  const t = DICTS[lang].auth;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const supabase = createBrowser();
    if (!supabase) return;
    setBusy(true);
    setErr(false);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) {
      setErr(true);
      setBusy(false);
      return;
    }
    router.push(next);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="stack" style={{ textAlign: "left", gap: 12 }}>
      <label className="stack" style={{ gap: 4 }}>
        <span className="small muted">{t.email}</span>
        <input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="stack" style={{ gap: 4 }}>
        <span className="small muted">{t.password}</span>
        <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {err && <div className="callout red">{t.error}</div>}
      <button className="btn" disabled={busy}>
        {busy ? "…" : t.submit}
      </button>
    </form>
  );
}
