import { l, type Topic } from "../types";
import { cover, gal, galLead } from "./helpers";
import { PHOTOS, unsplash } from "../photos";

export const otherTopics: Topic[] = [
  {
    slug: "seizures",
    cat: "environment",
    icon: "≈",
    order: 21,
    core: true,
    title: l("Судороги", "Seizures", "Tutqanoq"),
    summary: l(
      "Как защитить человека во время приступа, что делать после и когда звать скорую.",
      "How to protect someone during a seizure, what to do afterwards and when to call an ambulance.",
      "Tutqanoq paytida odamni qanday himoya qilish, keyin nima qilish va qachon tez yordam chaqirish.",
    ),
    signs: [
      l("Непроизвольные подёргивания мышц, часто с потерей сознания.", "Involuntary muscle jerking, often with loss of consciousness.", "Mushaklarning ixtiyorsiz tortishishi, koʻpincha hushdan ketish bilan."),
      l("Пена изо рта, непроизвольное мочеиспускание, спутанность после приступа.", "Foam at the mouth, loss of bladder control, confusion afterwards.", "Ogʻizdan koʻpik, ixtiyorsiz siydik ajralishi, xurujdan keyin chalkashlik."),
      l("Причины: эпилепсия, высокая температура у детей, травма, отравление.", "Causes: epilepsy, high fever in children, injury, poisoning.", "Sabablari: epilepsiya, bolalarda yuqori harorat, jarohat, zaharlanish."),
    ],
    steps: [
      l("Уберите рядом опасные предметы, защитите от огня, воды, высоты.", "Move dangerous objects away and protect from fire, water and heights.", "Yaqindagi xavfli narsalarni oling, olov, suv va balandlikdan himoya qiling."),
      l("Подложите под голову что-то мягкое, например сложенную куртку.", "Put something soft, like a folded jacket, under the head.", "Bosh ostiga yumshoq narsa, masalan, buklangan kurtka qoʻying."),
      l("Засеките время начала приступа.", "Note the time the seizure started.", "Xuruj boshlangan vaqtni belgilang."),
      l(
        "Если во рту много слюны, пены или рвоты — поверните на бок, чтобы жидкость вытекала.",
        "If there is a lot of saliva, foam or vomit, turn onto the side so it can drain.",
        "Ogʻizda koʻp soʻlak, koʻpik yoki qusuq boʻlsa — suyuqlik oqib chiqishi uchun yonboshiga burang.",
      ),
      l(
        "После приступа проверьте дыхание, уложите в восстановительное положение, осмотрите на травмы и оставайтесь рядом.",
        "After the seizure, check breathing, place in the recovery position, check for injuries and stay with them.",
        "Xurujdan keyin nafasni tekshiring, tiklovchi holatga yotqizing, jarohatlarni koʻring va yonida qoling.",
      ),
    ],
    donts: [
      l("Не удерживайте человека и не пытайтесь остановить судороги.", "Do not hold the person down or try to stop the seizure.", "Odamni ushlab turmang va tutqanoqni toʻxtatishga urinmang."),
      l("Ничего не вставляйте между зубами.", "Put nothing between the teeth.", "Tishlar orasiga hech narsa qoʻymang."),
      l("Не давайте пить, пока человек полностью не придёт в себя.", "Give nothing to drink until fully recovered.", "Toʻliq oʻziga kelmaguncha ichimlik bermang."),
    ],
    callIf: [
      l("Приступ длится дольше 5 минут или повторяется.", "The seizure lasts over 5 minutes or happens again.", "Xuruj 5 daqiqadan uzoq davom etsa yoki takrorlansa."),
      l("Это первый приступ или причина неизвестна.", "It is a first seizure or the cause is unknown.", "Bu birinchi xuruj yoki sababi nomaʼlum."),
      l("Есть травма, приступ в воде, беременность, диабет, ребёнок или младенец.", "There is an injury, it happened in water, or the person is pregnant, diabetic, a child or an infant.", "Jarohat bor, xuruj suvda boʻldi, homiladorlik, diabet, bola yoki chaqaloq."),
      l("Человек не приходит в сознание через 10 минут после приступа.", "The person does not regain consciousness 10 minutes after the seizure.", "Xurujdan 10 daqiqa keyin odam hushiga kelmasa."),
    ],
    warning: l(
      "Прикус языка редко вызывает сильное кровотечение, а предмет во рту может сломать зубы или перекрыть дыхание.",
      "Biting the tongue rarely causes serious bleeding, but an object in the mouth can break teeth or block the airway.",
      "Tilni tishlash kamdan-kam kuchli qon ketishiga olib keladi, ogʻizdagi narsa esa tishni sindirishi yoki nafasni toʻsishi mumkin.",
    ),
    update: l(
      "В пособии порог для вызова скорой — 3 минуты. Большинство современных рекомендаций используют 5 минут.",
      "The manual uses 3 minutes as the threshold for calling an ambulance. Most current guidance uses 5 minutes.",
      "Qoʻllanmada tez yordam chaqirish chegarasi 3 daqiqa. Hozirgi tavsiyalarning aksariyati 5 daqiqani qoʻllaydi.",
    ),
    quiz: [
      {
        q: l("Что нельзя делать во время судорог?", "What must you not do during a seizure?", "Tutqanoq paytida nima qilish mumkin emas?"),
        a: [
          l("Вставлять ложку между зубами", "Put a spoon between the teeth", "Tishlar orasiga qoshiq qoʻyish"),
          l("Подложить мягкое под голову", "Put something soft under the head", "Bosh ostiga yumshoq narsa qoʻyish"),
          l("Засечь время", "Note the time", "Vaqtni belgilash"),
          l("Убрать рядом острые предметы", "Remove nearby sharp objects", "Yaqindagi oʻtkir narsalarni olish"),
        ],
        e: l("Предмет во рту ломает зубы и может перекрыть дыхательные пути.", "An object in the mouth breaks teeth and can block the airway.", "Ogʻizdagi narsa tishni sindiradi va nafas yoʻlini toʻsishi mumkin."),
      },
      {
        q: l("Когда при судорогах нужно вызвать 103?", "When should you call 103 for a seizure?", "Tutqanoqda qachon 103 ni chaqirish kerak?"),
        a: [
          l("Если приступ длится дольше 5 минут", "If it lasts longer than 5 minutes", "Xuruj 5 daqiqadan uzoq davom etsa"),
          l("Только если человек попросит", "Only if the person asks", "Faqat odam soʻrasa"),
          l("Никогда — судороги проходят сами", "Never — seizures pass on their own", "Hech qachon — tutqanoq oʻzi oʻtadi"),
          l("Только ночью", "Only at night", "Faqat kechasi"),
        ],
        e: l("Затяжной приступ опасен для мозга и требует лекарств.", "A prolonged seizure endangers the brain and needs medication.", "Choʻzilgan xuruj miya uchun xavfli va dori talab qiladi."),
      },
      {
        q: l("Что делать сразу после приступа?", "What do you do right after a seizure?", "Xurujdan keyin darhol nima qilinadi?"),
        a: [
          l("Проверить дыхание и уложить на бок", "Check breathing and place on the side", "Nafasni tekshirib, yonboshiga yotqizish"),
          l("Дать выпить крепкий чай", "Give strong tea", "Achchiq choy ichirish"),
          l("Поднять и отвести домой", "Get them up and walk them home", "Turgʻizib, uyiga olib borish"),
          l("Оставить одного отдохнуть", "Leave them alone to rest", "Dam olishi uchun yolgʻiz qoldirish"),
        ],
        e: l("После приступа человек сонлив и спутан — на боку дыхательные пути защищены.", "After a seizure the person is drowsy and confused — the side position protects the airway.", "Xurujdan keyin odam uyqusiragan va chalkash — yonbosh holat nafas yoʻlini himoya qiladi."),
      },
    ],
  },
  {
    slug: "heat",
    cat: "environment",
    icon: "☀",
    order: 22,
    core: false,
    title: l("Тепловой удар", "Heatstroke", "Issiq urishi"),
    summary: l(
      "Перегрев организма в жару: признаки, быстрое охлаждение и вызов скорой.",
      "Overheating in hot weather: signs, rapid cooling and calling an ambulance.",
      "Jaziramada tananing qizib ketishi: belgilari, tez sovutish va tez yordam chaqirish.",
    ),
    cover: unsplash(PHOTOS.heat),
    gallery: galLead("heat", l("При перегреве сосуды кожи расширяются — так тело пытается отдать лишнее тепло.", "When overheated, skin vessels widen as the body tries to shed heat.", "Qizib ketganda teri tomirlari kengayadi — tana ortiqcha issiqlikni chiqarishga urinadi.")),
    signs: [
      l("Головная боль, головокружение, слабость, тошнота, рвота.", "Headache, dizziness, weakness, nausea, vomiting.", "Bosh ogʻrigʻi, bosh aylanishi, holsizlik, koʻngil aynishi, qusish."),
      l("Высокая температура тела, горячая красная кожа.", "High body temperature, hot red skin.", "Yuqori tana harorati, issiq qizil teri."),
      l("Частые пульс и дыхание, спутанность, судороги, потеря сознания.", "Rapid pulse and breathing, confusion, seizures, collapse.", "Tez tomir urishi va nafas, chalkashlik, tutqanoq, hushdan ketish."),
    ],
    steps: [
      l("Переведите в прохладное место, в тень.", "Move to a cool place in the shade.", "Salqin joyga, soyaga olib oʻting."),
      l("При спутанности сознания, судорогах или потере сознания — сразу 103.", "If confused, seizing or unconscious, call 103 at once.", "Hush chalkashsa, tutqanoq yoki hushdan ketishda — darhol 103."),
      l("Расстегните и снимите лишнюю и мокрую от пота одежду.", "Loosen and remove excess or sweat-soaked clothing.", "Ortiqcha va terga botgan kiyimni yeching."),
      l(
        "Активно охлаждайте: смачивайте кожу прохладной водой, обмахивайте, мокрые простыни, холод на шею, подмышки и пах.",
        "Cool actively: wet the skin with cool water and fan, use wet sheets, cold packs on neck, armpits and groin.",
        "Faol sovuting: terini salqin suv bilan hoʻllab yelpiting, hoʻl choyshab, boʻyin, qoʻltiq va chovga sovuq qoʻying.",
      ),
      l(
        "Если человек в сознании и может глотать — давайте прохладную воду небольшими глотками.",
        "If conscious and able to swallow, give cool water in small sips.",
        "Hushida boʻlsa va yuta olsa — salqin suvni oz-ozdan bering.",
      ),
      l("Если началась рвота — прекратите поить и уложите на бок.", "If vomiting starts, stop giving drinks and place on the side.", "Qusish boshlansa — suv berishni toʻxtatib, yonboshiga yotqizing."),
    ],
    donts: [
      l("Не давайте алкоголь и сладкие газированные напитки.", "Do not give alcohol or fizzy sugary drinks.", "Spirtli va shirin gazli ichimliklar bermang."),
      l("Не оставляйте человека одного на солнце.", "Do not leave the person alone in the sun.", "Odamni quyoshda yolgʻiz qoldirmang."),
    ],
    warning: l("Тепловой удар угрожает жизни — охлаждайте как можно быстрее и не ждите ухудшения.", "Heatstroke is life-threatening — cool as fast as possible and do not wait for things to get worse.", "Issiq urishi hayotga xavf soladi — imkon qadar tez sovuting va ahvol yomonlashishini kutmang."),
    update: l(
      "В пособии предлагают вызывать скорую, «если состояние ухудшится». При признаках теплового удара (спутанность, высокая температура) звоните сразу.",
      "The manual says to call an ambulance “if the condition worsens”. With signs of heatstroke (confusion, high temperature) call straight away.",
      "Qoʻllanmada «ahvol yomonlashsa» tez yordam chaqirish aytilgan. Issiq urishi belgilari (chalkashlik, yuqori harorat) boʻlsa, darhol qoʻngʻiroq qiling.",
    ),
    quiz: [
      {
        q: l("Главное при тепловом ударе?", "What matters most in heatstroke?", "Issiq urishida eng muhimi?"),
        a: [
          l("Быстро охладить и вызвать 103", "Cool rapidly and call 103", "Tez sovutish va 103 ni chaqirish"),
          l("Укутать и напоить горячим чаем", "Wrap up and give hot tea", "Oʻrab, issiq choy ichirish"),
          l("Дать жаропонижающее и уложить на солнце", "Give a fever pill and lie in the sun", "Isitma tushiruvchi berib, quyoshda yotqizish"),
          l("Заставить много двигаться", "Make them move around a lot", "Koʻp harakat qilishga majburlash"),
        ],
        e: l("Перегрев повреждает мозг и органы; спасает быстрое охлаждение.", "Overheating damages the brain and organs; rapid cooling saves lives.", "Qizib ketish miya va aʼzolarni shikastlaydi; tez sovutish hayotni saqlaydi."),
      },
      {
        q: l("Человек в жару стал спутанным и горячим. Что сделать в первую очередь?", "In the heat a person becomes confused and hot. What first?", "Jaziramada odam chalkash va issiq boʻlib qoldi. Birinchi navbatda nima qilinadi?"),
        a: [
          l("Перевести в тень и вызвать 103", "Move to shade and call 103", "Soyaga olib oʻtib, 103 ni chaqirish"),
          l("Дать холодного пива", "Give cold beer", "Sovuq pivo berish"),
          l("Подождать час, вдруг пройдёт", "Wait an hour in case it passes", "Oʻtib ketar deb bir soat kutish"),
          l("Отвести в баню", "Take them to a sauna", "Hammomga olib borish"),
        ],
        e: l("Спутанность — признак теплового удара, а не простого утомления.", "Confusion signals heatstroke, not just tiredness.", "Chalkashlik — oddiy charchoq emas, issiq urishi belgisi."),
      },
      {
        q: l("Когда нужно перестать поить при перегреве?", "When should you stop giving drinks in overheating?", "Qizib ketishda qachon suv berishni toʻxtatish kerak?"),
        a: [
          l("Если началась рвота или нарушено сознание", "If vomiting starts or consciousness is impaired", "Qusish boshlansa yoki hush buzilsa"),
          l("После первого глотка", "After the first sip", "Birinchi qultumdan keyin"),
          l("Через 5 минут", "After 5 minutes", "5 daqiqadan keyin"),
          l("Поить нельзя вообще", "Never give drinks at all", "Umuman suv berib boʻlmaydi"),
        ],
        e: l("Человек может захлебнуться; в этом случае его кладут на бок.", "The person may choke; place them on their side instead.", "Odam tiqilib qolishi mumkin; bu holda yonboshiga yotqiziladi."),
      },
    ],
  },
  {
    slug: "cold",
    cat: "environment",
    icon: "❄",
    order: 23,
    core: false,
    title: l("Обморожение и переохлаждение", "Frostbite and hypothermia", "Sovuq urishi va sovqotish"),
    summary: l(
      "Как согревать правильно и почему нельзя растирать снегом.",
      "How to rewarm correctly and why you must never rub with snow.",
      "Qanday toʻgʻri isitish va nima uchun qor bilan ishqalab boʻlmaydi.",
    ),
    cover: unsplash(PHOTOS.frost),
    gallery: galLead("cold", l("На холоде сосуды кожи сужаются — с этого начинается обморожение.", "In the cold, skin vessels narrow — this is how frostbite begins.", "Sovuqda teri tomirlari torayadi — sovuq urishi shundan boshlanadi."), [
      l(
        "Повязка при обморожении пальцев: прослоите пальцы марлей, не сдавливая.",
        "Dressing frostbitten toes: separate them with gauze without squeezing.",
        "Sovuq urgan barmoqlarni bogʻlash: barmoqlar orasiga dokani siqmasdan qoʻying.",
      ),
    ]),
    signs: [
      l("Обморожение: кожа бледная, восковая, холодная, нечувствительная; позже пузыри.", "Frostbite: pale, waxy, cold, numb skin; blisters later.", "Sovuq urishi: teri oqargan, mumsimon, sovuq, sezgisiz; keyin pufakchalar."),
      l("Переохлаждение: озноб, вялость, спутанность, замедленная речь; при тяжёлом — дрожь прекращается.", "Hypothermia: shivering, drowsiness, confusion, slurred speech; in severe cases shivering stops.", "Sovqotish: titrash, lanjlik, chalkashlik, sekin nutq; ogʻir holda titrash toʻxtaydi."),
    ],
    steps: [
      l("Переведите в тёплое помещение, снимите мокрую и тесную одежду.", "Move indoors to warmth and remove wet or tight clothing.", "Issiq xonaga olib kiring, hoʻl va tor kiyimni yeching."),
      l("Укутайте одеялом, накройте голову; при сознании — тёплое сладкое питьё.", "Wrap in blankets and cover the head; if conscious, give a warm sweet drink.", "Adyolga oʻrang, boshini yoping; hushida boʻlsa — iliq shirin ichimlik bering."),
      l(
        "Обмороженный участок согревайте в тёплой воде 37–39 °C, только если нет риска повторного замерзания.",
        "Rewarm a frostbitten area in warm water at 37–39 °C, only if there is no risk of refreezing.",
        "Sovuq urgan joyni faqat qayta muzlash xavfi boʻlmasa, 37–39 °C iliq suvda isiting.",
      ),
      l("Осторожно промокните, наложите сухую мягкую повязку, прослоив пальцы.", "Pat dry gently and apply a dry soft dressing, separating fingers or toes.", "Ehtiyotkorlik bilan quriting, barmoqlar orasini ajratib quruq yumshoq bogʻlam qoʻying."),
      l("Вызовите 103 при глубоком обморожении или переохлаждении со спутанностью.", "Call 103 for deep frostbite or hypothermia with confusion.", "Chuqur sovuq urishi yoki chalkashlik bilan sovqotishda 103 ni chaqiring."),
    ],
    donts: [
      l("Не растирайте снегом и не массируйте.", "Do not rub with snow or massage.", "Qor bilan ishqalamang va uqalamang."),
      l("Не согревайте у огня, обогревателя или горячей водой.", "Do not rewarm near a fire, heater or with hot water.", "Olov, isitgich yonida yoki issiq suvda isitmang."),
      l("Не давайте алкоголь и не вскрывайте пузыри.", "Do not give alcohol or burst blisters.", "Spirtli ichimlik bermang va pufakchalarni yormang."),
      l("Не допускайте повторного замерзания.", "Do not allow the area to refreeze.", "Qayta muzlashiga yoʻl qoʻymang."),
    ],
    warning: l("Алкоголь не согревает: он расширяет сосуды кожи, и тело теряет тепло ещё быстрее.", "Alcohol does not warm: it widens skin vessels so the body loses heat faster.", "Spirtli ichimlik isitmaydi: teri tomirlarini kengaytiradi va tana issiqlikni tezroq yoʻqotadi."),
    update: l(
      "В пособии советуют погружать в воду +15 °C и постепенно доводить до 38–40 °C. Современные рекомендации — сразу тёплая вода 37–39 °C.",
      "The manual advises starting in water at +15 °C and gradually raising it to 38–40 °C. Current guidance is warm water at 37–39 °C from the start.",
      "Qoʻllanmada +15 °C suvga botirib, asta-sekin 38–40 °C gacha koʻtarish tavsiya etilgan. Hozirgi tavsiya — darhol 37–39 °C iliq suv.",
    ),
    quiz: [
      {
        q: l("Как помочь при обморожении пальцев, если вы уже в тепле?", "How do you treat frostbitten fingers once indoors?", "Issiq joyga kirgach, sovuq urgan barmoqlarga qanday yordam beriladi?"),
        a: [
          l("Согреть в тёплой воде, не растирая", "Rewarm in warm water without rubbing", "Ishqalamasdan iliq suvda isitish"),
          l("Растереть снегом", "Rub with snow", "Qor bilan ishqalash"),
          l("Растереть спиртом", "Rub with alcohol", "Spirt bilan ishqalash"),
          l("Держать у костра", "Hold near a fire", "Gulxan yonida tutish"),
        ],
        e: l("Растирание травмирует повреждённые ткани, а огонь легко вызывает ожог нечувствительной кожи.", "Rubbing injures damaged tissue, and a fire easily burns numb skin.", "Ishqalash shikastlangan toʻqimani jarohatlaydi, olov esa sezgisiz terini oson kuydiradi."),
      },
      {
        q: l("Какая вода подходит для согревания обморожения?", "What water temperature is right for rewarming frostbite?", "Sovuq urishini isitish uchun qanday suv mos?"),
        a: [
          l("37–39 °C", "37–39 °C", "37–39 °C"),
          l("Кипяток", "Boiling water", "Qaynoq suv"),
          l("Ледяная вода", "Ice-cold water", "Muzdek suv"),
          l("Горячая из-под крана, сколько терпит", "As hot from the tap as tolerated", "Joʻmrakdan chidaganicha issiq"),
        ],
        e: l("Обмороженная кожа не чувствует температуру и легко получает ожог.", "Frostbitten skin cannot sense heat and burns easily.", "Sovuq urgan teri haroratni sezmaydi va oson kuyadi."),
      },
      {
        q: l("Помогает ли алкоголь согреться?", "Does alcohol help warm a cold person?", "Spirtli ichimlik isinishga yordam beradimi?"),
        a: [
          l("Нет, тело теряет тепло быстрее", "No, the body loses heat faster", "Yoʻq, tana issiqlikni tezroq yoʻqotadi"),
          l("Да, немного водки полезно", "Yes, a little vodka helps", "Ha, ozgina aroq foydali"),
          l("Да, если с горячим чаем", "Yes, if mixed with hot tea", "Ha, issiq choy bilan boʻlsa"),
          l("Только детям нельзя", "Only children should avoid it", "Faqat bolalarga mumkin emas"),
        ],
        e: l("Ощущение тепла обманчиво: сосуды кожи расширяются, и тепло уходит.", "The warm feeling is deceptive: skin vessels widen and heat escapes.", "Issiqlik hissi aldamchi: teri tomirlari kengayadi va issiqlik ketadi."),
      },
    ],
  },
  {
    slug: "poisoning",
    cat: "environment",
    icon: "⚗",
    order: 24,
    core: true,
    title: l("Отравления", "Poisoning", "Zaharlanish"),
    summary: l(
      "Отравление через рот, дыхание и кожу: признаки, помощь и профилактика.",
      "Poisoning by mouth, inhalation and through the skin: signs, care and prevention.",
      "Ogʻiz, nafas va teri orqali zaharlanish: belgilari, yordam va oldini olish.",
    ),
    cover: unsplash(PHOTOS.pills),
    gallery: galLead("poisoning", l("Пищевое отравление: признаки, причины и профилактика.", "Food poisoning: symptoms, causes and prevention.", "Ovqatdan zaharlanish: belgilari, sabablari va oldini olish.")),
    signs: [
      l(
        "Тошнота, рвота, понос, боль в животе или груди, слюнотечение, потливость.",
        "Nausea, vomiting, diarrhoea, abdominal or chest pain, drooling, sweating.",
        "Koʻngil aynishi, qusish, ich ketishi, qorin yoki koʻkrak ogʻrigʻi, soʻlak oqishi, terlash.",
      ),
      l("Нарушение дыхания и сознания, судороги, странное поведение.", "Breathing problems, altered consciousness, seizures, strange behaviour.", "Nafas va hushning buzilishi, tutqanoq, gʻalati xatti-harakat."),
      l(
        "Подсказки на месте: запах, дым, открытые банки, аптечка, повреждённые растения, ожоги вокруг рта.",
        "Clues at the scene: smell, smoke, open containers, an open medicine box, damaged plants, burns around the mouth.",
        "Joydagi ishoralar: hid, tutun, ochiq idishlar, dori qutisi, shikastlangan oʻsimliklar, ogʻiz atrofidagi kuyishlar.",
      ),
    ],
    steps: [
      l("Обеспечьте свою безопасность: при газе — не входите без защиты, проветрите.", "Keep yourself safe: with gas, do not enter unprotected; ventilate.", "Oʻz xavfsizligingizni taʼminlang: gazda himoyasiz kirmang, shamollating."),
      l(
        "Выясните: какое вещество, сколько и когда. Сохраните упаковку или рвотные массы для врачей.",
        "Find out what substance, how much and when. Keep the packaging or vomit for the doctors.",
        "Aniqlang: qanday modda, qancha va qachon. Qadoq yoki qusuqni shifokorlar uchun saqlang.",
      ),
      l("Вызовите 103 и следуйте указаниям диспетчера.", "Call 103 and follow the dispatcher’s instructions.", "103 ni chaqiring va dispetcher koʻrsatmalariga amal qiling."),
      l("Отравление газом или дымом: выведите на свежий воздух, следите за дыханием.", "Gas or smoke: move to fresh air and monitor breathing.", "Gaz yoki tutun: toza havoga olib chiqing, nafasni kuzating."),
      l(
        "Через кожу: снимите загрязнённую одежду, промывайте кожу проточной водой 20 минут.",
        "Through the skin: remove contaminated clothing and rinse the skin with running water for 20 minutes.",
        "Teri orqali: ifloslangan kiyimni yeching, terini 20 daqiqa oqar suv bilan yuving.",
      ),
      l("Без сознания, но дышит — восстановительное положение; не дышит — СЛР.", "Unconscious but breathing — recovery position; not breathing — CPR.", "Hushsiz, lekin nafas olsa — tiklovchi holat; nafas olmasa — YOʻR."),
    ],
    donts: [
      l("Не вызывайте рвоту.", "Do not induce vomiting.", "Qustirmang."),
      l("Не давайте есть, пить, молоко или «противоядия» без указания врача.", "Do not give food, drink, milk or “antidotes” unless a doctor says so.", "Shifokor koʻrsatmasisiz ovqat, ichimlik, sut yoki «zaharga qarshi vosita» bermang."),
      l("Не делайте искусственное дыхание рот-в-рот при отравлении едким газом без маски.", "Do not give mouth-to-mouth after toxic gas exposure without a face shield.", "Zaharli gazdan zaharlanishda niqobsiz ogʻizdan-ogʻizga nafas bermang."),
    ],
    warning: l(
      "Рвота при едких веществах (кислоты, щёлочи, бензин) обжигает пищевод повторно и может попасть в лёгкие.",
      "Vomiting corrosives (acids, alkalis, petrol) burns the gullet again and may enter the lungs.",
      "Oʻyuvchi moddalarda (kislota, ishqor, benzin) qusish qiziloʻngachni qayta kuydiradi va oʻpkaga tushishi mumkin.",
    ),
    update: l(
      "В пособии советуют дать 5–6 стаканов воды и вызвать рвоту. Сейчас это не рекомендуют: рвоту не вызывают, а питьё дают только по указанию врача или диспетчера.",
      "The manual advises giving 5–6 glasses of water and inducing vomiting. This is no longer recommended: do not induce vomiting and give drinks only on a doctor’s or dispatcher’s advice.",
      "Qoʻllanmada 5–6 stakan suv berib, qustirish tavsiya etilgan. Hozir bu tavsiya etilmaydi: qustirilmaydi, ichimlik faqat shifokor yoki dispetcher koʻrsatmasi bilan beriladi.",
    ),
    quiz: [
      {
        q: l("Нужно ли вызывать рвоту при отравлении?", "Should you induce vomiting after poisoning?", "Zaharlanishda qustirish kerakmi?"),
        a: [
          l("Нет, только по указанию врача", "No, only if a doctor says so", "Yoʻq, faqat shifokor koʻrsatmasi bilan"),
          l("Да, всегда", "Yes, always", "Ha, har doim"),
          l("Да, дав выпить мыльной воды", "Yes, with soapy water", "Ha, sovunli suv ichirib"),
          l("Да, надавив на корень языка", "Yes, by pressing on the back of the tongue", "Ha, til ildizini bosib"),
        ],
        e: l("Рвота может обжечь пищевод и попасть в дыхательные пути.", "Vomiting may burn the gullet and enter the airway.", "Qusish qiziloʻngachni kuydirishi va nafas yoʻllariga tushishi mumkin."),
      },
      {
        q: l("Что сохранить для врачей?", "What should you keep for the doctors?", "Shifokorlar uchun nimani saqlash kerak?"),
        a: [
          l("Упаковку вещества или рвотные массы", "The packaging or a sample of vomit", "Modda qadogʻi yoki qusuq"),
          l("Одежду свидетеля", "A witness’s clothes", "Guvohning kiyimi"),
          l("Ничего не нужно", "Nothing is needed", "Hech narsa kerak emas"),
          l("Чек из магазина", "The shop receipt", "Doʻkon cheki"),
        ],
        e: l("Зная вещество, врачи быстрее подберут лечение.", "Knowing the substance helps doctors choose treatment faster.", "Moddani bilish shifokorlarga davolashni tezroq tanlashga yordam beradi."),
      },
      {
        q: l("Человек надышался угарным газом. Первое действие?", "Someone inhaled carbon monoxide. First action?", "Odam is gazidan zaharlandi. Birinchi harakat?"),
        a: [
          l("Безопасно вывести на свежий воздух", "Safely move them to fresh air", "Xavfsiz tarzda toza havoga olib chiqish"),
          l("Дать выпить молока", "Give milk to drink", "Sut ichirish"),
          l("Включить свет и газ", "Switch on the lights and gas", "Chiroq va gazni yoqish"),
          l("Уложить спать в той же комнате", "Put them to sleep in the same room", "Oʻsha xonada uxlatish"),
        ],
        e: l("Пока человек вдыхает газ, отравление продолжается. Помните о своей безопасности.", "While they breathe the gas, poisoning continues. Remember your own safety.", "Odam gazni nafas olayotgan ekan, zaharlanish davom etadi. Oʻz xavfsizligingizni unutmang."),
      },
    ],
  },
  {
    slug: "bites",
    cat: "environment",
    icon: "✱",
    order: 25,
    core: false,
    title: l("Укусы змей и насекомых", "Snake and insect bites", "Ilon va hasharot chaqishi"),
    summary: l(
      "Как отличить ядовитую змею, что делать при укусе и как не пропустить аллергическую реакцию.",
      "How to tell a venomous snake, what to do after a bite and how not to miss an allergic reaction.",
      "Zaharli ilonni qanday farqlash, chaqqanda nima qilish va allergik reaksiyani qanday oʻtkazib yubormaslik.",
    ),
    cover: unsplash(PHOTOS.snake),
    gallery: galLead("bites", l("Укус неядовитой и ядовитой змеи: у ядовитой видны следы двух зубов.", "Non-venomous vs venomous bite: a venomous snake leaves two fang marks.", "Zaharsiz va zaharli ilon chaqishi: zaharlida ikki tish izi koʻrinadi."), [
      l("Голова гадюки — треугольная, покрыта мелкими чешуйками.", "A viper’s head is triangular and covered with small scales.", "Qora ilon (gadyuka) boshi — uchburchak, mayda tangachalar bilan qoplangan."),
      l("Голова неядовитого ужа — овальная, с крупными щитками.", "A harmless grass snake’s head is oval with large plates.", "Zaharsiz suv ilonining boshi — oval, yirik qalqonchalar bilan."),
      l("След укуса: у ядовитой змеи видны две точки от зубов.", "Bite marks: a venomous snake leaves two fang punctures.", "Chaqish izi: zaharli ilonda tishdan ikkita nuqta koʻrinadi."),
    ]),
    signs: [
      l("Укус змеи: две точки от зубов, боль, отёк, слабость, тошнота.", "Snake bite: two fang marks, pain, swelling, weakness, nausea.", "Ilon chaqishi: tishdan ikki nuqta, ogʻriq, shish, holsizlik, koʻngil aynishi."),
      l(
        "Аллергия (анафилаксия): отёк лица и горла, затруднённое дыхание, сыпь, слабость.",
        "Allergy (anaphylaxis): swelling of the face and throat, difficult breathing, rash, weakness.",
        "Allergiya (anafilaksiya): yuz va tomoq shishi, nafas qiyinlashuvi, toshma, holsizlik.",
      ),
    ],
    steps: [
      l("Змея: успокойте человека, уложите, ограничьте движения.", "Snake: reassure the person, lay them down and limit movement.", "Ilon: odamni tinchlantiring, yotqizing, harakatni cheklang."),
      l("Снимите кольца и тесные вещи, обездвижьте конечность на уровне сердца.", "Remove rings and tight items and keep the limb still at heart level.", "Uzuk va tor narsalarni yeching, aʼzoni yurak sathida qimirlatmay tuting."),
      l("Накройте место укуса чистой салфеткой и вызовите 103.", "Cover the bite with a clean pad and call 103.", "Chaqilgan joyni toza salfetka bilan yoping va 103 ni chaqiring."),
      l("Насекомое: соскоблите жало ногтем или картой, промойте, приложите холод.", "Insect: scrape the sting out with a nail or card, wash and apply cold.", "Hasharot: nishni tirnoq yoki karta bilan qirib oling, yuving, sovuq qoʻying."),
      l(
        "При признаках анафилаксии — сразу 103; помогите использовать автоинъектор адреналина, если он есть.",
        "With signs of anaphylaxis call 103 at once and help use an adrenaline auto-injector if available.",
        "Anafilaksiya belgilarida darhol 103; adrenalin avtoinyektori boʻlsa, ishlatishga yordam bering.",
      ),
    ],
    donts: [
      l("Не высасывайте яд и не делайте надрезы.", "Do not suck out venom or make cuts.", "Zaharni soʻrib olmang va kesmang."),
      l("Не накладывайте жгут при укусе змеи.", "Do not apply a tourniquet for a snake bite.", "Ilon chaqqanda jgut qoʻymang."),
      l("Не давайте алкоголь и не прикладывайте лёд к укусу змеи.", "Do not give alcohol or put ice on a snake bite.", "Spirtli ichimlik bermang va ilon chaqqan joyga muz qoʻymang."),
      l("Не пытайтесь поймать или убить змею.", "Do not try to catch or kill the snake.", "Ilonni tutishga yoki oʻldirishga urinmang."),
    ],
    warning: l(
      "Анафилаксия развивается за минуты. Если человек знает о своей аллергии — немедленно звоните 103.",
      "Anaphylaxis develops within minutes. If the person has a known allergy, call 103 immediately.",
      "Anafilaksiya bir necha daqiqada rivojlanadi. Odam allergiyasini bilsa, darhol 103 ni chaqiring.",
    ),
    quiz: [
      {
        q: l("Что нельзя делать при укусе змеи?", "What must you not do for a snake bite?", "Ilon chaqqanda nima qilish mumkin emas?"),
        a: [
          l("Высасывать яд и накладывать жгут", "Suck out the venom and apply a tourniquet", "Zaharni soʻrish va jgut qoʻyish"),
          l("Обездвижить конечность", "Keep the limb still", "Aʼzoni qimirlatmay tutish"),
          l("Вызвать 103", "Call 103", "103 ni chaqirish"),
          l("Снять кольца", "Remove rings", "Uzuklarni yechish"),
        ],
        e: l("Эти меры не удаляют яд, но вредят тканям и заносят инфекцию.", "These do not remove venom but damage tissue and cause infection.", "Bu choralar zaharni olib tashlamaydi, lekin toʻqimani shikastlab, infeksiya kiritadi."),
      },
      {
        q: l("Как удалить жало пчелы?", "How do you remove a bee sting?", "Asalari nishini qanday olib tashlash kerak?"),
        a: [
          l("Соскоблить ногтем или краем карты", "Scrape it out with a nail or card edge", "Tirnoq yoki karta cheti bilan qirib olish"),
          l("Выдавить пальцами", "Squeeze it out with the fingers", "Barmoqlar bilan siqib chiqarish"),
          l("Прижечь спичкой", "Burn it with a match", "Gugurt bilan kuydirish"),
          l("Оставить, само выйдет", "Leave it, it will come out", "Qoldirish, oʻzi chiqadi"),
        ],
        e: l("Сдавливание выжимает остатки яда из мешочка жала в кожу.", "Squeezing pushes the remaining venom from the sac into the skin.", "Siqish nish xaltachasidagi qolgan zaharni teriga chiqaradi."),
      },
      {
        q: l("Какой признак указывает на анафилаксию после укуса?", "Which sign suggests anaphylaxis after a sting?", "Chaqishdan keyin qaysi belgi anafilaksiyani koʻrsatadi?"),
        a: [
          l("Отёк лица и горла, затруднённое дыхание", "Swelling of the face and throat, difficult breathing", "Yuz va tomoq shishi, nafas qiyinlashuvi"),
          l("Небольшое покраснение на месте укуса", "Slight redness at the site", "Chaqilgan joyda ozgina qizarish"),
          l("Лёгкий зуд", "Mild itching", "Yengil qichishish"),
          l("Чихание", "Sneezing", "Aksirish"),
        ],
        e: l("Отёк дыхательных путей угрожает жизни — нужна скорая и адреналин.", "Airway swelling is life-threatening — an ambulance and adrenaline are needed.", "Nafas yoʻllari shishi hayotga xavf soladi — tez yordam va adrenalin kerak."),
      },
    ],
  },
  {
    slug: "moving",
    cat: "volunteer",
    icon: "⇄",
    order: 26,
    core: false,
    title: l("Перемещение пострадавшего", "Moving a casualty", "Jabrlanuvchini koʻchirish"),
    summary: l(
      "Когда можно переносить человека и как делать это безопасно для него и для себя.",
      "When a casualty may be moved and how to do it safely for them and for you.",
      "Jabrlanuvchini qachon koʻchirish mumkin va buni u va oʻzingiz uchun qanday xavfsiz qilish kerak.",
    ),
    cover: unsplash(PHOTOS.stretcher),
    gallery: galLead("moving", l("Импровизированные носилки из палок и одежды и переноска вдвоём на руках.", "Improvised stretchers from poles and clothing, and a two-person seat carry.", "Tayoq va kiyimdan qoʻlbola zambil va ikki kishi qoʻlda koʻtarishi."), [
      l("Поддержка вдвоём: человек опирается на плечи помогающих.", "Two-person support: the casualty leans on both helpers’ shoulders.", "Ikki kishi yordami: jabrlanuvchi yordamchilarning yelkasiga suyanadi."),
      l("«Замок» из четырёх рук для переноски сидя.", "A four-handed seat for carrying in a sitting position.", "Oʻtirgan holda koʻtarish uchun toʻrt qoʻldan «qulf»."),
      l("Переноска на сцепленных руках вдвоём.", "Two-person carry on linked arms.", "Ikki kishi bogʻlangan qoʻllarda koʻtarishi."),
      l("Переноска на спине — для лёгкого пострадавшего в сознании.", "Piggyback — for a light, conscious casualty.", "Orqada koʻtarish — yengil, hushidagi jabrlanuvchi uchun."),
      l("Укладывание на одеяло: человека поворачивают на бок и подкладывают ткань.", "Placing on a blanket: roll the person and slide the blanket underneath.", "Adyolga yotqizish: odamni yonboshiga burib, ostiga mato qoʻyiladi."),
      l("Волочение на одеяле — когда нужно быстро убрать человека из опасной зоны.", "Blanket drag — to move someone quickly out of danger.", "Adyolda sudrash — odamni xavfli hududdan tez olib chiqish uchun."),
    ]),
    signs: [
      l(
        "Переносить можно, только если место опасно: пожар, дым, газ, угроза взрыва или обрушения, вода, дорога.",
        "Only move a casualty if the scene is dangerous: fire, smoke, gas, risk of explosion or collapse, water, traffic.",
        "Faqat joy xavfli boʻlsa koʻchirish mumkin: yongʻin, tutun, gaz, portlash yoki qulash xavfi, suv, yoʻl.",
      ),
      l("Или если иначе невозможно оказать помощь (например, нужна СЛР на ровной поверхности).", "Or if care is impossible otherwise (for example, CPR needs a firm surface).", "Yoki boshqacha yordam berib boʻlmasa (masalan, YOʻR uchun tekis yuza kerak)."),
    ],
    steps: [
      l(
        "Оцените: опасность места, свои силы, вес и состояние пострадавшего, помощь других, путь переноса.",
        "Consider the danger, your own strength, the casualty’s size and condition, help from others and the route.",
        "Baholang: joy xavfi, oʻz kuchingiz, jabrlanuvchining vazni va ahvoli, boshqalar yordami, yoʻl.",
      ),
      l("Поднимайте за счёт ног, а не спины; спина прямая.", "Lift with your legs, not your back; keep your back straight.", "Orqa bilan emas, oyoqlar hisobiga koʻtaring; orqa toʻgʻri."),
      l("Двигайтесь маленькими шагами, лицом вперёд, смотрите, куда идёте.", "Move in small steps, facing forward and watching where you go.", "Kichik qadamlar bilan, yuzingiz oldinga qarab, qayerga borayotganingizni koʻrib yuring."),
      l(
        "При подозрении на травму позвоночника — сохраняйте ось тела, используйте жёсткую поверхность (дверь, доску).",
        "If a spinal injury is suspected, keep the body aligned and use a rigid surface (a door, a board).",
        "Umurtqa jarohatiga shubha boʻlsa, tana oʻqini saqlang, qattiq yuzadan foydalaning (eshik, taxta).",
      ),
      l("Носилки можно сделать из двух палок и куртки или одеяла.", "A stretcher can be improvised from two poles and a jacket or blanket.", "Zambilni ikki tayoq va kurtka yoki adyoldan yasash mumkin."),
    ],
    donts: [
      l("Не переносите один, если не уверены, что справитесь.", "Do not move someone alone unless you are sure you can manage.", "Uddalashga ishonchingiz komil boʻlmasa, yolgʻiz koʻchirmang."),
      l("Не сгибайте тело при подозрении на травму шеи или спины.", "Do not bend the body if a neck or back injury is suspected.", "Boʻyin yoki orqa jarohatiga shubha boʻlsa, tanani bukmang."),
    ],
    warning: l("Неправильный перенос может превратить травму позвоночника в паралич.", "Moving someone incorrectly can turn a spinal injury into paralysis.", "Notoʻgʻri koʻchirish umurtqa jarohatini falajga aylantirishi mumkin."),
    quiz: [
      {
        q: l("Когда допустимо переносить пострадавшего до приезда скорой?", "When may you move a casualty before the ambulance arrives?", "Tez yordam kelguncha jabrlanuvchini qachon koʻchirish mumkin?"),
        a: [
          l("Если на месте есть непосредственная опасность", "If there is immediate danger at the scene", "Joyda bevosita xavf boʻlsa"),
          l("Всегда, чтобы ему было удобнее", "Always, for comfort", "Har doim, qulay boʻlishi uchun"),
          l("Если он лежит на солнце 5 минут", "If they have been in the sun for 5 minutes", "U 5 daqiqa quyoshda yotgan boʻlsa"),
          l("Если вы торопитесь", "If you are in a hurry", "Shoshayotgan boʻlsangiz"),
        ],
        e: l("Перемещение без необходимости может усугубить травмы.", "Unnecessary movement can make injuries worse.", "Zaruratsiz koʻchirish jarohatlarni ogʻirlashtirishi mumkin."),
      },
      {
        q: l("Как правильно поднимать тяжёлого человека?", "How should you lift a heavy person?", "Ogʻir odamni qanday toʻgʻri koʻtarish kerak?"),
        a: [
          l("Согнув колени, с прямой спиной, усилием ног", "Bend the knees, keep the back straight, lift with the legs", "Tizzalarni bukib, orqani toʻgʻri tutib, oyoq kuchi bilan"),
          l("Наклонившись с прямыми ногами", "Bending over with straight legs", "Toʻgʻri oyoqlar bilan engashib"),
          l("Рывком за одну руку", "With a jerk by one arm", "Bir qoʻlidan siltab"),
          l("Скручивая корпус в сторону", "Twisting the trunk sideways", "Tanani yonga burab"),
        ],
        e: l("Ноги сильнее спины — так вы не травмируетесь сами.", "Legs are stronger than the back — this protects you from injury.", "Oyoqlar orqadan kuchli — shunda oʻzingiz shikastlanmaysiz."),
      },
      {
        q: l("Из чего можно сделать импровизированные носилки?", "What can an improvised stretcher be made from?", "Qoʻlbola zambilni nimadan yasash mumkin?"),
        a: [
          l("Из двух палок и куртки или одеяла", "Two poles and a jacket or blanket", "Ikki tayoq va kurtka yoki adyoldan"),
          l("Из картонной коробки", "A cardboard box", "Karton qutidan"),
          l("Из стула на колёсиках", "A rolling office chair", "Gʻildirakli stuldan"),
          l("Из полиэтиленового пакета", "A plastic bag", "Polietilen paketdan"),
        ],
        e: l("Палки продевают в рукава застёгнутой куртки или заворачивают в одеяло.", "Poles go through the sleeves of a zipped jacket or are wrapped in a blanket.", "Tayoqlar tugmalangan kurtka yengidan oʻtkaziladi yoki adyolga oʻraladi."),
      },
    ],
  },
  {
    slug: "road",
    cat: "volunteer",
    icon: "⛐",
    order: 27,
    core: false,
    title: l("Помощь при ДТП", "First aid at a road accident", "YTHda birinchi yordam"),
    summary: l(
      "Безопасность на дороге, когда извлекать человека из машины и как это делать.",
      "Road safety, when to remove a person from a car and how to do it.",
      "Yoʻldagi xavfsizlik, odamni mashinadan qachon va qanday chiqarish.",
    ),
    cover: unsplash(PHOTOS.carCrash),
    gallery: gal("road", [
      l("Ремень безопасности значительно снижает тяжесть травм.", "A seat belt greatly reduces the severity of injuries.", "Xavfsizlik kamari jarohatlar ogʻirligini sezilarli kamaytiradi."),
      l("Экстренное извлечение: руки под мышками, захват предплечья пострадавшего.", "Emergency extraction: arms under the armpits, gripping the casualty’s forearm.", "Favqulodda chiqarish: qoʻllar qoʻltiq ostidan, jabrlanuvchining bilagini ushlab."),
      l("Поддерживайте голову и шею, вытягивая человека на себя.", "Support the head and neck as you pull the person towards you.", "Odamni oʻzingizga tortayotganda bosh va boʻyinni ushlab turing."),
      l("Переносите на согнутых ногах, чтобы беречь спину.", "Carry with bent legs to protect your back.", "Orqangizni asrash uchun bukilgan oyoqlarda koʻtaring."),
      l("Аккуратно уложите в безопасном месте.", "Lay the person down carefully in a safe place.", "Xavfsiz joyga ehtiyotkorlik bilan yotqizing."),
      l("Если опасности нет — оставьте в машине и стабилизируйте голову руками.", "If there is no danger, leave them in the car and steady the head with your hands.", "Xavf boʻlmasa, mashinada qoldiring va boshni qoʻllaringiz bilan ushlab turing."),
    ]),
    steps: [
      l(
        "Остановитесь безопасно, включите аварийку, наденьте светоотражающий жилет, выставьте знак аварийной остановки.",
        "Stop safely, turn on the hazard lights, put on a reflective vest and set up a warning triangle.",
        "Xavfsiz toʻxtang, avariya chiroqlarini yoqing, yorugʻlik qaytaruvchi nimcha kiying, avariya belgisini qoʻying.",
      ),
      l("Пошлите кого-нибудь вызвать 103 и 102.", "Send someone to call 103 and 102.", "Kimnidir 103 va 102 ni chaqirishga yuboring."),
      l("Попросите заглушить двигатель; если машина на склоне — подложить камни или доски под колёса.", "Ask for the engine to be turned off; if the car is on a slope, block the wheels with stones or boards.", "Dvigatelni oʻchirishni soʻrang; mashina qiyalikda boʻlsa, gʻildiraklar ostiga tosh yoki taxta qoʻying."),
      l(
        "Не извлекайте человека, если нет угрозы пожара или другой опасности и не нужна СЛР. Стабилизируйте голову прямо в машине.",
        "Do not remove the person unless there is fire or other danger or CPR is needed. Steady the head inside the car.",
        "Yongʻin yoki boshqa xavf boʻlmasa va YOʻR kerak boʻlmasa, odamni chiqarmang. Boshni mashina ichida ushlab turing.",
      ),
      l(
        "Экстренное извлечение: руки под мышки, захватите предплечье пострадавшего, поддерживайте голову, тяните на себя и переносите на согнутых ногах.",
        "Emergency extraction: reach under the armpits, grip the forearm, support the head, pull towards you and carry on bent legs.",
        "Favqulodda chiqarish: qoʻllarni qoʻltiq ostidan oʻtkazib, bilagidan ushlang, boshni ushlab, oʻzingizga torting va bukilgan oyoqlarda koʻtaring.",
      ),
      l("Используйте машину как укрытие от других автомобилей.", "Use the crashed car as a shield from other traffic.", "Avariyaga uchragan mashinadan boshqa avtomobillardan pana sifatida foydalaning."),
    ],
    donts: [
      l("Не снимайте шлем с мотоциклиста, если он дышит.", "Do not remove a motorcyclist’s helmet if they are breathing.", "Mototsiklchi nafas olayotgan boʻlsa, dubulgʻasini yechmang."),
      l("Не курите и не пользуйтесь огнём рядом с местом аварии.", "Do not smoke or use flames near the crash.", "Avariya joyi yaqinida chekmang va olovdan foydalanmang."),
    ],
    warning: l("Чаще всего на дорогах гибнут те, кто вышел помочь и не позаботился о своей безопасности.", "Many roadside deaths are helpers who did not protect themselves first.", "Yoʻllarda koʻpincha oʻz xavfsizligini oʻylamay yordamga chiqqanlar halok boʻladi."),
    quiz: [
      {
        q: l("Когда извлекать пострадавшего из машины?", "When should a casualty be removed from a car?", "Jabrlanuvchini mashinadan qachon chiqarish kerak?"),
        a: [
          l("При угрозе пожара или если нужна СЛР", "If there is risk of fire or CPR is needed", "Yongʻin xavfi boʻlsa yoki YOʻR kerak boʻlsa"),
          l("Всегда, сразу после аварии", "Always, right after the crash", "Har doim, avariyadan darhol keyin"),
          l("Если он просит воды", "If they ask for water", "U suv soʻrasa"),
          l("Когда приедет полиция", "When the police arrive", "Politsiya kelganda"),
        ],
        e: l("Без опасности лучше не двигать человека — у него может быть травма позвоночника.", "Without danger it is better not to move them — they may have a spinal injury.", "Xavf boʻlmasa, odamni qimirlatmagan maʼqul — umurtqa jarohati boʻlishi mumkin."),
      },
      {
        q: l("Что сделать в первую очередь, подъехав к ДТП?", "What do you do first on arriving at a crash?", "YTH joyiga kelganda birinchi navbatda nima qilinadi?"),
        a: [
          l("Обезопасить место: аварийка, жилет, знак", "Make the scene safe: hazard lights, vest, triangle", "Joyni xavfsiz qilish: avariya chiroqlari, nimcha, belgi"),
          l("Сразу бежать к машине через дорогу", "Run straight across the road to the car", "Darhol yoʻl orqali mashinaga yugurish"),
          l("Снять всё на видео", "Film everything", "Hammasini videoga olish"),
          l("Вытащить ключи из замка зажигания всех машин", "Take the keys from all cars", "Barcha mashinalardan kalitni olish"),
        ],
        e: l("Без мер безопасности вас может сбить проезжающая машина.", "Without safety measures you may be hit by passing traffic.", "Xavfsizlik choralarisiz sizni oʻtib ketayotgan mashina urib ketishi mumkin."),
      },
      {
        q: l("Мотоциклист без сознания, но дышит. Снимать шлем?", "A motorcyclist is unconscious but breathing. Remove the helmet?", "Mototsiklchi hushsiz, lekin nafas olyapti. Dubulgʻani yechish kerakmi?"),
        a: [
          l("Нет, если дыхание не нарушено", "No, as long as breathing is not compromised", "Yoʻq, nafas buzilmagan boʻlsa"),
          l("Да, сразу", "Yes, at once", "Ha, darhol"),
          l("Да, чтобы было легче дышать", "Yes, to make breathing easier", "Ha, nafas olish oson boʻlishi uchun"),
          l("Только если он попросит", "Only if they ask", "Faqat u soʻrasa"),
        ],
        e: l("Снятие шлема двигает шею. Шлем снимают, только если иначе нельзя обеспечить дыхание.", "Removing the helmet moves the neck. Only remove it if breathing cannot be secured otherwise.", "Dubulgʻani yechish boʻyinni qimirlatadi. Faqat boshqacha nafasni taʼminlab boʻlmasa yechiladi."),
      },
    ],
  },
  {
    slug: "kit",
    cat: "volunteer",
    icon: "▣",
    order: 28,
    core: false,
    widget: "kit",
    title: l("Аптечка первой помощи", "First aid kit", "Birinchi yordam qutichasi"),
    summary: l(
      "Что положить в аптечку дома, в машине и на мероприятии и как её проверять.",
      "What to pack in a kit for home, car and events, and how to check it.",
      "Uy, mashina va tadbir uchun qutichaga nima solish va uni qanday tekshirish.",
    ),
    cover: unsplash(PHOTOS.kit),
    gallery: galLead("kit", l("Стерильные перевязочные пакеты — основа любой аптечки.", "Sterile dressing packs are the core of any kit.", "Steril bogʻlov paketlari — har qanday qutichaning asosi.")),
    steps: [
      l("Перевязка: стерильные салфетки, бинты, эластичный бинт, пластыри, косынка.", "Dressings: sterile pads, bandages, an elastic bandage, plasters, a triangular bandage.", "Bogʻlov: steril salfetkalar, bintlar, elastik bint, plastirlar, uchburchak roʻmol."),
      l("Защита: одноразовые перчатки, маска для СЛР.", "Protection: disposable gloves, a CPR face shield.", "Himoya: bir martalik qoʻlqoplar, YOʻR niqobi."),
      l("Инструменты: ножницы, булавки, термоодеяло, холодовой пакет, жгут.", "Tools: scissors, safety pins, a foil blanket, an instant cold pack, a tourniquet.", "Asboblar: qaychi, toʻgʻnagʻichlar, termoadyol, sovuq paket, jgut."),
      l("Список экстренных номеров: 103, 101, 102, 112 и телефоны близких.", "A list of emergency numbers: 103, 101, 102, 112 and family contacts.", "Favqulodda raqamlar roʻyxati: 103, 101, 102, 112 va yaqinlar telefonlari."),
      l("Раз в месяц проверяйте сроки годности и пополняйте использованное.", "Check expiry dates monthly and replace anything used.", "Har oy yaroqlilik muddatini tekshiring va ishlatilganini toʻldiring."),
    ],
    donts: [
      l("Не храните аптечку там, где жарко или доступно детям.", "Do not store the kit somewhere hot or within children’s reach.", "Qutichani issiq yoki bolalar yeta oladigan joyda saqlamang."),
    ],
    warning: l(
      "Аптечка полезна только тогда, когда вы знаете, где она лежит и как пользоваться каждым предметом.",
      "A kit only helps if you know where it is and how to use each item.",
      "Quticha faqat uning qayerdaligini va har bir narsadan qanday foydalanishni bilsangiz foydali.",
    ),
    quiz: [
      {
        q: l("Как часто проверять аптечку?", "How often should the kit be checked?", "Qutichani qanchalik tez-tez tekshirish kerak?"),
        a: [
          l("Раз в месяц и после использования", "Monthly and after each use", "Har oy va har ishlatgandan keyin"),
          l("Раз в 10 лет", "Every 10 years", "10 yilda bir marta"),
          l("Только при переезде", "Only when moving house", "Faqat koʻchganda"),
          l("Никогда", "Never", "Hech qachon"),
        ],
        e: l("Бинты и салфетки теряют стерильность, лекарства — эффективность.", "Dressings lose sterility and medicines lose effectiveness.", "Bintlar sterilligini, dorilar samaradorligini yoʻqotadi."),
      },
      {
        q: l("Что обязательно должно быть в аптечке для защиты помогающего?", "What must the kit contain to protect the helper?", "Yordam beruvchini himoya qilish uchun qutichada nima boʻlishi shart?"),
        a: [
          l("Одноразовые перчатки и маска для СЛР", "Disposable gloves and a CPR face shield", "Bir martalik qoʻlqop va YOʻR niqobi"),
          l("Солнцезащитные очки", "Sunglasses", "Quyosh koʻzoynagi"),
          l("Антибиотики", "Antibiotics", "Antibiotiklar"),
          l("Снотворное", "Sleeping pills", "Uyqu dorisi"),
        ],
        e: l("Перчатки и маска защищают от инфекций при контакте с кровью и при вдохах.", "Gloves and a face shield protect against infection from blood and during breaths.", "Qoʻlqop va niqob qon bilan aloqada va nafas berishda infeksiyadan himoya qiladi."),
      },
      {
        q: l("Зачем в аптечке термоодеяло?", "Why carry a foil blanket?", "Qutichada termoadyol nima uchun kerak?"),
        a: [
          l("Чтобы сохранить тепло при шоке и переохлаждении", "To keep warm in shock and hypothermia", "Shok va sovqotishda issiqlikni saqlash uchun"),
          l("Чтобы останавливать кровотечение", "To stop bleeding", "Qon ketishini toʻxtatish uchun"),
          l("Чтобы шинировать переломы", "To splint fractures", "Sinishlarni shinalash uchun"),
          l("Как подстилку для пикника", "As a picnic mat", "Piknik toʻshamasi sifatida"),
        ],
        e: l("Лёгкое фольгированное одеяло отражает тепло тела обратно.", "The light foil blanket reflects body heat back.", "Yengil folga adyol tana issiqligini qaytaradi."),
      },
    ],
  },
  {
    slug: "movement",
    cat: "volunteer",
    icon: "crescent",
    coverFit: "contain",
    signsTitle: l("Из чего состоит Движение", "What the Movement is made of", "Harakat nimalardan iborat"),
    stepsTitle: l("Семь основополагающих принципов", "The seven Fundamental Principles", "Yetti asosiy tamoyil"),
    order: 29,
    core: true,
    title: l("Движение Красного Креста и Красного Полумесяца", "The Red Cross and Red Crescent Movement", "Qizil Xoch va Qizil Yarim Oy Harakati"),
    summary: l(
      "Структура Движения и семь основополагающих принципов, которыми руководствуется каждый волонтёр.",
      "The structure of the Movement and the seven Fundamental Principles that guide every volunteer.",
      "Harakat tuzilmasi va har bir koʻngilli amal qiladigan yetti asosiy tamoyil.",
    ),
    cover: cover("movement"),
    signs: [
      l("МККК — Международный комитет Красного Креста.", "ICRC — the International Committee of the Red Cross.", "XQXQ — Xalqaro Qizil Xoch qoʻmitasi."),
      l("МФОКК и КП — Международная федерация обществ Красного Креста и Красного Полумесяца.", "IFRC — the International Federation of Red Cross and Red Crescent Societies.", "QXQYOJXF — Qizil Xoch va Qizil Yarim Oy jamiyatlari xalqaro federatsiyasi."),
      l("Национальные общества — например, Общество Красного Полумесяца Узбекистана.", "National Societies — for example, the Red Crescent Society of Uzbekistan.", "Milliy jamiyatlar — masalan, Oʻzbekiston Qizil Yarim Oy jamiyati."),
    ],
    steps: [
      l("Гуманность — защищать жизнь и здоровье, уважать человека.", "Humanity — protect life and health and ensure respect for every person.", "Insoniylik — hayot va sogʻliqni himoya qilish, insonni hurmat qilish."),
      l("Беспристрастность — помогать без различий по национальности, вере, взглядам.", "Impartiality — help without discrimination by nationality, religion or opinion.", "Xolislik — millat, eʼtiqod va qarashlardan qatʼi nazar yordam berish."),
      l("Нейтральность — не принимать сторону в конфликтах.", "Neutrality — take no sides in hostilities or controversies.", "Betaraflik — nizolarda hech kimning tarafini olmaslik."),
      l("Независимость — действовать самостоятельно, соблюдая принципы.", "Independence — act autonomously in line with the principles.", "Mustaqillik — tamoyillarga rioya qilgan holda mustaqil harakat qilish."),
      l("Добровольность — помогать без стремления к выгоде.", "Voluntary service — help without any desire for gain.", "Ixtiyoriylik — manfaat koʻzlamasdan yordam berish."),
      l("Единство — в стране одно национальное общество, открытое для всех.", "Unity — one National Society per country, open to all.", "Birlik — mamlakatda hammaga ochiq bitta milliy jamiyat."),
      l("Универсальность — Движение всемирное, общества равны.", "Universality — the Movement is worldwide and its societies are equal.", "Umumjahonlik — Harakat butun dunyoni qamraydi, jamiyatlar teng huquqli."),
    ],
    warning: l(
      "Эмблема Красного Полумесяца защищена законом. Её можно использовать только с разрешения Национального общества.",
      "The Red Crescent emblem is protected by law and may only be used with the National Society’s permission.",
      "Qizil Yarim Oy emblemasi qonun bilan himoyalangan va faqat Milliy jamiyat ruxsati bilan ishlatilishi mumkin.",
    ),
    quiz: [
      {
        q: l("Сколько основополагающих принципов у Движения?", "How many Fundamental Principles does the Movement have?", "Harakatning nechta asosiy tamoyili bor?"),
        a: [
          l("Семь", "Seven", "Yetti"),
          l("Три", "Three", "Uch"),
          l("Десять", "Ten", "Oʻn"),
          l("Пять", "Five", "Besh"),
        ],
        e: l("Гуманность, беспристрастность, нейтральность, независимость, добровольность, единство, универсальность.", "Humanity, impartiality, neutrality, independence, voluntary service, unity, universality.", "Insoniylik, xolislik, betaraflik, mustaqillik, ixtiyoriylik, birlik, umumjahonlik."),
      },
      {
        q: l("Что означает принцип беспристрастности?", "What does impartiality mean?", "Xolislik tamoyili nimani anglatadi?"),
        a: [
          l("Помогать всем без различий, по степени нужды", "Help everyone without discrimination, according to need", "Hammaga farqlamasdan, ehtiyojga qarab yordam berish"),
          l("Помогать только своим", "Help only your own people", "Faqat oʻziklarga yordam berish"),
          l("Не помогать в конфликтах", "Never help in conflicts", "Nizolarda yordam bermaslik"),
          l("Помогать за плату", "Help for payment", "Pul evaziga yordam berish"),
        ],
        e: l("Первыми помогают тем, кому помощь нужнее всего.", "Those in greatest need are helped first.", "Avvalo yordamga eng muhtojlarga yordam beriladi."),
      },
      {
        q: l("Какая организация — национальное общество в Узбекистане?", "Which organisation is the National Society in Uzbekistan?", "Oʻzbekistondagi milliy jamiyat qaysi tashkilot?"),
        a: [
          l("Общество Красного Полумесяца Узбекистана", "The Red Crescent Society of Uzbekistan", "Oʻzbekiston Qizil Yarim Oy jamiyati"),
          l("Международный комитет Красного Креста", "The International Committee of the Red Cross", "Xalqaro Qizil Xoch qoʻmitasi"),
          l("Всемирная организация здравоохранения", "The World Health Organization", "Jahon sogʻliqni saqlash tashkiloti"),
          l("Министерство по чрезвычайным ситуациям", "The Ministry of Emergency Situations", "Favqulodda vaziyatlar vazirligi"),
        ],
        e: l("В каждой стране есть одно национальное общество Красного Креста или Красного Полумесяца.", "Each country has one Red Cross or Red Crescent National Society.", "Har bir mamlakatda bitta Qizil Xoch yoki Qizil Yarim Oy milliy jamiyati bor."),
      },
    ],
  },
];
