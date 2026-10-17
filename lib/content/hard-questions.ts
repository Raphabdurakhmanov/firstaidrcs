import { l, type QuizQuestion } from "../types";

// сложные ситуационные вопросы, добавляются к вопросам темы
export const HARD_QUESTIONS: Record<string, QuizQuestion[]> = {
  basics: [
    {
      q: l(
        "На месте два пострадавших: один громко кричит от боли в ноге, второй лежит молча и не двигается. К кому подойти первым?",
        "There are two casualties: one is screaming with pain in his leg, the other lies silent and still. Who do you go to first?",
        "Joyda ikki jabrlanuvchi bor: biri oyogʻi ogʻriganidan baqiryapti, ikkinchisi jim va qimirlamay yotibdi. Birinchi kimga borasiz?",
      ),
      a: [
        l("К молчащему — проверить сознание и дыхание", "The silent one — check response and breathing", "Jim yotganiga — hushi va nafasini tekshirish"),
        l("К кричащему — у него сильная боль", "The screaming one — he is in severe pain", "Baqirayotganiga — unda kuchli ogʻriq bor"),
        l("К тому, кто ближе", "Whoever is closer", "Qaysi biri yaqinroq boʻlsa"),
        l("Ни к кому, ждать скорую", "Neither, wait for the ambulance", "Hech kimga, tez yordamni kutish"),
      ],
      e: l(
        "Кто кричит — тот дышит и в сознании. Молчащий может быть без сознания и без дыхания, ему помощь нужна в первые минуты.",
        "Someone who screams is breathing and conscious. The silent one may be unresponsive and not breathing and needs help within minutes.",
        "Baqirayotgan odam nafas olyapti va hushida. Jim yotgan odam hushsiz va nafassiz boʻlishi mumkin, unga birinchi daqiqalarda yordam kerak.",
      ),
    },
  ],
  "call-103": [
    {
      q: l(
        "Вы один рядом со взрослым, который не реагирует и не дышит. Телефон у вас в руке. Что делать?",
        "You are alone with an adult who is unresponsive and not breathing. Your phone is in your hand. What do you do?",
        "Siz hushsiz va nafas olmayotgan katta odam yonida yolgʻizsiz. Telefon qoʻlingizda. Nima qilasiz?",
      ),
      a: [
        l("Позвонить 103 на громкой связи и сразу начать СЛР", "Call 103 on speakerphone and start CPR at once", "Karnay orqali 103 ga qoʻngʻiroq qilib, darhol YOʻR boshlash"),
        l("Сначала 2 минуты СЛР, потом звонить", "Do 2 minutes of CPR first, then call", "Avval 2 daqiqa YOʻR, keyin qoʻngʻiroq qilish"),
        l("Убежать за помощью, оставив человека", "Run for help and leave the person", "Odamni qoldirib, yordam soʻrab yugurish"),
        l("Минуту искать пульс, потом звонить", "Feel for a pulse for a minute, then call", "Bir daqiqa tomir urishini qidirib, keyin qoʻngʻiroq qilish"),
      ],
      e: l(
        "Громкая связь позволяет одновременно вызвать помощь и не прерывать СЛР. Диспетчер ещё и подскажет, что делать.",
        "Speakerphone lets you call for help without interrupting CPR, and the dispatcher can coach you.",
        "Karnay rejimi YOʻRni toʻxtatmasdan yordam chaqirish imkonini beradi, dispetcher esa nima qilishni aytib turadi.",
      ),
    },
  ],
  recovery: [
    {
      q: l(
        "Беременная женщина на позднем сроке без сознания, но дышит нормально. Как её уложить?",
        "A heavily pregnant woman is unresponsive but breathing normally. How do you position her?",
        "Homiladorlikning soʻnggi oylaridagi ayol hushsiz, lekin normal nafas olyapti. Uni qanday yotqizasiz?",
      ),
      a: [
        l("На левый бок", "On her left side", "Chap yonboshiga"),
        l("На спину с приподнятыми ногами", "On her back with legs raised", "Oyoqlarini koʻtarib, chalqancha"),
        l("На правый бок", "On her right side", "Oʻng yonboshiga"),
        l("Сидя, прислонив к стене", "Sitting up against a wall", "Devorga suyab, oʻtirgan holda"),
      ],
      e: l(
        "На спине и на правом боку матка давит на нижнюю полую вену и уменьшает приток крови к сердцу. Левый бок это давление снимает.",
        "On her back or right side the womb presses on the large vein returning blood to the heart. The left side relieves this.",
        "Chalqancha yoki oʻng yonboshda bachadon yurakka qon qaytaruvchi katta venani bosadi. Chap yonbosh bu bosimni yoʻqotadi.",
      ),
    },
  ],
  "cpr-adult": [
    {
      q: l(
        "Человек без сознания делает редкие громкие хрипящие вдохи. Как это расценить?",
        "An unresponsive person is making occasional loud gasping breaths. How do you interpret this?",
        "Hushsiz odam kamdan-kam baland xirillab nafas olyapti. Buni qanday baholaysiz?",
      ),
      a: [
        l("Это признак остановки сердца — начать СЛР", "It is a sign of cardiac arrest — start CPR", "Bu yurak toʻxtaganining belgisi — YOʻR boshlash"),
        l("Дышит — уложить на бок", "He is breathing — put him on his side", "Nafas olyapti — yonboshiga yotqizish"),
        l("Это храп во сне — не мешать", "It is snoring — leave him", "Bu xurrak — bezovta qilmaslik"),
        l("Это судороги — держать голову", "It is a seizure — hold the head", "Bu tutqanoq — boshini ushlab turish"),
      ],
      e: l(
        "Агональное дыхание бывает в первые минуты после остановки сердца. Это не нормальное дыхание: начинайте СЛР и просите АНД.",
        "Agonal gasping occurs in the first minutes after cardiac arrest. It is not normal breathing: start CPR and get an AED.",
        "Agonal nafas yurak toʻxtaganidan keyingi birinchi daqiqalarda boʻladi. Bu normal nafas emas: YOʻR boshlang va AED soʻrang.",
      ),
    },
    {
      q: l(
        "Во время СЛР вы почувствовали хруст в груди. Что делать?",
        "During CPR you feel a crack in the chest. What do you do?",
        "YOʻR vaqtida koʻkrakda qarsillash sezdingiz. Nima qilasiz?",
      ),
      a: [
        l("Продолжать, проверив, что руки на нижней половине грудины", "Keep going after checking your hands are on the lower half of the breastbone", "Qoʻllar toʻsh suyagining pastki yarmida ekanini tekshirib, davom etish"),
        l("Остановиться и дождаться врачей", "Stop and wait for the doctors", "Toʻxtab, shifokorlarni kutish"),
        l("Давить не глубже 2 см", "Press no deeper than 2 cm", "2 smdan chuqur bosmaslik"),
        l("Перейти только на вдохи", "Switch to breaths only", "Faqat nafas berishga oʻtish"),
      ],
      e: l(
        "Переломы рёбер при СЛР случаются часто и не опасны по сравнению с остановкой сердца. Главное — правильное место и глубина.",
        "Rib fractures are common in CPR and minor compared with cardiac arrest. What matters is the right position and depth.",
        "YOʻRda qovurgʻa sinishi koʻp uchraydi va yurak toʻxtashiga nisbatan xavfli emas. Asosiysi — toʻgʻri joy va chuqurlik.",
      ),
    },
  ],
  "cpr-child": [
    {
      q: l(
        "Обученный спасатель сделал ребёнку 5 начальных вдохов. В каком соотношении продолжать?",
        "A trained rescuer has given a child 5 initial breaths. What ratio comes next?",
        "Oʻqitilgan qutqaruvchi bolaga 5 ta boshlangʻich nafas berdi. Keyin qanday nisbatda davom etiladi?",
      ),
      a: [
        l("15 надавливаний : 2 вдоха", "15 compressions : 2 breaths", "15 bosish : 2 nafas"),
        l("30 надавливаний : 1 вдох", "30 compressions : 1 breath", "30 bosish : 1 nafas"),
        l("5 надавливаний : 1 вдох", "5 compressions : 1 breath", "5 bosish : 1 nafas"),
        l("Только вдохи, без надавливаний", "Breaths only, no compressions", "Bosishsiz, faqat nafas"),
      ],
      e: l(
        "У детей остановка чаще из-за нехватки кислорода, поэтому вдохов больше: 15:2. Если вы обучены только взрослой СЛР — делайте 30:2, это лучше, чем ничего.",
        "In children arrest is usually caused by lack of oxygen, so breaths matter more: 15:2. If you only know adult CPR, use 30:2 — far better than nothing.",
        "Bolalarda yurak toʻxtashi koʻpincha kislorod yetishmasligidan, shuning uchun nafas koʻproq: 15:2. Faqat kattalar YOʻRini bilsangiz — 30:2 qiling, bu hech narsa qilmaslikdan yaxshi.",
      ),
    },
  ],
  aed: [
    {
      q: l(
        "Под дождём на мокром асфальте лежит человек без дыхания. Принесли АНД. Как поступить?",
        "A person who is not breathing is lying on wet asphalt in the rain. An AED arrives. What do you do?",
        "Yomgʻirda hoʻl asfaltda nafas olmayotgan odam yotibdi. AED keltirildi. Nima qilasiz?",
      ),
      a: [
        l("Вытереть грудь насухо, наклеить электроды и не касаться человека при разряде", "Dry the chest, attach the pads and make sure nobody touches during the shock", "Koʻkrakni quruq artib, elektrodlarni yopishtirish va zarb vaqtida tegmaslik"),
        l("Не использовать АНД под дождём", "Never use an AED in the rain", "Yomgʻirda AEDdan umuman foydalanmaslik"),
        l("Наклеить электроды поверх мокрой одежды", "Put the pads over the wet clothes", "Elektrodlarni hoʻl kiyim ustidan yopishtirish"),
        l("Облить грудь водой для лучшего контакта", "Pour water on the chest for better contact", "Yaxshi kontakt uchun koʻkrakka suv quyish"),
      ],
      e: l(
        "Мокрая поверхность — не запрет. Важно, чтобы кожа под электродами была сухой, человек не лежал в луже, а при разряде никто его не касался.",
        "A wet surface is not a reason to stop. The skin under the pads must be dry, the person must not lie in a puddle and nobody may touch during the shock.",
        "Hoʻl yuza — taqiq emas. Elektrodlar ostidagi teri quruq, odam koʻlmakda yotmagan va zarb vaqtida hech kim tegmasligi muhim.",
      ),
    },
  ],
  choking: [
    {
      q: l(
        "Подавилась беременная женщина на позднем сроке, кашлять не может. Удары по спине не помогли. Что дальше?",
        "A heavily pregnant woman is choking and cannot cough. Back blows have not worked. What next?",
        "Homiladorlikning soʻnggi oylaridagi ayol tiqilib qoldi va yoʻtala olmayapti. Orqaga zarbalar yordam bermadi. Keyin nima?",
      ),
      a: [
        l("Толчки в нижнюю часть груди вместо толчков в живот", "Chest thrusts instead of abdominal thrusts", "Qoringa emas, koʻkrakning pastki qismiga turtkilar"),
        l("Обычные толчки в живот", "Ordinary abdominal thrusts", "Oddiy qoringa turtkilar"),
        l("Дать запить водой", "Give her water to drink", "Suv ichirish"),
        l("Достать предмет пальцами вслепую", "Sweep the mouth blindly with your fingers", "Barmoq bilan koʻr-koʻrona chiqarish"),
      ],
      e: l(
        "У беременных на позднем сроке и у очень полных людей руки ставят на нижнюю часть грудины и делают толчки в грудь.",
        "For late pregnancy and very obese people, place your hands on the lower breastbone and give chest thrusts.",
        "Homiladorlikning soʻnggi oylarida va juda toʻla odamlarda qoʻllar toʻsh suyagining pastki qismiga qoʻyilib, koʻkrakka turtkilar beriladi.",
      ),
    },
    {
      q: l(
        "После толчков в живот кусок вылетел, человек дышит и говорит, что всё хорошо. Нужен ли врач?",
        "After abdominal thrusts the piece came out; the person is breathing and says he is fine. Does he need a doctor?",
        "Qoringa turtkilardan keyin boʻlak chiqdi, odam nafas olyapti va hammasi yaxshi deyapti. Shifokor kerakmi?",
      ),
      a: [
        l("Да, толчки в живот могут повредить внутренние органы", "Yes, abdominal thrusts can injure internal organs", "Ha, qoringa turtkilar ichki aʼzolarni shikastlashi mumkin"),
        l("Нет, раз дышит — всё в порядке", "No, if he is breathing he is fine", "Yoʻq, nafas olsa — hammasi joyida"),
        l("Только если идёт кровь изо рта", "Only if there is blood from the mouth", "Faqat ogʻizdan qon kelsa"),
        l("Только детям", "Only for children", "Faqat bolalar uchun"),
      ],
      e: l(
        "Толчки в живот — сильное воздействие. Каждого, кому их делали, должен осмотреть врач.",
        "Abdominal thrusts are forceful. Anyone who received them should be checked by a doctor.",
        "Qoringa turtkilar kuchli taʼsir. Ular qilingan har bir odamni shifokor koʻrishi kerak.",
      ),
    },
  ],
  "heart-attack": [
    {
      q: l(
        "У мужчины 55 лет давящая боль за грудиной 20 минут. Он в сознании, аллергии на аспирин нет. Что можно сделать до приезда скорой?",
        "A 55-year-old man has had crushing chest pain for 20 minutes. He is conscious and not allergic to aspirin. What can you do before the ambulance arrives?",
        "55 yoshli erkakda 20 daqiqadan beri toʻsh orqasida siquvchi ogʻriq bor. U hushida, aspiringa allergiyasi yoʻq. Tez yordam kelguncha nima qilish mumkin?",
      ),
      a: [
        l("Дать разжевать 150–300 мг аспирина", "Give 150–300 mg of aspirin to chew", "150–300 mg aspirinni chaynatish"),
        l("Дать нитроглицерин соседа", "Give him a neighbour's nitroglycerin", "Qoʻshnining nitroglitserinini berish"),
        l("Отвести его к машине пешком", "Walk him to the car", "Uni mashinagacha piyoda olib borish"),
        l("Дать крепкий кофе", "Give him strong coffee", "Achchiq qahva berish"),
      ],
      e: l(
        "Разжёванный аспирин уменьшает тромб. Чужие лекарства давать нельзя, а любая нагрузка увеличивает повреждение сердца.",
        "Chewed aspirin slows clot growth. Never give someone else's medicine, and any exertion worsens heart damage.",
        "Chaynalgan aspirin tromb oʻsishini sekinlashtiradi. Birovning dorisini berib boʻlmaydi, har qanday zoʻriqish yurak shikastini kuchaytiradi.",
      ),
    },
  ],
  stroke: [
    {
      q: l(
        "У женщины перекосило лицо и онемела рука, но через 10 минут всё прошло. Что делать?",
        "A woman's face drooped and her arm went numb, but after 10 minutes everything passed. What do you do?",
        "Ayolning yuzi qiyshaydi va qoʻli uvishdi, lekin 10 daqiqadan keyin hammasi oʻtib ketdi. Nima qilasiz?",
      ),
      a: [
        l("Всё равно вызвать 103", "Call 103 anyway", "Baribir 103 ni chaqirish"),
        l("Ничего, раз прошло", "Nothing, it has passed", "Hech narsa, oʻtib ketdi-ku"),
        l("Уложить спать", "Let her sleep it off", "Uxlatib qoʻyish"),
        l("Записаться к врачу на следующую неделю", "Book a doctor's appointment for next week", "Keyingi haftaga shifokorga yozilish"),
      ],
      e: l(
        "Это может быть транзиторная ишемическая атака — предвестник настоящего инсульта в ближайшие часы и дни.",
        "This may be a transient ischaemic attack — a warning that a full stroke may follow within hours or days.",
        "Bu tranzitor ishemik ataka boʻlishi mumkin — yaqin soatlar va kunlarda haqiqiy insult xabarchisi.",
      ),
    },
  ],
  shock: [
    {
      q: l(
        "После удара в живот наружного кровотечения нет, но кожа бледная и холодная, пульс частый, человек беспокоен. Что вероятнее всего?",
        "After a blow to the abdomen there is no external bleeding, but the skin is pale and cold, the pulse fast and the person restless. What is most likely?",
        "Qoringa zarbadan keyin tashqi qon ketishi yoʻq, lekin teri oqargan va sovuq, tomir tez urmoqda, odam bezovta. Ehtimoli kattasi nima?",
      ),
      a: [
        l("Внутреннее кровотечение и шок — срочно 103", "Internal bleeding and shock — call 103 urgently", "Ichki qon ketishi va shok — zudlik bilan 103"),
        l("Испуг, скоро пройдёт", "Just fright, it will pass", "Qoʻrquv, tez oʻtadi"),
        l("Переохлаждение — напоить горячим чаем", "Hypothermia — give hot tea", "Sovqotish — issiq choy ichirish"),
        l("Голод — дать сладкое", "Hunger — give something sweet", "Ochlik — shirinlik berish"),
      ],
      e: l(
        "Признаки шока без видимой раны — повод думать о внутреннем кровотечении. Уложите, укройте, ничего внутрь, вызовите 103.",
        "Signs of shock with no visible wound suggest internal bleeding. Lay the person down, keep warm, nothing by mouth, call 103.",
        "Koʻrinadigan yarasiz shok belgilari ichki qon ketishidan dalolat beradi. Yotqizing, yoping, ichishga hech narsa bermang, 103 ni chaqiring.",
      ),
    },
  ],
  bleeding: [
    {
      q: l(
        "Где накладывать жгут при сильном кровотечении из предплечья?",
        "Where do you put a tourniquet for severe bleeding from the forearm?",
        "Bilakdan kuchli qon ketganda jgut qayerga qoʻyiladi?",
      ),
      a: [
        l("На 5–7 см выше раны, не на сустав, и записать время", "5–7 cm above the wound, not on a joint, and note the time", "Yaradan 5–7 sm yuqoriga, boʻgʻimga emas, va vaqtni yozish"),
        l("Прямо на рану", "Directly on the wound", "Toʻgʻridan-toʻgʻri yaraga"),
        l("Ниже раны, на кисть", "Below the wound, on the hand", "Yaradan pastga, panjaga"),
        l("На локтевой сгиб", "Over the elbow crease", "Tirsak bukilmasiga"),
      ],
      e: l(
        "Жгут на суставе сосуды не пережимает. Время наложения нужно врачам — его пишут на жгуте или на коже.",
        "A tourniquet over a joint does not compress the vessels. The time it was applied is needed by doctors — write it on the tourniquet or the skin.",
        "Boʻgʻimdagi jgut tomirlarni siqmaydi. Qoʻyilgan vaqt shifokorlarga kerak — uni jgutga yoki teriga yozing.",
      ),
    },
    {
      q: l(
        "Жгут наложен 40 минут назад, скорая едет, пострадавший жалуется на сильную боль. Ослабить жгут?",
        "A tourniquet was applied 40 minutes ago, the ambulance is on its way and the casualty complains of severe pain. Should you loosen it?",
        "Jgut 40 daqiqa oldin qoʻyilgan, tez yordam kelyapti, jabrlanuvchi kuchli ogʻriqdan shikoyat qilyapti. Jgutni boʻshatish kerakmi?",
      ),
      a: [
        l("Нет, его снимают только медики", "No, only medics remove it", "Yoʻq, uni faqat tibbiyot xodimlari oladi"),
        l("Да, каждые 15 минут", "Yes, every 15 minutes", "Ha, har 15 daqiqada"),
        l("Да, если боль сильная", "Yes, if the pain is severe", "Ha, agar ogʻriq kuchli boʻlsa"),
        l("Да, и наложить новый выше", "Yes, and apply a new one higher up", "Ha, va yuqoriroqqa yangisini qoʻyish"),
      ],
      e: l(
        "Боль от жгута — нормальна. Ослабление возобновит кровотечение и может стоить жизни.",
        "Tourniquet pain is expected. Loosening it restarts the bleeding and can cost a life.",
        "Jgutdan ogʻriq — normal holat. Boʻshatish qon ketishini qaytaradi va hayotga zomin boʻlishi mumkin.",
      ),
    },
  ],
  wounds: [
    {
      q: l(
        "Ребёнка укусила незнакомая собака, ранка небольшая. Что делать?",
        "A child has been bitten by an unknown dog; the wound is small. What do you do?",
        "Bolani notanish it tishladi, yara kichik. Nima qilasiz?",
      ),
      a: [
        l("Промыть водой с мылом около 15 минут и обратиться к врачу", "Wash with soap and water for about 15 minutes and see a doctor", "Taxminan 15 daqiqa sovun va suv bilan yuvib, shifokorga murojaat qilish"),
        l("Заклеить пластырем и забыть", "Cover it with a plaster and forget it", "Plastir yopishtirib, unutish"),
        l("Прижечь спиртом и не беспокоиться", "Dab with alcohol and not worry", "Spirt bilan kuydirib, xavotir olmaslik"),
        l("Обратиться к врачу, только если поднимется температура", "See a doctor only if a fever develops", "Faqat isitma chiqsa shifokorga borish"),
      ],
      e: l(
        "Долгое промывание с мылом удаляет слюну и снижает риск бешенства и инфекции. Решение о прививке принимает врач.",
        "Prolonged washing with soap removes saliva and lowers the risk of rabies and infection. A doctor decides on vaccination.",
        "Sovun bilan uzoq yuvish soʻlakni yoʻqotadi va quturish hamda infeksiya xavfini kamaytiradi. Emlash haqida shifokor qaror qiladi.",
      ),
    },
  ],
  "foreign-object": [
    {
      q: l(
        "В предплечье застрял крупный осколок стекла, рана сильно кровоточит. Как остановить кровь?",
        "A large shard of glass is stuck in the forearm and the wound is bleeding heavily. How do you stop the bleeding?",
        "Bilakda katta shisha boʻlagi qolib ketgan, yara kuchli qonayapti. Qonni qanday toʻxtatasiz?",
      ),
      a: [
        l("Давить по бокам от осколка и обложить его валиками", "Press on both sides of the shard and pad around it", "Boʻlakning ikki yonidan bosib, atrofiga gʻaltakchalar qoʻyish"),
        l("Вытащить осколок и прижать рану", "Pull the shard out and press on the wound", "Boʻlakni sugʻurib, yarani bosish"),
        l("Давить прямо на осколок", "Press directly on the shard", "Toʻgʻridan-toʻgʻri boʻlakka bosish"),
        l("Промыть рану и оставить открытой", "Rinse the wound and leave it open", "Yarani yuvib, ochiq qoldirish"),
      ],
      e: l(
        "Предмет может затыкать сосуд, а давление на него вгонит его глубже. Давят рядом и фиксируют валиками.",
        "The object may be plugging a vessel, and pressing on it drives it deeper. Press beside it and secure it with padding.",
        "Jism tomirni berkitib turgan boʻlishi mumkin, uni bosish esa chuqurroq kiritadi. Yonidan bosiladi va gʻaltakchalar bilan mahkamlanadi.",
      ),
    },
  ],
  "chest-abdomen": [
    {
      q: l(
        "На рану груди наложили герметичную плёнку со всех сторон, и человеку стало труднее дышать. Что делать?",
        "An airtight film was taped on all sides over a chest wound, and the person is now finding it harder to breathe. What do you do?",
        "Koʻkrak yarasiga har tomondan germetik plyonka yopishtirildi va odamning nafas olishi qiyinlashdi. Nima qilasiz?",
      ),
      a: [
        l("Снять или освободить одну сторону повязки", "Remove the dressing or free one side", "Bogʻlamni olib tashlash yoki bir tomonini boʻshatish"),
        l("Прижать повязку сильнее", "Press the dressing down harder", "Bogʻlamni kuchliroq bosish"),
        l("Уложить на живот", "Lay him face down", "Qorniga yotqizish"),
        l("Наложить ещё один слой плёнки", "Add another layer of film", "Yana bir qavat plyonka yopishtirish"),
      ],
      e: l(
        "Герметичная повязка может удерживать воздух в груди и сдавливать лёгкое. Рану оставляют открытой или закрывают неплотно.",
        "An airtight dressing can trap air in the chest and compress the lung. Leave the wound open or cover it loosely.",
        "Germetik bogʻlam havoni koʻkrak ichida ushlab, oʻpkani siqishi mumkin. Yara ochiq qoldiriladi yoki zich boʻlmagan holda yopiladi.",
      ),
    },
  ],
  nosebleed: [
    {
      q: l(
        "Почему при носовом кровотечении нельзя запрокидывать голову?",
        "Why should you not tilt the head back during a nosebleed?",
        "Burundan qon ketganda nega boshni orqaga tashlab boʻlmaydi?",
      ),
      a: [
        l("Кровь стекает в горло и может вызвать рвоту или попасть в дыхательные пути", "Blood runs into the throat and can cause vomiting or be inhaled", "Qon tomoqqa oqib, qusish chaqirishi yoki nafas yoʻliga tushishi mumkin"),
        l("Кровотечение станет сильнее из-за давления", "The bleeding gets worse because of pressure", "Bosim tufayli qon ketishi kuchayadi"),
        l("Голова закружится", "It makes you dizzy", "Bosh aylanadi"),
        l("Можно, это даже правильно", "You can — it is actually correct", "Mumkin, bu hatto toʻgʻri"),
      ],
      e: l(
        "Запрокинутая голова не останавливает кровь, а только скрывает её. Наклон вперёд и сжатие мягкой части носа — правильный способ.",
        "Tilting back does not stop bleeding, it only hides it. Leaning forward and pinching the soft part of the nose is correct.",
        "Boshni orqaga tashlash qonni toʻxtatmaydi, faqat yashiradi. Oldinga engashish va burunning yumshoq qismini qisish — toʻgʻri usul.",
      ),
    },
  ],
  burns: [
    {
      q: l(
        "При каком ожоге обязательно вызывать скорую?",
        "Which burn always needs an ambulance?",
        "Qanday kuyishda albatta tez yordam chaqiriladi?",
      ),
      a: [
        l("Больше ладони пострадавшего или на лице, кистях, паху", "Larger than the casualty's palm, or on the face, hands or groin", "Jabrlanuvchi kaftidan katta yoki yuz, panja, chotda"),
        l("Только если появились пузыри", "Only if blisters appear", "Faqat pufakchalar paydo boʻlsa"),
        l("Только при обугливании кожи", "Only if the skin is charred", "Faqat teri koʻmirlashsa"),
        l("Только если боль длится больше часа", "Only if the pain lasts more than an hour", "Faqat ogʻriq bir soatdan oshsa"),
      ],
      e: l(
        "Площадь ладони — около 1% тела. Ожоги лица, кистей, паха, а также химические, электрические и любые у детей тоже требуют врача.",
        "A palm is about 1% of the body. Burns to the face, hands or groin, chemical and electrical burns, and any burn in a child also need a doctor.",
        "Kaft yuzasi — tananing taxminan 1%. Yuz, panja, chot kuyishlari, kimyoviy va elektr kuyishlar hamda bolalardagi har qanday kuyish ham shifokorni talab qiladi.",
      ),
    },
  ],
  electric: [
    {
      q: l(
        "Человека ударило током от розетки, он в сознании и говорит, что чувствует себя нормально. Что дальше?",
        "Someone got a shock from a socket; he is conscious and says he feels fine. What next?",
        "Odamni rozetkadan tok urdi, u hushida va oʻzini yaxshi his qilayotganini aytyapti. Keyin nima?",
      ),
      a: [
        l("Всё равно показать врачу — возможны нарушения ритма сердца", "Get him checked by a doctor anyway — heart rhythm problems are possible", "Baribir shifokorga koʻrsatish — yurak ritmi buzilishi mumkin"),
        l("Ничего, раз в сознании", "Nothing, he is conscious", "Hech narsa, hushida-ku"),
        l("Дать выпить, чтобы успокоился", "Give him a drink to calm down", "Tinchlanishi uchun ichimlik berish"),
        l("Смазать ожоги маслом", "Put oil on the burns", "Kuyishlarga yogʻ surtish"),
      ],
      e: l(
        "Ток проходит через тело и может нарушить ритм сердца даже через несколько часов. Нужен осмотр и ЭКГ.",
        "Current passes through the body and can disturb the heart rhythm even hours later. A check-up and ECG are needed.",
        "Tok tana orqali oʻtadi va hatto bir necha soatdan keyin ham yurak ritmini buzishi mumkin. Koʻrik va EKG kerak.",
      ),
    },
  ],
  fractures: [
    {
      q: l(
        "После наложения шины пальцы стали холодными, синими и онемели. Что делать?",
        "After a splint was applied the fingers became cold, blue and numb. What do you do?",
        "Shina qoʻyilgandan keyin barmoqlar sovuq, koʻkargan va uvishgan. Nima qilasiz?",
      ),
      a: [
        l("Ослабить бинты и снова проверить кровообращение", "Loosen the bandages and recheck circulation", "Bintlarni boʻshatib, qon aylanishini qayta tekshirish"),
        l("Растереть пальцы", "Rub the fingers", "Barmoqlarni ishqalash"),
        l("Ничего, так и должно быть", "Nothing, that is normal", "Hech narsa, shunday boʻlishi kerak"),
        l("Положить на пальцы лёд", "Put ice on the fingers", "Barmoqlarga muz qoʻyish"),
      ],
      e: l(
        "Это признаки пережатых сосудов. Без кровотока конечность может погибнуть, поэтому фиксацию ослабляют.",
        "These are signs that the vessels are compressed. Without blood flow the limb can die, so loosen the fixation.",
        "Bular tomirlar siqilganining belgilari. Qon oqimisiz aʼzo nobud boʻlishi mumkin, shuning uchun mahkamlash boʻshatiladi.",
      ),
    },
  ],
  "head-spine": [
    {
      q: l(
        "После удара головой человек чувствовал себя нормально, а через 3 часа стал сонным, его рвёт, зрачки разного размера. Что это значит?",
        "After a blow to the head the person felt fine, but 3 hours later he is drowsy, vomiting and his pupils are unequal. What does it mean?",
        "Boshga zarbadan keyin odam oʻzini yaxshi his qilgan, lekin 3 soatdan soʻng uyquchan boʻlib qoldi, qusyapti, koʻz qorachiqlari har xil. Bu nimani bildiradi?",
      ),
      a: [
        l("Возможна гематома в черепе — срочно 103", "A bleed inside the skull is possible — call 103 urgently", "Bosh suyagi ichida gematoma boʻlishi mumkin — zudlik bilan 103"),
        l("Обычная усталость — дать поспать", "Just tiredness — let him sleep", "Oddiy charchoq — uxlatish"),
        l("Отравление — промыть желудок", "Poisoning — wash out the stomach", "Zaharlanish — oshqozonni yuvish"),
        l("Мигрень — дать обезболивающее", "Migraine — give a painkiller", "Migren — ogʻriq qoldiruvchi berish"),
      ],
      e: l(
        "«Светлый промежуток» после травмы типичен для внутричерепной гематомы. Ухудшение спустя часы требует немедленной помощи.",
        "A “lucid interval” after injury is typical of a bleed inside the skull. Deterioration hours later needs immediate help.",
        "Jarohatdan keyingi «yorugʻ oraliq» bosh suyagi ichidagi gematomaga xos. Soatlar oʻtib ahvolning yomonlashishi zudlik bilan yordamni talab qiladi.",
      ),
    },
  ],
  crush: [
    {
      q: l(
        "Человека освободили из-под плиты через 3 часа, он в сознании и говорит, что ему лучше. Можно отпустить домой?",
        "A person was freed from under a slab after 3 hours; he is conscious and says he feels better. Can he go home?",
        "Odam 3 soatdan keyin plita ostidan chiqarildi, u hushida va oʻzini yaxshiroq his qilayotganini aytyapti. Uyiga joʻnatish mumkinmi?",
      ),
      a: [
        l("Нет, обязательно в больницу — ухудшение может наступить через часы", "No, he must go to hospital — he can deteriorate hours later", "Yoʻq, albatta kasalxonaga — ahvol soatlar oʻtib yomonlashishi mumkin"),
        l("Да, раз ему лучше", "Yes, since he feels better", "Ha, oʻzini yaxshiroq his qilsa"),
        l("Да, если может ходить", "Yes, if he can walk", "Ha, agar yura olsa"),
        l("Да, после горячего чая", "Yes, after some hot tea", "Ha, issiq choydan keyin"),
      ],
      e: l(
        "После освобождения продукты распада мышц попадают в кровь и могут вызвать остановку сердца и отказ почек. Нужна больница.",
        "After release, breakdown products from the muscles enter the blood and can cause cardiac arrest and kidney failure. Hospital care is essential.",
        "Ozod etilgandan keyin mushak parchalanish mahsulotlari qonga tushib, yurak toʻxtashi va buyrak yetishmovchiligiga olib kelishi mumkin. Kasalxona kerak.",
      ),
    },
  ],
  seizures: [
    {
      q: l(
        "У двухлетнего ребёнка с высокой температурой впервые начались судороги. Что правильно?",
        "A two-year-old with a high fever has a seizure for the first time. What is correct?",
        "Yuqori isitmali ikki yoshli bolada birinchi marta tutqanoq boshlandi. Nima toʻgʻri?",
      ),
      a: [
        l("Защитить от травм, после приступа — на бок, снять лишнюю одежду, вызвать 103", "Protect from injury, then recovery position, remove extra clothing and call 103", "Jarohatdan himoya qilish, xurujdan keyin — yonboshiga, ortiqcha kiyimni yechish, 103 ni chaqirish"),
        l("Опустить в холодную ванну", "Put the child in a cold bath", "Sovuq vannaga solish"),
        l("Дать жаропонижающее во время судорог", "Give fever medicine during the seizure", "Tutqanoq vaqtida isitma tushiruvchi berish"),
        l("Крепко удерживать руки и ноги", "Hold the arms and legs firmly", "Qoʻl-oyoqlarini qattiq ushlab turish"),
      ],
      e: l(
        "Во время приступа ребёнок может захлебнуться, поэтому ничего в рот. Резкое охлаждение опасно. Первый приступ — всегда повод вызвать врача.",
        "During a seizure the child can choke, so nothing by mouth. Sudden cooling is dangerous. A first seizure always needs a doctor.",
        "Tutqanoq vaqtida bola boʻgʻilishi mumkin, shuning uchun ogʻizga hech narsa bermang. Keskin sovutish xavfli. Birinchi xuruj — har doim shifokor chaqirish uchun sabab.",
      ),
    },
  ],
  heat: [
    {
      q: l(
        "Какой способ охлаждения при тепловом ударе самый эффективный, если есть возможность?",
        "If it is available, what is the most effective way to cool someone with heatstroke?",
        "Imkon boʻlsa, issiq urishida sovutishning eng samarali usuli qaysi?",
      ),
      a: [
        l("Погрузить тело в холодную воду по шею", "Immerse the body in cold water up to the neck", "Tanani boʻyingacha sovuq suvga botirish"),
        l("Положить лёд только на лоб", "Put ice on the forehead only", "Faqat peshonaga muz qoʻyish"),
        l("Растереть спиртом", "Rub with alcohol", "Spirt bilan ishqalash"),
        l("Укутать, чтобы пропотел", "Wrap up warmly to make him sweat", "Terlashi uchun oʻrab qoʻyish"),
      ],
      e: l(
        "Погружение в холодную воду охлаждает быстрее всего. Если ванны нет — мокрая ткань по всему телу и обдув.",
        "Cold-water immersion cools fastest. Without a bath, wet the whole body and fan it.",
        "Sovuq suvga botirish eng tez sovutadi. Vanna boʻlmasa — butun tanani hoʻl mato bilan namlab, yelpish.",
      ),
    },
  ],
  cold: [
    {
      q: l(
        "Человек сильно переохлаждён, почти не реагирует, дышит медленно. Как с ним обращаться?",
        "A person is severely hypothermic, barely responsive and breathing slowly. How should you handle him?",
        "Odam qattiq sovqotgan, deyarli javob bermaydi, sekin nafas olyapti. U bilan qanday munosabatda boʻlish kerak?",
      ),
      a: [
        l("Бережно, горизонтально, укрыть и вызвать 103", "Gently, keep him horizontal, insulate him and call 103", "Ehtiyotkorlik bilan, gorizontal holda, yopib, 103 ni chaqirish"),
        l("Энергично растирать руки и ноги", "Rub the arms and legs vigorously", "Qoʻl-oyoqlarni kuchli ishqalash"),
        l("Посадить в горячую ванну", "Put him in a hot bath", "Issiq vannaga oʻtqazish"),
        l("Дать горячий чай с алкоголем", "Give hot tea with alcohol", "Spirtli issiq choy berish"),
      ],
      e: l(
        "Холодное сердце очень чувствительно: резкие движения и быстрое согревание могут вызвать остановку.",
        "A cold heart is very irritable: rough handling and rapid rewarming can trigger cardiac arrest.",
        "Sovuq yurak juda sezgir: keskin harakatlar va tez isitish yurak toʻxtashiga olib kelishi mumkin.",
      ),
    },
  ],
  poisoning: [
    {
      q: l(
        "Ребёнок проглотил дисковую батарейку и чувствует себя нормально. Что делать?",
        "A child swallowed a button battery and seems fine. What do you do?",
        "Bola tugmasimon batareykani yutib yubordi va oʻzini yaxshi his qilyapti. Nima qilasiz?",
      ),
      a: [
        l("Сразу вызвать 103 или ехать в больницу", "Call 103 or go to hospital immediately", "Darhol 103 ni chaqirish yoki kasalxonaga borish"),
        l("Подождать, она выйдет сама", "Wait, it will pass by itself", "Kutish, oʻzi chiqib ketadi"),
        l("Вызвать рвоту", "Make the child vomit", "Qustirish"),
        l("Дать много воды и уложить спать", "Give plenty of water and put the child to bed", "Koʻp suv berib, uxlatish"),
      ],
      e: l(
        "Батарейка в пищеводе за 2 часа может прожечь его стенку. Отсутствие жалоб не означает безопасность.",
        "A battery in the gullet can burn through its wall within 2 hours. No symptoms does not mean safe.",
        "Qiziloʻngachdagi batareyka 2 soat ichida uning devorini kuydirib teshishi mumkin. Shikoyat yoʻqligi xavfsizlikni bildirmaydi.",
      ),
    },
  ],
  bites: [
    {
      q: l(
        "После укуса осы у человека отёк лица и одышка. У него есть свой автоинъектор адреналина. Что делать?",
        "After a wasp sting a person has a swollen face and is short of breath. He has his own adrenaline auto-injector. What do you do?",
        "Ari chaqqandan keyin odamning yuzi shishdi va nafas qisilyapti. Unda oʻzining adrenalin avtoinyektori bor. Nima qilasiz?",
      ),
      a: [
        l("Помочь ввести его в наружную поверхность бедра и вызвать 103", "Help him inject it into the outer thigh and call 103", "Uni sonning tashqi yuzasiga yuborishga yordam berib, 103 ni chaqirish"),
        l("Ждать, пока отёк пройдёт сам", "Wait for the swelling to go down", "Shish oʻzi qaytishini kutish"),
        l("Ввести адреналин в место укуса", "Inject it into the sting site", "Adrenalinni chaqilgan joyga yuborish"),
        l("Дать таблетку от аллергии и уложить спать", "Give an allergy tablet and let him sleep", "Allergiyaga qarshi tabletka berib, uxlatish"),
      ],
      e: l(
        "Это анафилаксия, она убивает за минуты. Адреналин вводят в бедро, можно через одежду. Если через 5–15 минут нет улучшения — вторая доза.",
        "This is anaphylaxis and it can kill in minutes. Inject into the thigh, even through clothing. If there is no improvement after 5–15 minutes, give a second dose.",
        "Bu anafilaksiya, u bir necha daqiqada oʻldirishi mumkin. Adrenalin songa, kiyim ustidan ham yuboriladi. 5–15 daqiqada yaxshilanmasa — ikkinchi doza.",
      ),
    },
  ],
  moving: [
    {
      q: l(
        "Из горящего помещения нужно срочно вытащить человека без сознания, возможна травма позвоночника. Как?",
        "You must urgently pull an unconscious person out of a burning room; a spine injury is possible. How?",
        "Yonayotgan xonadan hushsiz odamni zudlik bilan olib chiqish kerak, umurtqa jarohati boʻlishi mumkin. Qanday qilib?",
      ),
      a: [
        l("Тянуть вдоль оси тела за одежду у плеч, поддерживая голову", "Drag along the body's long axis by the clothes at the shoulders, supporting the head", "Tana oʻqi boʻylab yelkadagi kiyimdan tortib, boshni ushlab turish"),
        l("Закинуть на плечо", "Throw him over your shoulder", "Yelkaga ortib olish"),
        l("Тянуть за одну руку", "Pull him by one arm", "Bir qoʻlidan tortish"),
        l("Поднять за руки и ноги, сгибая туловище", "Lift by arms and legs, bending the trunk", "Tanani bukib, qoʻl-oyoqlaridan koʻtarish"),
      ],
      e: l(
        "При вынужденной эвакуации позвоночник берегут, двигая тело по его длинной оси, без скручиваний и сгибаний.",
        "In an emergency move, protect the spine by moving the body along its long axis without twisting or bending.",
        "Majburiy evakuatsiyada umurtqani asrash uchun tana uzun oʻqi boʻylab, buralmasdan va bukilmasdan siljitiladi.",
      ),
    },
  ],
  road: [
    {
      q: l(
        "После ДТП из машины течёт бензин, двигатель работает, водитель в сознании и зажат. Что сделать в первую очередь?",
        "After a crash fuel is leaking, the engine is running and the conscious driver is trapped. What is the first thing to do?",
        "YTHdan keyin mashinadan benzin oqyapti, dvigatel ishlayapti, haydovchi hushida va qisilib qolgan. Birinchi navbatda nima qilinadi?",
      ),
      a: [
        l("Выключить зажигание, не курить и вызвать 103 и 101", "Switch off the ignition, no smoking, call 103 and 101", "Oʻt oldirishni oʻchirish, chekmaslik, 103 va 101 ni chaqirish"),
        l("Вытаскивать водителя любой ценой", "Pull the driver out at any cost", "Haydovchini har qanday holatda tortib chiqarish"),
        l("Засыпать бензин песком и уехать", "Cover the fuel with sand and leave", "Benzinni qum bilan koʻmib, ketish"),
        l("Ждать в машине вместе с водителем", "Wait inside the car with the driver", "Haydovchi bilan birga mashinada kutish"),
      ],
      e: l(
        "Сначала убирают источник воспламенения. Зажатого человека освобождают спасатели, если нет прямой угрозы пожара.",
        "First remove the ignition source. Rescuers free a trapped person unless there is an immediate fire threat.",
        "Avval yongʻin manbai bartaraf etiladi. Bevosita yongʻin xavfi boʻlmasa, qisilib qolgan odamni qutqaruvchilar chiqaradi.",
      ),
    },
  ],
  kit: [
    {
      q: l(
        "Почему вату не кладут прямо на открытую рану?",
        "Why should cotton wool not be put directly on an open wound?",
        "Nega paxta toʻgʻridan-toʻgʻri ochiq yaraga qoʻyilmaydi?",
      ),
      a: [
        l("Волокна прилипают к ране и остаются в ней", "The fibres stick to the wound and stay in it", "Tolalar yaraga yopishib, unda qolib ketadi"),
        l("Вата слишком дорогая", "Cotton wool is too expensive", "Paxta juda qimmat"),
        l("Вата усиливает кровотечение", "Cotton wool increases bleeding", "Paxta qon ketishini kuchaytiradi"),
        l("Кладут, это правильно", "It should be — that is correct", "Qoʻyiladi, bu toʻgʻri"),
      ],
      e: l(
        "На рану кладут стерильную салфетку или бинт, а вату — только поверх как мягкий слой.",
        "Put a sterile pad or gauze on the wound; cotton wool only goes on top as padding.",
        "Yaraga steril salfetka yoki bint qoʻyiladi, paxta esa faqat ustidan yumshoq qatlam sifatida.",
      ),
    },
  ],
  movement: [
    {
      q: l(
        "Может ли частная аптека использовать красный полумесяц на вывеске?",
        "May a private pharmacy use a red crescent on its sign?",
        "Xususiy dorixona peshlavhasida qizil yarim oydan foydalana oladimi?",
      ),
      a: [
        l("Нет, эмблема защищена законом и Женевскими конвенциями", "No, the emblem is protected by law and the Geneva Conventions", "Yoʻq, emblema qonun va Jeneva konvensiyalari bilan himoyalangan"),
        l("Да, это общий медицинский символ", "Yes, it is a general medical symbol", "Ha, bu umumiy tibbiy belgi"),
        l("Да, если аптека государственная", "Yes, if it is a state pharmacy", "Ha, agar dorixona davlatniki boʻlsa"),
        l("Да, если сделать его зелёным", "Yes, if it is green", "Ha, agar uni yashil qilsa"),
      ],
      e: l(
        "Злоупотребление эмблемой подрывает её защитную силу в конфликтах. Использовать её могут только Движение и военно-медицинские службы.",
        "Misuse weakens the emblem's protective power in conflict. Only the Movement and military medical services may use it.",
        "Emblemadan notoʻgʻri foydalanish uning nizolardagi himoya kuchini susaytiradi. Undan faqat Harakat va harbiy tibbiyot xizmatlari foydalanishi mumkin.",
      ),
    },
  ],
};
