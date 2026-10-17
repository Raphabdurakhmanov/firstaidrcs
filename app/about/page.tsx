import Link from "next/link";
import type { Metadata } from "next";
import { getDict } from "@/lib/i18n/server";
import type { Lang } from "@/lib/types";

export const metadata: Metadata = { title: "О портале" };

const TEXT: Record<Lang, { title: string; p: string[]; sourcesTitle: string; sources: [string, string][]; emblem: string }> = {
  ru: {
    title: "О портале",
    p: [
      "Учебный портал по первой помощи для волонтёров и всех, кто хочет уметь помочь. Материалы основаны на учебном пособии Общества Красного Полумесяца Узбекистана и сверены с действующими международными рекомендациями.",
      "Там, где пособие 2012 года расходится с современными рекомендациями (например, вызов рвоты при отравлении или герметичная повязка на рану груди), на странице темы есть жёлтая пометка «Обновлено» с объяснением.",
      "Портал не заменяет очное обучение: навыки СЛР, наложения повязок и шин нужно отработать с инструктором на манекене.",
      "Координаторы могут добавлять и изменять темы, вопросы и новости через админ-панель — без участия разработчика.",
    ],
    sourcesTitle: "Источники",
    sources: [
      ["Учебное пособие «Первая помощь», Общество Красного Полумесяца Узбекистана", ""],
      ["European Resuscitation Council Guidelines 2025 (BLS, First Aid, Paediatric)", "https://www.cprguidelines.eu"],
      ["IFRC International First Aid, Resuscitation and Education Guidelines 2020", "https://www.ifrc.org"],
      ["Фотографии: Unsplash (лицензия Unsplash), иллюстрации — из учебного пособия", "https://unsplash.com/license"],
    ],
    emblem: "Эмблема Красного Полумесяца защищена законом. Перед публичным запуском портал и использование эмблемы нужно согласовать с Обществом Красного Полумесяца Узбекистана.",
  },
  en: {
    title: "About the portal",
    p: [
      "A first aid learning portal for volunteers and anyone who wants to be able to help. The material is based on the Red Crescent Society of Uzbekistan training manual and checked against current international guidelines.",
      "Where the 2012 manual differs from current guidance (for example, inducing vomiting after poisoning or an airtight dressing on a chest wound), the topic page shows a yellow “Updated” note explaining the change.",
      "The portal does not replace hands-on training: CPR, bandaging and splinting must be practised with an instructor on a manikin.",
      "Coordinators can add and edit topics, questions and news through the admin panel without a developer.",
    ],
    sourcesTitle: "Sources",
    sources: [
      ["“First Aid” training manual, Red Crescent Society of Uzbekistan", ""],
      ["European Resuscitation Council Guidelines 2025 (BLS, First Aid, Paediatric)", "https://www.cprguidelines.eu"],
      ["IFRC International First Aid, Resuscitation and Education Guidelines 2020", "https://www.ifrc.org"],
      ["Photos: Unsplash (Unsplash License); illustrations from the training manual", "https://unsplash.com/license"],
    ],
    emblem: "The Red Crescent emblem is protected by law. Before a public launch, the portal and the use of the emblem must be agreed with the Red Crescent Society of Uzbekistan.",
  },
  uz: {
    title: "Portal haqida",
    p: [
      "Koʻngillilar va yordam berishni oʻrganmoqchi boʻlgan barcha uchun birinchi yordam oʻquv portali. Materiallar Oʻzbekiston Qizil Yarim Oy jamiyatining oʻquv qoʻllanmasiga asoslangan va amaldagi xalqaro tavsiyalar bilan solishtirilgan.",
      "2012-yilgi qoʻllanma hozirgi tavsiyalardan farq qiladigan joylarda (masalan, zaharlanishda qustirish yoki koʻkrak yarasiga germetik bogʻlam) mavzu sahifasida tushuntirishli sariq «Yangilangan» belgisi bor.",
      "Portal yuzma-yuz taʼlim oʻrnini bosmaydi: YOʻR, bogʻlam va shina qoʻyish koʻnikmalarini instruktor bilan manekenda mashq qilish kerak.",
      "Koordinatorlar admin panel orqali dasturchisiz mavzular, savollar va yangiliklarni qoʻshishi va oʻzgartirishi mumkin.",
    ],
    sourcesTitle: "Manbalar",
    sources: [
      ["«Birinchi yordam» oʻquv qoʻllanmasi, Oʻzbekiston Qizil Yarim Oy jamiyati", ""],
      ["European Resuscitation Council Guidelines 2025 (BLS, First Aid, Paediatric)", "https://www.cprguidelines.eu"],
      ["IFRC International First Aid, Resuscitation and Education Guidelines 2020", "https://www.ifrc.org"],
      ["Fotosuratlar: Unsplash (Unsplash litsenziyasi), rasmlar — oʻquv qoʻllanmasidan", "https://unsplash.com/license"],
    ],
    emblem: "Qizil Yarim Oy emblemasi qonun bilan himoyalangan. Ommaviy ishga tushirishdan oldin portal va emblemadan foydalanish Oʻzbekiston Qizil Yarim Oy jamiyati bilan kelishilishi kerak.",
  },
};

export default async function AboutPage() {
  const { lang, t } = await getDict();
  const x = TEXT[lang];
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <span className="eyebrow">
          <i />
          {t.brandSub}
        </span>
        <h1 className="h2">{x.title}</h1>
        <div className="prose">
          {x.p.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <h2 style={{ marginTop: 40 }}>{x.sourcesTitle}</h2>
        <ul className="bullets">
          {x.sources.map(([name, url]) => (
            <li key={name}>
              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                name
              )}
            </li>
          ))}
        </ul>
        <div className="callout yellow" style={{ marginTop: 34 }}>
          <b>⚠</b>
          {x.emblem}
        </div>
        <div className="row" style={{ marginTop: 30 }}>
          <Link href="/topics/movement" className="btn ghost">
            {t.principlesTitle} →
          </Link>
        </div>
      </div>
    </section>
  );
}
