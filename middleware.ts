import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// сколько ждём supabase в middleware, потом просто пропускаем запрос дальше
const AUTH_TIMEOUT_MS = 3000;

export async function middleware(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.next();

  // если человек не залогинен (нет cookie supabase) — обновлять сессию нечего
  const hasAuthCookie = request.cookies.getAll().some((c) => c.name.startsWith("sb-"));
  if (!hasAuthCookie) return NextResponse.next();

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  // если supabase спит или тормозит — не вешаем весь сайт (раньше тут был 504)
  try {
    await Promise.race([
      supabase.auth.getUser(),
      new Promise((resolve) => setTimeout(resolve, AUTH_TIMEOUT_MS)),
    ]);
  } catch (e) {
    console.error("middleware: supabase auth error", e);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|media|favicon.ico|icon.png|apple-icon.png|.*\\.(?:webp|png|jpg|svg)$).*)"],
};
