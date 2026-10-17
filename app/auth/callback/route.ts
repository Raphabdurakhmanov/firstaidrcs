import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const nextParam = url.searchParams.get("next") ?? "/cabinet";
  const next = nextParam.startsWith("/") && !nextParam.startsWith("//") ? nextParam : "/cabinet";
  const site = (process.env.NEXT_PUBLIC_SITE_URL || url.origin).replace(/\/$/, "");

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) return NextResponse.redirect(`${site}${next}`);
    }
  }
  return NextResponse.redirect(`${site}/login?error=1`);
}
