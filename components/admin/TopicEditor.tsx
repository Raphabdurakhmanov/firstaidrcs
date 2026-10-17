"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { deleteTopic, saveTopic } from "@/app/actions";
import { validateTopic } from "@/lib/validate";
import { LANGS, l, type CategoryId, type L, type Lang, type QuizQuestion, type Topic, type WidgetId } from "@/lib/types";
import ImageUpload from "./ImageUpload";

type ListKey = "signs" | "steps" | "donts" | "callIf";

const UI: Record<Lang, Record<string, string>> = {
  ru: {
    basic: "Основное", slug: "Адрес (латиница)", cat: "Раздел", icon: "Значок", order: "Порядок", core: "Обязательная для сертификата", published: "Опубликована",
    widget: "Тренажёр на странице", none: "Нет", text: "Тексты", title: "Название", summary: "Краткое описание", warning: "Критически важно", update: "Что обновлено (необязательно)",
    lines: "по одному пункту в строке", signs: "Как распознать", steps: "Шаги", donts: "Чего не делать", callIf: "Когда вызывать 103",
    images: "Изображения", cover: "Обложка", gallery: "Галерея", add: "Добавить", caption: "Подпись", quiz: "Вопросы теста", q: "Вопрос", correct: "Правильный ответ", wrong: "Неверный ответ", explain: "Пояснение",
    save: "Сохранить", saving: "Сохраняю…", saved: "Сохранено", del: "Удалить тему", reset: "Вернуть встроенный текст", confirm: "Точно?", fill: "Пустые переводы заполнятся русским текстом.", taken: "Такой адрес уже занят", remove: "Убрать",
  },
  en: {
    basic: "Basics", slug: "URL slug (latin)", cat: "Section", icon: "Icon", order: "Order", core: "Required for the record", published: "Published",
    widget: "Trainer on the page", none: "None", text: "Texts", title: "Title", summary: "Short description", warning: "Critical warning", update: "What was updated (optional)",
    lines: "one item per line", signs: "How to recognise", steps: "Steps", donts: "What not to do", callIf: "When to call 103",
    images: "Images", cover: "Cover", gallery: "Gallery", add: "Add", caption: "Caption", quiz: "Quiz questions", q: "Question", correct: "Correct answer", wrong: "Wrong answer", explain: "Explanation",
    save: "Save", saving: "Saving…", saved: "Saved", del: "Delete topic", reset: "Restore built-in text", confirm: "Are you sure?", fill: "Empty translations will be filled with the Russian text.", taken: "This slug is taken", remove: "Remove",
  },
  uz: {
    basic: "Asosiy", slug: "Manzil (lotin)", cat: "Boʻlim", icon: "Belgi", order: "Tartib", core: "Tasdiq uchun majburiy", published: "Eʼlon qilingan",
    widget: "Sahifadagi trenajyor", none: "Yoʻq", text: "Matnlar", title: "Nomi", summary: "Qisqa tavsif", warning: "Juda muhim", update: "Nima yangilandi (ixtiyoriy)",
    lines: "har qatorda bitta band", signs: "Qanday tanish", steps: "Qadamlar", donts: "Nima qilmaslik", callIf: "Qachon 103",
    images: "Rasmlar", cover: "Muqova", gallery: "Galereya", add: "Qoʻshish", caption: "Izoh", quiz: "Test savollari", q: "Savol", correct: "Toʻgʻri javob", wrong: "Notoʻgʻri javob", explain: "Izoh",
    save: "Saqlash", saving: "Saqlanmoqda…", saved: "Saqlandi", del: "Mavzuni oʻchirish", reset: "Asl matnni qaytarish", confirm: "Ishonchingiz komilmi?", fill: "Boʻsh tarjimalar ruscha matn bilan toʻldiriladi.", taken: "Bu manzil band", remove: "Olib tashlash",
  },
};

const WIDGETS: WidgetId[] = ["algorithm", "call103", "cpr", "kit", "fast"];
const emptyL = () => l("", "", "");
const emptyQ = (): QuizQuestion => ({ q: emptyL(), a: [emptyL(), emptyL(), emptyL(), emptyL()], e: emptyL() });

function finalize(t: Topic): Topic {
  const fix = (x: L): L => ({ ru: x.ru.trim(), en: x.en.trim() || x.ru.trim(), uz: x.uz.trim() || x.ru.trim() });
  const list = (arr?: L[]) => (arr ?? []).filter((x) => LANGS.some((k) => x[k].trim())).map(fix);
  const out: Topic = {
    ...t,
    title: fix(t.title),
    summary: fix(t.summary),
    warning: fix(t.warning),
    steps: list(t.steps),
    signs: list(t.signs),
    donts: list(t.donts),
    callIf: list(t.callIf),
    gallery: (t.gallery ?? []).filter((g) => g.src).map((g) => ({ src: g.src, caption: fix(g.caption) })),
    quiz: t.quiz
      .filter((q) => q.q.ru.trim())
      .map((q) => ({ q: fix(q.q), a: q.a.map(fix) as QuizQuestion["a"], e: fix(q.e) })),
  };
  if (t.update && LANGS.some((k) => t.update![k].trim())) out.update = fix(t.update);
  else delete out.update;
  if (!out.cover) delete out.cover;
  if (!out.widget) delete out.widget;
  for (const k of ["signs", "donts", "callIf", "gallery"] as const) if (!out[k]?.length) delete out[k];
  delete out.source;
  return out;
}

export default function TopicEditor({
  lang, initial, isNew, isBuiltin, isEdited, categories, takenSlugs,
}: {
  lang: Lang; initial: Topic; isNew: boolean; isBuiltin: boolean; isEdited: boolean;
  categories: { id: CategoryId; title: L }[]; takenSlugs: string[];
}) {
  const u = UI[lang];
  const router = useRouter();
  const [topic, setTopic] = useState<Topic>(initial);
  const [tl, setTl] = useState<Lang>("ru");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();

  const set = <K extends keyof Topic>(k: K, v: Topic[K]) => setTopic((x) => ({ ...x, [k]: v }));
  const setL = (k: "title" | "summary" | "warning" | "update", v: string) =>
    setTopic((x) => ({ ...x, [k]: { ...(x[k] ?? emptyL()), [tl]: v } }));

  const listText = (k: ListKey) => (topic[k] ?? []).map((x) => x[tl]).join("\n");
  const setList = (k: ListKey, text: string) =>
    setTopic((x) => {
      const lines = text.split("\n");
      const cur = [...(x[k] ?? [])];
      const n = Math.max(lines.length, cur.length);
      const next: L[] = [];
      for (let i = 0; i < n; i++) {
        const base = cur[i] ?? emptyL();
        const item = { ...base, [tl]: lines[i] ?? "" };
        if (i < lines.length || LANGS.some((lg) => lg !== tl && item[lg].trim())) next.push(item);
      }
      return { ...x, [k]: next };
    });

  const setQ = (i: number, fn: (q: QuizQuestion) => QuizQuestion) => set("quiz", topic.quiz.map((q, k) => (k === i ? fn(q) : q)));

  const slugTaken = isNew && takenSlugs.includes(topic.slug);

  const onSave = () => {
    const final = finalize(topic);
    const problems = validateTopic(final);
    if (slugTaken) problems.unshift(u.taken);
    if (problems.length) return setMsg({ ok: false, text: problems.join(" · ") });
    start(async () => {
      const res = await saveTopic(JSON.stringify(final));
      if (res.ok) {
        setMsg({ ok: true, text: u.saved });
        router.push(`/topics/${final.slug}`);
        router.refresh();
      } else setMsg({ ok: false, text: res.error });
    });
  };

  const onDelete = () => {
    if (!confirm(u.confirm)) return;
    start(async () => {
      const res = await deleteTopic(topic.slug);
      if (res.ok) {
        router.push("/admin/topics");
        router.refresh();
      } else setMsg({ ok: false, text: res.error });
    });
  };

  return (
    <div className="stack" style={{ gap: 18 }}>
      <div className="panel stack">
        <h2>{u.basic}</h2>
        <div className="form-grid">
          <div className="field">
            <label>{u.slug}</label>
            <input value={topic.slug} disabled={!isNew} onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))} placeholder="drowning" />
            {slugTaken && <span className="small" style={{ color: "var(--r)" }}>{u.taken}</span>}
          </div>
          <div className="field">
            <label>{u.cat}</label>
            <select value={topic.cat} onChange={(e) => set("cat", e.target.value as CategoryId)}>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.title[lang]}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{u.icon}</label>
            <input value={topic.icon} maxLength={10} onChange={(e) => set("icon", e.target.value)} placeholder="✚ / crescent" />
          </div>
          <div className="field">
            <label>{u.order}</label>
            <input type="number" value={topic.order} onChange={(e) => set("order", Number(e.target.value) || 0)} />
          </div>
          <div className="field">
            <label>{u.widget}</label>
            <select value={topic.widget ?? ""} onChange={(e) => set("widget", (e.target.value || undefined) as WidgetId | undefined)}>
              <option value="">{u.none}</option>
              {WIDGETS.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="row" style={{ gap: 8, textTransform: "none", letterSpacing: 0 }}>
              <input type="checkbox" checked={topic.core} onChange={(e) => set("core", e.target.checked)} /> {u.core}
            </label>
            <label className="row" style={{ gap: 8, textTransform: "none", letterSpacing: 0 }}>
              <input type="checkbox" checked={topic.published !== false} onChange={(e) => set("published", e.target.checked)} /> {u.published}
            </label>
          </div>
        </div>
      </div>

      <div className="panel stack">
        <div className="row">
          <h2 style={{ margin: 0 }}>{u.text}</h2>
          <span className="spacer" />
          <div className="seg">
            {LANGS.map((k) => (
              <button key={k} type="button" className={tl === k ? "on" : ""} onClick={() => setTl(k)}>
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {tl !== "ru" && <p className="small muted">{u.fill}</p>}
        <div className="field">
          <label>{u.title}</label>
          <input value={topic.title[tl]} onChange={(e) => setL("title", e.target.value)} />
        </div>
        <div className="field">
          <label>{u.summary}</label>
          <textarea value={topic.summary[tl]} onChange={(e) => setL("summary", e.target.value)} style={{ minHeight: 60 }} />
        </div>
        {(["signs", "steps", "donts", "callIf"] as ListKey[]).map((k) => (
          <div className="field" key={k}>
            <label>
              {u[k]} <span className="muted" style={{ textTransform: "none", fontWeight: 500 }}>— {u.lines}</span>
            </label>
            <textarea value={listText(k)} onChange={(e) => setList(k, e.target.value)} style={{ minHeight: k === "steps" ? 160 : 90 }} />
          </div>
        ))}
        <div className="field">
          <label>{u.warning}</label>
          <textarea value={topic.warning[tl]} onChange={(e) => setL("warning", e.target.value)} style={{ minHeight: 60 }} />
        </div>
        <div className="field">
          <label>{u.update}</label>
          <textarea value={topic.update?.[tl] ?? ""} onChange={(e) => setL("update", e.target.value)} style={{ minHeight: 60 }} />
        </div>
      </div>

      <div className="panel stack">
        <h2>{u.images}</h2>
        <div className="field">
          <span>{u.cover}</span>
          <ImageUpload value={topic.cover ?? ""} folder={`topics/${topic.slug || "new"}`} onChange={(url) => set("cover", url || undefined)} />
        </div>
        <span className="field">
          <span>{u.gallery}</span>
        </span>
        <div className="list-editor">
          {(topic.gallery ?? []).map((g, i) => (
            <div className="item" key={i}>
              <div className="stack" style={{ gap: 8 }}>
                <ImageUpload
                  value={g.src}
                  folder={`topics/${topic.slug || "new"}`}
                  onChange={(url) => set("gallery", (topic.gallery ?? []).map((x, k) => (k === i ? { ...x, src: url } : x)))}
                />
                <input
                  placeholder={`${u.caption} (${tl.toUpperCase()})`}
                  value={g.caption[tl]}
                  onChange={(e) => set("gallery", (topic.gallery ?? []).map((x, k) => (k === i ? { ...x, caption: { ...x.caption, [tl]: e.target.value } } : x)))}
                  style={{ border: "1px solid #ddd", borderRadius: 10, padding: "10px 12px" }}
                />
              </div>
              <button type="button" className="icon-btn" aria-label={u.remove} onClick={() => set("gallery", (topic.gallery ?? []).filter((_, k) => k !== i))}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="btn ghost small" onClick={() => set("gallery", [...(topic.gallery ?? []), { src: "", caption: emptyL() }])}>
            + {u.add}
          </button>
        </div>
      </div>

      <div className="panel stack">
        <div className="row">
          <h2 style={{ margin: 0 }}>
            {u.quiz} · {topic.quiz.length}
          </h2>
          <span className="spacer" />
          <div className="seg">
            {LANGS.map((k) => (
              <button key={k} type="button" className={tl === k ? "on" : ""} onClick={() => setTl(k)}>
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="list-editor">
          {topic.quiz.map((q, i) => (
            <div className="item" key={i}>
              <div className="stack" style={{ gap: 8 }}>
                <div className="field">
                  <label>
                    {u.q} {i + 1}
                  </label>
                  <input value={q.q[tl]} onChange={(e) => setQ(i, (x) => ({ ...x, q: { ...x.q, [tl]: e.target.value } }))} />
                </div>
                {q.a.map((a, k) => (
                  <div className="field" key={k}>
                    <label style={{ color: k === 0 ? "var(--ok)" : undefined }}>{k === 0 ? `✓ ${u.correct}` : `✕ ${u.wrong} ${k}`}</label>
                    <input
                      value={a[tl]}
                      onChange={(e) =>
                        setQ(i, (x) => ({ ...x, a: x.a.map((y, m) => (m === k ? { ...y, [tl]: e.target.value } : y)) as QuizQuestion["a"] }))
                      }
                    />
                  </div>
                ))}
                <div className="field">
                  <label>{u.explain}</label>
                  <input value={q.e[tl]} onChange={(e) => setQ(i, (x) => ({ ...x, e: { ...x.e, [tl]: e.target.value } }))} />
                </div>
              </div>
              <button type="button" className="icon-btn" aria-label={u.remove} onClick={() => set("quiz", topic.quiz.filter((_, k) => k !== i))}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="btn ghost small" onClick={() => set("quiz", [...topic.quiz, emptyQ()])}>
            + {u.add}
          </button>
        </div>
      </div>

      {msg && <div className={`callout ${msg.ok ? "green" : "red"}`}>{msg.text}</div>}
      <div className="row" style={{ position: "sticky", bottom: 0, background: "var(--s)", padding: "14px 0", zIndex: 5 }}>
        <button className="btn" onClick={onSave} disabled={pending}>
          {pending ? u.saving : u.save}
        </button>
        {!isNew && (isEdited || !isBuiltin) && (
          <button className="btn ghost" onClick={onDelete} disabled={pending}>
            {isBuiltin ? u.reset : u.del}
          </button>
        )}
      </div>
    </div>
  );
}
