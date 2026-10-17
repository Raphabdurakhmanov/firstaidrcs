"use client";
import { useRef, useState } from "react";
import { createBrowser } from "@/lib/supabase/client";

const MAX_MB = 5;

/** Загрузка картинки в Supabase Storage (бакет media). Возвращает публичную ссылку. */
export default function ImageUpload({ value, folder, onChange }: { value: string; folder: string; onChange: (url: string) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const upload = async (file: File) => {
    setErr("");
    if (!file.type.startsWith("image/")) return setErr("Только изображения / Images only");
    if (file.size > MAX_MB * 1024 * 1024) return setErr(`≤ ${MAX_MB} MB`);
    const supabase = createBrowser();
    if (!supabase) return setErr("Supabase не настроен");
    setBusy(true);
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from("media").upload(path, file, { cacheControl: "2592000", upsert: false });
    setBusy(false);
    if (error) return setErr(error.message);
    onChange(supabase.storage.from("media").getPublicUrl(path).data.publicUrl);
  };

  return (
    <div className="row" style={{ alignItems: "center" }}>
      {value ? (
        <img src={value} alt="" style={{ width: 120, height: 90, objectFit: "contain", borderRadius: 10, border: "1px solid #eee", background: "#fff" }} />
      ) : (
        <div style={{ width: 120, height: 90, borderRadius: 10, border: "1px dashed #ccc", display: "grid", placeItems: "center", color: "#aaa" }}>—</div>
      )}
      <div className="stack" style={{ gap: 6, flex: 1, minWidth: 200 }}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://… или /media/…"
          style={{ border: "1px solid #ddd", borderRadius: 10, padding: "9px 12px", fontSize: 13 }}
        />
        <div className="row" style={{ gap: 8 }}>
          <button type="button" className="btn ghost small" disabled={busy} onClick={() => input.current?.click()}>
            {busy ? "…" : "⬆ Upload"}
          </button>
          {value && (
            <button type="button" className="btn ghost small" onClick={() => onChange("")}>
              ✕
            </button>
          )}
          {err && <span className="small" style={{ color: "var(--r)" }}>{err}</span>}
        </div>
      </div>
      <input ref={input} type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
    </div>
  );
}
