"use client";
import { useCallback, useEffect, useState } from "react";
import type { Lang, TopicImage } from "@/lib/types";

export default function Gallery({ images, lang }: { images: TopicImage[]; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <figure key={img.src}>
            <button onClick={() => setOpen(i)} aria-label={img.caption[lang]}>
              <img src={img.src} alt={img.caption[lang]} loading="lazy" />
            </button>
            <figcaption>
              <b>{i + 1}.</b>
              {img.caption[lang]}
            </figcaption>
          </figure>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <img src={images[open].src} alt={images[open].caption[lang]} onClick={(e) => e.stopPropagation()} />
          <p>
            {open + 1} / {images.length} · {images[open].caption[lang]}
          </p>
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => (e.stopPropagation(), go(-1))}>
                ‹
              </button>
              <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => (e.stopPropagation(), go(1))}>
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
