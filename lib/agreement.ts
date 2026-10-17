import type { Lang } from "./types";

export const AGREEMENT_VERSION = "2026-10";

export const COORDINATOR_PHONE = "+998 (33) 393-02-88";
export const COORDINATOR_TEL = "+998333930288";
export const COORDINATOR_EMAIL = "raphabdurakhmanov@gmail.com";
export const GOOGLE_FORM_URL = "https://forms.gle/EgZ34YFXezVWbChK8";

type Item = { t: string; d: string };
type Section = { id: string; title: string; intro?: string; items: Item[] };
type Doc = { title: string; lead: string; notice: string; translationNote?: string; sections: Section[] };

const ru: Doc = {
  title: "Соглашение о волонтёрской деятельности",
  lead: "Общественное объединение «Общество Красного Полумесяца Республики Узбекистан» (далее — «ОКП РУ» или «Организация») публикует настоящее Соглашение, определяющее порядок, правила и условия участия граждан в волонтёрской деятельности Организации.",
  notice:
    "Настоящий документ является открытым и предназначен для ознакомления. Отмечая согласие и отправляя заявку на регистрацию, Вы выражаете своё полное согласие с условиями Соглашения, Кодексом этики и обязуетесь соблюдать правила поведения волонтёра ОКП РУ.",
  sections: [
    {
      id: "duties",
      title: "1. Права и обязательства сторон",
      intro: "1.1. Волонтёр обязуется:",
      items: [
        { t: "Соблюдение Принципов", d: "Знать, уважать и строго руководствоваться в своей деятельности 7 Основополагающими Принципами Международного движения. Личные политические, религиозные или иные убеждения не должны влиять на качество и беспристрастность оказываемой помощи." },
        { t: "Качество работы", d: "Стремиться к достижению наивысших стандартов качества при выполнении гуманитарных задач и оказании услуг уязвимым слоям населения." },
        { t: "Конфиденциальность", d: "Строго сохранять конфиденциальность личной информации, медицинских данных и жизненных обстоятельств бенефициаров (получателей помощи), ставших известными в ходе выполнения обязанностей." },
        { t: "Уважение к режиму и ресурсам", d: "Соблюдать согласованный график волонтёрской деятельности, бережно относиться к имуществу, оборудованию и материальным ресурсам ОКП РУ. Своевременно (не менее чем за 24 часа) уведомлять координатора об изменении своей доступности." },
        { t: "Обучение", d: "Регулярно проходить вводный инструктаж, тренинги по первой помощи, безопасности и специализированное обучение, необходимое для качественного выполнения возложенных задач." },
        { t: "Обратная связь", d: "Активно участвовать в рабочих встречах, оценке эффективности гуманитарных программ, семинарах и разборах по итогам мероприятий." },
      ],
    },
    {
      id: "org",
      title: "1.2. Организация обязуется",
      items: [
        { t: "Чёткость задач", d: "Предоставлять Волонтёру ясные инструкции, технические задания и рамки обязанностей для каждого направления работы, регулярно пересматривая их актуальность." },
        { t: "Обеспечение деятельности", d: "Своевременно обеспечивать Волонтёра необходимыми расходными материалами, спецодеждой (жилетами или формой с символикой), средствами индивидуальной защиты и оборудованием." },
        { t: "Профессиональное развитие", d: "Организовывать за счёт Организации бесплатное обучение, тренинги, симуляционные учения и курсы повышения квалификации волонтёров." },
        { t: "Безопасность и поддержка", d: "Принимать все возможные меры по обеспечению физической безопасности Волонтёра во время работы (включая ЧС), а также предоставлять психологическую поддержку и меры по профилактике эмоционального выгорания." },
        { t: "Документирование и признание", d: "Фиксировать отработанные часы в единой базе или цифровой книжке волонтёра. Активные волонтёры (со стажем от 1 года) имеют право на получение официального рекомендательного письма с указанием достижений и объёма работы." },
      ],
    },
    {
      id: "ethics",
      title: "2. Правила поведения и Кодекс этики волонтёра",
      intro: "Разработано на основе Международного Кодекса поведения движения Красного Креста и Красного Полумесяца.",
      items: [
        { t: "Уважение эмблемы", d: "Волонтёр обязан использовать эмблему Красного Полумесяца строго в соответствии с международными правилами и национальным законодательством. Использование эмблемы в коммерческих, личных целях или для продвижения сторонних интересов категорически запрещено." },
        { t: "Политика «Safe from Harm» (защита от вреда и насилия)", d: "Волонтёр обязуется уважать достоинство каждого человека. Категорически запрещаются любые формы дискриминации (по признаку расы, пола, возраста, национальности, религии), проявления агрессии, буллинга, психологического давления или харассмента (сексуальных домогательств) как в отношении бенефициаров, так и внутри волонтёрского сообщества." },
        { t: "Предотвращение злоупотребления властью", d: "Запрещается использовать волонтёрский статус, авторитет организации или доверие населения для получения личной выгоды, продвижения непотизма (кумовства), а также любые проявления коррупции. Волонтёрам запрещено принимать от бенефициаров денежные средства, личные ценные подарки или услуги в обмен на гуманитарную помощь." },
        { t: "Запрет на оружие и военизированную атрибутику", d: "Во время выполнения волонтёрских обязанностей, нахождения на территории объектов ОКП РУ или в форменной одежде Общества волонтёрам строго запрещено иметь при себе любые виды оружия, патронов или взрывчатых веществ. Категорически запрещено ношение элементов военной формы совместно со знаками отличия Красного Полумесяца." },
        { t: "Цифровая гигиена и социальные сети", d: "Волонтёр не имеет права делать публичные заявления, давать интервью СМИ от лица ОКП РУ или размещать публикации в социальных сетях, которые могут дискредитировать нейтральный статус Организации. Личные публикации с фото- и видеоматериалами с мест гуманитарных акций должны быть этичными, уважать достоинство получателей помощи и не нарушать их конфиденциальность. Запрещено использовать символику движения на личных аватарах в двусмысленном или агрессивном контексте." },
        { t: "Поведение в ЧС", d: "При реагировании на чрезвычайные ситуации волонтёр действует исключительно в рамках своей квалификации, строго подчиняясь указаниям ответственного сотрудника или координатора ОКП РУ и оперативного штаба. Самовольные действия в зоне ЧС запрещены." },
      ],
    },
    {
      id: "term",
      title: "3. Срок действия, имущество и прекращение Соглашения",
      items: [
        { t: "Срок действия", d: "Настоящее Соглашение вступает в силу с момента совершения Волонтёром акцепта (отметки согласия при регистрации) и действует на протяжении всего периода его активности в Организации." },
        { t: "Досрочное прекращение по инициативе Волонтёра", d: "Волонтёр имеет право прекратить свою деятельность в Организации в любое время, предварительно уведомив координатора волонтёров не менее чем за 7 календарных дней." },
        { t: "Материальная ответственность", d: "Переданное Волонтёру имущество ОКП РУ (устройства связи, планшеты, рации, медицинское или спасательное оборудование, элементы брендированной экипировки длительного пользования) находится под его материальной ответственностью. Волонтёр обязан обеспечивать бережное хранение и целевое использование данного имущества." },
        { t: "Возврат имущества", d: "В случае прекращения сотрудничества Волонтёр обязуется вернуть все полученные материальные ценности, форму, неиспользованные раздаточные материалы и официальное волонтёрское удостоверение в течение 3 рабочих дней." },
        { t: "Одностороннее расторжение со стороны ОКП РУ", d: "Организация оставляет за собой право заблокировать аккаунт волонтёра в базе данных и расторгнуть соглашение в одностороннем порядке без предварительного уведомления в случае систематического неисполнения обязательств или грубого нарушения этических норм (насилие, дискриминация, харассмент, выход из принципа нейтральности)." },
      ],
    },
    {
      id: "data",
      title: "4. Защита персональных данных и медиаправа",
      items: [
        { t: "Согласие на обработку данных", d: "Совершая акцепт данного Соглашения, Волонтёр даёт своё добровольное согласие ОКП РУ на сбор, систематизацию, хранение и обработку его персональных данных (ФИО, контактные данные, сведения об образовании, фото) в соответствии с Законом Республики Узбекистан «О персональных данных» с целью координации волонтёрской деятельности и внутреннего учёта часов." },
        { t: "Использование медиаматериалов (Media Release)", d: "Волонтёр предоставляет ОКП РУ и Международной Федерации (IFRC) право на безвозмездное использование фото- и видеоматериалов с его изображением, полученных в ходе проведения публичных гуманитарных акций и официальных мероприятий, для публикации в годовых отчётах, на официальном сайте Общества и в верифицированных социальных сетях." },
      ],
    },
    {
      id: "contacts",
      title: "5. Подтверждение и обратная связь",
      intro:
        "Если у Вас возникают спорные ситуации, вопросы этического характера, психологического давления, дискриминации или необходимость сообщить о нарушениях внутри организации (Whistleblowing-канал), Вы можете использовать внутренние каналы связи ОКП РУ:",
      items: [
        { t: "Email для обращений волонтёров", d: COORDINATOR_EMAIL },
        { t: "Телефон координационного центра", d: COORDINATOR_PHONE },
      ],
    },
  ],
};

const en: Doc = {
  title: "Volunteer Service Agreement",
  lead: "The public association “Red Crescent Society of the Republic of Uzbekistan” (the “RCSU” or the “Organisation”) publishes this Agreement, which sets out the procedure, rules and conditions for citizens taking part in the Organisation’s volunteer activities.",
  notice:
    "This document is public and intended for review. By ticking the consent box and submitting a registration request, you fully accept the terms of this Agreement and the Code of Ethics and undertake to follow the RCSU volunteer rules of conduct.",
  translationNote: "This is a translation for convenience. The Russian text is legally binding.",
  sections: [
    {
      id: "duties",
      title: "1. Rights and obligations of the parties",
      intro: "1.1. The Volunteer undertakes to:",
      items: [
        { t: "Follow the Principles", d: "Know, respect and strictly follow the 7 Fundamental Principles of the International Movement. Personal political, religious or other beliefs must not affect the quality or impartiality of the help provided." },
        { t: "Quality of work", d: "Strive for the highest quality standards when carrying out humanitarian tasks and serving vulnerable people." },
        { t: "Confidentiality", d: "Strictly keep confidential any personal information, medical data and life circumstances of beneficiaries learned while on duty." },
        { t: "Respect schedules and resources", d: "Keep to the agreed volunteering schedule and take care of RCSU property, equipment and resources. Notify the coordinator of any change in availability at least 24 hours in advance." },
        { t: "Training", d: "Regularly attend induction briefings, first aid and safety training and any specialised training needed to perform the assigned tasks well." },
        { t: "Feedback", d: "Take an active part in working meetings, evaluations of humanitarian programmes, seminars and debriefings after events." },
      ],
    },
    {
      id: "org",
      title: "1.2. The Organisation undertakes to",
      items: [
        { t: "Clear tasks", d: "Give the Volunteer clear instructions, task descriptions and scope of duties for each area of work and review them regularly." },
        { t: "Support for activities", d: "Provide the Volunteer in good time with the necessary supplies, uniform (vests or branded clothing), personal protective equipment and equipment." },
        { t: "Professional development", d: "Organise free training, workshops, simulation exercises and advanced courses for volunteers at the Organisation’s expense." },
        { t: "Safety and support", d: "Take all possible measures to ensure the Volunteer’s physical safety at work (including emergencies) and provide psychological support and burnout prevention." },
        { t: "Records and recognition", d: "Record volunteer hours in a single database or digital volunteer book. Active volunteers (with at least 1 year of service) may receive an official letter of recommendation describing their achievements and workload." },
      ],
    },
    {
      id: "ethics",
      title: "2. Rules of conduct and Volunteer Code of Ethics",
      intro: "Based on the International Code of Conduct of the Red Cross and Red Crescent Movement.",
      items: [
        { t: "Respect for the emblem", d: "The Volunteer must use the Red Crescent emblem strictly in accordance with international rules and national law. Use of the emblem for commercial or personal purposes or to promote third-party interests is strictly prohibited." },
        { t: "“Safe from Harm” policy", d: "The Volunteer respects the dignity of every person. Any form of discrimination (by race, sex, age, nationality or religion), aggression, bullying, psychological pressure or harassment (including sexual harassment) towards beneficiaries or within the volunteer community is strictly prohibited." },
        { t: "Preventing abuse of power", d: "Using volunteer status, the Organisation’s authority or public trust for personal gain or nepotism, and any form of corruption, is prohibited. Volunteers may not accept money, valuable personal gifts or services from beneficiaries in exchange for humanitarian aid." },
        { t: "No weapons or military attributes", d: "While on duty, on RCSU premises or in Society uniform, volunteers may not carry any weapons, ammunition or explosives. Wearing elements of military uniform together with Red Crescent insignia is strictly prohibited." },
        { t: "Digital hygiene and social media", d: "The Volunteer may not make public statements, give media interviews on behalf of the RCSU or post on social media anything that could discredit the Organisation’s neutrality. Personal posts with photos or videos from humanitarian activities must be ethical, respect the dignity of aid recipients and protect their privacy. Movement symbols may not be used on personal avatars in an ambiguous or aggressive context." },
        { t: "Conduct in emergencies", d: "When responding to emergencies, the Volunteer acts only within their qualifications and strictly follows the instructions of the responsible RCSU staff member or coordinator and the operational headquarters. Acting on one’s own initiative in an emergency zone is prohibited." },
      ],
    },
    {
      id: "term",
      title: "3. Term, property and termination",
      items: [
        { t: "Term", d: "This Agreement enters into force when the Volunteer accepts it (by ticking the consent box at registration) and remains in force throughout their period of activity in the Organisation." },
        { t: "Early termination by the Volunteer", d: "The Volunteer may stop volunteering at any time by notifying the volunteer coordinator at least 7 calendar days in advance." },
        { t: "Liability for property", d: "RCSU property handed to the Volunteer (communication devices, tablets, radios, medical or rescue equipment, long-term branded gear) is the Volunteer’s responsibility. The Volunteer must keep it safe and use it only for its intended purpose." },
        { t: "Return of property", d: "On termination the Volunteer must return all property received, the uniform, unused handouts and the official volunteer ID within 3 working days." },
        { t: "Termination by the RCSU", d: "The Organisation may block the volunteer’s account and terminate the agreement unilaterally without prior notice in case of repeated failure to meet obligations or gross violation of ethical standards (violence, discrimination, harassment, breach of neutrality)." },
      ],
    },
    {
      id: "data",
      title: "4. Personal data and media rights",
      items: [
        { t: "Consent to data processing", d: "By accepting this Agreement, the Volunteer voluntarily consents to the RCSU collecting, organising, storing and processing their personal data (full name, contact details, education, photo) in accordance with the Law of the Republic of Uzbekistan “On Personal Data” for coordinating volunteer activities and recording hours." },
        { t: "Media release", d: "The Volunteer grants the RCSU and the International Federation (IFRC) the right to use, free of charge, photos and videos showing them taken at public humanitarian activities and official events, for annual reports, the Society’s official website and verified social media accounts." },
      ],
    },
    {
      id: "contacts",
      title: "5. Confirmation and feedback",
      intro:
        "If you face a dispute, an ethical issue, psychological pressure or discrimination, or need to report a violation within the Organisation (whistleblowing channel), you can use the RCSU internal contacts:",
      items: [
        { t: "Volunteer enquiries email", d: COORDINATOR_EMAIL },
        { t: "Coordination centre phone", d: COORDINATOR_PHONE },
      ],
    },
  ],
};

const uz: Doc = {
  title: "Koʻngillilik faoliyati toʻgʻrisida kelishuv",
  lead: "«Oʻzbekiston Respublikasi Qizil Yarim Oy jamiyati» jamoat birlashmasi (keyingi oʻrinlarda — «OʻRQYOJ» yoki «Tashkilot») fuqarolarning Tashkilot koʻngillilik faoliyatida ishtirok etish tartibi, qoidalari va shartlarini belgilovchi ushbu Kelishuvni eʼlon qiladi.",
  notice:
    "Ushbu hujjat ochiq va tanishish uchun moʻljallangan. Roziligingizni belgilab, roʻyxatdan oʻtish arizasini yuborish orqali siz Kelishuv shartlari va Axloq kodeksiga toʻliq rozilik bildirasiz hamda OʻRQYOJ koʻngillisining xulq-atvor qoidalariga rioya qilish majburiyatini olasiz.",
  translationNote: "Bu qulaylik uchun tarjima. Yuridik kuchga rus tilidagi matn ega.",
  sections: [
    {
      id: "duties",
      title: "1. Tomonlarning huquq va majburiyatlari",
      intro: "1.1. Koʻngilli quyidagilarni oʻz zimmasiga oladi:",
      items: [
        { t: "Tamoyillarga rioya qilish", d: "Xalqaro harakatning 7 ta asosiy tamoyilini bilish, hurmat qilish va faoliyatda qatʼiy amal qilish. Shaxsiy siyosiy, diniy yoki boshqa qarashlar koʻrsatilayotgan yordam sifati va xolisligiga taʼsir qilmasligi kerak." },
        { t: "Ish sifati", d: "Insonparvarlik vazifalarini bajarishda va aholining zaif qatlamlariga xizmat koʻrsatishda eng yuqori sifat standartlariga intilish." },
        { t: "Maxfiylik", d: "Vazifalarni bajarish jarayonida maʼlum boʻlgan benefitsiarlarning shaxsiy maʼlumotlari, tibbiy maʼlumotlari va hayotiy holatlarini qatʼiy sir saqlash." },
        { t: "Tartib va resurslarni hurmat qilish", d: "Kelishilgan koʻngillilik jadvaliga rioya qilish, OʻRQYOJ mol-mulki, uskunalari va resurslariga ehtiyotkorlik bilan munosabatda boʻlish. Bandlik oʻzgarganda koordinatorni kamida 24 soat oldin xabardor qilish." },
        { t: "Oʻqish", d: "Muntazam ravishda kirish yoʻriqnomasi, birinchi yordam va xavfsizlik treninglari hamda vazifalarni sifatli bajarish uchun zarur maxsus oʻqishlardan oʻtish." },
        { t: "Fikr-mulohaza", d: "Ish uchrashuvlari, insonparvarlik dasturlari samaradorligini baholash, seminarlar va tadbirlar yakunidagi tahlillarda faol qatnashish." },
      ],
    },
    {
      id: "org",
      title: "1.2. Tashkilot quyidagilarni oʻz zimmasiga oladi",
      items: [
        { t: "Vazifalarning aniqligi", d: "Koʻngilliga har bir yoʻnalish boʻyicha aniq koʻrsatmalar, vazifalar va majburiyatlar doirasini berish hamda ularni muntazam qayta koʻrib chiqish." },
        { t: "Faoliyatni taʼminlash", d: "Koʻngillini oʻz vaqtida zarur sarf materiallari, maxsus kiyim (ramzli nimcha yoki forma), shaxsiy himoya vositalari va uskunalar bilan taʼminlash." },
        { t: "Kasbiy rivojlanish", d: "Tashkilot hisobidan koʻngillilar uchun bepul oʻqish, treninglar, simulyatsion mashgʻulotlar va malaka oshirish kurslarini tashkil etish." },
        { t: "Xavfsizlik va qoʻllab-quvvatlash", d: "Ish paytida (shu jumladan favqulodda vaziyatlarda) koʻngillining jismoniy xavfsizligini taʼminlash uchun barcha choralarni koʻrish, psixologik yordam va hissiy charchashning oldini olish choralarini taqdim etish." },
        { t: "Hisobga olish va eʼtirof", d: "Ishlangan soatlarni yagona bazada yoki raqamli koʻngilli daftarchasida qayd etish. Faol koʻngillilar (kamida 1 yillik tajriba bilan) yutuqlari va ish hajmi koʻrsatilgan rasmiy tavsiyanoma olish huquqiga ega." },
      ],
    },
    {
      id: "ethics",
      title: "2. Koʻngillining xulq-atvor qoidalari va Axloq kodeksi",
      intro: "Qizil Xoch va Qizil Yarim Oy harakatining Xalqaro xulq-atvor kodeksi asosida ishlab chiqilgan.",
      items: [
        { t: "Emblemani hurmat qilish", d: "Koʻngilli Qizil Yarim Oy emblemasidan xalqaro qoidalar va milliy qonunchilikka qatʼiy muvofiq foydalanishi shart. Emblemadan tijorat, shaxsiy maqsadlarda yoki uchinchi shaxslar manfaatlarini ilgari surish uchun foydalanish qatʼiyan man etiladi." },
        { t: "«Safe from Harm» siyosati", d: "Koʻngilli har bir insonning qadr-qimmatini hurmat qiladi. Benefitsiarlarga nisbatan ham, koʻngillilar hamjamiyatida ham har qanday kamsitish (irqi, jinsi, yoshi, millati, dini boʻyicha), tajovuz, bulling, psixologik bosim yoki tazyiq (shu jumladan jinsiy) qatʼiyan taqiqlanadi." },
        { t: "Hokimiyatni suisteʼmol qilishning oldini olish", d: "Koʻngilli maqomi, tashkilot obroʻsi yoki aholi ishonchidan shaxsiy manfaat, qarindosh-urugʻchilik uchun foydalanish va korrupsiyaning har qanday koʻrinishi taqiqlanadi. Koʻngillilarga insonparvarlik yordami evaziga benefitsiarlardan pul, qimmatbaho sovgʻa yoki xizmatlar olish taqiqlanadi." },
        { t: "Qurol va harbiy atributlarni taqiqlash", d: "Koʻngillilik vazifalarini bajarish paytida, OʻRQYOJ obyektlarida yoki Jamiyat formasida koʻngillilarga har qanday qurol, oʻq-dori yoki portlovchi moddalarni olib yurish qatʼiyan taqiqlanadi. Harbiy forma elementlarini Qizil Yarim Oy belgilari bilan birga kiyish man etiladi." },
        { t: "Raqamli gigiyena va ijtimoiy tarmoqlar", d: "Koʻngilli OʻRQYOJ nomidan ommaviy bayonotlar berish, OAVga intervyu berish yoki Tashkilotning betaraf maqomiga putur yetkazadigan postlarni joylashtirish huquqiga ega emas. Insonparvarlik tadbirlaridan olingan shaxsiy foto va videolar axloqiy boʻlishi, yordam oluvchilarning qadr-qimmatini hurmat qilishi va maxfiyligini buzmasligi kerak. Harakat ramzlaridan shaxsiy avatarlarda ikki maʼnoli yoki tajovuzkor kontekstda foydalanish taqiqlanadi." },
        { t: "Favqulodda vaziyatlarda xulq-atvor", d: "Favqulodda vaziyatlarga javob berishda koʻngilli faqat oʻz malakasi doirasida, OʻRQYOJ masʼul xodimi yoki koordinatori va tezkor shtab koʻrsatmalariga qatʼiy boʻysungan holda harakat qiladi. FV hududida oʻzboshimchalik bilan harakat qilish taqiqlanadi." },
      ],
    },
    {
      id: "term",
      title: "3. Amal qilish muddati, mol-mulk va Kelishuvni bekor qilish",
      items: [
        { t: "Amal qilish muddati", d: "Ushbu Kelishuv Koʻngilli uni qabul qilgan paytdan (roʻyxatdan oʻtishda rozilik belgisi qoʻyilgan paytdan) kuchga kiradi va uning Tashkilotdagi butun faoliyati davomida amal qiladi." },
        { t: "Koʻngilli tashabbusi bilan muddatidan oldin bekor qilish", d: "Koʻngilli istalgan vaqtda koʻngillilar koordinatorini kamida 7 kalendar kun oldin xabardor qilib, faoliyatini toʻxtatishi mumkin." },
        { t: "Moddiy javobgarlik", d: "Koʻngilliga topshirilgan OʻRQYOJ mol-mulki (aloqa vositalari, planshetlar, ratsiyalar, tibbiy yoki qutqaruv uskunalari, uzoq muddatli brendlangan jihozlar) uning moddiy javobgarligida boʻladi. Koʻngilli ushbu mol-mulkni ehtiyotkorlik bilan saqlashi va maqsadli foydalanishi shart." },
        { t: "Mol-mulkni qaytarish", d: "Hamkorlik tugaganda Koʻngilli olingan barcha moddiy qimmatliklar, forma, foydalanilmagan tarqatma materiallar va rasmiy koʻngilli guvohnomasini 3 ish kuni ichida qaytarishi shart." },
        { t: "OʻRQYOJ tomonidan bir tomonlama bekor qilish", d: "Majburiyatlar muntazam bajarilmaganda yoki axloq meʼyorlari qoʻpol buzilganda (zoʻravonlik, kamsitish, tazyiq, betaraflik tamoyilidan chetga chiqish) Tashkilot koʻngilli akkauntini bloklash va kelishuvni oldindan xabar bermasdan bir tomonlama bekor qilish huquqini saqlab qoladi." },
      ],
    },
    {
      id: "data",
      title: "4. Shaxsiy maʼlumotlarni himoya qilish va media huquqlari",
      items: [
        { t: "Maʼlumotlarni qayta ishlashga rozilik", d: "Ushbu Kelishuvni qabul qilib, Koʻngilli OʻRQYOJga koʻngillilik faoliyatini muvofiqlashtirish va soatlarni ichki hisobga olish maqsadida Oʻzbekiston Respublikasining «Shaxsga doir maʼlumotlar toʻgʻrisida»gi Qonuniga muvofiq shaxsiy maʼlumotlarini (F.I.Sh., aloqa maʼlumotlari, taʼlim haqidagi maʼlumotlar, fotosurat) yigʻish, tizimlashtirish, saqlash va qayta ishlashga ixtiyoriy rozilik beradi." },
        { t: "Media materiallardan foydalanish (Media Release)", d: "Koʻngilli OʻRQYOJ va Xalqaro Federatsiyaga (IFRC) ommaviy insonparvarlik tadbirlari va rasmiy tadbirlarda olingan, uning tasviri tushirilgan foto va videolardan yillik hisobotlar, Jamiyatning rasmiy sayti va tasdiqlangan ijtimoiy tarmoqlarda bepul foydalanish huquqini beradi." },
      ],
    },
    {
      id: "contacts",
      title: "5. Tasdiqlash va fikr-mulohaza",
      intro:
        "Agar sizda nizoli vaziyatlar, axloqiy masalalar, psixologik bosim, kamsitish yuzaga kelsa yoki tashkilot ichidagi qoidabuzarliklar haqida xabar berish kerak boʻlsa (Whistleblowing kanali), OʻRQYOJ ichki aloqa kanallaridan foydalanishingiz mumkin:",
      items: [
        { t: "Koʻngillilar murojaatlari uchun email", d: COORDINATOR_EMAIL },
        { t: "Muvofiqlashtirish markazi telefoni", d: COORDINATOR_PHONE },
      ],
    },
  ],
};

export const AGREEMENT: Record<Lang, Doc> = { ru, en, uz };

export const REGIONS: Record<Lang, string[]> = {
  ru: ["Ташкент", "Ташкентская область", "Андижанская область", "Бухарская область", "Джизакская область", "Кашкадарьинская область", "Навоийская область", "Наманганская область", "Самаркандская область", "Сурхандарьинская область", "Сырдарьинская область", "Ферганская область", "Хорезмская область", "Республика Каракалпакстан"],
  en: ["Tashkent city", "Tashkent region", "Andijan region", "Bukhara region", "Jizzakh region", "Kashkadarya region", "Navoi region", "Namangan region", "Samarkand region", "Surkhandarya region", "Syrdarya region", "Fergana region", "Khorezm region", "Republic of Karakalpakstan"],
  uz: ["Toshkent shahri", "Toshkent viloyati", "Andijon viloyati", "Buxoro viloyati", "Jizzax viloyati", "Qashqadaryo viloyati", "Navoiy viloyati", "Namangan viloyati", "Samarqand viloyati", "Surxondaryo viloyati", "Sirdaryo viloyati", "Fargʻona viloyati", "Xorazm viloyati", "Qoraqalpogʻiston Respublikasi"],
};

export const DIRECTIONS = [
  { id: "first-aid", ru: "Первая помощь и обучение населения", en: "First aid and public training", uz: "Birinchi yordam va aholini oʻqitish" },
  { id: "emergency", ru: "Реагирование на ЧС", en: "Emergency response", uz: "Favqulodda vaziyatlarga javob" },
  { id: "social", ru: "Социальная помощь уязвимым людям", en: "Social support for vulnerable people", uz: "Zaif odamlarga ijtimoiy yordam" },
  { id: "blood", ru: "Донорство крови", en: "Blood donation", uz: "Qon donorligi" },
  { id: "rfl", ru: "Восстановление семейных связей", en: "Restoring family links", uz: "Oilaviy aloqalarni tiklash" },
  { id: "events", ru: "Мероприятия и информационные кампании", en: "Events and awareness campaigns", uz: "Tadbirlar va axborot kampaniyalari" },
  { id: "media", ru: "Медиа, фото и соцсети", en: "Media, photo and social media", uz: "Media, foto va ijtimoiy tarmoqlar" },
] as const;
