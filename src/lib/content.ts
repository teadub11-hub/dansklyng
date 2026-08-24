export type Lang = "zh" | "en";

export type Localized = { zh: string; en: string };

export const products = [
  {
    slug: "lyng",
    danish: "Lynghonning",
    name: { zh: "石楠花蜂蜜", en: "Heather Honey" } as Localized,
    season: { zh: "秋季採收", en: "Autumn harvest" } as Localized,
    months: { zh: "八月–九月 · 六至八週", en: "Aug–Sep · 6–8 weeks" } as Localized,
    color: { zh: "紅棕至波特酒色", en: "Red-brown to deep port" } as Localized,
    texture: { zh: "可塗抹的金黃凝膠", en: "Spreadable, golden, gel" } as Localized,
    notes: {
      zh: "辛香。紅棕到波特酒色。湯匙挖開，它會再合上。",
      en: "Spicy. Red-brown to port. Push a spoon in — it closes again.",
    } as Localized,
    lede: {
      zh: "湯匙挖下去，它會慢慢合起來。這是石楠花蜜的質地。辛香，色從紅棕到波特酒。",
      en: "Push a spoon in and it closes behind. That is heather honey. Spicy, red-brown to deep port.",
    } as Localized,
    pairings: {
      zh: "藍紋起司、燕麥餅、威士忌、黑麥",
      en: "Blue cheese, oatcakes, whisky, rye",
    } as Localized,
    image: "/images/jar-lyng.jpg",
    landscape: "/images/hero-heath.jpg",
    featured: true,
  },
  {
    slug: "blomster",
    danish: "Blomsterhonning",
    name: { zh: "野花蜂蜜", en: "Wildflower Honey" } as Localized,
    season: { zh: "春夏採收", en: "Spring and summer harvest" } as Localized,
    months: { zh: "春夏花期", en: "Spring–summer flora" } as Localized,
    color: { zh: "極淺至淺棕", en: "Very pale to light brown" } as Localized,
    texture: { zh: "可塗抹、溫和", en: "Spreadable and mild" } as Localized,
    notes: {
      zh: "溫和。色隨那年的花，有時幾乎是淺的。",
      en: "Mild. The colour follows that year’s flowers — sometimes almost pale.",
    } as Localized,
    lede: {
      zh: "早餐那一罐。春夏的花，蜜蜂自己收的。有的年份淺得幾乎透明。",
      en: "The breakfast jar. Spring and summer flowers, as the bees brought them. Some years it is almost clear.",
    } as Localized,
    pairings: {
      zh: "早餐麵包、奶油、優格、花草茶",
      en: "Morning bread, butter, yoghurt, herbal tea",
    } as Localized,
    image: "/images/jar-blomster.jpg",
    landscape: "/images/meadow.jpg",
    featured: false,
  },
  {
    slug: "sensommer",
    danish: "Sensommerhonning",
    name: { zh: "晚夏蜂蜜", en: "Late Summer Honey" } as Localized,
    season: { zh: "晚夏採收", en: "Late summer harvest" } as Localized,
    months: { zh: "七月–八月", en: "July–August" } as Localized,
    color: { zh: "深色", en: "Dark" } as Localized,
    texture: { zh: "有時偏硬", en: "Dark, sometimes firm" } as Localized,
    notes: {
      zh: "三葉草、菩提，裡面有一點荒原的預告。",
      en: "Clover and lime, with a hint of the heath still to come.",
    } as Localized,
    lede: {
      zh: "白三葉草、菩提，加一點柳蘭和石楠。蜜蜂混的，不是我們。色深，有時已經硬了。",
      en: "White clover, lime, a little fireweed and heather. The bees blended it. Dark, and sometimes already firm.",
    } as Localized,
    pairings: {
      zh: "黑麥麵包、硬起司、燕麥粥、紅茶",
      en: "Rye bread, hard cheese, porridge, black tea",
    } as Localized,
    image: "/images/jar-sensommer.jpg",
    landscape: "/images/latesummer.jpg",
    featured: false,
  },
  {
    slug: "skov",
    danish: "Skovhonning",
    name: { zh: "森林蜂蜜", en: "Forest Honey" } as Localized,
    season: { zh: "林間採收", en: "Forest harvest" } as Localized,
    months: { zh: "林間花期", en: "Forest bloom" } as Localized,
    color: { zh: "近洋槐的淺金，有時偏深", en: "Acacia-pale, sometimes dark" } as Localized,
    texture: { zh: "近洋槐，流動", en: "Acacia-like, flowing" } as Localized,
    notes: {
      zh: "有時像洋槐那樣淺，有時深得嚇人。",
      en: "Sometimes pale as acacia. Sometimes dark enough to stop you.",
    } as Localized,
    lede: {
      zh: "色和質地有時像洋槐，有時很深、很衝。哪一種，那年的林子說了算。",
      en: "Colour and body can sit next to acacia — or run dark and forceful. The forest that year decides.",
    } as Localized,
    pairings: {
      zh: "早餐桌、料理、白麵包、清淡起司",
      en: "Breakfast table, cooking, white bread, mild cheese",
    } as Localized,
    image: "/images/jar-skov.jpg",
    landscape: "/images/forest.jpg",
    featured: false,
  },
] as const;

export type ProductSlug = (typeof products)[number]["slug"];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const aromaNotes = [
  { id: "bloom", family: "floral", present: true, name: { zh: "石楠花開", en: "Heather bloom" } },
  { id: "dried", family: "floral", present: true, name: { zh: "乾花", en: "Dried flower" } },
  { id: "meadow", family: "floral", present: false, name: { zh: "草原", en: "Meadow" } },
  { id: "toffee", family: "caramel", present: true, name: { zh: "太妃", en: "Toffee" } },
  { id: "sugar", family: "caramel", present: false, name: { zh: "暖糖", en: "Warm sugar" } },
  { id: "malt", family: "caramel", present: false, name: { zh: "麥芽", en: "Malt" } },
  { id: "spice", family: "wood", present: true, name: { zh: "辛香", en: "Spice" } },
  { id: "resin", family: "wood", present: false, name: { zh: "樹脂", en: "Resin" } },
  { id: "peat", family: "wood", present: false, name: { zh: "荒原泥炭", en: "Heath peat" } },
  { id: "gel", family: "texture", present: true, name: { zh: "凝膠", en: "Gel" } },
  { id: "silk", family: "texture", present: false, name: { zh: "絲滑", en: "Silk" } },
  { id: "tannin", family: "texture", present: false, name: { zh: "單寧", en: "Tannin" } },
] as const;

export const aromaFamilies = [
  { id: "floral", name: { zh: "花香", en: "Floral" } },
  { id: "caramel", name: { zh: "焦糖", en: "Caramel" } },
  { id: "wood", name: { zh: "木質", en: "Wood" } },
  { id: "texture", name: { zh: "質地", en: "Texture" } },
] as const;

export type JournalTheme = "terroir" | "taste" | "knowledge" | "beekeeping";

export const journal = [
  {
    slug: "what-is-lyng-honey",
    theme: "taste" as JournalTheme,
    featured: true,
    date: "2025-08-15",
    title: { zh: "什麼是丹麥石楠花蜜？", en: "What is Danish heather honey?" },
    lede: {
      zh: "挖開會再合上的那一種。一年只有幾週。",
      en: "The kind that closes behind the spoon. A few weeks a year.",
    },
    body: {
      zh: [
        "丹麥石楠花蜜（lynghonning）是從石楠花（Hedelyng / Calluna vulgaris）採集的單一花源蜂蜜，尤其來自日德蘭西岸那一帶受保護的荒原。",
        "它不是比較濃的超市蜂蜜。紅棕到波特酒色，辛香，質地像凝膠——湯匙挖開，它會再合上。花期六到八週，盛在八月中到九月中。錯過，就是下一年。",
        "我們不混花、不加熱、不稀釋。每一罐對應那一年的花，不是一條可以隨時加大的產線。",
        "產地、季節、處理。缺一就不是這罐。",
      ],
      en: [
        "Danish heather honey — lynghonning — is a single-flower honey gathered from heather (Hedelyng / Calluna vulgaris), especially across the protected heathlands of western Jutland.",
        "It is not stronger supermarket honey. Red-brown to deep port, spicy, a gel that closes behind the spoon. Six to eight weeks, peaking mid-August to mid-September. Miss it, wait a year.",
        "We do not blend across flowers, heat, or dilute. Each jar answers to that year’s bloom — not to a line that can be scaled.",
        "Place, season, handling. Miss one, and it is a different honey.",
      ],
    },
  },
  {
    slug: "why-once-a-year",
    theme: "terroir" as JournalTheme,
    featured: true,
    date: "2026-03-01",
    title: { zh: "為什麼石楠花蜜一年只採一次", en: "Why heather honey is once a year" },
    lede: {
      zh: "這句話只屬於 Lynghonning。稀有，在入罐之前就開始了。",
      en: "This is true of Lynghonning, not of every jar we pack. Its rarity begins long before the jar.",
    },
    body: {
      zh: [
        "石楠需要貧瘠砂土、鹽風、以及被刻意維持的開闊地。丹麥西部這條荒原帶——從 Borris Hede 到國家公園 Thy 與 Hanstholm——是少數還能讓 Hedelyng 連成紫色海的地方。",
        "花期短。蜜蜂必須在六到八週內採完。天氣、風、以及每年春天為更新荒原而進行的計畫性火燒，都會改寫那一年的產量。",
        "所以我們無法「接單增產」。石楠花蜜的產量由花期決定，不是由市場決定。Blomster、Sensommer、Skov 各有自己的窗口——不要把「一年一採」套到四季系列上。",
      ],
      en: [
        "Heather needs poor sandy soils, salt wind, and open land that is actively kept open. The western Jutland belt — from inland Borris Hede to the coastal dunes of Nationalpark Thy and Hanstholm — is one of the last places in Denmark where Calluna still blooms in sheets.",
        "The window is short. Bees have six to eight weeks. Weather, wind, and the deliberate spring fires that renew the heath all rewrite the year’s yield.",
        "We cannot make more Lyng because an order arrives. Supply is set by bloom, not by demand. Blomster, Sensommer and Skov have their own windows — “one harvest a year” belongs to heather, not to the whole range.",
      ],
    },
  },
  {
    slug: "what-our-honey-is-tested-for",
    theme: "knowledge" as JournalTheme,
    featured: false,
    date: "2026-03-08",
    title: { zh: "我們的蜂蜜檢測了什麼", en: "What our honey is tested for" },
    lede: {
      zh: "我們送驗。進口商也要送驗。兩件事不要混在一起。",
      en: "We test. The importer tests. Those are two different jobs.",
    },
    body: {
      zh: [
        "Lynghonning 2025 由我們送 Intertek 檢測。對照的是丹麥養蜂人協會的嚴格品質標準，而不是「可以出口就好」。指標包括水分、HMF（加熱劣變）、澱粉酶（生蜜活性）與花粉譜。",
        "這份報告說明我們交出的是什麼。它不能替代進口商的送驗。目的地市場的食品規定各不相同，進口商須依自己的市場自行送驗。",
        "每一批都附灌裝證明，可追溯該批採收與裝罐。產地相關說明，可以在合適的對話裡一起看。",
      ],
      en: [
        "We sent Lynghonning 2025 to Intertek. We compare results to the strict quality standards of the Danish Beekeepers Association — not to a minimum that merely clears export. The metrics: moisture, HMF (heat damage), diastase (enzyme activity in raw honey), and pollen profile.",
        "That report describes what we packed. It does not replace the importer’s own testing. Food law differs by destination. The importer tests for their own market.",
        "Every lot ships with a filling certificate, traceable to that harvest and bottling. Origin information can be looked at together in a qualified conversation.",
      ],
    },
  },
  {
    slug: "how-to-read-the-lyng-aroma-map",
    theme: "taste" as JournalTheme,
    featured: false,
    date: "2026-04-02",
    title: { zh: "如何閱讀石楠花蜜風味圖譜", en: "How to read the Lyng Aroma Map" },
    lede: {
      zh: "四大家族、十二種風味——以及我們日德蘭罐裡真正承載的五項。",
      en: "Four families, twelve notes — and the five our Jutland jars actually carry.",
    },
    body: {
      zh: [
        "風味圖譜不是海報。它是一份閱讀地圖：內圈四個家族（花香、焦糖、木質、質地），外圈十二個音符。亮起的，是這批日德蘭石楠花蜜實際有的；灰色的，是石楠花蜜家族裡可能出現、但這罐沒有硬寫進去的。",
        "我們的五項：石楠花開、乾花、太妃、辛香、凝膠質地。沒有把「草原」或「蜜桃」寫進去，因為喝不到就不該寫。",
        "產品頁上的圖譜可以點選。建議先聞、再含在舌上、再等尾韻——凝膠質地會讓風味比流動蜜更慢展開。",
      ],
      en: [
        "The Aroma Map is not a poster. It is a reading map: four families on the inside (floral, caramel, wood, texture), twelve notes on the outside. Lit notes are present in this Jutland heather honey; dimmed notes belong to the wider heather family but are not claimed for our jar.",
        "Ours are five: heather bloom, dried flower, toffee, spice, gel texture. We do not write “meadow” or “peach” onto a honey that does not carry them.",
        "The map on the product page is clickable. Smell first, then hold on the tongue, then wait for the finish — gel texture unfolds more slowly than a running honey.",
      ],
    },
  },
  {
    slug: "importing-danish-honey",
    theme: "knowledge" as JournalTheme,
    featured: false,
    date: "2026-05-12",
    title: { zh: "進口丹麥蜂蜜時會碰到什麼", en: "What importing Danish honey involves" },
    lede: {
      zh: "產地、文件、目的地市場的規定。細節在對話裡對。",
      en: "Origin, paperwork, and the destination market’s rules. The rest is for a conversation.",
    },
    body: {
      zh: [
        "天然蜂蜜的稅則分類是 HS 0409.00.00，丹麥／歐盟原產。實際關稅與食品法規以目的地市場為準——不同市場的標示與殘留標準並不相同。",
        "我們可以準備產地與批次相關的說明。Lynghonning 2025 由我們送 Intertek 檢測（水分、HMF、澱粉酶、花粉譜）。進口商仍須依自己國家規定送驗。",
        "蜂蜜不需冷鏈，但應避高熱。室溫、乾燥、避光。結晶是品質訊號，不是瑕疵。復原請用水浴、低於 40°C。不要微波。",
      ],
      en: [
        "Natural honey is classified HS 0409.00.00, of Danish / EU origin. Duty and food law follow the destination — labelling and residue rules are not the same everywhere.",
        "Origin and lot information can be prepared. We sent Lynghonning 2025 to Intertek (moisture, HMF, diastase, pollen). Importers still test to their own market.",
        "Honey does not need a cold chain, but it hates heat. Cool, dry, dark. Crystallisation is a quality sign, not a fault. To reliquefy, use a water bath below 40°C. Do not microwave.",
      ],
    },
  },
  {
    slug: "become-a-distribution-partner",
    theme: "knowledge" as JournalTheme,
    featured: false,
    date: "2026-06-01",
    title: { zh: "把 Dansk Lyng 帶到一個新的地方", en: "Bringing Dansk Lyng to a new place" },
    lede: {
      zh: "產地是清楚的。下一步是對話。",
      en: "The origin is clear. The next step is a conversation.",
    },
    body: {
      zh: [
        "Dansk Lyng 來自西日德蘭。旗艦是 Lynghonning，其餘是同一群蜂的季節。",
        "產地說明、文件與目的地市場標示，可以在合適的對話裡一起看。",
        "適不適合這個市場、怎麼合作，個別討論。石楠花蜜受花期限制。",
      ],
      en: [
        "Dansk Lyng comes from West Jutland. Lynghonning is the signature harvest; the others are the rest of the year from the same hives.",
        "Origin information, documents and destination-market labelling can be looked at together in a qualified conversation.",
        "Whether it belongs in a market, and how to work, is discussed individually. Heather honey is limited by bloom.",
      ],
    },
  },
  {
    slug: "the-danish-heathlands",
    theme: "terroir" as JournalTheme,
    featured: true,
    date: "2026-04-20",
    title: { zh: "西日德蘭的荒原", en: "The heathlands of West Jutland" },
    lede: {
      zh: "每年春天，有人放火燒這片地。沒有火，就沒有石楠。",
      en: "Every spring, someone sets this land on fire. Without the fire, there is no heather.",
    },
    body: {
      zh: [
        "蜂蜜來自日德蘭西岸一條狹長的保護荒原：內陸的 Borris Hede，到沿海沙丘的國家公園 Thy 與 Hanstholm。鹽風、貧瘠砂土、漫長的北歐日照，讓 Calluna vulgaris 在短短數週裡鋪成紫色。",
        "這不是背景圖。這是被管理的風土——每年春天，護林員仍用計畫性火燒更新荒原。沒有這把火，就沒有六到八週的 lyng 花期。",
        "不是人人都能在保護區裡放蜂箱。我們與一小圈在這條荒原帶上移動蜂群的養蜂人合作：春夏野花、晚夏花蜜、林間蜂蜜，最後才是石楠。",
      ],
      en: [
        "Our honey comes from a narrow strip of protected heath along Denmark’s west coast: inland Borris Hede, then the coastal dunes of Nationalpark Thy and Hanstholm. Salt-laden wind, poor sandy soils, and long northern light let Calluna vulgaris bloom in purple sheets for a handful of weeks.",
        "It is not a backdrop. It is a working terroir, quietly rare, legally protected, and renewed each spring by deliberate fire. Without that fire there is no six-to-eight-week Lyng bloom.",
        "Not everyone may place hives inside a protected area. We work with a small, closed circle of beekeepers who move along this belt as each bloom opens: spring and summer wildflowers, late-summer nectar, forest honey, and finally the heather.",
      ],
    },
  },
  {
    slug: "meet-the-beekeeper",
    theme: "beekeeping" as JournalTheme,
    featured: true,
    date: "2026-02-10",
    title: { zh: "養蜂人", en: "Meet the beekeeper" },
    lede: {
      zh: "Dansk Lyng 不是單一蜂場。是一小圈在荒原上移動的人。",
      en: "Dansk Lyng is not a single apiary. It is a small circle that moves with the bloom.",
    },
    body: {
      zh: [
        "與我們合作的日德蘭養蜂人，在這片荒原上已累積四十多年的採收經驗。蜂箱隨著花期移動，而不是固定在觀光點旁邊供拍照。",
        "每一罐都是生蜜：不加熱、只做粗濾。不壓榨、不跨季混煉、不添加。",
        "我們的工作不是把蜂蜜賣得更遠。是讓荒原給的東西，原樣抵達懂得它的桌子。",
      ],
      en: [
        "The Jutland beekeepers we work with have more than forty years of harvest knowledge on this heath. Hives move with the bloom. They are not parked beside a viewpoint for photographs.",
        "Every jar is raw: unheated, strained only coarsely. We do not press. We do not blend across seasons. Nothing is added.",
        "Our work is not to sell honey further. It is to let what the heath gave arrive, as it is, at a table that knows how to hold it.",
      ],
    },
  },
] as const;

export function journalBySlug(slug: string) {
  return journal.find((j) => j.slug === slug);
}

export const themeLabel: Record<JournalTheme, Localized> = {
  terroir: { zh: "風土", en: "Terroir" },
  taste: { zh: "品味", en: "Taste" },
  knowledge: { zh: "知識", en: "Knowledge" },
  beekeeping: { zh: "養蜂", en: "Beekeeping" },
};

export const JAR_SIZE = "450 g";
export const EMAIL = "hej@dansklyng.com";
export const HS_CODE = "0409.00.00";
