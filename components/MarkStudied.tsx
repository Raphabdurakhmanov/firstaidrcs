"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { setStudied } from "@/app/actions";
import { DICTS } from "@/lib/i18n/dict";
import type { Lang } from "@/lib/types";

export default function MarkStudied({ slug, lang, initial, loggedIn, authEnabled }: { slug: string; lang: Lang; initial: boolean; loggedIn: boolean; authEnabled: boolean }) {
  const t = DICTS[lang].topic;
  const [done, setDone] = useState(initial);
  const [pending, start] = useTransition();

  if (!loggedIn) {
    return authEnabled ? (
      <Link href={`/login?next=/topics/${slug}`} className="btn ghost">
        {t.loginToSave}
      </Link>
    ) : null;
  }

  return (
    <button
      className={`btn ${done ? "ghost" : ""}`}
      disabled={pending}
      onClick={() =>
        start(async () => {
          const res = await setStudied(slug, !done);
          if (res.ok) setDone(!done);
        })
      }
    >
      {done ? `✓ ${t.studied}` : t.markStudied}
    </button>
  );
}
