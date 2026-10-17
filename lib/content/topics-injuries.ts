import { l, type Topic } from "../types";
import { cover, gal } from "./helpers";

export const injuryTopics: Topic[] = [
  {
    slug: "wounds",
    cat: "injuries",
    icon: "▰",
    order: 11,
    core: true,
    title: l("Раны и повязки", "Wounds and dressings", "Yaralar va bogʻlamlar"),
    summary: l(
      "Как обработать небольшую рану, правила наложения повязок и что должно быть под рукой.",
      "How to care for a small wound, the rules of bandaging and what to have at hand.",
      "Kichik yarani qanday parvarish qilish, bogʻlam qoʻyish qoidalari va qoʻl ostida nima boʻlishi kerak.",
    ),
    cover: cover("wounds"),
    gallery: gal("wounds", [
      l("Повязка на голову: бинт закрепляют кругом, а затем ходами через темя.", "Head bandage: secure with turns around the head, then over the crown.", "Bosh bogʻlami: bint bosh atrofida aylantirib, keyin tepa orqali mahkamlanadi."),
      l("Косынка: основание, вершина и два конца — универсальный перевязочный материал.", "Triangular bandage: base, point and two ends — a versatile dressing.", "Uchburchak roʻmol: asosi, uchi va ikki uchi — universal bogʻlov materiali."),
      l("Индивидуальный перевязочный пакет — стерильная подушечка с бинтом.", "Individual dressing pack — a sterile pad with a bandage.", "Individual bogʻlov paketi — bintli steril yostiqcha."),
      l("Виды повязок и фиксации на разных частях тела.", "Types of bandages and how to secure them on different body parts.", "Tananing turli qismlarida bogʻlam turlari va mahkamlash."),
    ]),
    signs: [
      l("Цели повязки: остановить кровь, защитить рану от грязи и инфекции.", "A dressing stops bleeding and protects the wound from dirt and infection.", "Bogʻlam qonni toʻxtatadi, yarani kir va infeksiyadan himoya qiladi."),
      l("Повязка также фиксирует шины и ограничивает движение.", "It also holds splints in place and limits movement.", "Shuningdek, shinalarni mahkamlaydi va harakatni cheklaydi."),
    ],
    steps: [
      l("Вымойте руки с мылом или обработайте антисептиком, наденьте перчатки.", "Wash your hands or use antiseptic and put on gloves.", "Qoʻlni sovun bilan yuving yoki antiseptik surting, qoʻlqop kiying."),
      l(
        "Небольшую поверхностную рану аккуратно промойте чистой водой с мылом.",
        "Gently wash a small, superficial wound with clean water and soap.",
        "Kichik yuzaki yarani toza suv va sovun bilan ehtiyotkorlik bilan yuving.",
      ),
      l(
        "Закройте стерильной салфеткой, захватив 2 см кожи вокруг, или пластырем с подушечкой.",
        "Cover with a sterile pad overlapping the skin by 2 cm, or with a plaster.",
        "Atrofdagi 2 sm terini qamrab steril salfetka yoki yostiqchali plastir bilan yoping.",
      ),
      l(
        "Бинтуйте от узкой части конечности к широкой, конечность — в удобном полусогнутом положении.",
        "Bandage from the narrow part of the limb towards the wider part, with the limb relaxed and half bent.",
        "Aʼzoni boʻshashgan, yarim bukilgan holatda tutib, torroq qismidan kengroq qismiga qarab bintlang.",
      ),
      l(
        "Закрепите конец бинта и проверьте кровообращение ниже повязки: цвет, тепло, чувствительность.",
        "Secure the end and check circulation below the bandage: colour, warmth, feeling.",
        "Bint uchini mahkamlang va bogʻlamdan pastdagi qon aylanishini tekshiring: rangi, issiqligi, sezgisi.",
      ),
      l(
        "Большие раны (больше 2–2,5 см) закройте давящей повязкой и направьте к врачу или вызовите 103.",
        "Cover large wounds (over 2–2.5 cm) with a pressure dressing and seek a doctor or call 103.",
        "Katta yaralarni (2–2,5 smdan katta) bosuvchi bogʻlam bilan yoping va shifokorga yuboring yoki 103 ni chaqiring.",
      ),
    ],
    donts: [
      l("Не заливайте рану йодом или спиртом.", "Do not pour iodine or alcohol into the wound.", "Yaraga yod yoki spirt quymang."),
      l("Не касайтесь стерильной стороны салфетки.", "Do not touch the sterile side of the pad.", "Salfetkaning steril tomoniga tegmang."),
      l("Не бинтуйте слишком туго.", "Do not bandage too tightly.", "Juda qattiq bintlamang."),
    ],
    callIf: [
      l(
        "Глубокая, рваная, укушенная или сильно загрязнённая рана — нужен врач и, возможно, прививка от столбняка.",
        "Deep, torn, bitten or heavily soiled wounds need a doctor and possibly a tetanus shot.",
        "Chuqur, yirtilgan, tishlangan yoki juda ifloslangan yaraga shifokor va ehtimol qoqsholga qarshi emlash kerak.",
      ),
    ],
    warning: l(
      "Если пальцы ниже повязки посинели, похолодели или онемели — ослабьте бинт.",
      "If the fingers or toes below the bandage turn blue, cold or numb, loosen it.",
      "Bogʻlamdan pastdagi barmoqlar koʻkarsa, sovusa yoki uvishsa, bintni boʻshating.",
    ),
    quiz: [
      {
        q: l("Как правильно бинтовать конечность?", "How should a limb be bandaged?", "Aʼzoni qanday toʻgʻri bintlash kerak?"),
        a: [
          l("От узкой части к широкой", "From the narrow part to the wide part", "Tor qismdan keng qismga"),
          l("От широкой части к узкой", "From the wide part to the narrow part", "Keng qismdan tor qismga"),
          l("Только восьмёркой вокруг сустава", "Only figure-of-eight around a joint", "Faqat boʻgʻim atrofida sakkizsimon"),
          l("В любом направлении, главное туго", "Any direction, as long as it is tight", "Istalgan yoʻnalishda, faqat qattiq boʻlsin"),
        ],
        e: l("Так бинт не сползает по мере расширения конечности.", "This stops the bandage slipping as the limb widens.", "Shunda aʼzo kengaygan sari bint sirgʻalib ketmaydi."),
      },
      {
        q: l("Что проверить после наложения повязки?", "What should you check after bandaging?", "Bogʻlam qoʻygandan keyin nimani tekshirish kerak?"),
        a: [
          l("Кровообращение ниже повязки", "Circulation below the bandage", "Bogʻlamdan pastdagi qon aylanishini"),
          l("Температуру тела под мышкой", "Underarm temperature", "Qoʻltiq ostidagi harorat"),
          l("Цвет бинта", "The colour of the bandage", "Bint rangini"),
          l("Есть ли у бинта срок годности", "The bandage expiry date", "Bintning yaroqlilik muddatini"),
        ],
        e: l("Слишком тугая повязка нарушает кровоток — пальцы синеют и немеют.", "A tight bandage cuts off blood flow — fingers turn blue and numb.", "Qattiq bogʻlam qon oqimini buzadi — barmoqlar koʻkarib, uvishadi."),
      },
      {
        q: l("Чем промыть небольшую ссадину?", "What should you clean a small graze with?", "Kichik shilinishni nima bilan yuvish kerak?"),
        a: [
          l("Чистой водой с мылом", "Clean water and soap", "Toza suv va sovun bilan"),
          l("Спиртом прямо в рану", "Alcohol directly into the wound", "Yaraga toʻgʻridan-toʻgʻri spirt bilan"),
          l("Водой из лужи", "Puddle water", "Koʻlmak suvi bilan"),
          l("Чаем или кофе", "Tea or coffee", "Choy yoki qahva bilan"),
        ],
        e: l("Вода смывает грязь без повреждения тканей, спирт обжигает рану.", "Water flushes dirt without damaging tissue; alcohol burns the wound.", "Suv toʻqimani shikastlamasdan kirni yuvadi, spirt yarani kuydiradi."),
      },
    ],
  },
  {
    slug: "foreign-object",
    cat: "injuries",
    icon: "✕",
    order: 12,
    core: false,
    title: l("Предмет в ране и ампутация", "Embedded objects and amputation", "Yaradagi jism va amputatsiya"),
    summary: l(
      "Почему нельзя вынимать застрявший предмет и как сохранить отделённую часть тела.",
      "Why you must not remove an embedded object and how to preserve an amputated part.",
      "Nima uchun qadalgan jismni chiqarib boʻlmaydi va ajralgan tana qismini qanday saqlash kerak.",
    ),
    cover: cover("foreign-object"),
    gallery: gal("foreign-object", [
      l("Объёмные салфетки вокруг предмета фиксируют его на месте.", "Bulky pads around the object hold it in place.", "Jism atrofidagi hajmli salfetkalar uni joyida ushlab turadi."),
      l(
        "Отделённую часть — в чистую влажную ткань, затем в пакет, пакет — в воду со льдом.",
        "Amputated part: wrap in a clean damp cloth, place in a bag, then put the bag in iced water.",
        "Ajralgan qism — toza nam matoga, keyin paketga, paketni muzli suvga.",
      ),
    ]),
    steps: [
      l("Не вынимайте застрявший предмет — он может перекрывать сосуд.", "Do not remove an embedded object — it may be plugging a blood vessel.", "Qadalgan jismni chiqarmang — u qon tomirini berkitib turgan boʻlishi mumkin."),
      l(
        "Давите на края раны вокруг предмета, обложите его объёмными салфетками.",
        "Press around the edges of the wound and pack bulky pads around the object.",
        "Yara chetlarini jism atrofida bosing, jismni hajmli salfetkalar bilan oʻrang.",
      ),
      l("Забинтуйте вокруг предмета, не давя на него, и вызовите 103.", "Bandage around the object without pressing on it and call 103.", "Jismni bosmasdan uning atrofini bintlang va 103 ni chaqiring."),
      l(
        "При ампутации остановите кровотечение (давящая повязка или жгут), успокойте, примите противошоковые меры.",
        "For amputation, stop the bleeding (pressure bandage or tourniquet), reassure, treat for shock.",
        "Amputatsiyada qon ketishini toʻxtating (bosuvchi bogʻlam yoki jgut), tinchlantiring, shokka qarshi choralar koʻring.",
      ),
      l(
        "Отделённую часть заверните в чистую влажную ткань, положите в водонепроницаемый пакет, а его — в холодную воду со льдом.",
        "Wrap the severed part in a clean damp cloth, put it in a watertight bag and place the bag in cold water with ice.",
        "Ajralgan qismni toza nam matoga oʻrang, suv oʻtkazmaydigan paketga soling, uni muzli sovuq suvga qoʻying.",
      ),
      l("Подпишите время травмы и имя, передайте вместе с пострадавшим.", "Label with the time of injury and the name and send it with the casualty.", "Jarohat vaqti va ismni yozib, jabrlanuvchi bilan birga yuboring."),
    ],
    donts: [
      l("Не кладите отделённую часть прямо на лёд.", "Do not put the severed part directly on ice.", "Ajralgan qismni toʻgʻridan-toʻgʻri muzga qoʻymang."),
      l("Не мойте отделённую часть.", "Do not wash the severed part.", "Ajralgan qismni yuvmang."),
    ],
    warning: l(
      "Любое движение застрявшего предмета повреждает ткани изнутри и усиливает кровотечение.",
      "Any movement of an embedded object damages tissue inside and increases bleeding.",
      "Qadalgan jismning har qanday harakati ichki toʻqimalarni shikastlaydi va qon ketishini kuchaytiradi.",
    ),
    quiz: [
      {
        q: l("Из раны торчит нож. Что делать?", "A knife is sticking out of a wound. What do you do?", "Yaradan pichoq chiqib turibdi. Nima qilasiz?"),
        a: [
          l("Зафиксировать его салфетками и вызвать 103", "Secure it with pads and call 103", "Salfetkalar bilan mahkamlab, 103 ni chaqirish"),
          l("Быстро вытащить", "Pull it out quickly", "Tezda sugʻurib olish"),
          l("Повернуть и вытащить медленно", "Twist and pull it out slowly", "Burab, sekin chiqarish"),
          l("Обрезать рукоятку", "Cut off the handle", "Dastasini kesib tashlash"),
        ],
        e: l("Предмет может закрывать повреждённый сосуд — без него начнётся сильное кровотечение.", "The object may be plugging a vessel — removing it can cause heavy bleeding.", "Jism shikastlangan tomirni berkitib turishi mumkin — uni olsangiz kuchli qon ketadi."),
      },
      {
        q: l("Как перевозить отделённый палец?", "How should an amputated finger be transported?", "Ajralgan barmoqni qanday olib borish kerak?"),
        a: [
          l("Во влажной ткани, в пакете, пакет — в воде со льдом", "In a damp cloth in a bag, the bag in iced water", "Nam matoda, paketda, paket muzli suvda"),
          l("Прямо на льду без упаковки", "Directly on ice without wrapping", "Oʻramasdan toʻgʻridan-toʻgʻri muzda"),
          l("В стакане со спиртом", "In a glass of alcohol", "Spirtli stakanda"),
          l("В кармане пострадавшего", "In the casualty’s pocket", "Jabrlanuvchining choʻntagida"),
        ],
        e: l("Холод сохраняет ткани, а прямой контакт со льдом их повреждает.", "Cold preserves tissue, but direct contact with ice damages it.", "Sovuq toʻqimani saqlaydi, muzga toʻgʻridan-toʻgʻri tegish esa uni shikastlaydi."),
      },
      {
        q: l("Что записать на пакете с отделённой частью?", "What should you write on the bag with the severed part?", "Ajralgan qism solingan paketga nima yoziladi?"),
        a: [
          l("Время травмы и имя пострадавшего", "Time of injury and the casualty’s name", "Jarohat vaqti va jabrlanuvchi ismi"),
          l("Своё имя и телефон", "Your own name and phone", "Oʻz ismingiz va telefoningiz"),
          l("Название больницы", "The hospital name", "Shifoxona nomi"),
          l("Ничего не нужно", "Nothing is needed", "Hech narsa kerak emas"),
        ],
        e: l("Хирургам важно знать, сколько времени прошло с момента травмы.", "Surgeons need to know how much time has passed since the injury.", "Jarrohlar jarohatdan beri qancha vaqt oʻtganini bilishi muhim."),
      },
    ],
  },
  {
    slug: "chest-abdomen",
    cat: "injuries",
    icon: "◫",
    order: 13,
    core: false,
    title: l("Ранения груди и живота", "Chest and abdominal wounds", "Koʻkrak va qorin jarohatlari"),
    summary: l(
      "Проникающие ранения грудной клетки и живота: признаки и безопасная помощь.",
      "Penetrating chest and abdominal wounds: signs and safe care.",
      "Koʻkrak qafasi va qoringa kirib boruvchi jarohatlar: belgilari va xavfsiz yordam.",
    ),
    cover: cover("chest-abdomen"),
    gallery: gal("chest-abdomen", [
      l(
        "При ранении живота — на спину с согнутыми коленями (если рана не продольная).",
        "Abdominal wound: lie on the back with knees bent (unless the wound runs lengthwise).",
        "Qorin jarohatida — tizzalarni bukib chalqancha (agar yara boʻylama boʻlmasa).",
      ),
    ]),
    signs: [
      l("Грудь: затруднённое дыхание, «сосущий» звук из раны, кровохарканье.", "Chest: difficult breathing, a sucking sound from the wound, coughing blood.", "Koʻkrak: nafas qiyinlashuvi, yaradan «soʻruvchi» tovush, qon tupurish."),
      l("Живот: боль, напряжённый вздутый живот, жажда, тошнота, признаки внутреннего кровотечения.", "Abdomen: pain, a tense swollen belly, thirst, nausea, signs of internal bleeding.", "Qorin: ogʻriq, tarang shishgan qorin, chanqoq, koʻngil aynishi, ichki qon ketish belgilari."),
    ],
    steps: [
      l("Немедленно вызовите 103.", "Call 103 immediately.", "Darhol 103 ni chaqiring."),
      l(
        "Ранение груди: оставьте рану открытой или закройте неплотной (не герметичной) повязкой; кровотечение останавливайте прямым давлением.",
        "Chest wound: leave it open to the air or cover with a non-airtight dressing; control bleeding with direct pressure.",
        "Koʻkrak jarohati: yarani ochiq qoldiring yoki havo oʻtkazadigan bogʻlam bilan yoping; qonni toʻgʻridan-toʻgʻri bosim bilan toʻxtating.",
      ),
      l(
        "Помогите сесть полусидя, наклонившись в сторону раны, — так легче дышать.",
        "Help them half-sit, leaning towards the injured side, to ease breathing.",
        "Yarador tomonga egilgan holda yarim oʻtirishga yordam bering — nafas olish osonlashadi.",
      ),
      l(
        "При огнестрельном ранении ищите второе отверстие (выходное).",
        "For a gunshot wound, look for a second (exit) wound.",
        "Oʻq jarohatida ikkinchi (chiqish) teshigini qidiring.",
      ),
      l(
        "Ранение живота: на спину, колени согнуты; на открытую рану — чистую влажную повязку, на закрытую травму — холод.",
        "Abdominal wound: on the back with knees bent; a clean damp dressing on an open wound, cold on a closed injury.",
        "Qorin jarohati: chalqancha, tizzalar bukilgan; ochiq yaraga toza nam bogʻlam, yopiq jarohatga sovuq.",
      ),
    ],
    donts: [
      l("Не вправляйте выпавшие органы.", "Do not push protruding organs back in.", "Chiqib qolgan aʼzolarni ichkariga kiritmang."),
      l("Не давайте есть и пить.", "Do not give food or drink.", "Ovqat va ichimlik bermang."),
      l("Не заклеивайте рану груди наглухо.", "Do not seal a chest wound airtight.", "Koʻkrak yarasini havo oʻtkazmaydigan qilib yopishtirmang."),
    ],
    warning: l(
      "Герметичная повязка на ране груди может привести к напряжённому пневмотораксу — опасному сдавлению лёгкого.",
      "An airtight dressing on a chest wound can cause a tension pneumothorax — dangerous compression of the lung.",
      "Koʻkrak yarasiga havo oʻtkazmaydigan bogʻlam taranglashgan pnevmotoraksga — oʻpkaning xavfli siqilishiga olib kelishi mumkin.",
    ),
    update: l(
      "В пособии предлагается герметичная повязка с открытым краем. По рекомендациям ERC рану груди оставляют открытой или закрывают неокклюзионной повязкой.",
      "The manual suggests an airtight dressing with one edge open. ERC guidance is to leave a chest wound open or use a non-occlusive dressing.",
      "Qoʻllanmada bir cheti ochiq germetik bogʻlam taklif qilingan. ERC tavsiyasiga koʻra koʻkrak yarasi ochiq qoldiriladi yoki okklyuziv boʻlmagan bogʻlam bilan yopiladi.",
    ),
    quiz: [
      {
        q: l("Как помочь при ранении груди?", "How do you help with a chest wound?", "Koʻkrak jarohatida qanday yordam beriladi?"),
        a: [
          l("Вызвать 103, неплотная повязка, положение полусидя", "Call 103, non-airtight dressing, half-sitting", "103, havo oʻtkazadigan bogʻlam, yarim oʻtirgan holat"),
          l("Плотно заклеить рану пластырем со всех сторон", "Seal the wound tightly on all sides", "Yarani har tomondan plastir bilan zich yopishtirish"),
          l("Уложить на живот", "Lay face down", "Qorni bilan yotqizish"),
          l("Дать выпить воды", "Give water to drink", "Suv ichirish"),
        ],
        e: l("Неплотная повязка позволяет воздуху выходить и снижает риск сдавления лёгкого.", "A non-airtight dressing lets air escape and lowers the risk of lung compression.", "Havo oʻtkazadigan bogʻlam havoning chiqishiga imkon beradi va oʻpka siqilishi xavfini kamaytiradi."),
      },
      {
        q: l("Из раны живота выпали петли кишечника. Что делать?", "Loops of bowel are protruding from an abdominal wound. What do you do?", "Qorin yarasidan ichak halqalari chiqib qoldi. Nima qilasiz?"),
        a: [
          l("Накрыть чистой влажной повязкой, не вправлять", "Cover with a clean damp dressing, do not push back", "Toza nam bogʻlam bilan yopish, ichkariga kiritmaslik"),
          l("Аккуратно вправить обратно", "Gently push them back", "Ehtiyotkorlik bilan ichkariga kiritish"),
          l("Промыть водой из-под крана и вправить", "Rinse with tap water and push back", "Joʻmrak suvi bilan yuvib, kiritish"),
          l("Оставить сохнуть на воздухе", "Leave them to dry in the air", "Havoda qurishga qoldirish"),
        ],
        e: l("Вправление занесёт инфекцию и повредит органы; влажная повязка не даёт им высохнуть.", "Pushing them back causes infection and damage; a damp dressing keeps them from drying.", "Ichkariga kiritish infeksiya va shikast keltiradi; nam bogʻlam ularning qurishiga yoʻl qoʻymaydi."),
      },
      {
        q: l("Какое положение при закрытой травме живота?", "Which position for a closed abdominal injury?", "Yopiq qorin jarohatida qaysi holat?"),
        a: [
          l("На спине с согнутыми коленями", "On the back with knees bent", "Tizzalar bukilgan holda chalqancha"),
          l("Сидя с наклоном вперёд", "Sitting and leaning forward", "Oldinga egilib oʻtirgan"),
          l("Стоя", "Standing", "Turgan"),
          l("На животе", "Face down", "Qorni bilan"),
        ],
        e: l("Согнутые колени расслабляют мышцы живота и уменьшают боль.", "Bent knees relax the abdominal muscles and reduce pain.", "Bukilgan tizzalar qorin mushaklarini boʻshashtiradi va ogʻriqni kamaytiradi."),
      },
    ],
  },
  {
    slug: "nosebleed",
    cat: "injuries",
    icon: "◒",
    order: 14,
    core: false,
    title: l("Носовое кровотечение", "Nosebleed", "Burun qonashi"),
    summary: l("Правильная поза и сколько держать нос зажатым.", "The right position and how long to pinch the nose.", "Toʻgʻri holat va burunni qancha vaqt qisib turish kerak."),
    cover: cover("nosebleed"),
    steps: [
      l("Усадите человека и наклоните его голову вперёд.", "Sit the person down and lean the head forward.", "Odamni oʻtqazib, boshini oldinga eging."),
      l("Зажмите мягкую часть носа на 10–15 минут, дышать ртом.", "Pinch the soft part of the nose for 10–15 minutes, breathing through the mouth.", "Burunning yumshoq qismini 10–15 daqiqa qisib turing, ogʻiz orqali nafas olsin."),
      l("Можно положить холод на переносицу.", "A cold pack on the bridge of the nose can help.", "Burun ustiga sovuq qoʻyish mumkin."),
      l(
        "После остановки — не сморкаться, не ковырять и не тереть нос несколько часов.",
        "Once it stops, do not blow, pick or rub the nose for several hours.",
        "Toʻxtagandan keyin bir necha soat burun qoqmang, kovlamang va ishqalamang.",
      ),
    ],
    donts: [
      l("Не запрокидывайте голову назад — кровь стечёт в горло и вызовет рвоту.", "Do not tilt the head back — blood runs into the throat and causes vomiting.", "Boshni orqaga tashlamang — qon tomoqqa oqib, qusishga sabab boʻladi."),
    ],
    callIf: [
      l("Кровотечение не останавливается дольше 20 минут или повторяется.", "Bleeding lasts more than 20 minutes or keeps recurring.", "Qon 20 daqiqadan koʻp toʻxtamasa yoki takrorlansa."),
      l("После удара по голове или на фоне высокого давления.", "After a blow to the head or with high blood pressure.", "Boshga zarbadan keyin yoki yuqori qon bosimi fonida."),
      l("Человек потерял сознание — уложите на бок и вызывайте 103.", "The person loses consciousness — place on the side and call 103.", "Odam hushidan ketsa — yonboshiga yotqizib, 103 ni chaqiring."),
    ],
    warning: l("Голова вперёд, а не назад — это главное правило.", "Head forward, not back — that is the key rule.", "Bosh oldinga, orqaga emas — asosiy qoida shu."),
    quiz: [
      {
        q: l("Как держать голову при носовом кровотечении?", "How should the head be held during a nosebleed?", "Burun qonaganda boshni qanday tutish kerak?"),
        a: [
          l("Наклонить вперёд", "Lean forward", "Oldinga egish"),
          l("Запрокинуть назад", "Tilt back", "Orqaga tashlash"),
          l("Лечь на спину", "Lie on the back", "Chalqancha yotish"),
          l("Повернуть набок и лечь", "Turn to the side and lie down", "Yonga burib yotish"),
        ],
        e: l("При наклоне вперёд кровь вытекает наружу и не попадает в желудок.", "Leaning forward lets blood drain out instead of into the stomach.", "Oldinga egilganda qon tashqariga oqadi va oshqozonga tushmaydi."),
      },
      {
        q: l("Сколько держать нос зажатым?", "How long should you pinch the nose?", "Burunni qancha vaqt qisib turish kerak?"),
        a: [
          l("10–15 минут", "10–15 minutes", "10–15 daqiqa"),
          l("30 секунд", "30 seconds", "30 soniya"),
          l("1 минуту", "1 minute", "1 daqiqa"),
          l("Час", "An hour", "Bir soat"),
        ],
        e: l("Сгустку нужно время, чтобы сформироваться; частые проверки его срывают.", "A clot needs time to form; frequent checking breaks it.", "Laxta hosil boʻlishi uchun vaqt kerak; tez-tez tekshirish uni buzadi."),
      },
      {
        q: l("Когда при носовом кровотечении нужна скорая?", "When does a nosebleed need an ambulance?", "Burun qonashida qachon tez yordam kerak?"),
        a: [
          l("Если не останавливается дольше 20 минут или после удара по голове", "If it lasts over 20 minutes or follows a head injury", "20 daqiqadan koʻp toʻxtamasa yoki boshga zarbadan keyin"),
          l("При любом кровотечении из носа", "For any nosebleed", "Har qanday burun qonashida"),
          l("Если кровь ярко-красная", "If the blood is bright red", "Qon och qizil boʻlsa"),
          l("Никогда", "Never", "Hech qachon"),
        ],
        e: l("Длительное кровотечение или травма головы требуют осмотра врача.", "Prolonged bleeding or head injury needs medical assessment.", "Uzoq davom etgan qon ketishi yoki bosh jarohati shifokor koʻrigini talab qiladi."),
      },
    ],
  },
  {
    slug: "burns",
    cat: "injuries",
    icon: "♨",
    order: 15,
    core: true,
    title: l("Ожоги", "Burns", "Kuyishlar"),
    summary: l(
      "Виды и степени ожогов, правильное охлаждение и опасные народные средства.",
      "Types and depths of burns, correct cooling and dangerous home remedies.",
      "Kuyish turlari va darajalari, toʻgʻri sovutish va xavfli xalq usullari.",
    ),
    cover: cover("burns"),
    gallery: gal("burns", [
      l("Поверхностный ожог: покраснение, боль, задета только верхняя часть кожи.", "Superficial burn: redness and pain, only the top layer of skin.", "Yuzaki kuyish: qizarish, ogʻriq, faqat terining ustki qavati."),
      l("Частичный ожог: пузыри, сильная боль, повреждена дерма.", "Partial-thickness burn: blisters, severe pain, the dermis is damaged.", "Qisman kuyish: pufakchalar, kuchli ogʻriq, derma shikastlangan."),
      l("Глубокий ожог: кожа белая или обугленная, боль может отсутствовать.", "Full-thickness burn: white or charred skin, may be painless.", "Chuqur kuyish: teri oq yoki kuygan, ogʻriq boʻlmasligi mumkin."),
      l("Охлаждайте ожог прохладной проточной водой 20 минут.", "Cool the burn under cool running water for 20 minutes.", "Kuygan joyni salqin oqar suvda 20 daqiqa sovuting."),
    ]),
    signs: [
      l("Виды: термические, химические, электрические.", "Types: thermal, chemical, electrical.", "Turlari: termik, kimyoviy, elektr."),
      l("Глубина: поверхностные, частичные (пузыри), глубокие.", "Depth: superficial, partial-thickness (blisters), full-thickness.", "Chuqurligi: yuzaki, qisman (pufakchalar), chuqur."),
    ],
    steps: [
      l("Прекратите действие источника: потушите огонь, уберите от горячего.", "Stop the burning: put out flames, move away from the heat.", "Manba taʼsirini toʻxtating: olovni oʻchiring, issiqdan uzoqlashtiring."),
      l("Охлаждайте прохладной проточной водой не менее 20 минут.", "Cool with cool running water for at least 20 minutes.", "Kamida 20 daqiqa salqin oqar suv bilan sovuting."),
      l(
        "Снимите кольца, часы, браслеты и ремень, пока не появился отёк.",
        "Remove rings, watches, bracelets and belts before swelling starts.",
        "Shish paydo boʻlgunga qadar uzuk, soat, bilaguzuk va kamarni yeching.",
      ),
      l(
        "Накройте чистой неприлипающей повязкой или пищевой плёнкой (не обматывая туго).",
        "Cover with a clean non-stick dressing or cling film (do not wrap tightly).",
        "Toza yopishmaydigan bogʻlam yoki oziq-ovqat plyonkasi bilan yoping (qattiq oʻramang).",
      ),
      l(
        "Химический ожог: смахните сухое вещество, затем промывайте водой 20 минут в перчатках.",
        "Chemical burn: brush off dry chemicals, then rinse with water for 20 minutes wearing gloves.",
        "Kimyoviy kuyish: quruq moddani supurib tashlang, keyin qoʻlqopda 20 daqiqa suv bilan yuving.",
      ),
    ],
    donts: [
      l("Не используйте лёд, масло, сметану, мази, спиртовые растворы.", "Do not use ice, butter, sour cream, ointments or alcohol.", "Muz, moy, qaymoq, malham yoki spirtli eritmalardan foydalanmang."),
      l("Не вскрывайте пузыри.", "Do not burst blisters.", "Pufakchalarni yormang."),
      l("Не отрывайте прилипшую к коже одежду.", "Do not pull off clothing stuck to the skin.", "Teriga yopishgan kiyimni yulib olmang."),
    ],
    callIf: [
      l(
        "Ожог больше ладони пострадавшего, глубокий, на лице, кистях, стопах, в паху или по кругу конечности.",
        "Burns larger than the casualty’s palm, deep, or on the face, hands, feet, groin or around a limb.",
        "Kuyish jabrlanuvchi kaftidan katta, chuqur yoki yuzda, qoʻl panjasida, oyoq kaftida, chovda yoki aʼzo atrofida.",
      ),
      l("Ожог дыхательных путей, электрический или химический ожог, ожог у ребёнка.", "Airway, electrical or chemical burns, or burns in a child.", "Nafas yoʻllari, elektr yoki kimyoviy kuyish, bolada kuyish."),
    ],
    warning: l(
      "Охлаждение водой полезно даже через несколько часов после ожога, но лёд вызывает отморожение повреждённой кожи.",
      "Cooling with water helps even hours after a burn, but ice causes cold injury to damaged skin.",
      "Suv bilan sovutish kuyishdan bir necha soat keyin ham foydali, lekin muz shikastlangan terini sovuq urishiga olib keladi.",
    ),
    quiz: [
      {
        q: l("Сколько охлаждать ожог водой?", "How long should a burn be cooled with water?", "Kuyishni suv bilan qancha sovutish kerak?"),
        a: [
          l("Не менее 20 минут", "At least 20 minutes", "Kamida 20 daqiqa"),
          l("1–2 минуты", "1–2 minutes", "1–2 daqiqa"),
          l("Пока не перестанет щипать", "Until it stops stinging", "Achishish toʻxtaguncha"),
          l("Охлаждать не нужно", "No cooling is needed", "Sovutish kerak emas"),
        ],
        e: l("20 минут достаточно, чтобы остановить повреждение глубоких слоёв кожи.", "20 minutes is enough to stop damage to deeper layers of skin.", "20 daqiqa terining chuqur qavatlari shikastlanishini toʻxtatish uchun yetarli."),
      },
      {
        q: l("Что нельзя делать при ожоге?", "What must you not do for a burn?", "Kuyishda nima qilish mumkin emas?"),
        a: [
          l("Смазывать маслом и вскрывать пузыри", "Apply butter and burst blisters", "Moy surtish va pufakchalarni yorish"),
          l("Охлаждать прохладной водой", "Cool with cool water", "Salqin suv bilan sovutish"),
          l("Снимать кольца", "Remove rings", "Uzuklarni yechish"),
          l("Накрывать чистой плёнкой", "Cover with clean cling film", "Toza plyonka bilan yopish"),
        ],
        e: l("Масло удерживает тепло, а вскрытый пузырь — ворота для инфекции.", "Butter traps heat, and a burst blister lets infection in.", "Moy issiqlikni ushlab turadi, yorilgan pufakcha esa infeksiya uchun darvoza."),
      },
      {
        q: l("Что делать с сухим химическим веществом на коже?", "What do you do with a dry chemical on the skin?", "Teridagi quruq kimyoviy modda bilan nima qilinadi?"),
        a: [
          l("Смахнуть, затем долго промывать водой", "Brush it off, then rinse with plenty of water", "Supurib tashlab, keyin uzoq suv bilan yuvish"),
          l("Втереть в кожу мазь", "Rub ointment into the skin", "Teriga malham surtish"),
          l("Нейтрализовать уксусом", "Neutralise with vinegar", "Sirka bilan neytrallash"),
          l("Оставить как есть", "Leave it as it is", "Shundayligicha qoldirish"),
        ],
        e: l("Обильная проточная вода быстро удаляет вещество; «нейтрализация» даёт новый ожог.", "Plenty of running water removes the chemical quickly; “neutralising” causes another burn.", "Koʻp oqar suv moddani tez olib tashlaydi; «neytrallash» yangi kuyishga olib keladi."),
      },
    ],
  },
  {
    slug: "electric",
    cat: "injuries",
    icon: "ϟ",
    order: 16,
    core: false,
    title: l("Электротравма", "Electrical injury", "Elektr toki jarohati"),
    summary: l(
      "Как безопасно освободить человека от тока и что проверить после.",
      "How to safely free a person from electric current and what to check afterwards.",
      "Odamni tokdan xavfsiz qanday ajratish va keyin nimani tekshirish kerak.",
    ),
    cover: cover("electric"),
    gallery: gal("electric", [
      l("Человек под действием тока — не прикасайтесь к нему.", "A person in contact with current — do not touch them.", "Tok taʼsiridagi odam — unga tegmang."),
      l("Сначала обесточьте: выньте вилку или отключите автомат.", "First cut the power: unplug or switch off at the breaker.", "Avval tokni uzing: vilkani sugʻuring yoki avtomatni oʻchiring."),
    ]),
    signs: [
      l("Ожоги в местах входа и выхода тока (обычно на руках и ногах).", "Burns where the current entered and left (usually hands and feet).", "Tok kirgan va chiqqan joylarda kuyishlar (odatda qoʻl va oyoqlarda)."),
      l("Нарушение сознания и дыхания, слабый или неровный пульс.", "Altered consciousness and breathing, weak or irregular pulse.", "Hush va nafasning buzilishi, zaif yoki notekis tomir urishi."),
    ],
    steps: [
      l(
        "Не прикасайтесь к человеку, пока ток не отключён. Выключите рубильник, выньте вилку.",
        "Do not touch the person until the power is off. Switch off the mains or unplug.",
        "Tok uzilmaguncha odamga tegmang. Rubilnikni oʻchiring, vilkani sugʻuring.",
      ),
      l(
        "Если отключить нельзя (бытовая сеть) — стоя на сухом, отодвиньте провод сухой деревянной палкой.",
        "If you cannot switch off (household supply), stand on something dry and push the wire away with a dry wooden stick.",
        "Uzib boʻlmasa (maishiy tarmoq) — quruq joyda turib, simni quruq yogʻoch tayoq bilan surib qoʻying.",
      ),
      l(
        "При высоком напряжении (упавшие провода ЛЭП) не подходите ближе 18 метров и вызовите службы.",
        "With high voltage (fallen power lines), stay at least 18 metres away and call the emergency services.",
        "Yuqori kuchlanishda (uzilgan elektr simlari) 18 metrdan yaqin kelmang va xizmatlarni chaqiring.",
      ),
      l(
        "Вызовите 103, проверьте дыхание; при его отсутствии — СЛР и АНД.",
        "Call 103 and check breathing; if absent, start CPR and use an AED.",
        "103 ni chaqiring, nafasni tekshiring; yoʻq boʻlsa — YOʻR va AED.",
      ),
      l(
        "Ищите два ожога — вход и выход тока, охладите их и закройте чистой повязкой.",
        "Look for two burns — entry and exit — cool them and cover with a clean dressing.",
        "Ikkita kuyishni qidiring — tok kirishi va chiqishi, ularni sovutib, toza bogʻlam bilan yoping.",
      ),
    ],
    donts: [
      l("Не рубите провода топором и не трогайте их металлом.", "Do not cut wires with an axe or touch them with metal.", "Simlarni bolta bilan chopmang va ularga metall bilan tegmang."),
      l("Не подходите к упавшему проводу высокого напряжения.", "Do not approach a fallen high-voltage line.", "Uzilgan yuqori kuchlanishli simga yaqinlashmang."),
    ],
    callIf: [
      l("Любая электротравма — даже если человек чувствует себя хорошо, возможны нарушения ритма сердца.", "Any electrical injury — heart rhythm problems can appear even if the person feels fine.", "Har qanday elektr jarohati — odam oʻzini yaxshi his qilsa ham, yurak ritmi buzilishi mumkin."),
    ],
    warning: l(
      "Если провод упал на машину, людям внутри безопаснее оставаться в ней до отключения тока.",
      "If a wire falls on a car, people inside are safer staying in it until the power is cut.",
      "Agar sim mashina ustiga tushsa, ichidagilar tok uzilguncha unda qolgani xavfsizroq.",
    ),
    update: l(
      "В пособии предлагается перерубить провод топором с деревянной ручкой. Это опасно — сейчас советуют отключить ток или вызвать электриков.",
      "The manual suggests cutting the wire with a wooden-handled axe. That is dangerous — current advice is to cut the power or call electricians.",
      "Qoʻllanmada simni yogʻoch dastali bolta bilan chopish taklif qilingan. Bu xavfli — hozir tokni uzish yoki elektriklarni chaqirish tavsiya etiladi.",
    ),
    quiz: [
      {
        q: l("Первое действие при электротравме?", "What is the first step in an electrical injury?", "Elektr jarohatida birinchi harakat?"),
        a: [
          l("Отключить ток, не касаясь человека", "Cut the power without touching the person", "Odamga tegmasdan tokni uzish"),
          l("Схватить человека за руку и оттащить", "Grab the person’s hand and pull them away", "Odamning qoʻlidan ushlab, tortib olish"),
          l("Облить водой", "Pour water on them", "Suv sepish"),
          l("Сразу начать СЛР, держа провод", "Start CPR at once while the wire is still on", "Sim ustida turganda darhol YOʻR boshlash"),
        ],
        e: l("Пока ток не отключён, человек сам проводит ток и ударит вас.", "Until the power is off, the person conducts current and will shock you.", "Tok uzilmaguncha odam tokni oʻtkazadi va sizni ham uradi."),
      },
      {
        q: l("Почему после удара током ищут два ожога?", "Why look for two burns after an electric shock?", "Tok urgandan keyin nima uchun ikkita kuyish qidiriladi?"),
        a: [
          l("Есть место входа и выхода тока", "There is an entry and an exit point", "Tok kirgan va chiqqan joy bor"),
          l("Ток всегда бьёт дважды", "Current always strikes twice", "Tok har doim ikki marta uradi"),
          l("Так требует полиция", "The police require it", "Politsiya shuni talab qiladi"),
          l("Второй ожог всегда на голове", "The second burn is always on the head", "Ikkinchi kuyish har doim boshda"),
        ],
        e: l("Ток проходит через тело, повреждая ткани по пути, и выходит в другом месте.", "Current passes through the body, damaging tissue along the way, and exits elsewhere.", "Tok tana orqali oʻtib, yoʻlidagi toʻqimalarni shikastlaydi va boshqa joydan chiqadi."),
      },
      {
        q: l("На дороге лежит оборванный провод ЛЭП. Ваши действия?", "A power line is lying on the road. What do you do?", "Yoʻlda uzilgan elektr simi yotibdi. Nima qilasiz?"),
        a: [
          l("Держаться дальше 18 м и вызвать службы", "Keep more than 18 m away and call the services", "18 m dan uzoqda turib, xizmatlarni chaqirish"),
          l("Отбросить провод палкой", "Throw the wire aside with a stick", "Simni tayoq bilan uloqtirish"),
          l("Перешагнуть и идти дальше", "Step over it and continue", "Hatlab oʻtib ketish"),
          l("Подойти и проверить, есть ли ток", "Go closer to check if it is live", "Yaqinlashib, tok bor-yoʻqligini tekshirish"),
        ],
        e: l("Высокое напряжение бьёт через землю («шаговое напряжение») и по воздуху.", "High voltage can strike through the ground (step voltage) and through the air.", "Yuqori kuchlanish yer orqali («qadam kuchlanishi») va havo orqali urishi mumkin."),
      },
    ],
  },
  {
    slug: "fractures",
    cat: "injuries",
    icon: "⌇",
    order: 17,
    core: true,
    title: l("Переломы, вывихи и шины", "Fractures, dislocations and splints", "Suyak sinishi, chiqishi va shinalar"),
    summary: l(
      "Четыре вида травм опорно-двигательного аппарата, мягкие и жёсткие шины, косынка.",
      "Four kinds of musculoskeletal injury, soft and rigid splints, and slings.",
      "Tayanch-harakat apparatining toʻrt xil jarohati, yumshoq va qattiq shinalar, roʻmol.",
    ),
    cover: cover("fractures"),
    gallery: gal("fractures", [
      l("Четыре вида травм: перелом, вывих, растяжение связок, растяжение мышц.", "Four injury types: fracture, dislocation, ligament sprain, muscle strain.", "Toʻrt xil jarohat: sinish, chiqish, payning choʻzilishi, mushakning choʻzilishi."),
      l("Мягкая шина: одеяло, полотенце, подушка, косынка.", "Soft splint: blanket, towel, pillow, triangular bandage.", "Yumshoq shina: adyol, sochiq, yostiq, roʻmol."),
      l("Жёсткая шина из подручного: доски, журналы, газеты.", "Improvised rigid splint: boards, magazines, newspapers.", "Qoʻl ostidagi narsadan qattiq shina: taxtalar, jurnallar, gazetalar."),
      l("Шину накладывают, захватывая суставы выше и ниже травмы.", "The splint should cover the joints above and below the injury.", "Shina jarohatdan yuqori va pastdagi boʻgʻimlarni qamrab qoʻyiladi."),
      l("Фиксация шины на предплечье подручной тканью.", "Securing a forearm splint with improvised cloth.", "Bilakdagi shinani qoʻl ostidagi mato bilan mahkamlash."),
      l("Поддерживающая косынка для руки.", "A support sling for the arm.", "Qoʻl uchun tayanch roʻmol."),
      l("Наложение косынки: помощник поддерживает руку, предплечье кладут на расправленную ткань.", "Applying a sling: a helper supports the arm while the forearm is placed on the open cloth.", "Roʻmol qoʻyish: yordamchi qoʻlni ushlab turadi, bilak yoyilgan mato ustiga qoʻyiladi."),
      l("Концы косынки завязывают у шеи, под узел подкладывают мягкую ткань.", "Tie the ends at the neck and pad the knot with soft cloth.", "Roʻmol uchlari boʻyin yonida bogʻlanadi, tugun ostiga yumshoq mato qoʻyiladi."),
      l("Косынка при травме ключицы: пальцы направлены к противоположному плечу.", "Sling for a collarbone injury: fingers pointing to the opposite shoulder.", "Oʻmrov suyagi jarohatida roʻmol: barmoqlar qarama-qarshi yelkaga qaragan."),
      l("Мягкая шина на голеностоп: обувь не снимать.", "Soft splint for the ankle: leave the shoe on.", "Toʻpiqqa yumshoq shina: poyafzalni yechmang."),
      l("Анатомическая шина: травмированную ногу прибинтовывают к здоровой.", "Anatomical splint: bandage the injured leg to the uninjured one.", "Anatomik shina: jarohatlangan oyoq sogʻ oyoqqa bintlanadi."),
      l("Узлы завязывают на стороне здоровой ноги, не над местом травмы.", "Tie the knots on the uninjured side, not over the injury.", "Tugunlar jarohat ustida emas, sogʻ oyoq tomonida bogʻlanadi."),
      l("Транспортное положение при травме таза.", "Transport position for a pelvic injury.", "Chanoq jarohatida transport holati."),
    ]),
    signs: [
      l("Боль, отёк, синяк, деформация, неестественная подвижность.", "Pain, swelling, bruising, deformity, abnormal movement.", "Ogʻriq, shish, koʻkarish, deformatsiya, gʻayritabiiy harakatchanlik."),
      l("Человек не может двигать конечностью или опереться на неё.", "Unable to move or bear weight on the limb.", "Aʼzoni harakatlantira yoki unga tayana olmaydi."),
      l("Перелом не всегда очевиден — при сомнении действуйте как при переломе.", "A fracture is not always obvious — if in doubt, treat it as one.", "Sinish har doim ham aniq emas — shubha boʻlsa, sinishdek harakat qiling."),
    ],
    steps: [
      l("Попросите не двигаться, поддерживайте конечность в найденном положении.", "Ask the person to keep still and support the limb in the position found.", "Qimirlamaslikni soʻrang, aʼzoni topilgan holatida ushlab turing."),
      l(
        "Открытый перелом: закройте рану чистой повязкой, остановите кровь, не давя на кость.",
        "Open fracture: cover the wound with a clean dressing and stop the bleeding without pressing on the bone.",
        "Ochiq sinish: yarani toza bogʻlam bilan yoping, suyakni bosmasdan qonni toʻxtating.",
      ),
      l(
        "Наложите шину (мягкую, жёсткую или анатомическую), захватив суставы выше и ниже травмы.",
        "Apply a splint (soft, rigid or anatomical) covering the joints above and below the injury.",
        "Jarohatdan yuqori va pastdagi boʻgʻimlarni qamrab shina (yumshoq, qattiq yoki anatomik) qoʻying.",
      ),
      l(
        "Руку подвесьте на косынку под углом 90°, если нет травмы локтя.",
        "Support the arm in a sling at 90° unless the elbow is injured.",
        "Tirsak jarohati boʻlmasa, qoʻlni 90° burchakda roʻmolga osing.",
      ),
      l("Приложите холод через ткань, проверьте кровообращение ниже шины.", "Apply cold through a cloth and check circulation below the splint.", "Mato orqali sovuq qoʻying, shinadan pastdagi qon aylanishini tekshiring."),
      l("Вызовите 103 при травме бедра, таза, позвоночника, открытом переломе или шоке.", "Call 103 for thigh, pelvis or spine injuries, open fractures or shock.", "Son, chanoq, umurtqa jarohati, ochiq sinish yoki shokda 103 ni chaqiring."),
    ],
    donts: [
      l("Не выпрямляйте деформацию и не вправляйте вывих.", "Do not straighten a deformity or put a dislocation back.", "Deformatsiyani toʻgʻrilamang va chiqqan boʻgʻimni joyiga solmang."),
      l("Не снимайте обувь при травме голеностопа.", "Do not remove the shoe with an ankle injury.", "Toʻpiq jarohatida poyafzalni yechmang."),
      l("Не завязывайте узлы над местом травмы.", "Do not tie knots over the injury.", "Jarohat ustida tugun bogʻlamang."),
    ],
    warning: l(
      "Если под бинт проходит больше одного пальца — затяните, если пальцы синеют и немеют — ослабьте.",
      "If more than one finger fits under the bandage, tighten it; if fingers turn blue or numb, loosen it.",
      "Bint ostiga bittadan koʻp barmoq sigʻsa — torting; barmoqlar koʻkarib, uvishsa — boʻshating.",
    ),
    quiz: [
      {
        q: l("Какие суставы должна захватывать шина?", "Which joints should a splint cover?", "Shina qaysi boʻgʻimlarni qamrashi kerak?"),
        a: [
          l("Выше и ниже места травмы", "Above and below the injury", "Jarohatdan yuqori va pastdagi"),
          l("Только ближайший к сердцу", "Only the one nearest the heart", "Faqat yurakka eng yaqinini"),
          l("Никакие, только место перелома", "None, only the fracture site", "Hech qaysisini, faqat sinish joyini"),
          l("Все суставы конечности", "Every joint of the limb", "Aʼzoning barcha boʻgʻimlarini"),
        ],
        e: l("Так обломки не смещаются при движении соседних суставов.", "This stops bone ends moving when nearby joints move.", "Shunda qoʻshni boʻgʻimlar harakatlanganda suyak boʻlaklari siljimaydi."),
      },
      {
        q: l("Что делать с деформированной конечностью?", "What do you do with a deformed limb?", "Deformatsiyalangan aʼzo bilan nima qilinadi?"),
        a: [
          l("Зафиксировать в найденном положении", "Immobilise it in the position found", "Topilgan holatida mahkamlash"),
          l("Выпрямить, чтобы удобнее наложить шину", "Straighten it to make splinting easier", "Shina qoʻyish oson boʻlishi uchun toʻgʻrilash"),
          l("Резко потянуть, чтобы вправить", "Pull sharply to set it", "Joyiga solish uchun keskin tortish"),
          l("Попросить человека подвигать ею", "Ask the person to move it", "Odamdan uni qimirlatishni soʻrash"),
        ],
        e: l("Попытки выпрямить могут повредить сосуды и нервы.", "Trying to straighten it can damage vessels and nerves.", "Toʻgʻrilashga urinish tomir va nervlarni shikastlashi mumkin."),
      },
      {
        q: l("Чем можно заменить жёсткую шину?", "What can be used as a rigid splint?", "Qattiq shinani nima bilan almashtirish mumkin?"),
        a: [
          l("Доской или свёрнутым журналом", "A board or a rolled magazine", "Taxta yoki oʻralgan jurnal"),
          l("Мокрым полотенцем", "A wet towel", "Hoʻl sochiq"),
          l("Резиновым жгутом", "A rubber tourniquet", "Rezina jgut"),
          l("Ничем, только медицинской шиной", "Nothing, only a medical splint", "Hech narsa, faqat tibbiy shina"),
        ],
        e: l("Подойдёт любой плоский твёрдый предмет, обёрнутый мягкой тканью.", "Any flat rigid object padded with soft cloth will do.", "Yumshoq mato bilan oʻralgan har qanday yassi qattiq narsa yaraydi."),
      },
    ],
  },
  {
    slug: "head-spine",
    cat: "injuries",
    icon: "⊙",
    order: 18,
    core: true,
    title: l("Травмы головы и позвоночника", "Head and spine injuries", "Bosh va umurtqa jarohatlari"),
    summary: l(
      "Перелом черепа, сотрясение мозга и травма позвоночника: признаки и правило «не двигать».",
      "Skull fracture, concussion and spinal injury: signs and the “do not move” rule.",
      "Bosh suyagi sinishi, miya chayqalishi va umurtqa jarohati: belgilari va «qimirlatmaslik» qoidasi.",
    ),
    cover: cover("head-spine"),
    gallery: gal("head-spine", [
      l("Рана головы сильно кровоточит — прижмите её чистой салфеткой.", "Head wounds bleed heavily — press with a clean pad.", "Bosh yarasi kuchli qonaydi — toza salfetka bilan bosing."),
    ]),
    signs: [
      l(
        "Череп: сильная головная боль, рвота, кровь или прозрачная жидкость из носа или уха, синяки вокруг глаз.",
        "Skull: severe headache, vomiting, blood or clear fluid from the nose or ear, bruising around the eyes.",
        "Bosh suyagi: kuchli bosh ogʻrigʻi, qusish, burun yoki quloqdan qon yoki tiniq suyuqlik, koʻz atrofida koʻkarish.",
      ),
      l(
        "Сотрясение: кратковременная потеря сознания, «искры из глаз», провалы в памяти, головокружение.",
        "Concussion: brief loss of consciousness, seeing stars, memory gaps, dizziness.",
        "Miya chayqalishi: qisqa hushdan ketish, «koʻzdan uchqun», xotira yoʻqolishi, bosh aylanishi.",
      ),
      l(
        "Позвоночник: боль в шее или спине, онемение, покалывание, слабость в конечностях.",
        "Spine: neck or back pain, numbness, tingling, weakness in the limbs.",
        "Umurtqa: boʻyin yoki orqada ogʻriq, uvishish, sanchish, aʼzolarda holsizlik.",
      ),
    ],
    steps: [
      l("Попросите не двигаться и вызовите 103.", "Ask the person not to move and call 103.", "Qimirlamaslikni soʻrang va 103 ni chaqiring."),
      l(
        "Стабилизируйте голову руками так, чтобы голова, шея и туловище были на одной линии.",
        "Steady the head with your hands so the head, neck and body stay in line.",
        "Bosh, boʻyin va tana bir chiziqda boʻlishi uchun boshni qoʻllaringiz bilan ushlab turing.",
      ),
      l(
        "Следите за дыханием. Если дыхание нарушено или есть рвота — поверните на бок, сохраняя ось тела (лучше вдвоём-втроём).",
        "Watch breathing. If breathing is compromised or the person vomits, roll onto the side keeping the body aligned (ideally with 2–3 people).",
        "Nafasni kuzating. Nafas buzilsa yoki qussa — tana oʻqini saqlagan holda yonboshiga agʻdaring (yaxshisi 2–3 kishi bilan).",
      ),
      l(
        "При травме головы в сознании — уложите с приподнятой головой, холод на голову, покой.",
        "For a conscious head injury, lay down with the head raised, apply cold and keep calm.",
        "Hushida boʻlgan bosh jarohatida — boshni koʻtarib yotqizing, boshga sovuq, tinchlik.",
      ),
      l("Укройте, поддерживайте нормальную температуру тела.", "Cover the person to keep them warm.", "Yopib qoʻying, tana haroratini meʼyorda saqlang."),
    ],
    donts: [
      l("Не перемещайте без непосредственной опасности.", "Do not move the person unless there is immediate danger.", "Bevosita xavf boʻlmasa, siljitmang."),
      l("Не останавливайте прозрачную жидкость из уха — накройте свободной повязкой.", "Do not block clear fluid from the ear — cover loosely.", "Quloqdan oqayotgan tiniq suyuqlikni toʻxtatmang — erkin bogʻlam bilan yoping."),
    ],
    warning: l(
      "После травмы головы состояние может ухудшиться через несколько часов. Сонливость, рвота, спутанность — повод вызвать 103.",
      "After a head injury the condition can worsen hours later. Drowsiness, vomiting or confusion mean call 103.",
      "Bosh jarohatidan keyin ahvol bir necha soatdan keyin yomonlashishi mumkin. Uyquchanlik, qusish, chalkashlik — 103 ni chaqirish sababi.",
    ),
    quiz: [
      {
        q: l("Главное правило при подозрении на травму позвоночника?", "The main rule for a suspected spinal injury?", "Umurtqa jarohatiga shubhada asosiy qoida?"),
        a: [
          l("Не двигать и держать голову, шею и туловище на одной линии", "Do not move; keep head, neck and body aligned", "Qimirlatmaslik; bosh, boʻyin va tanani bir chiziqda tutish"),
          l("Посадить, чтобы проверить, может ли ходить", "Sit them up to see if they can walk", "Yura oladimi, tekshirish uchun oʻtqazish"),
          l("Перенести в машину и отвезти самим", "Carry to a car and drive them yourself", "Mashinaga koʻtarib, oʻzingiz olib borish"),
          l("Подложить высокую подушку под голову", "Put a high pillow under the head", "Bosh ostiga baland yostiq qoʻyish"),
        ],
        e: l("Смещение повреждённых позвонков может повредить спинной мозг навсегда.", "Moving injured vertebrae can permanently damage the spinal cord.", "Shikastlangan umurtqalarni siljitish orqa miyani butunlay shikastlashi mumkin."),
      },
      {
        q: l("Какой признак указывает на перелом основания черепа?", "Which sign suggests a skull base fracture?", "Qaysi belgi bosh suyagi asosining sinishini koʻrsatadi?"),
        a: [
          l("Прозрачная жидкость или кровь из уха, синяки вокруг глаз", "Clear fluid or blood from the ear, bruising around the eyes", "Quloqdan tiniq suyuqlik yoki qon, koʻz atrofida koʻkarish"),
          l("Покраснение щёк", "Red cheeks", "Yonoqlarning qizarishi"),
          l("Чихание", "Sneezing", "Aksirish"),
          l("Зуд кожи головы", "Itchy scalp", "Bosh terisining qichishi"),
        ],
        e: l("Это вытекает спинномозговая жидкость — признак тяжёлой травмы.", "This is cerebrospinal fluid leaking — a sign of serious injury.", "Bu orqa miya suyuqligining oqishi — ogʻir jarohat belgisi."),
      },
      {
        q: l("Когда можно перемещать пострадавшего с травмой позвоночника?", "When can you move someone with a spinal injury?", "Umurtqa jarohatli odamni qachon siljitish mumkin?"),
        a: [
          l("Только при непосредственной опасности на месте", "Only if there is immediate danger at the scene", "Faqat joyda bevosita xavf boʻlsa"),
          l("Когда он попросит", "When they ask", "U soʻraganda"),
          l("Через 10 минут", "After 10 minutes", "10 daqiqadan keyin"),
          l("Всегда, чтобы ему было удобнее", "Always, to make them comfortable", "Har doim, qulay boʻlishi uchun"),
        ],
        e: l("Пожар, угроза взрыва или обрушения — единственные причины переносить до прибытия спасателей.", "Fire, risk of explosion or collapse are the only reasons to move before rescuers arrive.", "Yongʻin, portlash yoki qulash xavfi — qutqaruvchilar kelguncha siljitishning yagona sabablari."),
      },
    ],
  },
  {
    slug: "crush",
    cat: "injuries",
    icon: "▤",
    order: 19,
    core: false,
    title: l("Синдром длительного сдавления", "Crush syndrome", "Uzoq ezilish sindromi"),
    summary: l(
      "Опасность после извлечения из-под завала и что можно сделать до спасателей.",
      "The danger after release from under rubble and what you can do before rescuers arrive.",
      "Vayronalar ostidan chiqarilgandan keyingi xavf va qutqaruvchilar kelguncha nima qilish mumkin.",
    ),
    cover: cover("crush"),
    signs: [
      l(
        "Возникает после длительного сдавления мышц: при землетрясениях, обрушениях, авариях.",
        "Occurs after prolonged compression of muscles: earthquakes, building collapse, accidents.",
        "Mushaklar uzoq vaqt ezilganda yuzaga keladi: zilzila, bino qulashi, avariyalarda.",
      ),
      l(
        "После освобождения в кровь поступают продукты распада мышц — главная угроза для почек и сердца.",
        "After release, breakdown products from muscles enter the blood — the main threat to the kidneys and heart.",
        "Ozod qilingandan keyin mushak parchalanish mahsulotlari qonga tushadi — buyrak va yurak uchun asosiy xavf.",
      ),
      l("Конечность бледная или синюшная, отёчная, холодная, чувствительность снижена.", "The limb is pale or bluish, swollen, cold, with reduced feeling.", "Aʼzo oqargan yoki koʻkargan, shishgan, sovuq, sezgi pasaygan."),
    ],
    steps: [
      l("Оцените безопасность: не лезьте в неустойчивые завалы.", "Assess safety: do not enter unstable rubble.", "Xavfsizlikni baholang: beqaror vayronalarga kirmang."),
      l("Вызовите 103 и спасателей (112), сообщите, сколько времени человек придавлен.", "Call 103 and rescuers (112) and say how long the person has been trapped.", "103 va qutqaruvchilarni (112) chaqiring, odam qancha vaqt bosilib qolganini ayting."),
      l("Успокойте, укройте, следите за дыханием и сознанием.", "Reassure, cover and monitor breathing and consciousness.", "Tinchlantiring, yoping, nafas va hushini kuzating."),
      l(
        "После извлечения: перенесите в безопасное место, остановите кровотечение, закройте раны, зафиксируйте переломы.",
        "After release: move to safety, stop bleeding, cover wounds, immobilise fractures.",
        "Chiqarilgandan keyin: xavfsiz joyga oʻtkazing, qonni toʻxtating, yaralarni yoping, sinishlarni mahkamlang.",
      ),
      l("Если человек в сознании и может глотать — давайте пить воду небольшими порциями.", "If the person is conscious and can swallow, give water in small sips.", "Odam hushida boʻlsa va yuta olsa, oz-ozdan suv bering."),
    ],
    donts: [
      l("Не рискуйте собой при угрозе обрушения.", "Do not risk your life if there is a threat of collapse.", "Qulash xavfi boʻlsa, oʻzingizni xavf ostiga qoʻymang."),
      l("Не согревайте сдавленную конечность.", "Do not warm the crushed limb.", "Ezilgan aʼzoni isitmang."),
    ],
    warning: l(
      "Чем раньше человек извлечён и получил помощь, тем больше шансов. Решение об освобождении принимают спасатели и медики.",
      "The sooner the person is freed and treated, the better the chances. Rescuers and medics decide how to release them.",
      "Odam qanchalik tez chiqarilib, yordam olsa, imkoniyat shuncha koʻp. Ozod qilish haqida qutqaruvchilar va shifokorlar qaror qiladi.",
    ),
    quiz: [
      {
        q: l("Чем опасен синдром длительного сдавления?", "Why is crush syndrome dangerous?", "Uzoq ezilish sindromi nimasi bilan xavfli?"),
        a: [
          l("Продукты распада мышц поражают почки и сердце", "Muscle breakdown products damage the kidneys and heart", "Mushak parchalanish mahsulotlari buyrak va yurakni shikastlaydi"),
          l("Человек простужается", "The person catches a cold", "Odam shamollaydi"),
          l("Появляется аллергия", "An allergy develops", "Allergiya paydo boʻladi"),
          l("Ничем, если нет переломов", "It is harmless without fractures", "Sinish boʻlmasa, xavfli emas"),
        ],
        e: l("Острая почечная недостаточность — главная причина гибели при этом синдроме.", "Acute kidney failure is the main cause of death in this syndrome.", "Oʻtkir buyrak yetishmovchiligi — bu sindromda oʻlimning asosiy sababi."),
      },
      {
        q: l("Что важно сообщить диспетчеру?", "What is important to tell the dispatcher?", "Dispetcherga nimani aytish muhim?"),
        a: [
          l("Сколько времени человек придавлен", "How long the person has been trapped", "Odam qancha vaqt bosilib qolgani"),
          l("Цвет одежды пострадавшего", "The colour of their clothes", "Jabrlanuvchi kiyimining rangi"),
          l("Марку автомобиля", "The make of the car", "Avtomobil markasi"),
          l("Погоду завтра", "Tomorrow’s weather", "Ertangi ob-havo"),
        ],
        e: l("От длительности сдавления зависит тактика медиков при освобождении.", "The duration of compression determines how medics manage the release.", "Ezilish davomiyligiga qarab shifokorlar ozod qilish taktikasini belgilaydi."),
      },
      {
        q: l("Можно ли лезть в неустойчивый завал, чтобы помочь?", "Should you enter unstable rubble to help?", "Yordam berish uchun beqaror vayronaga kirish mumkinmi?"),
        a: [
          l("Нет, дождаться спасателей", "No, wait for rescuers", "Yoʻq, qutqaruvchilarni kutish"),
          l("Да, если быстро", "Yes, if you are quick", "Ha, tez boʻlsa"),
          l("Да, если вы в перчатках", "Yes, if you wear gloves", "Ha, qoʻlqopda boʻlsangiz"),
          l("Да, всегда", "Yes, always", "Ha, har doim"),
        ],
        e: l("При повторном обрушении пострадавших станет больше.", "A second collapse would create more casualties.", "Qayta qulashda jabrlanuvchilar koʻpayadi."),
      },
    ],
  },
];
