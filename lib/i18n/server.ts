import { cookies } from "next/headers";
import { LANGS, type Lang } from "../types";
import { DICTS } from "./dict";

export async function getLang(): Promise<Lang> {
  const v = (await cookies()).get("lang")?.value;
  return (LANGS as readonly string[]).includes(v ?? "") ? (v as Lang) : "ru";
}

export async function getDict() {
  const lang = await getLang();
  return { lang, t: DICTS[lang] };
}
