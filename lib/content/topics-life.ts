import { l, type Topic } from "../types";
import { cover, gal, galLead } from "./helpers";
import { PHOTOS, unsplash } from "../photos";

export const lifeTopics: Topic[] = [
  {
    slug: "basics",
    cat: "basics",
    icon: "✚",
    order: 1,
    core: true,
    widget: "algorithm",
    title: l("Основы первой помощи", "First aid basics", "Birinchi yordam asoslari"),
    summary: l(
      "Что такое первая помощь, её цели и четыре принципа, с которых начинается любая помощь.",
      "What first aid is, its goals and the four principles every response starts with.",
      "Birinchi yordam nima, uning maqsadlari va har qanday yordam boshlanadigan toʻrt tamoyil.",
    ),
    cover: unsplash(PHOTOS.basics),
    gallery: galLead("basics", l("Принципы оказания первой помощи: осмотр места, первичный осмотр, вызов скорой и помощь по ситуации.", "Principles in action: scene check, primary survey, calling for help and care that fits the situation.", "Amalda tamoyillar: joyni koʻrish, birlamchi koʻrik, tez yordamni chaqirish va vaziyatga mos yordam."), [
      l(
        "Без кислорода мозг страдает уже через 4–6 минут, поэтому важна каждая минута.",
        "Without oxygen the brain is damaged within 4–6 minutes, so every minute counts.",
        "Kislorodsiz miya 4–6 daqiqada zararlanadi, shuning uchun har bir daqiqa muhim.",
      ),
    ]),
    signs: [
      l("Цели: сохранить жизнь пострадавшего.", "Goals: preserve life.", "Maqsadlar: jabrlanuvchining hayotini saqlab qolish."),
      l("Не допустить ухудшения и новых травм.", "Prevent the condition from getting worse and further injury.", "Ahvol yomonlashishi va yangi jarohatlarning oldini olish."),
      l("Обеспечить безопасность — свою и окружающих.", "Keep yourself and others safe.", "Oʻzingiz va atrofdagilar xavfsizligini taʼminlash."),
      l("Способствовать выздоровлению до приезда специалистов.", "Promote recovery until professionals arrive.", "Mutaxassislar kelguncha tiklanishga koʻmaklashish."),
    ],
    steps: [
      l(
        "Оцените обстановку: что случилось, есть ли угроза вам и пострадавшему, сколько пострадавших, кто может помочь.",
        "Assess the scene: what happened, is there danger to you or the casualty, how many are hurt, who can help.",
        "Vaziyatni baholang: nima boʻldi, sizga yoki jabrlanuvchiga xavf bormi, nechta jabrlanuvchi bor, kim yordam bera oladi.",
      ),
      l(
        "Проведите первичный осмотр: окликните, слегка потрясите за плечи, откройте дыхательные пути и проверьте дыхание не дольше 10 секунд.",
        "Do a primary survey: speak to the person, gently shake the shoulders, open the airway and check breathing for no more than 10 seconds.",
        "Birlamchi koʻrik oʻtkazing: chaqiring, yelkasidan ohista silkiting, nafas yoʻllarini oching va nafasni 10 soniyadan koʻp boʻlmagan vaqt tekshiring.",
      ),
      l(
        "Вызовите 103 или попросите конкретного человека позвонить и вернуться к вам.",
        "Call 103 or ask a specific person to call and come back to you.",
        "103 ga qoʻngʻiroq qiling yoki aniq bir odamdan qoʻngʻiroq qilib, qaytib kelishini soʻrang.",
      ),
      l(
        "Окажите помощь по ситуации: в сознании — травмы и кровотечения, без сознания и дышит — восстановительное положение, не дышит — СЛР.",
        "Give care that fits: conscious — treat injuries and bleeding; unconscious and breathing — recovery position; not breathing — CPR.",
        "Vaziyatga mos yordam bering: hushida — jarohat va qon ketishi; hushsiz, nafas olyapti — tiklovchi holat; nafas olmayapti — YOʻR.",
      ),
      l(
        "Успокойте человека, следите за дыханием и сознанием до приезда скорой.",
        "Reassure the person and monitor breathing and responsiveness until the ambulance arrives.",
        "Odamni tinchlantiring, tez yordam kelguncha nafas va hushini kuzating.",
      ),
    ],
    donts: [
      l("Не рискуйте собой — второй пострадавший никому не поможет.", "Do not put yourself at risk — a second casualty helps no one.", "Oʻzingizni xavf ostiga qoʻymang — ikkinchi jabrlanuvchi hech kimga yordam bera olmaydi."),
      l("Не давайте лекарства «на всякий случай».", "Do not give medicines “just in case”.", "«Har ehtimolga qarshi» dori bermang."),
      l("Не перемещайте пострадавшего без необходимости.", "Do not move the casualty unless necessary.", "Jabrlanuvchini zaruratsiz joyidan siljitmang."),
    ],
    warning: l(
      "Главный принцип — «не навреди». Если сомневаетесь, вызывайте 103 и следуйте указаниям диспетчера.",
      "The core principle is “do no harm”. If in doubt, call 103 and follow the dispatcher.",
      "Asosiy tamoyil — «zarar yetkazma». Ikkilansangiz, 103 ga qoʻngʻiroq qiling va dispetcher koʻrsatmasiga amal qiling.",
    ),
    quiz: [
      {
        q: l("С чего начинается оказание первой помощи?", "What is the first step of first aid?", "Birinchi yordam nimadan boshlanadi?"),
        a: [
          l("С оценки обстановки и своей безопасности", "Assessing the scene and your own safety", "Vaziyat va oʻz xavfsizligingizni baholashdan"),
          l("С проверки пульса на запястье", "Checking the pulse at the wrist", "Bilakdagi tomir urishini tekshirishdan"),
          l("С переноса пострадавшего в тень", "Moving the casualty into the shade", "Jabrlanuvchini soyaga olib oʻtishdan"),
          l("С поиска документов пострадавшего", "Looking for the casualty’s documents", "Jabrlanuvchining hujjatlarini qidirishdan"),
        ],
        e: l(
          "Сначала безопасность: если на месте опасно, вы сами можете пострадать.",
          "Safety first: if the scene is dangerous, you can become a casualty too.",
          "Avval xavfsizlik: joy xavfli boʻlsa, oʻzingiz ham jabrlanishingiz mumkin.",
        ),
      },
      {
        q: l(
          "Человек без сознания, но дышит нормально. Что делать после вызова 103?",
          "The person is unconscious but breathing normally. What do you do after calling 103?",
          "Odam hushsiz, lekin normal nafas olyapti. 103 ga qoʻngʻiroqdan keyin nima qilasiz?",
        ),
        a: [
          l("Уложить в восстановительное положение и наблюдать", "Place in the recovery position and monitor", "Tiklovchi holatga yotqizib, kuzatish"),
          l("Начать надавливания на грудь", "Start chest compressions", "Koʻkrakni bosishni boshlash"),
          l("Посадить и дать воды", "Sit them up and give water", "Oʻtqazib, suv berish"),
          l("Оставить на спине и уйти за помощью", "Leave on their back and go for help", "Chalqancha qoldirib, yordamga ketish"),
        ],
        e: l(
          "Восстановительное положение держит дыхательные пути открытыми и не даёт захлебнуться.",
          "The recovery position keeps the airway open and prevents choking on fluids.",
          "Tiklovchi holat nafas yoʻllarini ochiq tutadi va suyuqlik tiqilib qolishiga yoʻl qoʻymaydi.",
        ),
      },
      {
        q: l("Сколько времени отводится на проверку дыхания?", "How long should you check for breathing?", "Nafasni tekshirishga qancha vaqt ajratiladi?"),
        a: [
          l("Не более 10 секунд", "No more than 10 seconds", "10 soniyadan koʻp emas"),
          l("Не менее минуты", "At least one minute", "Kamida bir daqiqa"),
          l("Около 30 секунд", "About 30 seconds", "Taxminan 30 soniya"),
          l("Пока не приедет скорая", "Until the ambulance arrives", "Tez yordam kelguncha"),
        ],
        e: l(
          "Дольше проверять нельзя: при остановке сердца каждая секунда без надавливаний снижает шансы.",
          "Longer checks waste time: in cardiac arrest every second without compressions lowers the chance of survival.",
          "Uzoqroq tekshirish mumkin emas: yurak toʻxtaganda bosishsiz har bir soniya imkoniyatni kamaytiradi.",
        ),
      },
    ],
  },
  {
    slug: "call-103",
    cat: "basics",
    icon: "☎",
    order: 2,
    core: true,
    widget: "call103",
    cover: unsplash(PHOTOS.ambulance),
    title: l("Вызов скорой 103", "Calling an ambulance (103)", "Tez yordamni chaqirish (103)"),
    summary: l(
      "Когда звонить в 103, что сказать диспетчеру и когда нужны другие службы.",
      "When to call 103, what to tell the dispatcher and when other services are needed.",
      "Qachon 103 ga qoʻngʻiroq qilish, dispetcherga nima aytish va qachon boshqa xizmatlar kerak.",
    ),
    signs: [
      l("Нет сознания или оно меняется.", "Unconsciousness or a changing level of consciousness.", "Hush yoʻq yoki oʻzgarib turibdi."),
      l("Затруднённое дыхание или его отсутствие.", "Difficult breathing or no breathing.", "Nafas olish qiyin yoki nafas yoʻq."),
      l("Боль или давление в груди, которые не проходят.", "Persistent chest pain or pressure.", "Koʻkrakdagi oʻtmaydigan ogʻriq yoki siqilish."),
      l("Сильное кровотечение, рвота с кровью.", "Heavy bleeding, vomiting blood.", "Kuchli qon ketishi, qon aralash qusish."),
      l("Сильная боль в животе, отравление.", "Severe abdominal pain, poisoning.", "Qorindagi kuchli ogʻriq, zaharlanish."),
      l("Судороги, нарушение речи, внезапная слабость в руке или ноге.", "Seizures, slurred speech, sudden weakness of an arm or leg.", "Tutqanoq, nutq buzilishi, qoʻl yoki oyoqdagi toʻsatdan holsizlik."),
      l("Травмы головы, шеи, спины, подозрение на перелом.", "Head, neck or back injuries, suspected fractures.", "Bosh, boʻyin, orqa jarohatlari, suyak sinishiga shubha."),
    ],
    steps: [
      l(
        "Назовите точный адрес: улицу, дом, ближайший перекрёсток, ориентиры и как подъехать.",
        "Give the exact address: street, building, nearest crossroads, landmarks and how to get there.",
        "Aniq manzilni ayting: koʻcha, uy, eng yaqin chorraha, moʻljallar va qanday yetib kelish mumkinligi.",
      ),
      l(
        "Скажите, что произошло: травма, ДТП или внезапная болезнь.",
        "Say what happened: injury, road accident or sudden illness.",
        "Nima boʻlganini ayting: jarohat, YTH yoki toʻsatdan kasallik.",
      ),
      l(
        "Сообщите число пострадавших, их возраст и состояние: сознание, дыхание, кровотечение, боль в груди.",
        "Report the number of casualties, their age and condition: consciousness, breathing, bleeding, chest pain.",
        "Jabrlanuvchilar soni, yoshi va ahvolini ayting: hush, nafas, qon ketishi, koʻkrak ogʻrigʻi.",
      ),
      l("Скажите, какую помощь уже оказываете.", "Say what help you are already giving.", "Qanday yordam koʻrsatayotganingizni ayting."),
      l(
        "Не кладите трубку первым — диспетчер подскажет, что делать. Включите громкую связь, чтобы руки были свободны.",
        "Do not hang up first — the dispatcher will guide you. Use the speakerphone to keep your hands free.",
        "Goʻshakni birinchi boʻlib qoʻymang — dispetcher nima qilishni aytadi. Qoʻllaringiz boʻsh qolishi uchun karnayni yoqing.",
      ),
    ],
    callIf: [
      l(
        "Пожар, взрыв, утечка опасных веществ — также пожарная служба (101).",
        "Fire, explosion, toxic leak — also the fire service (101).",
        "Yongʻin, portlash, xavfli moddalar sizib chiqishi — yongʻin xizmati ham (101).",
      ),
      l(
        "ДТП, огнестрельное или ножевое ранение — также полиция (102).",
        "Road accident, gunshot or stab wound — also the police (102).",
        "YTH, oʻq yoki pichoq jarohati — politsiya ham (102).",
      ),
      l(
        "Оборванные провода высокого напряжения, производственная авария — также служба 112.",
        "Fallen high-voltage wires, industrial accident — also 112.",
        "Uzilgan yuqori kuchlanishli simlar, ishlab chiqarishdagi avariya — 112 ham.",
      ),
    ],
    warning: l(
      "Звоните в 103 сразу, если человек без сознания или не отвечает: дыхание можно проверить вместе с диспетчером.",
      "Call 103 straight away for anyone who is unconscious or unresponsive: you can check breathing together with the dispatcher.",
      "Hushsiz yoki javob bermayotgan har qanday odam uchun darhol 103 ga qoʻngʻiroq qiling: nafasni dispetcher bilan birga tekshirish mumkin.",
    ),
    update: l(
      "По рекомендациям 2025 года не нужно ждать, пока убедитесь в отсутствии дыхания: звоните сразу при любом человеке без сознания.",
      "Under the 2025 guidelines you do not wait to confirm absent breathing: call as soon as someone is unresponsive.",
      "2025-yil tavsiyalariga koʻra nafas yoʻqligini aniqlashni kutmang: hushsiz odamni koʻrishingiz bilan qoʻngʻiroq qiling.",
    ),
    quiz: [
      {
        q: l("Что сообщить диспетчеру в первую очередь?", "What should you tell the dispatcher first?", "Dispetcherga birinchi navbatda nimani aytish kerak?"),
        a: [
          l("Точный адрес и ориентиры", "The exact address and landmarks", "Aniq manzil va moʻljallar"),
          l("Своё имя и место работы", "Your name and workplace", "Oʻz ismingiz va ish joyingiz"),
          l("Предполагаемый диагноз", "Your guess at the diagnosis", "Taxminiy tashxis"),
          l("Номер телефона родственников пострадавшего", "The casualty’s relatives’ phone number", "Jabrlanuvchi qarindoshlarining telefon raqami"),
        ],
        e: l(
          "Без точного адреса скорая не найдёт вас, даже если всё остальное сказано верно.",
          "Without an exact address the ambulance cannot find you, even if everything else is right.",
          "Aniq manzilsiz tez yordam sizni topa olmaydi, qolgan hammasi toʻgʻri aytilgan boʻlsa ham.",
        ),
      },
      {
        q: l("Когда можно положить трубку?", "When can you hang up?", "Goʻshakni qachon qoʻyish mumkin?"),
        a: [
          l("Когда диспетчер разрешит", "When the dispatcher says so", "Dispetcher ruxsat berganda"),
          l("Сразу после того, как назвали адрес", "Right after giving the address", "Manzilni aytgan zahoti"),
          l("Когда начали оказывать помощь", "When you start giving care", "Yordam koʻrsatishni boshlaganda"),
          l("Через одну минуту разговора", "After one minute of talking", "Bir daqiqalik suhbatdan keyin"),
        ],
        e: l(
          "Диспетчер может уточнить адрес и подсказать, как делать СЛР, поэтому связь важна.",
          "The dispatcher may need to confirm details and can coach you through CPR, so stay on the line.",
          "Dispetcher manzilni aniqlashtirishi va YOʻRni qanday qilishni aytishi mumkin, shuning uchun aloqada qoling.",
        ),
      },
      {
        q: l(
          "При ДТП с пострадавшими кого нужно вызвать вместе со скорой?",
          "At a road accident with casualties, who else should be called besides the ambulance?",
          "Jabrlanuvchilar bor YTHda tez yordamdan tashqari kimni chaqirish kerak?",
        ),
        a: [
          l("Полицию (102)", "The police (102)", "Politsiyani (102)"),
          l("Аварийную газовую службу (104)", "The gas emergency service (104)", "Gaz avariya xizmatini (104)"),
          l("Никого — скорая сама сообщит", "No one — the ambulance will report it", "Hech kimni — tez yordam oʻzi xabar beradi"),
          l("Эвакуатор", "A tow truck", "Evakuatorni"),
        ],
        e: l(
          "При ДТП, ножевых и огнестрельных ранениях вызывают и скорую, и полицию.",
          "Road accidents, stab and gunshot wounds need both an ambulance and the police.",
          "YTH, pichoq va oʻq jarohatlarida tez yordam ham, politsiya ham chaqiriladi.",
        ),
      },
    ],
  },
  {
    slug: "recovery",
    cat: "basics",
    icon: "◐",
    order: 3,
    core: true,
    title: l("Без сознания: восстановительное положение", "Unconsciousness and the recovery position", "Hushsizlik va tiklovchi holat"),
    summary: l(
      "Как открыть дыхательные пути и уложить на бок человека без сознания, который дышит.",
      "How to open the airway and turn an unconscious, breathing person onto their side.",
      "Hushsiz, lekin nafas olayotgan odamning nafas yoʻllarini ochish va uni yonboshiga yotqizish.",
    ),
    cover: cover("recovery"),
    gallery: gal("recovery", [
      l(
        "На спине язык западает и перекрывает дыхательные пути.",
        "Lying on the back, the tongue falls back and blocks the airway.",
        "Chalqancha yotganda til orqaga ketib, nafas yoʻlini toʻsib qoʻyadi.",
      ),
      l(
        "Запрокиньте голову и поднимите подбородок — путь для воздуха открыт.",
        "Tilt the head back and lift the chin to open the airway.",
        "Boshni orqaga egib, iyakni koʻtaring — havo yoʻli ochiladi.",
      ),
      l("Шаг 1: ближнюю руку отведите под прямым углом.", "Step 1: place the near arm at a right angle.", "1-qadam: yaqin qoʻlni toʻgʻri burchak ostida qoʻying."),
      l(
        "Шаг 2: дальнюю руку прижмите тыльной стороной к щеке, дальнюю ногу согните.",
        "Step 2: hold the far hand against the cheek and bend the far knee.",
        "2-qadam: uzoq qoʻlning orqasini yonoqqa bosing, uzoq oyoqni buking.",
      ),
      l(
        "Шаг 3: потяните за колено и поверните человека к себе на бок.",
        "Step 3: pull on the knee to roll the person towards you.",
        "3-qadam: tizzadan tortib, odamni oʻzingiz tomon yonboshiga agʻdaring.",
      ),
    ]),
    signs: [
      l("Не отвечает на голос и прикосновение.", "Does not respond to voice or touch.", "Ovozga va tegishga javob bermaydi."),
      l("Дышит: грудь поднимается, слышно и ощущается дыхание.", "Is breathing: the chest rises, breath can be heard and felt.", "Nafas olyapti: koʻkrak koʻtariladi, nafas eshitiladi va seziladi."),
    ],
    steps: [
      l("Вызовите 103.", "Call 103.", "103 ga qoʻngʻiroq qiling."),
      l(
        "Откройте дыхательные пути: ладонь на лоб, двумя пальцами поднимите подбородок.",
        "Open the airway: one hand on the forehead, two fingers lifting the chin.",
        "Nafas yoʻlini oching: kaftni peshonaga qoʻying, ikki barmoq bilan iyakni koʻtaring.",
      ),
      l(
        "Уложите на бок: ближняя рука под прямым углом, дальняя — к щеке, дальняя нога согнута, поверните на себя.",
        "Turn onto the side: near arm at a right angle, far hand to the cheek, far knee bent, roll towards you.",
        "Yonboshiga yotqizing: yaqin qoʻl toʻgʻri burchakda, uzoq qoʻl yonoqda, uzoq oyoq bukilgan, oʻzingiz tomon agʻdaring.",
      ),
      l(
        "Слегка запрокиньте голову, чтобы рот был направлен вниз и жидкость могла вытекать.",
        "Tilt the head slightly back so the mouth points down and fluids can drain.",
        "Boshni biroz orqaga egib qoʻying, ogʻiz pastga qarasin va suyuqlik oqib chiqsin.",
      ),
      l(
        "Проверяйте дыхание каждые 1–2 минуты. Если перестал дышать нормально — поверните на спину и начните СЛР.",
        "Check breathing every 1–2 minutes. If normal breathing stops, turn onto the back and start CPR.",
        "Nafasni har 1–2 daqiqada tekshiring. Normal nafas toʻxtasa, chalqancha yotqizib, YOʻRni boshlang.",
      ),
    ],
    donts: [
      l("Не кладите под голову подушку.", "Do not put a pillow under the head.", "Bosh ostiga yostiq qoʻymang."),
      l("Не давайте пить и не кладите ничего в рот.", "Do not give drinks or put anything in the mouth.", "Ichimlik bermang va ogʻziga hech narsa solmang."),
    ],
    warning: l(
      "Редкие, хрипящие вдохи — это не нормальное дыхание. В этом случае начинайте СЛР.",
      "Occasional gasps are not normal breathing. In that case start CPR.",
      "Kamdan-kam xirillab nafas olish — normal nafas emas. Bu holda YOʻRni boshlang.",
    ),
    quiz: [
      {
        q: l(
          "Зачем укладывать человека без сознания на бок?",
          "Why turn an unconscious person onto their side?",
          "Hushsiz odamni nima uchun yonboshiga yotqiziladi?",
        ),
        a: [
          l("Чтобы язык не перекрыл дыхание, а рвота могла вытечь", "So the tongue does not block the airway and vomit can drain", "Til nafas yoʻlini toʻsmasligi va qusuq oqib chiqishi uchun"),
          l("Чтобы ему было удобнее спать", "To make sleeping more comfortable", "Uxlashi qulayroq boʻlishi uchun"),
          l("Чтобы быстрее пришёл в себя", "So that they wake up faster", "Tezroq hushiga kelishi uchun"),
          l("Чтобы удобнее было измерить давление", "To make measuring blood pressure easier", "Qon bosimini oʻlchash qulayroq boʻlishi uchun"),
        ],
        e: l(
          "Положение на боку держит дыхательные пути открытыми без постоянной поддержки подбородка.",
          "The side position keeps the airway open without holding the chin all the time.",
          "Yonbosh holat iyakni doim ushlab turmasdan nafas yoʻlini ochiq saqlaydi.",
        ),
      },
      {
        q: l(
          "Человек в восстановительном положении перестал нормально дышать. Ваши действия?",
          "A person in the recovery position stops breathing normally. What do you do?",
          "Tiklovchi holatdagi odam normal nafas olishni toʻxtatdi. Nima qilasiz?",
        ),
        a: [
          l("Повернуть на спину и начать СЛР", "Turn onto the back and start CPR", "Chalqancha yotqizib, YOʻRni boshlash"),
          l("Похлопать по щекам и подождать", "Pat the cheeks and wait", "Yonogʻiga urib, kutish"),
          l("Положить подушку под голову", "Put a pillow under the head", "Bosh ostiga yostiq qoʻyish"),
          l("Дать понюхать нашатырь", "Give smelling salts", "Novshadil hidlatish"),
        ],
        e: l(
          "Отсутствие нормального дыхания у человека без сознания — признак остановки сердца.",
          "No normal breathing in an unconscious person is a sign of cardiac arrest.",
          "Hushsiz odamda normal nafas yoʻqligi yurak toʻxtaganining belgisi.",
        ),
      },
      {
        q: l("Как открыть дыхательные пути?", "How do you open the airway?", "Nafas yoʻli qanday ochiladi?"),
        a: [
          l("Запрокинуть голову и поднять подбородок", "Tilt the head back and lift the chin", "Boshni orqaga egib, iyakni koʻtarish"),
          l("Наклонить голову к груди", "Bend the head towards the chest", "Boshni koʻkrakka egish"),
          l("Подложить под голову свёрнутую куртку", "Put a folded jacket under the head", "Bosh ostiga oʻralgan kurtka qoʻyish"),
          l("Повернуть голову набок и держать", "Turn the head to the side and hold it", "Boshni yonga burib ushlab turish"),
        ],
        e: l(
          "Запрокидывание головы поднимает язык от задней стенки глотки.",
          "Head tilt and chin lift move the tongue away from the back of the throat.",
          "Boshni orqaga egish tilni tomoqning orqa devoridan koʻtaradi.",
        ),
      },
    ],
  },
  {
    slug: "cpr-adult",
    cat: "life",
    icon: "♥",
    order: 4,
    core: true,
    widget: "cpr",
    title: l("СЛР у взрослого", "Adult CPR", "Kattalarda YOʻR"),
    summary: l(
      "Сердечно-лёгочная реанимация при остановке сердца: надавливания, вдохи и дефибриллятор.",
      "Cardiopulmonary resuscitation for cardiac arrest: compressions, breaths and an AED.",
      "Yurak toʻxtaganda yurak-oʻpka reanimatsiyasi: bosish, nafas berish va defibrillyator.",
    ),
    cover: unsplash(PHOTOS.cprAdult),
    gallery: galLead("cpr-adult", l("Руки прямые, плечи над ладонями — давите весом тела, а не силой рук.", "Arms straight, shoulders over your hands — push with your body weight, not your arms.", "Qoʻllar toʻgʻri, yelkalar kaftlar ustida — qoʻl kuchi bilan emas, tana ogʻirligi bilan bosing."), [
      l(
        "Место надавливания — нижняя половина грудины, на линии между сосками.",
        "Compress the lower half of the breastbone, on the line between the nipples.",
        "Bosish joyi — toʻsh suyagining pastki yarmi, koʻkrak uchlari orasidagi chiziqda.",
      ),
      l(
        "Надавливание сжимает сердце между грудиной и позвоночником.",
        "Compression squeezes the heart between the breastbone and the spine.",
        "Bosish yurakni toʻsh suyagi va umurtqa orasida siqadi.",
      ),
      l(
        "Вдох: зажмите нос, плотно обхватите рот и вдыхайте 1 секунду, пока не поднимется грудь.",
        "Rescue breath: pinch the nose, seal the mouth and blow for 1 second until the chest rises.",
        "Nafas berish: burunni qisib, ogʻizni zich qamrab oling va koʻkrak koʻtarilguncha 1 soniya puflang.",
      ),
    ]),
    signs: [
      l("Не отвечает на голос и прикосновение.", "Unresponsive to voice and touch.", "Ovoz va tegishga javob bermaydi."),
      l("Не дышит или дышит ненормально (редкие хрипящие вдохи).", "Not breathing or not breathing normally (occasional gasps).", "Nafas olmayapti yoki normal emas (kamdan-kam xirillash)."),
    ],
    steps: [
      l(
        "Убедитесь в безопасности, окликните человека. Если не отвечает — сразу звоните 103 на громкой связи.",
        "Make sure it is safe and speak to the person. If there is no response, call 103 on speakerphone at once.",
        "Xavfsizlikka ishonch hosil qiling, odamni chaqiring. Javob bermasa, darhol karnay orqali 103 ga qoʻngʻiroq qiling.",
      ),
      l(
        "Откройте дыхательные пути и проверьте дыхание до 10 секунд. Попросите кого-нибудь принести АНД (дефибриллятор).",
        "Open the airway and check breathing for up to 10 seconds. Ask someone to bring an AED.",
        "Nafas yoʻlini ochib, 10 soniyagacha nafasni tekshiring. Kimdandir AED (defibrillyator) olib kelishni soʻrang.",
      ),
      l(
        "Положите основание ладони на центр груди, вторую ладонь сверху, руки прямые, плечи над ладонями.",
        "Put the heel of one hand on the centre of the chest, the other on top, arms straight, shoulders over your hands.",
        "Bir kaft asosini koʻkrak markaziga, ikkinchisini ustiga qoʻying, qoʻllar toʻgʻri, yelkalar kaftlar ustida.",
      ),
      l(
        "Делайте 30 надавливаний на глубину 5–6 см с частотой 100–120 в минуту, давая груди полностью расправиться.",
        "Give 30 compressions 5–6 cm deep at 100–120 per minute, letting the chest fully recoil.",
        "5–6 sm chuqurlikda, daqiqasiga 100–120 marta 30 marta bosing, koʻkrak toʻliq qaytishiga imkon bering.",
      ),
      l(
        "Если обучены — 2 вдоха по 1 секунде, затем снова 30 надавливаний (30:2). Если не обучены — только непрерывные надавливания.",
        "If trained, give 2 one-second breaths, then 30 compressions again (30:2). If not trained, give continuous compressions only.",
        "Oʻqitilgan boʻlsangiz — 1 soniyadan 2 marta nafas bering, keyin yana 30 marta bosing (30:2). Oʻqitilmagan boʻlsangiz — faqat uzluksiz bosing.",
      ),
      l(
        "Как только принесут АНД — включите его и выполняйте голосовые подсказки.",
        "As soon as an AED arrives, switch it on and follow the voice prompts.",
        "AED keltirilishi bilan uni yoqing va ovozli koʻrsatmalarga amal qiling.",
      ),
      l(
        "Продолжайте, пока не приедет скорая, человек не начнёт нормально дышать или вы не выбьетесь из сил. Меняйтесь каждые 2 минуты.",
        "Continue until the ambulance arrives, the person starts breathing normally or you are exhausted. Swap rescuers every 2 minutes.",
        "Tez yordam kelguncha, odam normal nafas ola boshlaguncha yoki holdan toyguncha davom eting. Har 2 daqiqada almashing.",
      ),
    ],
    donts: [
      l("Не тратьте время на поиск пульса.", "Do not waste time looking for a pulse.", "Tomir urishini qidirishga vaqt sarflamang."),
      l("Не прерывайте надавливания дольше чем на 10 секунд.", "Do not pause compressions for more than 10 seconds.", "Bosishni 10 soniyadan ortiq toʻxtatmang."),
      l("Не бойтесь сломать рёбра — без СЛР человек погибнет.", "Do not fear breaking ribs — without CPR the person will die.", "Qovurgʻani sindirishdan qoʻrqmang — YOʻRsiz odam halok boʻladi."),
    ],
    warning: l(
      "СЛР можно делать и на кровати: уберите подушки и встаньте на колени рядом, не тратьте время на перенос на пол.",
      "CPR can be done on a bed: remove the pillows and kneel beside the person — do not lose time moving them to the floor.",
      "YOʻRni karavotda ham qilish mumkin: yostiqlarni olib, yonida tiz choʻking — polga oʻtkazishga vaqt yoʻqotmang.",
    ),
    update: l(
      "В старом пособии ритм указан как «30 надавливаний за 15–18 секунд». Сейчас ориентир — 100–120 в минуту, а необученным разрешена СЛР только надавливаниями (ERC 2025).",
      "The old manual gives “30 compressions in 15–18 seconds”. The current target is 100–120 per minute, and untrained bystanders may give compression-only CPR (ERC 2025).",
      "Eski qoʻllanmada «15–18 soniyada 30 marta bosish» deyilgan. Hozir daqiqasiga 100–120 marta, oʻqitilmaganlar faqat bosish bilan YOʻR qilishi mumkin (ERC 2025).",
    ),
    quiz: [
      {
        q: l("Какая частота надавливаний правильная?", "What is the correct compression rate?", "Bosishning toʻgʻri tezligi qanday?"),
        a: [
          l("100–120 в минуту", "100–120 per minute", "Daqiqasiga 100–120"),
          l("60–80 в минуту", "60–80 per minute", "Daqiqasiga 60–80"),
          l("140–160 в минуту", "140–160 per minute", "Daqiqasiga 140–160"),
          l("30 в минуту", "30 per minute", "Daqiqasiga 30"),
        ],
        e: l(
          "Такой ритм обеспечивает кровоток к мозгу. Помогает метроном на этой странице.",
          "This rate keeps blood flowing to the brain. Use the metronome on this page to practise.",
          "Bu tezlik miyaga qon oqimini taʼminlaydi. Ushbu sahifadagi metronom yordam beradi.",
        ),
      },
      {
        q: l("На какую глубину надавливают на грудь взрослому?", "How deep are chest compressions in an adult?", "Kattalarda koʻkrak qanchalik chuqur bosiladi?"),
        a: [
          l("5–6 см", "5–6 cm", "5–6 sm"),
          l("1–2 см", "1–2 cm", "1–2 sm"),
          l("8–10 см", "8–10 cm", "8–10 sm"),
          l("Не глубже 3 см", "No deeper than 3 cm", "3 smdan chuqur emas"),
        ],
        e: l(
          "Мелкие надавливания не выталкивают кровь из сердца, слишком глубокие травмируют.",
          "Shallow compressions do not move blood; overly deep ones cause injury.",
          "Sayoz bosish qonni haydamaydi, juda chuqur bosish shikast yetkazadi.",
        ),
      },
      {
        q: l(
          "Вы не обучены делать вдохи. Что делать при остановке сердца?",
          "You are not trained in rescue breaths. What do you do in cardiac arrest?",
          "Nafas berishni bilmaysiz. Yurak toʻxtaganda nima qilasiz?",
        ),
        a: [
          l("Непрерывные надавливания на грудь до приезда скорой", "Continuous chest compressions until help arrives", "Tez yordam kelguncha koʻkrakni uzluksiz bosish"),
          l("Ничего не делать и ждать скорую", "Do nothing and wait for the ambulance", "Hech narsa qilmay, tez yordamni kutish"),
          l("Только вдохи без надавливаний", "Breaths only, no compressions", "Bosishsiz faqat nafas berish"),
          l("Поднять ноги и брызнуть водой в лицо", "Raise the legs and splash water on the face", "Oyoqlarni koʻtarib, yuziga suv sepish"),
        ],
        e: l(
          "СЛР только надавливаниями почти удваивает шансы выжить по сравнению с бездействием.",
          "Compression-only CPR roughly doubles survival compared with doing nothing.",
          "Faqat bosish bilan YOʻR hech narsa qilmaslikka nisbatan omon qolish imkoniyatini qariyb ikki baravar oshiradi.",
        ),
      },
    ],
  },
  {
    slug: "cpr-child",
    cat: "life",
    icon: "◌",
    order: 5,
    core: true,
    title: l("СЛР у детей и младенцев", "CPR for children and infants", "Bolalar va chaqaloqlarda YOʻR"),
    summary: l(
      "Чем реанимация ребёнка отличается от взрослой: первые 5 вдохов, сила и техника надавливаний.",
      "How resuscitating a child differs from an adult: 5 initial breaths, compression force and technique.",
      "Bolani reanimatsiya qilish kattalardan nimasi bilan farq qiladi: dastlabki 5 nafas, bosish kuchi va usuli.",
    ),
    cover: unsplash(PHOTOS.cprChild),
    gallery: gal("cpr-child", [
      l(
        "Младенцу голову держат в нейтральном положении — не запрокидывают сильно.",
        "Keep an infant’s head in a neutral position — do not over-tilt.",
        "Chaqaloq boshini neytral holatda tuting — kuchli orqaga egmang.",
      ),
      l(
        "Вдох младенцу: одновременно охватите ртом его рот и нос, вдыхайте мягко.",
        "Breathing for an infant: cover the mouth and nose together and breathe gently.",
        "Chaqaloqqa nafas berish: ogʻzi va burnini birga qamrab, yumshoq puflang.",
      ),
      l(
        "На фото из пособия — надавливание двумя пальцами. Сейчас рекомендуют обхватить грудь ладонями и давить двумя большими пальцами.",
        "The manual photo shows two-finger compressions. Current guidance is to encircle the chest and press with both thumbs.",
        "Qoʻllanmadagi rasmda ikki barmoq bilan bosish koʻrsatilgan. Hozir koʻkrakni kaftlar bilan qamrab, ikki bosh barmoq bilan bosish tavsiya etiladi.",
      ),
    ]),
    signs: [
      l("Младенец — до 1 года, ребёнок — от 1 года до подросткового возраста.", "Infant — under 1 year; child — from 1 year to puberty.", "Chaqaloq — 1 yoshgacha; bola — 1 yoshdan oʻsmirlikkacha."),
      l("Не реагирует, не дышит или дышит ненормально.", "Unresponsive, not breathing or not breathing normally.", "Javob bermaydi, nafas olmaydi yoki normal emas."),
    ],
    steps: [
      l(
        "Окликните ребёнка, младенца пощекочите по стопе. Если нет реакции — позовите на помощь и звоните 103 на громкой связи.",
        "Call the child’s name; for an infant, tickle the sole of the foot. If no response, shout for help and call 103 on speaker.",
        "Bolani chaqiring, chaqaloqning tovonini qitiqlang. Javob boʻlmasa, yordamga chaqiring va karnay orqali 103 ga qoʻngʻiroq qiling.",
      ),
      l(
        "Откройте дыхательные пути: ребёнку — запрокиньте голову, младенцу — нейтральное положение головы.",
        "Open the airway: for a child tilt the head; for an infant keep the head neutral.",
        "Nafas yoʻlini oching: bolada boshni orqaga eging, chaqaloqda boshni neytral tuting.",
      ),
      l(
        "Сделайте 5 начальных вдохов по 1 секунде, следя, чтобы грудь поднималась.",
        "Give 5 initial rescue breaths of 1 second each, watching the chest rise.",
        "Har biri 1 soniyalik 5 ta dastlabki nafas bering, koʻkrak koʻtarilishini kuzating.",
      ),
      l(
        "Надавливайте на нижнюю половину грудины на 1/3 глубины груди: ребёнку — одной или двумя ладонями (около 5 см), младенцу — двумя большими пальцами, обхватив грудь (около 4 см).",
        "Compress the lower half of the breastbone to one-third of the chest depth: a child with one or two hands (about 5 cm); an infant with two thumbs, encircling the chest (about 4 cm).",
        "Toʻsh suyagining pastki yarmini koʻkrak chuqurligining 1/3 qismiga bosing: bolada bir yoki ikki kaft bilan (taxminan 5 sm), chaqaloqda koʻkrakni qamrab, ikki bosh barmoq bilan (taxminan 4 sm).",
      ),
      l(
        "Частота — 100–120 в минуту. Если обучены детской СЛР — 15 надавливаний : 2 вдоха; если нет — 30:2.",
        "Rate 100–120 per minute. If trained in paediatric CPR use 15 compressions : 2 breaths; otherwise 30:2.",
        "Tezlik — daqiqasiga 100–120. Bolalar YOʻRiga oʻqitilgan boʻlsangiz — 15 bosish : 2 nafas; aks holda — 30:2.",
      ),
      l(
        "Если есть АНД — используйте его в любом возрасте, включая младенцев.",
        "If an AED is available, use it at any age, including infants.",
        "AED boʻlsa, uni har qanday yoshda, shu jumladan chaqaloqlarda ham ishlating.",
      ),
    ],
    donts: [
      l("Не трясите младенца.", "Never shake an infant.", "Chaqaloqni silkitmang."),
      l("Не запрокидывайте сильно голову младенцу.", "Do not over-tilt an infant’s head.", "Chaqaloq boshini kuchli orqaga egmang."),
    ],
    warning: l(
      "У детей остановка сердца чаще всего вызвана нехваткой кислорода, поэтому для них так важны первые 5 вдохов.",
      "In children cardiac arrest is usually caused by lack of oxygen, which is why the first 5 breaths matter so much.",
      "Bolalarda yurak toʻxtashi koʻpincha kislorod yetishmasligidan boʻladi, shuning uchun dastlabki 5 nafas juda muhim.",
    ),
    update: l(
      "В пособии 2012 года младенцу давят двумя пальцами. По рекомендациям ERC 2025 лучше обхватить грудь и давить двумя большими пальцами; АНД разрешён для любого возраста.",
      "The 2012 manual uses two fingers for infants. ERC 2025 recommends the two-thumb encircling technique, and AEDs may be used at any age.",
      "2012-yil qoʻllanmasida chaqaloqqa ikki barmoq bilan bosiladi. ERC 2025 koʻkrakni qamrab, ikki bosh barmoq bilan bosishni tavsiya etadi; AED har qanday yoshda ruxsat etilgan.",
    ),
    quiz: [
      {
        q: l("С чего начинают СЛР ребёнку?", "How does CPR for a child begin?", "Bolada YOʻR nimadan boshlanadi?"),
        a: [
          l("С 5 начальных вдохов", "With 5 initial rescue breaths", "5 ta dastlabki nafasdan"),
          l("С 30 надавливаний", "With 30 compressions", "30 marta bosishdan"),
          l("С поиска пульса на шее в течение минуты", "With a one-minute neck pulse check", "Bir daqiqa boʻyindagi tomirni qidirishdan"),
          l("С похлопывания по спине", "With back blows", "Orqaga urishdan"),
        ],
        e: l(
          "У детей причиной остановки обычно бывает нехватка кислорода, поэтому сначала его дают.",
          "In children arrest is usually caused by lack of oxygen, so you deliver oxygen first.",
          "Bolalarda yurak toʻxtashi odatda kislorod yetishmasligidan, shuning uchun avval kislorod beriladi.",
        ),
      },
      {
        q: l(
          "Какая техника надавливаний рекомендуется младенцу?",
          "Which compression technique is recommended for an infant?",
          "Chaqaloqqa qaysi bosish usuli tavsiya etiladi?",
        ),
        a: [
          l("Обхватить грудь и давить двумя большими пальцами", "Encircle the chest and press with both thumbs", "Koʻkrakni qamrab, ikki bosh barmoq bilan bosish"),
          l("Двумя ладонями с прямыми руками", "Two hands with straight arms", "Toʻgʻri qoʻllar bilan ikki kaft"),
          l("Кулаком в центр груди", "A fist in the centre of the chest", "Koʻkrak markaziga musht bilan"),
          l("Ладонью на живот", "One palm on the abdomen", "Kaft bilan qoringa"),
        ],
        e: l(
          "Обхватывающая техника двумя большими пальцами даёт лучшую глубину и меньше утомляет.",
          "The two-thumb encircling technique gives better depth and is less tiring.",
          "Ikki bosh barmoq bilan qamrab bosish yaxshiroq chuqurlik beradi va kamroq charchatadi.",
        ),
      },
      {
        q: l("Можно ли использовать АНД у младенца?", "Can an AED be used on an infant?", "Chaqaloqda AED ishlatish mumkinmi?"),
        a: [
          l("Да, в любом возрасте", "Yes, at any age", "Ha, har qanday yoshda"),
          l("Нет, только с 8 лет", "No, only from age 8", "Yoʻq, faqat 8 yoshdan"),
          l("Только с разрешения родителей", "Only with the parents’ permission", "Faqat ota-onaning ruxsati bilan"),
          l("Только если нет взрослого АНД", "Only if no adult AED exists", "Faqat kattalar AEDi boʻlmasa"),
        ],
        e: l(
          "По рекомендациям 2025 года АНД может спасти даже младенца, лучше с детскими электродами, но можно и со взрослыми.",
          "Under the 2025 guidelines an AED can save even an infant — ideally with paediatric pads, but adult pads will do.",
          "2025-yil tavsiyalariga koʻra AED hatto chaqaloqni qutqarishi mumkin — bolalar elektrodlari bilan yaxshiroq, lekin kattalarniki ham boʻladi.",
        ),
      },
    ],
  },
  {
    slug: "choking",
    cat: "life",
    icon: "↯",
    order: 6,
    core: true,
    title: l("Удушье: инородное тело в дыхательных путях", "Choking", "Tiqilib qolish: nafas yoʻlidagi yot jism"),
    summary: l(
      "Как отличить частичную закупорку от полной и как помочь взрослому, ребёнку и младенцу.",
      "How to tell partial from complete obstruction and how to help an adult, a child or an infant.",
      "Qisman va toʻliq tiqilishni qanday farqlash va kattalar, bola va chaqaloqqa qanday yordam berish.",
    ),
    cover: cover("choking"),
    gallery: gal("choking", [
      l(
        "Пища попадает не в пищевод, а в трахею вместе с воздухом.",
        "Food goes into the windpipe with air instead of the food pipe.",
        "Ovqat qiziloʻngachga emas, havo bilan birga traxeyaga tushadi.",
      ),
      l(
        "До 5 резких ударов основанием ладони между лопатками, наклонив человека вперёд.",
        "Up to 5 sharp blows with the heel of the hand between the shoulder blades, leaning the person forward.",
        "Odamni oldinga egib, kurak suyaklari orasiga kaft asosi bilan 5 tagacha keskin zarba bering.",
      ),
      l(
        "Положение рук: кулак большим пальцем к животу, второй ладонью обхватите кулак.",
        "Hand position: fist with the thumb side against the abdomen, the other hand grasping the fist.",
        "Qoʻl holati: musht bosh barmoq tomoni bilan qoringa, ikkinchi qoʻl mushtni ushlaydi.",
      ),
      l(
        "До 5 толчков в живот: резко внутрь и вверх, между пупком и грудиной.",
        "Up to 5 abdominal thrusts: sharply inwards and upwards, between the navel and the breastbone.",
        "Qoringa 5 tagacha turtki: kindik va toʻsh suyagi orasida keskin ichkariga va yuqoriga.",
      ),
      l(
        "Если вы одни — резко надавите животом на спинку стула.",
        "If you are alone, thrust your abdomen hard against the back of a chair.",
        "Yolgʻiz boʻlsangiz, qorningiz bilan stul suyanchigʻiga keskin bosing.",
      ),
    ]),
    signs: [
      l(
        "Частичная закупорка: человек кашляет, может говорить и дышать.",
        "Partial obstruction: the person coughs and can speak and breathe.",
        "Qisman tiqilish: odam yoʻtaladi, gapira va nafas ola oladi.",
      ),
      l(
        "Полная закупорка: не может говорить, кашлять и дышать, хватается за горло, синеет.",
        "Complete obstruction: cannot speak, cough or breathe, clutches the throat, turns blue.",
        "Toʻliq tiqilish: gapira, yoʻtala va nafas ola olmaydi, tomogʻini ushlaydi, koʻkaradi.",
      ),
    ],
    steps: [
      l(
        "Спросите: «Вы подавились?» Если человек кашляет — поощряйте кашель и наблюдайте.",
        "Ask: “Are you choking?” If the person can cough, encourage coughing and watch.",
        "Soʻrang: «Tiqilib qoldingizmi?» Yoʻtalayotgan boʻlsa, yoʻtalishga undang va kuzating.",
      ),
      l(
        "Если кашель неэффективен — наклоните человека вперёд и нанесите до 5 ударов между лопатками.",
        "If coughing is ineffective, lean the person forward and give up to 5 back blows.",
        "Yoʻtal samarasiz boʻlsa, odamni oldinga egib, kuraklar orasiga 5 tagacha zarba bering.",
      ),
      l(
        "Не помогло — до 5 толчков в живот. Чередуйте 5 ударов и 5 толчков, вызовите 103.",
        "If that fails, give up to 5 abdominal thrusts. Alternate 5 blows and 5 thrusts and call 103.",
        "Yordam bermasa — qoringa 5 tagacha turtki. 5 zarba va 5 turtkini almashtiring, 103 ni chaqiring.",
      ),
      l(
        "Младенцу: положите на предплечье лицом вниз, 5 ударов по спине, затем переверните и сделайте 5 толчков в грудь двумя большими пальцами. Толчки в живот младенцам не делают.",
        "Infant: lay face down along your forearm, give 5 back blows, then turn over and give 5 chest thrusts with two thumbs. Never give abdominal thrusts to infants.",
        "Chaqaloq: bilagingizga yuzi bilan pastga yotqizib, orqasiga 5 zarba bering, keyin agʻdarib, ikki bosh barmoq bilan koʻkragiga 5 turtki bering. Chaqaloqlarga qoringa turtki berilmaydi.",
      ),
      l(
        "Если человек потерял сознание — уложите на спину, вызовите 103 и начните СЛР.",
        "If the person becomes unconscious, lay them on their back, call 103 and start CPR.",
        "Odam hushidan ketsa, chalqancha yotqizing, 103 ni chaqiring va YOʻRni boshlang.",
      ),
      l(
        "После толчков в живот человек должен показаться врачу, даже если ему стало лучше.",
        "After abdominal thrusts the person must see a doctor even if they feel fine.",
        "Qoringa turtkidan keyin odam oʻzini yaxshi his qilsa ham shifokorga koʻrinishi kerak.",
      ),
    ],
    donts: [
      l("Не лезьте пальцами в рот вслепую — можно протолкнуть предмет глубже.", "Do not sweep the mouth blindly — you may push the object deeper.", "Ogʻziga koʻr-koʻrona barmoq tiqmang — jismni chuqurroq itarishingiz mumkin."),
      l("Не стучите по спине, пока человек эффективно кашляет.", "Do not slap the back while the person is coughing effectively.", "Odam samarali yoʻtalayotganda orqasiga urmang."),
      l("Не переворачивайте младенца вниз головой за ноги.", "Do not hold an infant upside down by the legs.", "Chaqaloqni oyogʻidan ushlab, boshini pastga osiltirmang."),
    ],
    warning: l(
      "Помощь продолжают, пока предмет не выйдет, не приедет скорая или человек не потеряет сознание (тогда — СЛР).",
      "Keep going until the object comes out, the ambulance arrives or the person becomes unconscious (then start CPR).",
      "Jism chiqquncha, tez yordam kelguncha yoki odam hushidan ketguncha davom eting (keyin — YOʻR).",
    ),
    quiz: [
      {
        q: l(
          "Человек подавился, но громко кашляет и говорит. Что делать?",
          "Someone is choking but coughing loudly and talking. What do you do?",
          "Odam tiqilib qoldi, lekin baland yoʻtalyapti va gapiryapti. Nima qilasiz?",
        ),
        a: [
          l("Поощрять кашель и наблюдать", "Encourage coughing and watch", "Yoʻtalishga undab, kuzatish"),
          l("Сразу сделать 5 толчков в живот", "Give 5 abdominal thrusts at once", "Darhol qoringa 5 turtki berish"),
          l("Дать запить водой", "Give water to wash it down", "Suv ichirish"),
          l("Достать предмет пальцами", "Pull the object out with your fingers", "Jismni barmoq bilan chiqarish"),
        ],
        e: l(
          "Эффективный кашель — лучший способ вытолкнуть предмет; вмешательство может навредить.",
          "An effective cough is the best way to clear the object; intervening may cause harm.",
          "Samarali yoʻtal jismni chiqarishning eng yaxshi usuli; aralashish zarar keltirishi mumkin.",
        ),
      },
      {
        q: l(
          "Чем помогают младенцу при полной закупорке после 5 ударов по спине?",
          "After 5 back blows, what do you give an infant with complete obstruction?",
          "Toʻliq tiqilgan chaqaloqqa orqaga 5 zarbadan keyin nima qilinadi?",
        ),
        a: [
          l("5 толчков в грудь", "5 chest thrusts", "Koʻkrakka 5 turtki"),
          l("5 толчков в живот", "5 abdominal thrusts", "Qoringa 5 turtki"),
          l("Переворачивают вниз головой и трясут", "Hold upside down and shake", "Boshini pastga qilib silkitish"),
          l("Дают попить", "Give a drink", "Ichimlik berish"),
        ],
        e: l(
          "Толчки в живот у младенцев опасны для внутренних органов, поэтому делают толчки в грудь.",
          "Abdominal thrusts can injure an infant’s organs, so chest thrusts are used instead.",
          "Qoringa turtki chaqaloq ichki aʼzolariga xavfli, shuning uchun koʻkrakka turtki beriladi.",
        ),
      },
      {
        q: l(
          "Подавившийся взрослый потерял сознание. Ваши действия?",
          "A choking adult becomes unconscious. What do you do?",
          "Tiqilgan katta odam hushidan ketdi. Nima qilasiz?",
        ),
        a: [
          l("Уложить на спину, вызвать 103 и начать СЛР", "Lay on the back, call 103 and start CPR", "Chalqancha yotqizib, 103 ni chaqirib, YOʻRni boshlash"),
          l("Продолжать толчки в живот стоя", "Keep giving abdominal thrusts standing", "Turgan holda qoringa turtkini davom ettirish"),
          l("Уложить на бок и ждать", "Place on the side and wait", "Yonboshiga yotqizib kutish"),
          l("Посадить и стучать по спине", "Sit up and slap the back", "Oʻtqazib, orqasiga urish"),
        ],
        e: l(
          "Надавливания на грудь при СЛР тоже могут вытолкнуть предмет и поддерживают кровоток.",
          "CPR chest compressions can also dislodge the object and keep blood flowing.",
          "YOʻRdagi koʻkrakni bosish ham jismni chiqarishi va qon aylanishini saqlashi mumkin.",
        ),
      },
    ],
  },
  {
    slug: "heart-attack",
    cat: "life",
    icon: "♡",
    order: 7,
    core: true,
    title: l("Стенокардия и инфаркт", "Angina and heart attack", "Stenokardiya va infarkt"),
    summary: l(
      "Как распознать боль в сердце и что делать до приезда скорой.",
      "How to recognise heart pain and what to do before the ambulance arrives.",
      "Yurak ogʻrigʻini qanday tanish va tez yordam kelguncha nima qilish kerak.",
    ),
    cover: unsplash(PHOTOS.chestPain),
    gallery: galLead("heart-attack", l("Где болит при инфаркте: за грудиной, с отдачей в плечо, руку, шею и нижнюю челюсть.", "Where a heart attack hurts: behind the breastbone, spreading to the shoulder, arm, neck and jaw.", "Infarktda qayer ogʻriydi: toʻsh orqasi, yelka, qoʻl, boʻyin va jagʻga tarqaladi."), [
      l("Здоровая коронарная артерия снабжает сердце кровью.", "A healthy coronary artery supplies the heart with blood.", "Sogʻlom koronar arteriya yurakni qon bilan taʼminlaydi."),
      l(
        "Отложения на стенках артерии сужают просвет — сердцу не хватает кислорода.",
        "Deposits on the artery walls narrow it, starving the heart of oxygen.",
        "Arteriya devoridagi yogʻ toʻplanmalari uni toraytiradi — yurakka kislorod yetmaydi.",
      ),
    ]),
    signs: [
      l(
        "Давящая, сжимающая боль за грудиной; отдаёт в плечо, руку, шею, челюсть или спину.",
        "Pressing, squeezing pain behind the breastbone, spreading to the shoulder, arm, neck, jaw or back.",
        "Toʻsh orqasidagi bosuvchi, siquvchi ogʻriq; yelka, qoʻl, boʻyin, jagʻ yoki orqaga tarqaladi.",
      ),
      l("Одышка, бледная или синюшная кожа, холодный пот.", "Shortness of breath, pale or bluish skin, cold sweat.", "Hansirash, oqargan yoki koʻkargan teri, sovuq ter."),
      l("Неровный пульс, тошнота, страх.", "Irregular pulse, nausea, anxiety.", "Notekis tomir urishi, koʻngil aynishi, qoʻrquv."),
    ],
    steps: [
      l("Попросите прекратить любую нагрузку и сесть.", "Ask the person to stop all activity and sit down.", "Har qanday jismoniy harakatni toʻxtatib, oʻtirishini soʻrang."),
      l(
        "Сразу вызовите 103, если боль впервые, длится дольше нескольких минут или есть малейшее подозрение на инфаркт.",
        "Call 103 at once if the pain is new, lasts more than a few minutes, or a heart attack is suspected at all.",
        "Ogʻriq birinchi marta boʻlsa, bir necha daqiqadan uzoq davom etsa yoki infarktga ozgina shubha boʻlsa, darhol 103 ni chaqiring.",
      ),
      l(
        "Помогите сесть полусидя, ослабьте галстук и ремень, обеспечьте свежий воздух.",
        "Help them into a half-sitting position, loosen tie and belt, provide fresh air.",
        "Yarim oʻtirgan holatga keltiring, galstuk va kamarni boʻshating, toza havo bering.",
      ),
      l(
        "Помогите принять лекарство, назначенное врачом (например, нитроглицерин). По согласованию с диспетчером — разжевать аспирин, если нет аллергии.",
        "Help them take medicine prescribed by their doctor (such as nitroglycerin). If the dispatcher agrees, give aspirin to chew if there is no allergy.",
        "Shifokor buyurgan dorini (masalan, nitroglitserin) ichishga yordam bering. Dispetcher bilan kelishib, allergiya boʻlmasa, aspirinni chaynatish mumkin.",
      ),
      l(
        "Успокойте человека, не оставляйте одного, следите за дыханием. Если потеряет сознание и не дышит — СЛР.",
        "Reassure the person, stay with them and watch breathing. If they collapse and stop breathing, start CPR.",
        "Odamni tinchlantiring, yolgʻiz qoldirmang, nafasini kuzating. Hushidan ketib, nafas olmasa — YOʻR.",
      ),
    ],
    donts: [
      l("Не позволяйте человеку идти пешком или подниматься по лестнице.", "Do not let the person walk or climb stairs.", "Odamni piyoda yurishiga yoki zinadan chiqishiga yoʻl qoʻymang."),
      l("Не давайте чужие лекарства.", "Do not give someone else’s medicine.", "Boshqa birovning dorisini bermang."),
    ],
    warning: l(
      "При инфаркте погибает сердечная мышца, и каждая минута задержки увеличивает ущерб. Не ждите, что боль «пройдёт сама».",
      "In a heart attack the heart muscle is dying; every minute of delay adds damage. Do not wait for the pain to “go away”.",
      "Infarktda yurak mushagi nobud boʻladi, har bir daqiqa kechikish zararni oshiradi. Ogʻriq «oʻzi oʻtib ketishini» kutmang.",
    ),
    quiz: [
      {
        q: l("Какая боль типична для инфаркта?", "Which pain is typical of a heart attack?", "Infarkt uchun qanday ogʻriq xos?"),
        a: [
          l("Давящая за грудиной, отдаёт в руку или челюсть", "Pressing behind the breastbone, spreading to the arm or jaw", "Toʻsh orqasida bosuvchi, qoʻl yoki jagʻga tarqaladi"),
          l("Колющая при нажатии пальцем на ребро", "Sharp when pressing a rib with a finger", "Qovurgʻani barmoq bilan bosganda sanchiladi"),
          l("Только головная боль", "Headache only", "Faqat bosh ogʻrigʻi"),
          l("Боль в колене при ходьбе", "Knee pain when walking", "Yurganda tizzadagi ogʻriq"),
        ],
        e: l(
          "Сердечная боль чаще давящая и разлитая, может сопровождаться одышкой и потом.",
          "Heart pain is usually pressing and spreading, often with breathlessness and sweating.",
          "Yurak ogʻrigʻi koʻpincha bosuvchi va tarqoq, hansirash va ter bilan birga boʻladi.",
        ),
      },
      {
        q: l("Какое положение лучше при боли в сердце?", "Which position is best for chest pain?", "Yurak ogʻriganda qaysi holat yaxshiroq?"),
        a: [
          l("Полусидя, в покое", "Half-sitting, at rest", "Yarim oʻtirgan, tinch holatda"),
          l("Лёжа с поднятыми ногами", "Lying with legs raised", "Oyoqlarni koʻtarib yotgan"),
          l("Стоя, расхаживая по комнате", "Standing and walking around", "Turib, xonada yurgan"),
          l("Лёжа на животе", "Lying face down", "Qorni bilan yotgan"),
        ],
        e: l(
          "Полусидячее положение облегчает дыхание и уменьшает нагрузку на сердце.",
          "Half-sitting eases breathing and reduces the heart’s workload.",
          "Yarim oʻtirgan holat nafasni yengillashtiradi va yurak yuklamasini kamaytiradi.",
        ),
      },
      {
        q: l(
          "Когда вызывать 103 при боли в груди?",
          "When should you call 103 for chest pain?",
          "Koʻkrak ogʻriganda 103 ni qachon chaqirish kerak?",
        ),
        a: [
          l("Сразу при подозрении на инфаркт", "Immediately if a heart attack is suspected", "Infarktga shubha boʻlishi bilan darhol"),
          l("Только если человек потеряет сознание", "Only if the person loses consciousness", "Faqat odam hushidan ketsa"),
          l("Через час, если боль не пройдёт", "After an hour if the pain persists", "Ogʻriq oʻtmasa, bir soatdan keyin"),
          l("Утром, когда откроется поликлиника", "In the morning when the clinic opens", "Ertalab poliklinika ochilganda"),
        ],
        e: l("Лечение инфаркта эффективно только в первые часы.", "Heart attack treatment works best in the first hours.", "Infarktni davolash faqat dastlabki soatlarda samarali."),
      },
    ],
  },
  {
    slug: "stroke",
    cat: "life",
    icon: "◎",
    order: 8,
    core: false,
    widget: "fast",
    cover: unsplash(PHOTOS.elderHands),
    title: l("Инсульт: тест «Улыбка — Рука — Речь»", "Stroke: the FAST test", "Insult: «Tabassum — Qoʻl — Nutq» testi"),
    summary: l(
      "Быстрая проверка на инсульт и почему важно засечь время начала симптомов.",
      "A quick stroke check and why the time symptoms started matters.",
      "Insultni tez tekshirish va belgilar boshlangan vaqtni bilish nima uchun muhim.",
    ),
    signs: [
      l("Лицо: улыбка кривая, один угол рта опущен.", "Face: the smile is lopsided, one corner of the mouth droops.", "Yuz: tabassum qiyshiq, ogʻizning bir burchagi tushgan."),
      l("Руки: одна рука опускается, если поднять обе.", "Arms: one arm drifts down when both are raised.", "Qoʻllar: ikkalasi koʻtarilganda bittasi tushib ketadi."),
      l("Речь: невнятная, человек не может повторить простую фразу.", "Speech: slurred, cannot repeat a simple phrase.", "Nutq: tushunarsiz, oddiy iborani takrorlay olmaydi."),
      l("Внезапная сильная головная боль, нарушение зрения или равновесия.", "Sudden severe headache, loss of vision or balance.", "Toʻsatdan kuchli bosh ogʻrigʻi, koʻrish yoki muvozanat buzilishi."),
    ],
    steps: [
      l("Попросите улыбнуться, поднять обе руки и повторить фразу.", "Ask the person to smile, raise both arms and repeat a phrase.", "Tabassum qilishni, ikki qoʻlni koʻtarishni va iborani takrorlashni soʻrang."),
      l("Если хотя бы один признак есть — немедленно звоните 103 и скажите «подозрение на инсульт».", "If even one sign is present, call 103 at once and say “suspected stroke”.", "Bitta belgi boʻlsa ham, darhol 103 ga qoʻngʻiroq qilib, «insultga shubha» deng."),
      l("Запомните или запишите время, когда появились симптомы.", "Note the time the symptoms began.", "Belgilar paydo boʻlgan vaqtni eslab qoling yoki yozib qoʻying."),
      l("Уложите с приподнятой головой, если в сознании; без сознания и дышит — восстановительное положение.", "If conscious, lay down with the head raised; if unconscious and breathing, use the recovery position.", "Hushida boʻlsa, boshini koʻtarib yotqizing; hushsiz va nafas olsa — tiklovchi holat."),
    ],
    donts: [
      l("Не давайте есть, пить и лекарства — может нарушиться глотание.", "Give nothing to eat, drink or any medicine — swallowing may be impaired.", "Ovqat, ichimlik va dori bermang — yutish buzilgan boʻlishi mumkin."),
    ],
    warning: l(
      "Лекарства, растворяющие тромб, работают только в первые часы. Время начала симптомов — важнейшая информация для врачей.",
      "Clot-dissolving treatment only works in the first hours. The time symptoms started is vital for doctors.",
      "Trombni eritadigan dorilar faqat dastlabki soatlarda ishlaydi. Belgilar boshlangan vaqt shifokorlar uchun eng muhim maʼlumot.",
    ),
    quiz: [
      {
        q: l("Что проверяет тест «Улыбка — Рука — Речь»?", "What does the FAST test check?", "«Tabassum — Qoʻl — Nutq» testi nimani tekshiradi?"),
        a: [
          l("Признаки инсульта", "Signs of a stroke", "Insult belgilarini"),
          l("Признаки перелома руки", "Signs of a broken arm", "Qoʻl sinishi belgilarini"),
          l("Уровень сахара в крови", "Blood sugar level", "Qondagi qand miqdorini"),
          l("Наличие температуры", "Whether there is a fever", "Isitma bor-yoʻqligini"),
        ],
        e: l("Перекос лица, слабость руки и нарушение речи — главные признаки инсульта.", "A drooping face, arm weakness and speech problems are the key stroke signs.", "Yuz qiyshayishi, qoʻl holsizligi va nutq buzilishi — insultning asosiy belgilari."),
      },
      {
        q: l("Что обязательно сообщить скорой при подозрении на инсульт?", "What must you tell the ambulance about a suspected stroke?", "Insultga shubha boʻlganda tez yordamga nimani albatta aytish kerak?"),
        a: [
          l("Время начала симптомов", "When the symptoms started", "Belgilar boshlangan vaqtni"),
          l("Что человек ел на завтрак", "What the person had for breakfast", "Odam nonushtada nima yeganini"),
          l("Группу крови", "Their blood group", "Qon guruhini"),
          l("Рост и вес", "Height and weight", "Boʻyi va vaznini"),
        ],
        e: l("От времени начала зависит, можно ли применить лечение, растворяющее тромб.", "The onset time decides whether clot-dissolving treatment can be used.", "Boshlanish vaqtiga qarab trombni eritadigan davolashni qoʻllash mumkinligi hal qilinadi."),
      },
      {
        q: l("Можно ли дать воды человеку с признаками инсульта?", "Can you give water to someone with stroke signs?", "Insult belgilari bor odamga suv berish mumkinmi?"),
        a: [
          l("Нет, глотание может быть нарушено", "No, swallowing may be impaired", "Yoʻq, yutish buzilgan boʻlishi mumkin"),
          l("Да, чтобы снизить давление", "Yes, to lower blood pressure", "Ha, qon bosimini tushirish uchun"),
          l("Да, с таблеткой от головной боли", "Yes, with a headache tablet", "Ha, bosh ogʻrigʻi tabletkasi bilan"),
          l("Только сладкий чай", "Only sweet tea", "Faqat shirin choy"),
        ],
        e: l("Человек может поперхнуться, а жидкость попадёт в лёгкие.", "The person may choke and liquid can enter the lungs.", "Odam tiqilib qolishi, suyuqlik oʻpkaga tushishi mumkin."),
      },
    ],
  },
  {
    slug: "shock",
    cat: "life",
    icon: "◇",
    order: 9,
    core: true,
    title: l("Шок", "Shock", "Shok"),
    summary: l(
      "Опасное состояние при большой потере крови или тяжёлой травме: признаки и помощь.",
      "A dangerous condition after major blood loss or serious injury: signs and care.",
      "Koʻp qon yoʻqotish yoki ogʻir jarohatdan keyingi xavfli holat: belgilari va yordam.",
    ),
    cover: cover("shock"),
    signs: [
      l("Бледная, холодная, влажная кожа, серые губы.", "Pale, cold, clammy skin, grey lips.", "Oqargan, sovuq, nam teri, kulrang lablar."),
      l("Частое поверхностное дыхание, частый пульс.", "Rapid shallow breathing, rapid pulse.", "Tez va yuzaki nafas, tez tomir urishi."),
      l("Беспокойство, сильная жажда, головокружение, слабость.", "Anxiety, extreme thirst, dizziness, weakness.", "Bezovtalik, kuchli chanqoq, bosh aylanishi, holsizlik."),
      l("Спутанность или потеря сознания.", "Confusion or loss of consciousness.", "Hush chalkashishi yoki yoʻqolishi."),
    ],
    steps: [
      l("Устраните причину, если можете: остановите кровотечение.", "Treat the cause if you can: stop the bleeding.", "Iloji boʻlsa, sababni bartaraf eting: qon ketishini toʻxtating."),
      l("Вызовите 103.", "Call 103.", "103 ga qoʻngʻiroq qiling."),
      l(
        "Уложите на спину. Если нет травм ног, таза и позвоночника — приподнимите ноги.",
        "Lay the person on their back. If there are no leg, pelvis or spine injuries, raise the legs.",
        "Chalqancha yotqizing. Oyoq, chanoq va umurtqa jarohati boʻlmasa, oyoqlarni koʻtaring.",
      ),
      l("Укройте одеялом или одеждой, защитите от холода снизу.", "Cover with a blanket or clothing and protect from the cold ground.", "Adyol yoki kiyim bilan yoping, ostidan sovuqdan himoyalang."),
      l("Успокаивайте, следите за дыханием и сознанием.", "Reassure the person and monitor breathing and consciousness.", "Tinchlantiring, nafas va hushini kuzating."),
    ],
    donts: [
      l("Не давайте есть, пить, алкоголь и лекарства.", "Do not give food, drink, alcohol or medicine.", "Ovqat, ichimlik, spirtli ichimlik va dori bermang."),
      l("Не оставляйте человека одного.", "Do not leave the person alone.", "Odamni yolgʻiz qoldirmang."),
    ],
    warning: l("Шок — угроза жизни. Даже если человек «держится», его состояние может резко ухудшиться.", "Shock is life-threatening. Even if the person seems to be coping, they can deteriorate quickly.", "Shok hayotga xavf soladi. Odam «chidab turgan» boʻlsa ham, ahvoli keskin yomonlashishi mumkin."),
    update: l(
      "В пособии сказано «уложить так, чтобы голова была ниже тела». Сейчас советуют просто уложить на спину и приподнять ноги, если нет травм.",
      "The manual says to lay the person “with the head lower than the body”. Current advice is simply to lay them flat and raise the legs if there are no injuries.",
      "Qoʻllanmada «boshi tanadan pastroq qilib yotqizish» deyilgan. Hozir shunchaki chalqancha yotqizib, jarohat boʻlmasa oyoqlarni koʻtarish tavsiya etiladi.",
    ),
    quiz: [
      {
        q: l("Какой признак характерен для шока?", "Which is a sign of shock?", "Qaysi belgi shokka xos?"),
        a: [
          l("Бледная холодная влажная кожа", "Pale, cold, clammy skin", "Oqargan, sovuq, nam teri"),
          l("Горячая красная сухая кожа", "Hot, red, dry skin", "Issiq, qizil, quruq teri"),
          l("Медленный ровный пульс", "A slow, steady pulse", "Sekin, tekis tomir urishi"),
          l("Хорошее самочувствие и аппетит", "Feeling well with a good appetite", "Yaxshi kayfiyat va ishtaha"),
        ],
        e: l("Кровь уходит от кожи к жизненно важным органам, поэтому кожа бледнеет и холодеет.", "Blood is diverted from the skin to vital organs, so the skin turns pale and cold.", "Qon teridan hayotiy aʼzolarga yoʻnaladi, shuning uchun teri oqarib, soviydi."),
      },
      {
        q: l("Можно ли дать воды человеку в шоке?", "Can you give water to someone in shock?", "Shokdagi odamga suv berish mumkinmi?"),
        a: [
          l("Нет, ничего внутрь", "No, nothing by mouth", "Yoʻq, ichiga hech narsa"),
          l("Да, как можно больше", "Yes, as much as possible", "Ha, imkon qadar koʻp"),
          l("Только крепкий чай", "Only strong tea", "Faqat achchiq choy"),
          l("Только немного алкоголя для согрева", "Only a little alcohol to warm up", "Faqat isinish uchun ozgina spirtli ichimlik"),
        ],
        e: l("Человеку может понадобиться операция под наркозом, а питьё вызывает рвоту.", "The person may need surgery under anaesthesia, and drinking can cause vomiting.", "Odamga narkoz ostida operatsiya kerak boʻlishi mumkin, ichish qusishga olib keladi."),
      },
      {
        q: l("Когда не стоит поднимать ноги при шоке?", "When should you not raise the legs in shock?", "Shokda qachon oyoqlarni koʻtarmaslik kerak?"),
        a: [
          l("При травме ног, таза или позвоночника", "With leg, pelvis or spine injuries", "Oyoq, chanoq yoki umurtqa jarohatida"),
          l("Если человек замёрз", "If the person is cold", "Odam sovqotgan boʻlsa"),
          l("Если человек в сознании", "If the person is conscious", "Odam hushida boʻlsa"),
          l("Всегда нужно поднимать", "You should always raise them", "Har doim koʻtarish kerak"),
        ],
        e: l("Движение повреждённых костей усилит боль и кровотечение.", "Moving injured bones increases pain and bleeding.", "Shikastlangan suyaklarni siljitish ogʻriq va qon ketishini kuchaytiradi."),
      },
    ],
  },
  {
    slug: "bleeding",
    cat: "life",
    icon: "●",
    order: 10,
    core: true,
    title: l("Кровотечение", "Bleeding", "Qon ketishi"),
    summary: l(
      "Как остановить наружное кровотечение, когда нужен жгут и как распознать внутреннее.",
      "How to stop external bleeding, when a tourniquet is needed and how to recognise internal bleeding.",
      "Tashqi qon ketishini qanday toʻxtatish, qachon jgut kerak va ichki qon ketishini qanday tanish.",
    ),
    cover: cover("bleeding"),
    gallery: gal("bleeding", [
      l(
        "Прямое давление на рану — главный способ остановить кровь. На фото рука ещё и поднята: сейчас это не обязательно.",
        "Direct pressure on the wound is the main way to stop bleeding. The arm is also raised in the photo; this is no longer required.",
        "Yaraga toʻgʻridan-toʻgʻri bosim — qonni toʻxtatishning asosiy usuli. Rasmda qoʻl ham koʻtarilgan; hozir bu shart emas.",
      ),
    ]),
    signs: [
      l("Наружное: кровь из раны, иногда пульсирующей струёй.", "External: blood from a wound, sometimes spurting.", "Tashqi: yaradan qon, baʼzan otilib chiqadi."),
      l(
        "Внутреннее: после удара — синяки, боль и напряжение живота, рвота с кровью, признаки шока.",
        "Internal: after a blow — bruising, a painful tense abdomen, vomiting blood, signs of shock.",
        "Ichki: zarbadan keyin — koʻkarishlar, qorindagi ogʻriq va taranglik, qon aralash qusish, shok belgilari.",
      ),
    ],
    steps: [
      l(
        "Защитите руки перчатками или пакетом. После помощи вымойте руки с мылом.",
        "Protect your hands with gloves or a plastic bag. Wash your hands with soap afterwards.",
        "Qoʻllaringizni qoʻlqop yoki paket bilan himoyalang. Yordamdan keyin qoʻlni sovun bilan yuving.",
      ),
      l(
        "Прижмите рану чистой салфеткой или тканью и сильно давите, не отпуская.",
        "Press a clean pad or cloth firmly on the wound and keep pressing.",
        "Yaraga toza salfetka yoki mato bosib, qoʻyib yubormasdan kuchli bosing.",
      ),
      l(
        "Наложите давящую повязку. Если промокла — не снимайте, добавьте сверху ещё слой.",
        "Apply a pressure bandage. If blood soaks through, do not remove it — add another layer on top.",
        "Bosuvchi bogʻlam qoʻying. Ivib ketsa, olib tashlamang — ustidan yana bir qavat qoʻying.",
      ),
      l(
        "Если кровотечение из руки или ноги угрожает жизни и давление не помогает — наложите жгут выше раны и запишите время.",
        "If limb bleeding is life-threatening and pressure fails, apply a tourniquet above the wound and note the time.",
        "Qoʻl yoki oyoqdan qon ketishi hayotga xavf solsa va bosim yordam bermasa, yara ustidan jgut qoʻying va vaqtni yozing.",
      ),
      l(
        "Вызовите 103. При внутреннем кровотечении — уложите, укройте, холод на место удара, ничего не давайте внутрь.",
        "Call 103. For internal bleeding: lay the person down, cover them, apply cold to the injury and give nothing by mouth.",
        "103 ni chaqiring. Ichki qon ketishida — yotqizing, yoping, zarba joyiga sovuq qoʻying, ichiga hech narsa bermang.",
      ),
    ],
    donts: [
      l("Не снимайте пропитавшуюся повязку.", "Do not remove a soaked dressing.", "Qonga botgan bogʻlamni olib tashlamang."),
      l("Не ослабляйте наложенный жгут до приезда медиков.", "Do not loosen a tourniquet before medics arrive.", "Qoʻyilgan jgutni shifokorlar kelguncha boʻshatmang."),
      l("Не прикасайтесь к ране голыми руками.", "Do not touch the wound with bare hands.", "Yaraga yalangʻoch qoʻl bilan tegmang."),
    ],
    warning: l(
      "Сильное кровотечение может убить за несколько минут — останавливать его нужно раньше всего остального.",
      "Heavy bleeding can kill within minutes — stop it before anything else.",
      "Kuchli qon ketishi bir necha daqiqada oʻldirishi mumkin — uni hammadan oldin toʻxtatish kerak.",
    ),
    update: l(
      "В пособии рекомендовано поднимать конечность. По ERC 2025 главное — прямое давление, а при угрозе жизни — жгут; подъём конечности больше не обязателен.",
      "The manual recommends raising the limb. Under ERC 2025 the key is direct pressure and, if life-threatening, a tourniquet; raising the limb is no longer required.",
      "Qoʻllanmada aʼzoni koʻtarish tavsiya etilgan. ERC 2025 boʻyicha asosiysi — toʻgʻridan-toʻgʻri bosim, hayotga xavf boʻlsa — jgut; aʼzoni koʻtarish endi shart emas.",
    ),
    quiz: [
      {
        q: l("Главный способ остановить наружное кровотечение?", "What is the main way to stop external bleeding?", "Tashqi qon ketishini toʻxtatishning asosiy usuli?"),
        a: [
          l("Сильное прямое давление на рану", "Firm direct pressure on the wound", "Yaraga kuchli toʻgʻridan-toʻgʻri bosim"),
          l("Промыть рану спиртом", "Wash the wound with alcohol", "Yarani spirt bilan yuvish"),
          l("Засыпать рану сахаром", "Pour sugar on the wound", "Yaraga shakar sepish"),
          l("Положить на рану лёд без ткани", "Put ice directly on the wound", "Yaraga matosiz muz qoʻyish"),
        ],
        e: l("Давление пережимает сосуды и даёт крови свернуться.", "Pressure compresses the vessels and lets the blood clot.", "Bosim tomirlarni siqadi va qonning ivishiga imkon beradi."),
      },
      {
        q: l("Повязка пропиталась кровью. Что делать?", "The dressing is soaked with blood. What do you do?", "Bogʻlam qonga botdi. Nima qilasiz?"),
        a: [
          l("Наложить сверху ещё слой и давить", "Add another layer on top and keep pressing", "Ustidan yana qavat qoʻyib, bosishni davom ettirish"),
          l("Снять и наложить новую", "Remove it and apply a new one", "Olib tashlab, yangisini qoʻyish"),
          l("Снять и промыть рану", "Remove it and wash the wound", "Olib tashlab, yarani yuvish"),
          l("Ослабить, чтобы кровь «стекла»", "Loosen it so the blood can drain", "Qon «oqib ketishi» uchun boʻshatish"),
        ],
        e: l("Снятие повязки срывает образовавшийся сгусток, и кровотечение усиливается.", "Removing the dressing pulls off the clot and the bleeding increases.", "Bogʻlamni olish hosil boʻlgan laxtani uzadi va qon ketishi kuchayadi."),
      },
      {
        q: l("Когда накладывают жгут?", "When is a tourniquet used?", "Jgut qachon qoʻyiladi?"),
        a: [
          l("При угрожающем жизни кровотечении из конечности, если давление не помогает", "For life-threatening limb bleeding when pressure fails", "Aʼzodan hayotga xavfli qon ketishida, bosim yordam bermasa"),
          l("При любой царапине", "For any scratch", "Har qanday tirnalishda"),
          l("При носовом кровотечении", "For a nosebleed", "Burun qonashida"),
          l("При внутреннем кровотечении в животе", "For internal bleeding in the abdomen", "Qorindagi ichki qon ketishida"),
        ],
        e: l("Жгут — крайняя мера для конечностей; обязательно запишите время наложения.", "A tourniquet is a last resort for limbs; always note the time it was applied.", "Jgut aʼzolar uchun oxirgi chora; qoʻyilgan vaqtni albatta yozing."),
      },
    ],
  },
];
