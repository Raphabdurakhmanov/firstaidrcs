"use client";
import Link from "next/link";
import { useState } from "react";
import { DICTS } from "@/lib/i18n/dict";
import { l, type L, type Lang } from "@/lib/types";

type Node =
  | { kind: "q"; text: L; options: { label: L; next: string }[] }
  | { kind: "end"; text: L; detail: L; topic?: string; call?: boolean };

const N: Record<string, Node> = {
  start: {
    kind: "q",
    text: l("Безопасно ли подходить к пострадавшему?", "Is it safe to approach the casualty?", "Jabrlanuvchiga yaqinlashish xavfsizmi?"),
    options: [
      { label: l("Да, опасности нет", "Yes, no danger", "Ha, xavf yoʻq"), next: "conscious" },
      { label: l("Нет: огонь, ток, газ, дорога", "No: fire, electricity, gas, traffic", "Yoʻq: olov, tok, gaz, yoʻl"), next: "danger" },
    ],
  },
  danger: {
    kind: "end",
    text: l("Не подходите", "Do not approach", "Yaqinlashmang"),
    detail: l(
      "Вызовите 103 и нужные службы (101, 102, 112) из безопасного места. Подходите, только когда опасность устранена.",
      "Call 103 and the relevant services (101, 102, 112) from a safe place. Approach only once the danger is removed.",
      "Xavfsiz joydan 103 va kerakli xizmatlarni (101, 102, 112) chaqiring. Faqat xavf bartaraf etilgach yaqinlashing.",
    ),
    topic: "basics",
    call: true,
  },
  conscious: {
    kind: "q",
    text: l("Человек отвечает на голос и прикосновение?", "Does the person respond to voice and touch?", "Odam ovoz va tegishga javob beradimi?"),
    options: [
      { label: l("Да, в сознании", "Yes, conscious", "Ha, hushida"), next: "complaint" },
      { label: l("Нет, не реагирует", "No response", "Yoʻq, javob bermaydi"), next: "breathing" },
    ],
  },
  breathing: {
    kind: "q",
    text: l(
      "Звоните 103 на громкой связи. Откройте дыхательные пути: человек дышит нормально? (до 10 секунд)",
      "Call 103 on speaker. Open the airway: is the person breathing normally? (up to 10 seconds)",
      "Karnay orqali 103 ga qoʻngʻiroq qiling. Nafas yoʻlini oching: odam normal nafas olyaptimi? (10 soniyagacha)",
    ),
    options: [
      { label: l("Да, дышит", "Yes, breathing", "Ha, nafas olyapti"), next: "recovery" },
      { label: l("Нет или редкие хрипы", "No, or only gasps", "Yoʻq yoki xirillab"), next: "cpr" },
    ],
  },
  recovery: {
    kind: "end",
    text: l("Восстановительное положение", "Recovery position", "Tiklovchi holat"),
    detail: l(
      "Уложите на бок, слегка запрокинув голову. Проверяйте дыхание каждые 1–2 минуты до приезда скорой.",
      "Turn onto the side with the head slightly tilted back. Check breathing every 1–2 minutes until help arrives.",
      "Boshini biroz orqaga egib, yonboshiga yotqizing. Tez yordam kelguncha har 1–2 daqiqada nafasni tekshiring.",
    ),
    topic: "recovery",
    call: true,
  },
  cpr: {
    kind: "end",
    text: l("Начните СЛР", "Start CPR", "YOʻRni boshlang"),
    detail: l(
      "30 надавливаний в центр груди на 5–6 см, 100–120 в минуту, затем 2 вдоха. Пусть кто-то принесёт АНД.",
      "30 compressions in the centre of the chest, 5–6 cm deep at 100–120 per minute, then 2 breaths. Have someone fetch an AED.",
      "Koʻkrak markaziga 5–6 sm chuqurlikda daqiqasiga 100–120 marta 30 bosish, keyin 2 nafas. Kimdir AED olib kelsin.",
    ),
    topic: "cpr-adult",
    call: true,
  },
  complaint: {
    kind: "q",
    text: l("Что главное сейчас?", "What is the main problem?", "Hozir asosiy muammo nima?"),
    options: [
      { label: l("Сильное кровотечение", "Heavy bleeding", "Kuchli qon ketishi"), next: "e-bleeding" },
      { label: l("Подавился, не может дышать", "Choking, cannot breathe", "Tiqilib qoldi, nafas ololmaydi"), next: "e-choking" },
      { label: l("Боль в груди", "Chest pain", "Koʻkrak ogʻrigʻi"), next: "e-heart" },
      { label: l("Перекошено лицо, нарушена речь", "Face drooping, speech problems", "Yuz qiyshaygan, nutq buzilgan"), next: "e-stroke" },
      { label: l("Ожог", "Burn", "Kuyish"), next: "e-burn" },
      { label: l("Травма, возможен перелом", "Injury, possible fracture", "Jarohat, sinish ehtimoli"), next: "e-fracture" },
      { label: l("Судороги", "Seizure", "Tutqanoq"), next: "e-seizure" },
      { label: l("Другое", "Something else", "Boshqa"), next: "e-other" },
    ],
  },
  "e-bleeding": {
    kind: "end",
    text: l("Остановите кровотечение", "Stop the bleeding", "Qonni toʻxtating"),
    detail: l("Сильно прижмите рану, наложите давящую повязку, при угрозе жизни — жгут. Вызовите 103.", "Press hard on the wound, apply a pressure bandage, a tourniquet if life-threatening. Call 103.", "Yarani kuchli bosing, bosuvchi bogʻlam qoʻying, hayotga xavf boʻlsa — jgut. 103 ni chaqiring."),
    topic: "bleeding",
    call: true,
  },
  "e-choking": {
    kind: "end",
    text: l("Помогите при удушье", "Help a choking person", "Tiqilganda yordam bering"),
    detail: l("До 5 ударов между лопатками, затем до 5 толчков в живот. Чередуйте и вызовите 103.", "Up to 5 back blows, then up to 5 abdominal thrusts. Alternate and call 103.", "Kuraklar orasiga 5 tagacha zarba, keyin qoringa 5 tagacha turtki. Almashtiring va 103 ni chaqiring."),
    topic: "choking",
    call: true,
  },
  "e-heart": {
    kind: "end",
    text: l("Подозрение на инфаркт", "Suspected heart attack", "Infarktga shubha"),
    detail: l("Покой, полусидя, ослабьте одежду, сразу звоните 103.", "Rest, half-sitting, loosen clothing, call 103 at once.", "Tinchlik, yarim oʻtirgan holat, kiyimni boʻshating, darhol 103."),
    topic: "heart-attack",
    call: true,
  },
  "e-stroke": {
    kind: "end",
    text: l("Подозрение на инсульт", "Suspected stroke", "Insultga shubha"),
    detail: l("Звоните 103 и запомните время начала симптомов. Ничего не давайте есть и пить.", "Call 103 and note when symptoms began. Give nothing to eat or drink.", "103 ni chaqiring va belgilar boshlangan vaqtni eslab qoling. Ovqat va ichimlik bermang."),
    topic: "stroke",
    call: true,
  },
  "e-burn": {
    kind: "end",
    text: l("Охладите ожог", "Cool the burn", "Kuyishni sovuting"),
    detail: l("Прохладная проточная вода 20 минут, снимите украшения, накройте чистой плёнкой.", "Cool running water for 20 minutes, remove jewellery, cover with clean cling film.", "20 daqiqa salqin oqar suv, taqinchoqlarni yeching, toza plyonka bilan yoping."),
    topic: "burns",
  },
  "e-fracture": {
    kind: "end",
    text: l("Обездвижьте травму", "Immobilise the injury", "Jarohatni qimirlatmang"),
    detail: l("Поддерживайте конечность как есть, наложите шину, холод через ткань. При травме головы или спины — не двигать.", "Support the limb as found, splint it, cold through a cloth. For head or back injuries, do not move.", "Aʼzoni boricha ushlab turing, shina qoʻying, mato orqali sovuq. Bosh yoki orqa jarohatida — qimirlatmang."),
    topic: "fractures",
  },
  "e-seizure": {
    kind: "end",
    text: l("Защитите во время судорог", "Protect during the seizure", "Tutqanoqda himoya qiling"),
    detail: l("Уберите опасные предметы, мягкое под голову, засеките время. Дольше 5 минут — 103.", "Clear dangerous objects, cushion the head, time it. Over 5 minutes — call 103.", "Xavfli narsalarni oling, bosh ostiga yumshoq narsa, vaqtni belgilang. 5 daqiqadan oshsa — 103."),
    topic: "seizures",
  },
  "e-other": {
    kind: "end",
    text: l("Найдите тему и следите за состоянием", "Find the topic and keep monitoring", "Mavzuni toping va ahvolni kuzating"),
    detail: l("Успокойте человека, следите за дыханием и сознанием. При сомнениях звоните 103.", "Reassure the person and watch breathing and consciousness. If in doubt, call 103.", "Odamni tinchlantiring, nafas va hushini kuzating. Shubha boʻlsa, 103 ga qoʻngʻiroq qiling."),
    topic: undefined,
  },
};

export default function Algorithm({ lang }: { lang: Lang }) {
  const t = DICTS[lang];
  const [path, setPath] = useState<string[]>(["start"]);
  const id = path[path.length - 1];
  const node = N[id];

  return (
    <div className="algo">
      {path.length > 1 && (
        <div className="algo-path">
          {path.slice(0, -1).map((p, k) => {
            const n = N[p];
            return n.kind === "q" ? <span key={k}>{n.text[lang].split("?")[0].slice(0, 48)}…</span> : null;
          })}
        </div>
      )}
      <div className={`algo-node ${node.kind === "end" ? "final" : ""}`} aria-live="polite">
        <span className="eyebrow">
          <i />
          {node.kind === "q" ? `${t.quiz.question} ${path.length}` : "→"}
        </span>
        <h3>{node.text[lang]}</h3>
        {node.kind === "q" ? (
          <div className="grid c2">
            {node.options.map((o) => (
              <button key={o.next} className="btn ghost" style={{ textTransform: "none", letterSpacing: 0, fontSize: 15, justifyContent: "flex-start" }} onClick={() => setPath([...path, o.next])}>
                {o.label[lang]}
              </button>
            ))}
          </div>
        ) : (
          <>
            <p style={{ fontSize: 17 }}>{node.detail[lang]}</p>
            <div className="row">
              {node.call && (
                <a className="btn" href="tel:103">
                  ☎ 103
                </a>
              )}
              {node.topic ? (
                <Link className="btn dark" href={`/topics/${node.topic}`}>
                  {t.open} →
                </Link>
              ) : (
                <Link className="btn dark" href="/topics">
                  {t.allTopics} →
                </Link>
              )}
            </div>
          </>
        )}
      </div>
      <div className="row">
        {path.length > 1 && (
          <button className="btn ghost small" onClick={() => setPath(path.slice(0, -1))}>
            ← {t.algo.back}
          </button>
        )}
        {path.length > 1 && (
          <button className="btn ghost small" onClick={() => setPath(["start"])}>
            ↻ {t.algo.restart}
          </button>
        )}
      </div>
    </div>
  );
}
