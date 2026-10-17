"use client";
import { useState } from "react";
import ImageUpload from "./ImageUpload";

/** Поле формы с загрузкой картинки: значение уходит в скрытый input. */
export default function CoverField({ name, initial }: { name: string; initial: string }) {
  const [url, setUrl] = useState(initial);
  return (
    <>
      <ImageUpload value={url} folder="news" onChange={setUrl} />
      <input type="hidden" name={name} value={url} />
    </>
  );
}
