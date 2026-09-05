export type Lang = "zh" | "en";

export type Localized = { zh: string; en: string };

export type ProductSection = {
  title: Localized;
  body: Localized;
};

export const products = [
  {
    slug: "lyng",
    danish: "Lynghonning",
    name: { zh: "石楠花蜜", en: "Heather honey" } as Localized,
    eyebrow: { zh: "DANISH HEATHER HONEY", en: "DANISH HEATHER HONEY" } as Localized,
    source: { zh: "石楠", en: "Heather" } as Localized,
    origin: { zh: "丹麥日德蘭", en: "West Jutland, Denmark" } as Localized,
    color: { zh: "紅棕至深酒紅色", en: "Red-brown to deep burgundy" } as Localized,
    texture: { zh: "細緻、濃稠、易於塗抹", en: "Smooth, velvety and spreadable" } as Localized,
    flavor: { zh: "鮮明辛香", en: "Distinctly spicy and full-flavoured" } as Localized,
    season: { zh: "晚夏花期", en: "Late summer" } as Localized,
    tasting: { zh: "紅棕至酒紅 · 鮮明辛香 · 細緻濃稠", en: "Deep burgundy · Distinctly spicy · Naturally velvety" } as Localized,
    notes: {
      zh: "辛香、深色，質地細緻而易於塗抹。",
      en: "Deep in colour, warm with spice and naturally velvety.",
    } as Localized,
    lede: {
      zh: "來自日德蘭荒原的石楠花蜜。紅棕至深酒紅色，辛香而濃厚，質地細緻、易於塗抹。",
      en: "Heather honey from the heathlands of West Jutland. Red-brown to deep burgundy, warm with spice and full-flavoured, with a smooth, velvety texture.",
    } as Localized,
    pairings: {
      zh: "藍紋起司、熟成起司、燕麥餅與黑麥麵包",
      en: "Blue cheese, aged cheese, oat biscuits and rye bread",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What makes it distinctive" },
        body: {
          zh: "石楠花蜜不以清淡為特色。它的深色、辛香與濃厚質地，使味道停留得更久，也與一般春夏花蜜形成清楚區別。",
          en: "Heather honey is full-flavoured by nature. Its deep colour, warm spice and velvety texture linger on the palate, setting it apart from the lighter blossom honeys of spring and summer.",
        },
      },
      {
        title: { zh: "怎麼品嚐？", en: "How to taste it" },
        body: {
          zh: "先觀察色澤與質地，再聞香、入口，最後留意尾韻。可單獨品嚐，也適合搭配藍紋起司、熟成起司、燕麥餅與黑麥麵包。",
          en: "Begin with the colour and texture, then notice the aroma, flavour and finish. Enjoy it on its own or pair it with blue cheese, aged cheese, oat biscuits or rye bread.",
        },
      },
      {
        title: { zh: "天然的批次差異", en: "Naturally different each year" },
        body: {
          zh: "花期與天氣每年不同，天然蜂蜜的色澤、香氣、質地與產量也可能有所變化。個別產品資訊以實際批次為準。",
          en: "The bloom and weather change from year to year, and the honey changes with them. Each harvest has its own nuances of colour, aroma and texture.",
        },
      },
      {
        title: { zh: "從蜂巢到玻璃罐", en: "From hive to jar" },
        body: {
          zh: "蜂箱在石楠盛開時移至西日德蘭海岸線的石楠荒原。蜂蜜以離心方式取出，不以高溫加熱，並透過結晶控制形成細緻、如絲絨般容易塗抹的質地。產品不添加其他成分。",
          en: "When the heather blooms, the hives are moved to coastal heathlands across West Jutland. The honey is gently extracted from the comb, never exposed to high heat and carefully crystallised to develop its fine, velvety texture. Nothing else is added.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "石楠花蜜｜DANSK LYNG",
      en: "Danish heather honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "認識來自日德蘭荒原、帶有深色外觀、辛香風味與細緻質地的丹麥石楠花蜜。",
      en: "Danish heather honey from the heathlands of West Jutland, with a deep colour, distinctly spicy flavour and naturally velvety texture.",
    } as Localized,
    image: "/images/jar-lyng.jpg",
    landscape: "/images/flavor-lyng.jpg",
    featured: true,
  },
  {
    slug: "blomster",
    danish: "Blomsterhonning",
    name: { zh: "野花蜜", en: "Wildflower honey" } as Localized,
    eyebrow: { zh: "DANISH WILDFLOWER HONEY", en: "DANISH WILDFLOWER HONEY" } as Localized,
    source: { zh: "春夏多種花源", en: "Spring and summer wildflowers" } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "極淺、淡黃至淺棕", en: "Very pale yellow to light brown" } as Localized,
    texture: { zh: "柔和、易於塗抹", en: "Smooth and spreadable" } as Localized,
    flavor: { zh: "溫和、細緻", en: "Mild and delicately floral" } as Localized,
    season: { zh: "春夏", en: "Spring and summer" } as Localized,
    tasting: { zh: "淺金 · 溫和花香 · 柔和易塗", en: "Pale gold · Delicate floral notes · Smooth and spreadable" } as Localized,
    notes: {
      zh: "來自春夏多種花源，色澤較淺，風味溫和。",
      en: "Pale and delicate, with a gentle floral character.",
    } as Localized,
    lede: {
      zh: "採集自丹麥春季與夏季的多種花源。色澤較淺，風味溫和，帶有細緻花香。",
      en: "Gathered from a changing variety of Danish spring and summer flowers. Pale in colour and delicately floral, with a mild, versatile flavour.",
    } as Localized,
    pairings: {
      zh: "早餐麵包、奶油、優格、燕麥粥與花草茶",
      en: "Bread and butter, yoghurt, porridge and herbal tea",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What makes it distinctive" },
        body: {
          zh: "野花蜜是四款中最容易入門的一款。花源組成隨季節與年份改變，顏色與香氣也會有所不同。",
          en: "Wildflower honey is the gentlest of the four. The flowers available to the bees change with the season and the year, giving each harvest subtle variations in colour and aroma.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "早餐麵包、奶油、優格、燕麥粥與花草茶。",
          en: "Its mild floral character is well suited to bread and butter, yoghurt, porridge and herbal tea.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "野花蜜｜DANSK LYNG",
      en: "Danish wildflower honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "採集自丹麥春夏多種花源的野花蜜。色澤較淺，風味溫和，帶有細緻花香。",
      en: "Danish wildflower honey gathered from spring and summer blooms, with a pale colour and mild, delicately floral flavour.",
    } as Localized,
    image: "/images/jar-blomster.jpg",
    landscape: "/images/flavor-blomster.jpg",
    featured: false,
  },
  {
    slug: "sensommer",
    danish: "Sensommerhonning",
    name: { zh: "晚夏蜜", en: "Late-summer honey" } as Localized,
    eyebrow: { zh: "DANISH LATE SUMMER HONEY", en: "DANISH LATE SUMMER HONEY" } as Localized,
    source: {
      zh: "白三葉草、菩提、柳蘭與石楠等晚夏花源",
      en: "Late-summer flowers, including white clover, linden blossom, fireweed and heather",
    } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "較深", en: "Deeper golden to amber tones" } as Localized,
    texture: { zh: "有時較為厚實", en: "Softly set; sometimes firmer" } as Localized,
    flavor: {
      zh: "飽滿，呈現多種晚夏花源的層次",
      en: "Rich and layered, shaped by the late-summer bloom",
    } as Localized,
    season: { zh: "晚夏", en: "Late summer" } as Localized,
    tasting: { zh: "色澤較深 · 飽滿花香 · 有時厚實", en: "Deeper colour · Rich aroma · Softly set" } as Localized,
    notes: {
      zh: "多種晚夏花源由蜜蜂自然採集，香氣飽滿，質地有時較為厚實。",
      en: "Richly aromatic, with a texture that may become more firmly set.",
    } as Localized,
    lede: {
      zh: "採集自晚夏花期，常見蜜源包括白三葉草、菩提、柳蘭與石楠。色澤較深，香氣飽滿，質地有時較為厚實。",
      en: "Gathered in late summer, often from white clover, linden blossom, fireweed and heather. Richly aromatic and deeper in colour, with a texture that may become more firmly set.",
    } as Localized,
    pairings: {
      zh: "黑麥麵包、硬質起司、燕麥粥與紅茶",
      en: "Rye bread, hard cheese, porridge and black tea",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What makes it distinctive" },
        body: {
          zh: "這不是人工調配的風味。不同花源由蜜蜂在同一採集期自然帶回蜂巢，因此每年的花源比例、色澤和質地都可能不同。",
          en: "During late summer, the bees gather nectar from several flowers blooming at the same time. Their natural balance changes with the season, giving every harvest its own colour, flavour and texture.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "黑麥麵包、硬質起司、燕麥粥與紅茶。",
          en: "Its rich character pairs well with rye bread, hard cheese, porridge and black tea.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "晚夏蜜｜DANSK LYNG",
      en: "Danish late-summer honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "採集自晚夏花期的丹麥蜂蜜。常見蜜源包括白三葉草、菩提、柳蘭與石楠。",
      en: "Danish late-summer honey gathered from white clover, linden blossom, fireweed, heather and other seasonal flowers.",
    } as Localized,
    image: "/images/jar-sensommer.jpg",
    landscape: "/images/flavor-sensommer.jpg",
    featured: false,
  },
  {
    slug: "skov",
    danish: "Skovhonning",
    name: { zh: "森林蜜", en: "Forest honey" } as Localized,
    eyebrow: { zh: "DANISH FOREST HONEYDEW", en: "DANISH FOREST HONEYDEW" } as Localized,
    source: { zh: "林間蜜露", en: "Woodland honeydew" } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "由淺至深，依批次而異", en: "Pale to dark, depending on the harvest" } as Localized,
    texture: { zh: "有時較為流動", en: "Varies by harvest; sometimes fluid" } as Localized,
    flavor: {
      zh: "帶有辛香；深色批次可能更為強勁",
      en: "From mellow to more robust",
    } as Localized,
    season: { zh: "林木蜜露", en: "Woodland honeydew" } as Localized,
    tasting: { zh: "淺至深 · 帶有辛香 · 有時流動", en: "Pale to dark · Mellow to robust · Sometimes fluid" } as Localized,
    notes: {
      zh: "來自林間蜜露，色澤與風味依批次而異，有時清亮，有時深沉強勁。",
      en: "Woodland honeydew with a character that ranges from mellow and fluid to dark and robust.",
    } as Localized,
    lede: {
      zh: "森林蜜屬於蜜露蜜，來源不是花蜜，而是林木環境中的蜜露。它有時色澤清亮、質地流動；有些批次則顏色較深，味道也更為強勁。",
      en: "A honeydew honey gathered in Danish woodland rather than from flower nectar. Its character varies naturally by harvest, from pale and fluid to darker and more robust.",
    } as Localized,
    pairings: {
      zh: "早餐麵包、清淡起司，也可用於料理",
      en: "Bread, mild cheese and savoury cooking",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What makes it distinctive" },
        body: {
          zh: "森林蜜的來源與花蜜不同，批次之間也可能呈現明顯差異。產品描述應以實際批次為準，不將所有年份寫成相同味道。",
          en: "Unlike blossom honey, forest honey comes from honeydew found in woodland. Its colour, texture and flavour can vary noticeably from one harvest to the next.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "早餐麵包、清淡起司，也可用於料理。",
          en: "Serve it with bread or mild cheese, or use it to bring depth to savoury cooking.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "森林蜜｜DANSK LYNG",
      en: "Danish forest honeydew | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "森林蜜屬於蜜露蜜，來源是林木環境中的蜜露。色澤與風味依批次而異。",
      en: "Danish forest honey made from woodland honeydew, with a naturally varying character that ranges from pale and fluid to dark and robust.",
    } as Localized,
    image: "/images/jar-skov.jpg",
    landscape: "/images/flavor-skov.jpg",
    featured: false,
  },
] as const;

export type ProductSlug = (typeof products)[number]["slug"];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const aromaNotes = [
  { id: "bloom", family: "floral", present: true, name: { zh: "石楠花開", en: "Heather blossom" } },
  { id: "dried", family: "floral", present: true, name: { zh: "乾花", en: "Dried flowers" } },
  { id: "meadow", family: "floral", present: false, name: { zh: "草原", en: "Meadow" } },
  { id: "toffee", family: "caramel", present: true, name: { zh: "太妃", en: "Toffee" } },
  { id: "sugar", family: "caramel", present: false, name: { zh: "暖糖", en: "Caramelised sugar" } },
  { id: "malt", family: "caramel", present: false, name: { zh: "麥芽", en: "Malt" } },
  { id: "spice", family: "wood", present: true, name: { zh: "辛香", en: "Warm spice" } },
  { id: "resin", family: "wood", present: false, name: { zh: "樹脂", en: "Resin" } },
  { id: "peat", family: "wood", present: false, name: { zh: "荒原泥炭", en: "Peat" } },
  { id: "gel", family: "texture", present: false, name: { zh: "凝膠", en: "Gel-like" } },
  { id: "silk", family: "texture", present: true, name: { zh: "絲絨", en: "Velvet" } },
  { id: "tannin", family: "texture", present: false, name: { zh: "單寧", en: "Tannin" } },
] as const;

export const aromaFamilies = [
  { id: "floral", name: { zh: "花香", en: "Floral" } },
  { id: "caramel", name: { zh: "焦糖", en: "Caramel" } },
  { id: "wood", name: { zh: "木質", en: "Woodland" } },
  { id: "texture", name: { zh: "質地", en: "Texture" } },
] as const;

export type JournalTheme = "terroir" | "taste" | "knowledge" | "beekeeping";

export type JournalShape = "wide" | "square" | "portrait";

export type JournalFigure = {
  src: string;
  alt: Localized;
  after: number;
  shape: JournalShape;
};

export type JournalCta = "lyng" | "catalog" | "heath";

export const journal = [
  {
    slug: "what-is-lyng-honey",
    theme: "taste" as JournalTheme,
    date: "2025-08-15",
    image: "/images/journal/heather-closeup.jpg",
    imageAlt: { zh: "盛開的石楠", en: "Heather flowering across the West Jutland heathland" } as Localized,
    imageShape: "square" as JournalShape,
    cta: "lyng" as JournalCta,
    figures: [
      {
        src: "/images/journal/honey-spoon.jpg",
        alt: { zh: "石楠花蜜濃稠細緻的質地", en: "The smooth, velvety texture of heather honey" } as Localized,
        after: 1,
        shape: "square" as JournalShape,
      },
    ] as JournalFigure[],
    title: { zh: "什麼是丹麥石楠花蜜？", en: "What makes Danish heather honey distinctive?" },
    lede: {
      zh: "從蜜源、色澤、辛香與質地，認識石楠花蜜與一般花蜜的不同。",
      en: "Discover how heather gives the honey its deep colour, warm spice and naturally velvety texture.",
    },
    body: {
      zh: [
        "這是來自日德蘭荒原的石楠花蜜。石楠迎著海風生長在開闊的砂質土地，到了晚夏，整片荒原轉為紫色。蜜蜂在這段花期採集，才有這款蜂蜜。",
        "它通常呈紅棕至深酒紅色，帶有鮮明辛香，質地細緻、濃稠而容易塗抹。石楠花蜜不以清淡為特色。深色、辛香與濃厚質地，使味道停留得更久，也與一般春夏花蜜形成清楚區別。",
        "DANSK LYNG 的石楠花蜜來自西日德蘭海岸線。石楠盛開時，合作養蜂人將蜂箱移至沿岸不同的石楠荒原與自然保護區，從北到南分布於三十多個採集地點。盛花期的沿岸荒原以石楠為主要蜜源。",
        "花期與天氣每年不同，色澤、香氣、質地與產量也可能有所變化。它是品牌最具代表性的風味。個別產品資訊以實際批次為準。",
      ],
      en: [
        "Heather honey begins with a landscape. Heather thrives in the open, sandy ground of West Jutland, exposed to the wind from the North Sea. In late summer, the heathland turns purple and the bees begin to gather nectar from its flowers.",
        "The honey is red-brown to deep burgundy, distinctly spicy and full-flavoured, with a smooth, velvety texture. These qualities set it apart from the paler, more delicate blossom honeys of spring and summer.",
        "When the heather comes into bloom, the beekeepers we work with move their hives among more than thirty coastal heathland sites and nature reserves, from north to south. Here, flowering heather dominates the landscape and becomes the defining source of the harvest.",
        "No two seasons are identical. Temperature, wind and rainfall influence both the bloom and the bees' work, giving every harvest its own nuances of colour, aroma and texture. Heather honey remains the defining taste of DANSK LYNG.",
      ],
    },
  },
  {
    slug: "why-once-a-year",
    theme: "terroir" as JournalTheme,
    date: "2026-03-01",
    image: "/images/journal/heather-bloom.jpg",
    imageAlt: { zh: "西日德蘭石楠盛開", en: "Heather in full bloom in West Jutland" } as Localized,
    imageShape: "wide" as JournalShape,
    cta: "lyng" as JournalCta,
    figures: [
      {
        src: "/images/journal/bees-bloom.jpg",
        alt: { zh: "蜜蜂在石楠花上採蜜", en: "Bees gathering nectar from flowering heather" } as Localized,
        after: 1,
        shape: "portrait" as JournalShape,
      },
    ] as JournalFigure[],
    title: { zh: "石楠花期如何影響蜂蜜？", en: "How the heather bloom shapes each harvest" },
    lede: {
      zh: "開花、天氣與蜜蜂採集的條件，會讓每年的石楠花蜜有所不同。",
      en: "Flowering, weather and coastal conditions leave their mark on every year's heather honey.",
    },
    body: {
      zh: [
        "石楠通常在晚夏進入主要花期，大致落在八月至九月。實際開始、盛開與結束的日期，會隨每年的溫度、風雨與氣候而提前或延後。",
        "蜂箱移動與採收因此依當年的花況安排，而不是按照固定日期。天氣好，蜜蜂能採得更穩；風雨一多，花期與產量都會改寫。",
        "這也是為什麼天然蜂蜜的色澤、香氣、質地與產量，可能隨年份而變化。",
        "個別產品資訊以實際批次為準。",
      ],
      en: [
        "Heather generally reaches full bloom in late summer, between August and September. Exactly when the flowers open, peak and fade depends on the year's temperature, wind and rainfall.",
        "The beekeepers move their hives in step with that year's bloom, and the honey is harvested when the flowers—and the weather—allow. Calm, dry days give the bees more time to forage, while wind and rain can affect both the bloom and the yield.",
        "This is why the colour, aroma, texture and quantity of heather honey can change from one harvest to the next.",
        "Every jar carries the character of its season.",
      ],
    },
  },
  {
    slug: "the-danish-heathlands",
    theme: "terroir" as JournalTheme,
    date: "2026-04-20",
    image: "/images/journal/dunes.jpg",
    imageAlt: { zh: "日德蘭西岸沙丘與荒原", en: "Dunes and heather heathland in West Jutland" } as Localized,
    imageShape: "wide" as JournalShape,
    cta: "heath" as JournalCta,
    figures: [
      {
        src: "/images/journal/heathland.jpg",
        alt: { zh: "紫色石楠荒原", en: "Purple heather across the heathland" } as Localized,
        after: 0,
        shape: "wide" as JournalShape,
      },
      {
        src: "/images/journal/red-deer.jpg",
        alt: { zh: "荒原上的野生紅鹿", en: "Red deer on the heathland" } as Localized,
        after: 1,
        shape: "wide" as JournalShape,
      },
      {
        src: "/images/journal/burn.jpg",
        alt: { zh: "荒原的週期性更新", en: "Heathland renewed through conservation work" } as Localized,
        after: 2,
        shape: "square" as JournalShape,
      },
      {
        src: "/images/journal/new-shoots.jpg",
        alt: { zh: "更新後重新生長的石楠", en: "Young heather growing after renewal" } as Localized,
        after: 3,
        shape: "square" as JournalShape,
      },
    ] as JournalFigure[],
    title: { zh: "西日德蘭的石楠荒原", en: "The heather heathlands of West Jutland" },
    lede: {
      zh: "Lyng 是丹麥文的石楠，也是 DANSK LYNG 名稱的由來。招牌蜂蜜的蜜源，從這裡開始。",
      en: "Lyng is Danish for heather. Our signature honey begins in this open, windswept landscape.",
    },
    body: {
      zh: [
        "石楠生長於開闊、砂質而相對貧瘠的土地。開花時，荒原會出現大片紫色花叢，成為蜜蜂在這段花期的重要蜜源。",
        "DANSK LYNG 的石楠花蜜來自西日德蘭海岸線。石楠盛開時，合作養蜂人將蜂箱移至沿岸不同的石楠荒原與自然保護區，從北到南分布於三十多個採集地點。花期結束後，蜂箱再移走。",
        "石楠荒原不會自己一直開成紫色。沒有管理，老化植株與其他植被會慢慢取代石楠。當地自然保護會依區域狀況，以週期性更新移除老化植株，讓新的石楠重新生長。",
        "石楠花蜜的深色、辛香與濃厚質地，來自這片被維持下來的植物，而不是被加工成一種荒原風格。",
      ],
      en: [
        "Heather thrives on open heathland, rooted in sandy, nutrient-poor soil. When it flowers, broad stretches of the landscape turn purple, providing an important late-summer source of nectar for the bees.",
        "DANSK LYNG heather honey comes from the coast of West Jutland. During the bloom, the beekeepers we work with move their hives among more than thirty heathland sites and nature reserves, from north to south. Once the flowering season is over, the hives move on.",
        "Heathland does not remain open and purple without care. As heather ages, grasses, shrubs and other vegetation gradually take its place. Local conservation work renews the landscape in cycles, making space for young heather to grow.",
        "The honey's deep colour, warm spice and velvety texture begin here—in the heather, the coastal climate and the rhythm of the season.",
      ],
    },
  },
  {
    slug: "from-hive-to-jar",
    theme: "beekeeping" as JournalTheme,
    date: "2026-02-10",
    image: "/images/craft-bees-comb.jpg",
    imageAlt: { zh: "健康蜂群上的巢脾", en: "A healthy bee colony on the comb" } as Localized,
    imageShape: "portrait" as JournalShape,
    cta: "catalog" as JournalCta,
    figures: [
      {
        src: "/images/craft-hives-lane.jpg",
        alt: { zh: "集結待運的蜂箱", en: "Beehives prepared for the move to the heathland" } as Localized,
        after: 0,
        shape: "wide" as JournalShape,
      },
      {
        src: "/images/journal/extraction.jpg",
        alt: { zh: "離心取蜜", en: "Honey gently extracted from the comb" } as Localized,
        after: 2,
        shape: "square" as JournalShape,
      },
    ] as JournalFigure[],
    title: { zh: "從蜂巢到玻璃罐", en: "From hive to jar" },
    lede: {
      zh: "離心取蜜、低溫處理與結晶控制，如何形成細緻、容易塗抹的蜂蜜質地。",
      en: "Gentle extraction and careful crystallisation preserve the honey's natural character and smooth texture.",
    },
    body: {
      zh: [
        "蜂箱在石楠盛開時移至西日德蘭海岸線的石楠荒原。從北到南，三十多個採集地點依當年花況安排。晚夏花期大致在八月至九月，實際日期隨天氣而定。",
        "蜂蜜以離心方式取出，不以高溫加熱，也不添加其他成分。再以細緻的結晶控制，讓蜂蜜形成柔滑、容易塗抹的質地。",
        "罐裡只有蜂蜜，也保留每個年份自然形成的差異。野花蜜、晚夏蜜與森林蜜同樣來自丹麥的花期與蜜源，只是季節與來源不同。",
        "我們希望每一罐留下的，是它來自哪裡，以及那一年自然給出的樣子。",
      ],
      en: [
        "When the heather comes into bloom, the hives are moved among coastal heathlands across West Jutland. More than thirty sites may be used from north to south, according to the timing and conditions of each year. The bloom generally falls between August and September, but the exact dates are set by the weather.",
        "The honey is gently extracted from the comb and never exposed to high heat. Nothing else is added. Careful crystallisation then develops the smooth, spreadable texture that distinguishes the finished honey.",
        "Every jar contains honey only and retains the natural character of its harvest. Wildflower, late-summer and forest honey come from other Danish seasons and sources, each with its own colour, texture and flavour.",
        "The aim is simple: honey that still tastes of its source and season.",
      ],
    },
  },
  {
    slug: "four-honeys",
    theme: "taste" as JournalTheme,
    date: "2026-05-12",
    image: "/images/honey-flight.jpg",
    imageAlt: { zh: "四款丹麥蜂蜜", en: "The four DANSK LYNG honeys" } as Localized,
    imageShape: "wide" as JournalShape,
    cta: "catalog" as JournalCta,
    figures: [
      {
        src: "/images/lyng-scene-cheese.jpg",
        alt: { zh: "石楠花蜜與起司", en: "Heather honey served with cheese" } as Localized,
        after: 1,
        shape: "square" as JournalShape,
      },
      {
        src: "/images/journal/breakfast.jpg",
        alt: { zh: "蜂蜜與早餐麵包", en: "Wildflower honey served with bread" } as Localized,
        after: 2,
        shape: "wide" as JournalShape,
      },
    ] as JournalFigure[],
    title: { zh: "四款怎麼不同、怎麼吃", en: "Four Danish honeys: flavour and pairings" },
    lede: {
      zh: "同一個丹麥，四種蜜源。先分辨色澤與味道，再找到各自適合的餐桌。",
      en: "From delicate wildflower honey to dark forest honeydew, discover what sets each honey apart and how to serve it.",
    },
    body: {
      zh: [
        "先觀察色澤與質地，再聞香、入口，最後留意尾韻。四款蜂蜜的差異，用這個順序最容易分辨。",
        "石楠花蜜來自日德蘭荒原的石楠。紅棕至深酒紅色，辛香而濃厚，質地細緻、易於塗抹。可單獨品嚐，也適合藍紋起司、熟成起司、燕麥餅與黑麥麵包。它是品牌最具代表性的風味。",
        "野花蜜採集自丹麥春季與夏季的多種花源。色澤較淺，風味溫和，帶有細緻花香，是四款中最容易入門的一款。適合早餐麵包、奶油、優格、燕麥粥與花草茶。",
        "晚夏蜜採集自晚夏花期，常見蜜源包括白三葉草、菩提、柳蘭與石楠。色澤較深，香氣飽滿，質地有時較為厚實。適合黑麥麵包、硬質起司、燕麥粥與紅茶。不同花源由蜜蜂在同一採集期自然帶回蜂巢，不是人工調配。",
        "森林蜜屬於蜜露蜜。來源不是花蜜，而是林木環境中的蜜露。它有時色澤清亮、質地流動；有些批次則顏色較深，味道也更為強勁。適合早餐麵包、清淡起司，也可用於料理。產品頁上的風味圖譜，可以幫助閱讀石楠花蜜的花香、焦糖、木質與質地。",
      ],
      en: [
        "Begin with the colour and texture, then notice the aroma, flavour and finish. Tasting in this order makes the character of each honey easier to recognise.",
        "Heather honey from West Jutland is red-brown to deep burgundy, distinctly spicy and full-flavoured, with a smooth, velvety texture. Enjoy it on its own or pair it with blue cheese, aged cheese, oat biscuits or rye bread. It is the defining taste of DANSK LYNG.",
        "Wildflower honey, gathered from a changing variety of Danish spring and summer flowers, is paler, milder and delicately floral. Its gentle character pairs naturally with bread and butter, yoghurt, porridge and herbal tea.",
        "Late-summer honey often brings together white clover, linden blossom, fireweed, heather and other flowers blooming at the same time. It is richly aromatic and deeper in colour, with a texture that may become more firmly set. Serve it with rye bread, hard cheese, porridge or black tea. The balance changes naturally with the flowers available to the bees each season.",
        "Forest honey is made from woodland honeydew rather than flower nectar. Some harvests are pale and fluid; others are darker and more robust. Serve it with bread or mild cheese, or use it to bring depth to savoury cooking.",
      ],
    },
  },
] as const;

/** Old journal slugs → current path (including /faq). */
export const journalAliases: Record<string, string> = {
  "meet-the-beekeeper": "/journal/from-hive-to-jar",
  "importing-danish-honey": "/journal/four-honeys",
  "how-to-read-the-lyng-aroma-map": "/journal/four-honeys",
  "become-a-distribution-partner": "/journal/the-danish-heathlands",
  "what-our-honey-is-tested-for": "/faq",
};

export function journalImageClass(shape: JournalShape) {
  if (shape === "portrait") return "mx-auto aspect-[3/4] w-full max-w-md object-cover";
  if (shape === "square") return "mx-auto aspect-square w-full max-w-xl object-cover";
  return "aspect-video w-full object-cover";
}

export function nextJournal(slug: string, count = 2) {
  const i = journal.findIndex((j) => j.slug === slug);
  if (i < 0) return journal.slice(0, count);
  return Array.from({ length: count }, (_, n) => journal[(i + 1 + n) % journal.length]);
}

export function journalBySlug(slug: string) {
  return journal.find((j) => j.slug === slug);
}

export const themeLabel: Record<JournalTheme, Localized> = {
  terroir: { zh: "風土", en: "Place" },
  taste: { zh: "品味", en: "Taste" },
  knowledge: { zh: "知識", en: "Guides" },
  beekeeping: { zh: "養蜂", en: "Beekeeping" },
};

export const JAR_SIZE = "450 g";
export const EMAIL = "hej@dansklyng.com";
export const INSTAGRAM = "https://www.instagram.com/dansklyng/";
