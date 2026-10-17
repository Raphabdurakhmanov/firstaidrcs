import { getDict } from "@/lib/i18n/server";
import { getNewsItem } from "@/lib/data";
import { deleteNews, saveNews } from "@/app/actions";
import { LANGS } from "@/lib/types";
import CoverField from "@/components/admin/CoverField";

const LABELS = {
  ru: { title: "Заголовок", body: "Текст", audience: "Кому показывать", all: "Всем", vol: "Только волонтёрам (после входа)", pub: "Опубликовать", save: "Сохранить", del: "Удалить", cover: "Картинка", hint: "Пустые переводы заполнятся русским текстом. Абзацы разделяйте пустой строкой." },
  en: { title: "Title", body: "Text", audience: "Audience", all: "Everyone", vol: "Volunteers only (signed in)", pub: "Publish", save: "Save", del: "Delete", cover: "Image", hint: "Empty translations will use the Russian text. Separate paragraphs with a blank line." },
  uz: { title: "Sarlavha", body: "Matn", audience: "Kimga koʻrsatish", all: "Hammaga", vol: "Faqat koʻngillilarga (kirgandan keyin)", pub: "Eʼlon qilish", save: "Saqlash", del: "Oʻchirish", cover: "Rasm", hint: "Boʻsh tarjimalar ruscha matn bilan toʻldiriladi. Xatboshilarni boʻsh qator bilan ajrating." },
};

export default async function EditNews({ searchParams }: { searchParams: Promise<{ id?: string; error?: string }> }) {
  const { id, error } = await searchParams;
  const { lang } = await getDict();
  const u = LABELS[lang];
  const item = id ? await getNewsItem(id) : null;

  return (
    <div className="stack" style={{ gap: 18 }}>
      <form action={saveNews} className="panel stack">
        {item && <input type="hidden" name="id" value={item.id} />}
        {error && <div className="callout red">{error === "title" ? `${u.title} (RU)` : error}</div>}
        <p className="small muted">{u.hint}</p>
        {LANGS.map((k) => (
          <fieldset key={k} style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
            <legend className="tag">{k.toUpperCase()}</legend>
            <div className="stack">
              <div className="field">
                <label htmlFor={`title_${k}`}>{u.title}</label>
                <input id={`title_${k}`} name={`title_${k}`} defaultValue={item?.title[k] ?? ""} required={k === "ru"} />
              </div>
              <div className="field">
                <label htmlFor={`body_${k}`}>{u.body}</label>
                <textarea id={`body_${k}`} name={`body_${k}`} defaultValue={item?.body[k] ?? ""} style={{ minHeight: 140 }} required={k === "ru"} />
              </div>
            </div>
          </fieldset>
        ))}
        <div className="field">
          <span>{u.cover}</span>
          <CoverField name="cover_url" initial={item?.cover_url ?? ""} />
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="audience">{u.audience}</label>
            <select id="audience" name="audience" defaultValue={item?.audience ?? "public"}>
              <option value="public">{u.all}</option>
              <option value="volunteers">{u.vol}</option>
            </select>
          </div>
          <label className="row" style={{ gap: 8, alignSelf: "end" }}>
            <input type="checkbox" name="published" defaultChecked={item?.published ?? true} /> {u.pub}
          </label>
        </div>
        <div className="row">
          <button className="btn">{u.save}</button>
        </div>
      </form>
      {item && (
        <form action={deleteNews}>
          <input type="hidden" name="id" value={item.id} />
          <button className="btn ghost small">{u.del}</button>
        </form>
      )}
    </div>
  );
}
