"use client";
import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { submitApplication } from "@/app/actions";
import { AGREEMENT, AGREEMENT_VERSION, COORDINATOR_EMAIL, COORDINATOR_PHONE, COORDINATOR_TEL, DIRECTIONS, GOOGLE_FORM_URL, REGIONS } from "@/lib/agreement";
import type { Lang } from "@/lib/types";

const UI = {
  ru: {
    steps: ["Соглашение", "Анкета", "Готово"],
    toc: "Содержание",
    accept: "Я прочитал(а) и принимаю Соглашение о волонтёрской деятельности, Кодекс этики и даю согласие на обработку персональных данных",
    readFirst: "Прокрутите соглашение до конца или отметьте согласие",
    next: "Принять и продолжить",
    formTitle: "Анкета волонтёра",
    formText: "Заполните анкету — координатор свяжется с вами и расскажет о ближайших обучениях.",
    name: "Фамилия, имя, отчество",
    phone: "Телефон",
    phonePh: "+998 90 123-45-67",
    email: "Email (необязательно)",
    region: "Регион",
    choose: "Выберите…",
    age: "Возраст",
    ages: ["до 18", "18–24", "25–34", "35–49", "50+"],
    occupation: "Род занятий",
    occs: ["Учусь в школе", "Студент", "Работаю", "Медицинский работник", "Другое"],
    directions: "Что вам интересно",
    telegram: "Telegram (необязательно)",
    comment: "Опыт, навыки или вопрос (необязательно)",
    minor: "Если вам меньше 18 лет, координатор попросит согласие родителей.",
    submit: "Отправить заявку",
    sending: "Отправляю…",
    back: "Назад к соглашению",
    doneTitle: "Заявка принята!",
    doneText: "Чтобы завершить регистрацию, свяжитесь с координатором волонтёров:",
    call: "Позвонить",
    write: "Написать на email",
    after: "Координатор подтвердит регистрацию, пригласит на вводный инструктаж и обучение по первой помощи.",
    fallback: "Онлайн-заявка сейчас недоступна. Заполните Google-форму регистрации или позвоните координатору.",
    googleForm: "Открыть Google-форму",
    errors: { name: "Укажите ФИО полностью", phone: "Проверьте номер телефона", region: "Выберите регион", generic: "Не удалось отправить заявку. Попробуйте ещё раз или позвоните координатору." },
    version: "Редакция соглашения",
  },
  en: {
    steps: ["Agreement", "Application", "Done"],
    toc: "Contents",
    accept: "I have read and accept the Volunteer Service Agreement and the Code of Ethics, and I consent to the processing of my personal data",
    readFirst: "Scroll to the end of the agreement or tick the box",
    next: "Accept and continue",
    formTitle: "Volunteer application",
    formText: "Fill in the form — a coordinator will contact you about upcoming trainings.",
    name: "Full name",
    phone: "Phone",
    phonePh: "+998 90 123-45-67",
    email: "Email (optional)",
    region: "Region",
    choose: "Choose…",
    age: "Age",
    ages: ["under 18", "18–24", "25–34", "35–49", "50+"],
    occupation: "Occupation",
    occs: ["School pupil", "Student", "Employed", "Health worker", "Other"],
    directions: "What interests you",
    telegram: "Telegram (optional)",
    comment: "Experience, skills or a question (optional)",
    minor: "If you are under 18, the coordinator will ask for your parents’ consent.",
    submit: "Send application",
    sending: "Sending…",
    back: "Back to the agreement",
    doneTitle: "Application received!",
    doneText: "To complete your registration, contact the volunteer coordinator:",
    call: "Call",
    write: "Email",
    after: "The coordinator will confirm your registration and invite you to the induction and first aid training.",
    fallback: "Online applications are unavailable right now. Use the Google registration form or call the coordinator.",
    googleForm: "Open the Google form",
    errors: { name: "Enter your full name", phone: "Check the phone number", region: "Choose a region", generic: "Could not send the application. Try again or call the coordinator." },
    version: "Agreement version",
  },
  uz: {
    steps: ["Kelishuv", "Anketa", "Tayyor"],
    toc: "Mundarija",
    accept: "Koʻngillilik faoliyati toʻgʻrisidagi Kelishuv va Axloq kodeksini oʻqidim, qabul qilaman hamda shaxsiy maʼlumotlarimni qayta ishlashga rozilik beraman",
    readFirst: "Kelishuvni oxirigacha oʻqing yoki roziligingizni belgilang",
    next: "Qabul qilish va davom etish",
    formTitle: "Koʻngilli anketasi",
    formText: "Anketani toʻldiring — koordinator siz bilan bogʻlanib, yaqin treninglar haqida aytib beradi.",
    name: "Familiya, ism, otasining ismi",
    phone: "Telefon",
    phonePh: "+998 90 123-45-67",
    email: "Email (ixtiyoriy)",
    region: "Hudud",
    choose: "Tanlang…",
    age: "Yoshi",
    ages: ["18 gacha", "18–24", "25–34", "35–49", "50+"],
    occupation: "Mashgʻulot",
    occs: ["Maktab oʻquvchisi", "Talaba", "Ishlayman", "Tibbiyot xodimi", "Boshqa"],
    directions: "Sizni nima qiziqtiradi",
    telegram: "Telegram (ixtiyoriy)",
    comment: "Tajriba, koʻnikmalar yoki savol (ixtiyoriy)",
    minor: "Agar 18 yoshga toʻlmagan boʻlsangiz, koordinator ota-onangiz roziligini soʻraydi.",
    submit: "Arizani yuborish",
    sending: "Yuborilmoqda…",
    back: "Kelishuvga qaytish",
    doneTitle: "Ariza qabul qilindi!",
    doneText: "Roʻyxatdan oʻtishni yakunlash uchun koʻngillilar koordinatori bilan bogʻlaning:",
    call: "Qoʻngʻiroq qilish",
    write: "Email yozish",
    after: "Koordinator roʻyxatdan oʻtishingizni tasdiqlaydi, kirish yoʻriqnomasi va birinchi yordam treningiga taklif qiladi.",
    fallback: "Onlayn ariza hozir mavjud emas. Google roʻyxatdan oʻtish shaklini toʻldiring yoki koordinatorga qoʻngʻiroq qiling.",
    googleForm: "Google shaklini ochish",
    errors: { name: "F.I.Sh.ni toʻliq kiriting", phone: "Telefon raqamini tekshiring", region: "Hududni tanlang", generic: "Arizani yuborib boʻlmadi. Qayta urinib koʻring yoki koordinatorga qoʻngʻiroq qiling." },
    version: "Kelishuv tahriri",
  },
} as const;

type Step = 0 | 1 | 2;

export default function JoinFlow({ lang, online, prefill }: { lang: Lang; online: boolean; prefill: { name: string; email: string } }) {
  const u = UI[lang];
  const doc = AGREEMENT[lang];
  const [step, setStep] = useState<Step>(0);
  const [accepted, setAccepted] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [fallback, setFallback] = useState(!online);
  const [pending, start] = useTransition();
  const endRef = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = endRef.current;
    if (!el || step !== 0) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setReachedEnd(true));
    io.observe(el);
    return () => io.disconnect();
  }, [step]);

  const go = (s: Step) => {
    setStep(s);
    setErr(null);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = {
      full_name: String(f.get("full_name") ?? "").trim(),
      phone: String(f.get("phone") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      region: String(f.get("region") ?? ""),
      age_group: String(f.get("age_group") ?? ""),
      occupation: String(f.get("occupation") ?? ""),
      directions: f.getAll("directions").map(String),
      telegram: String(f.get("telegram") ?? "").trim(),
      comment: String(f.get("comment") ?? "").trim(),
      website: String(f.get("website") ?? ""),
      accepted,
      lang,
    };
    if (data.full_name.split(/\s+/).filter(Boolean).length < 2) return setErr(u.errors.name);
    if (data.phone.replace(/\D/g, "").length < 9) return setErr(u.errors.phone);
    if (!data.region) return setErr(u.errors.region);
    start(async () => {
      const res = await submitApplication(data);
      if (res.ok) go(2);
      else if (res.error === "not_configured") setFallback(true);
      else setErr(res.error === "phone" ? u.errors.phone : res.error === "name" ? u.errors.name : u.errors.generic);
    });
  };

  return (
    <div ref={top} style={{ scrollMarginTop: 100 }}>
      <ol className="stepper" aria-label="steps">
        {u.steps.map((s, i) => (
          <li key={s} className={i === step ? "on" : i < step ? "done" : ""}>
            <span>{i < step ? "✓" : i + 1}</span>
            {s}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="join-grid">
          <nav className="panel join-toc" aria-label={u.toc}>
            <b>{u.toc}</b>
            {doc.sections.map((s) => (
              <a key={s.id} href={`#ag-${s.id}`}>
                {s.title}
              </a>
            ))}
          </nav>
          <article className="panel agreement">
            <h2>{doc.title}</h2>
            {doc.translationNote && <p className="small muted">{doc.translationNote}</p>}
            <p>{doc.lead}</p>
            <div className="callout yellow">
              <b>⚠</b>
              {doc.notice}
            </div>
            {doc.sections.map((s) => (
              <section key={s.id} id={`ag-${s.id}`}>
                <h3>{s.title}</h3>
                {s.intro && <p className="muted">{s.intro}</p>}
                <ul>
                  {s.items.map((it) => (
                    <li key={it.t}>
                      <b>{it.t}.</b> {it.d}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="small muted">
              {u.version}: {AGREEMENT_VERSION}
            </p>
            <div ref={endRef} />
          </article>
          <div className="join-accept panel">
            <label className="row" style={{ alignItems: "flex-start", gap: 12, cursor: "pointer", flexWrap: "nowrap" }}>
              <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} style={{ width: 22, height: 22, accentColor: "var(--r)", marginTop: 2, flex: "none" }} />
              <span>{u.accept}</span>
            </label>
            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn" disabled={!accepted} onClick={() => go(1)}>
                {u.next}
              </button>
              {!accepted && <span className="small muted">{reachedEnd ? "" : u.readFirst}</span>}
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="panel" style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2>{u.formTitle}</h2>
          <p className="muted">{u.formText}</p>
          {fallback ? (
            <div className="stack">
              <div className="notice">{u.fallback}</div>
              <div className="row">
                <a className="btn" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                  {u.googleForm} ↗
                </a>
                <a className="btn ghost" href={`tel:${COORDINATOR_TEL}`}>
                  ☎ {COORDINATOR_PHONE}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="stack" noValidate>
              <div className="form-grid">
                <div className="field full">
                  <label htmlFor="j-name">{u.name} *</label>
                  <input id="j-name" name="full_name" defaultValue={prefill.name} autoComplete="name" required maxLength={120} />
                </div>
                <div className="field">
                  <label htmlFor="j-phone">{u.phone} *</label>
                  <input id="j-phone" name="phone" type="tel" inputMode="tel" placeholder={u.phonePh} autoComplete="tel" required maxLength={20} />
                </div>
                <div className="field">
                  <label htmlFor="j-email">{u.email}</label>
                  <input id="j-email" name="email" type="email" defaultValue={prefill.email} autoComplete="email" maxLength={120} />
                </div>
                <div className="field">
                  <label htmlFor="j-region">{u.region} *</label>
                  <select id="j-region" name="region" defaultValue="" required>
                    <option value="" disabled>
                      {u.choose}
                    </option>
                    {REGIONS[lang].map((r, i) => (
                      <option key={r} value={REGIONS.ru[i]}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="j-age">{u.age}</label>
                  <select id="j-age" name="age_group" defaultValue="">
                    <option value="">{u.choose}</option>
                    {u.ages.map((a, i) => (
                      <option key={a} value={UI.ru.ages[i]}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="j-occ">{u.occupation}</label>
                  <select id="j-occ" name="occupation" defaultValue="">
                    <option value="">{u.choose}</option>
                    {u.occs.map((o, i) => (
                      <option key={o} value={UI.ru.occs[i]}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <fieldset className="field full" style={{ border: 0, padding: 0, margin: 0 }}>
                  <span>{u.directions}</span>
                  <div className="grid c2" style={{ gap: "0 20px" }}>
                    {DIRECTIONS.map((d) => (
                      <label key={d.id} className="check">
                        <input type="checkbox" name="directions" value={d.id} />
                        <span style={{ textDecoration: "none", color: "inherit" }}>{d[lang]}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="field">
                  <label htmlFor="j-tg">{u.telegram}</label>
                  <input id="j-tg" name="telegram" placeholder="@username" maxLength={40} />
                </div>
                <div className="field full">
                  <label htmlFor="j-comment">{u.comment}</label>
                  <textarea id="j-comment" name="comment" maxLength={1000} />
                </div>
                {/* honeypot */}
                <input name="website" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: -9999, width: 1, height: 1 }} />
              </div>
              <p className="small muted">{u.minor}</p>
              {err && <div className="callout red" role="alert">{err}</div>}
              <div className="row">
                <button className="btn" disabled={pending}>
                  {pending ? u.sending : u.submit}
                </button>
                <button type="button" className="btn ghost" onClick={() => go(0)}>
                  ← {u.back}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="panel center stack" style={{ maxWidth: 680, margin: "0 auto", padding: 44 }}>
          <div className="done-mark" aria-hidden>
            ✓
          </div>
          <h2 style={{ margin: 0, fontSize: 32 }}>{u.doneTitle}</h2>
          <p style={{ fontSize: 17, margin: 0 }}>{u.doneText}</p>
          <a className="phone-big" href={`tel:${COORDINATOR_TEL}`}>
            {COORDINATOR_PHONE}
          </a>
          <div className="row" style={{ justifyContent: "center" }}>
            <a className="btn" href={`tel:${COORDINATOR_TEL}`}>
              ☎ {u.call}
            </a>
            <a className="btn ghost" href={`mailto:${COORDINATOR_EMAIL}`}>
              {u.write}
            </a>
          </div>
          <p className="muted small">{u.after}</p>
        </div>
      )}
    </div>
  );
}
