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
    origin: { zh: "丹麥日德蘭", en: "Jutland, Denmark" } as Localized,
    color: { zh: "紅棕至深酒紅色", en: "Red-brown to deep burgundy" } as Localized,
    texture: { zh: "細緻、濃稠、易於塗抹", en: "Fine, dense, easy to spread" } as Localized,
    flavor: { zh: "鮮明辛香", en: "Clear, spicy character" } as Localized,
    notes: {
      zh: "辛香、深色，質地細緻而易於塗抹。",
      en: "Spicy and dark, with a fine texture that spreads easily.",
    } as Localized,
    lede: {
      zh: "來自日德蘭荒原的石楠花蜜。紅棕至深酒紅色，辛香而濃厚，質地細緻、易於塗抹。",
      en: "Heather honey from the Jutland heath. Red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily.",
    } as Localized,
    pairings: {
      zh: "藍紋起司、熟成起司、燕麥餅與黑麥麵包",
      en: "Blue cheese, aged cheese, oat biscuits and rye bread",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What sets it apart" },
        body: {
          zh: "石楠花蜜不以清淡為特色。它的深色、辛香與濃厚質地，使味道停留得更久，也與一般春夏花蜜形成清楚區別。",
          en: "Heather honey is not made to be mild. The dark colour, spice and dense texture linger, and set it apart from the lighter blossom honeys of spring and summer.",
        },
      },
      {
        title: { zh: "怎麼品嚐？", en: "How to taste it" },
        body: {
          zh: "先觀察色澤與質地，再聞香、入口，最後留意尾韻。可單獨品嚐，也適合搭配藍紋起司、熟成起司、燕麥餅與黑麥麵包。",
          en: "Look first at colour and texture, then smell, taste, and wait for the finish. It stands on its own, and sits well with blue cheese, aged cheese, oat biscuits and rye bread.",
        },
      },
      {
        title: { zh: "天然的批次差異", en: "Natural variation" },
        body: {
          zh: "花期與天氣每年不同，天然蜂蜜的色澤、香氣、質地與產量也可能有所變化。個別產品資訊以實際批次為準。",
          en: "Bloom and weather change from year to year, so colour, aroma, texture and yield can change with them. What is in the jar follows the batch.",
        },
      },
      {
        title: { zh: "從蜂巢到玻璃罐", en: "From hive to jar" },
        body: {
          zh: "蜂箱在石楠盛開時移至西日德蘭海岸線的石楠荒原。蜂蜜以離心方式取出，不以高溫加熱，並透過結晶控制形成細緻、如絲絨般容易塗抹的質地。產品不添加其他成分。",
          en: "When the heather is in bloom, the hives are moved to the coastal heaths of West Jutland. The honey is extracted by centrifuge, not heated at high temperature, and guided into a fine, velvet texture that spreads easily. Nothing else is added.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "Lynghonning 丹麥石楠花蜜｜DANSK LYNG",
      en: "Lynghonning, Danish heather honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "認識來自日德蘭荒原、帶有深色外觀、辛香風味與細緻質地的丹麥石楠花蜜。",
      en: "Danish heather honey from the Jutland heath: dark in the glass, spicy on the palate, fine in texture.",
    } as Localized,
    image: "/images/jar-lyng.jpg",
    landscape: "/images/hero-heath.jpg",
    featured: true,
  },
  {
    slug: "blomster",
    danish: "Blomsterhonning",
    name: { zh: "野花蜜", en: "Wildflower honey" } as Localized,
    eyebrow: { zh: "DANISH WILDFLOWER HONEY", en: "DANISH WILDFLOWER HONEY" } as Localized,
    source: { zh: "春夏多種花源", en: "Spring and summer flowers" } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "極淺、淡黃至淺棕", en: "Very pale, light yellow to light brown" } as Localized,
    texture: { zh: "柔和、易於塗抹", en: "Soft, easy to spread" } as Localized,
    flavor: { zh: "溫和、細緻", en: "Mild and delicate" } as Localized,
    notes: {
      zh: "來自春夏多種花源，色澤較淺，風味溫和。",
      en: "From many spring and summer flowers. Paler in colour, mild in taste.",
    } as Localized,
    lede: {
      zh: "採集自丹麥春季與夏季的多種花源。色澤較淺，風味溫和，帶有細緻花香。",
      en: "Gathered from many Danish flowers in spring and summer. Paler in colour, mild in taste, with a light floral note.",
    } as Localized,
    pairings: {
      zh: "早餐麵包、奶油、優格、燕麥粥與花草茶",
      en: "Breakfast bread, butter, yoghurt, porridge and herbal tea",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What sets it apart" },
        body: {
          zh: "Blomsterhonning 是四款中最容易入門的一款。花源組成隨季節與年份改變，顏色與香氣也會有所不同。",
          en: "Blomsterhonning is the most approachable of the four. The mix of flowers changes with season and year, and so do colour and aroma.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "早餐麵包、奶油、優格、燕麥粥與花草茶。",
          en: "Breakfast bread, butter, yoghurt, porridge and herbal tea.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "Blomsterhonning 丹麥野花蜜｜DANSK LYNG",
      en: "Blomsterhonning, Danish wildflower honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "採集自丹麥春夏多種花源的野花蜜。色澤較淺，風味溫和，帶有細緻花香。",
      en: "Danish wildflower honey from spring and summer flowers. Pale, mild, and lightly floral.",
    } as Localized,
    image: "/images/jar-blomster.jpg",
    landscape: "/images/meadow.jpg",
    featured: false,
  },
  {
    slug: "sensommer",
    danish: "Sensommerhonning",
    name: { zh: "晚夏蜜", en: "Late-summer honey" } as Localized,
    eyebrow: { zh: "DANISH LATE SUMMER HONEY", en: "DANISH LATE SUMMER HONEY" } as Localized,
    source: {
      zh: "白三葉草、菩提、柳蘭與石楠等晚夏花源",
      en: "Late-summer flowers including white clover, lime, fireweed and heather",
    } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "較深", en: "Deeper" } as Localized,
    texture: { zh: "有時較為厚實", en: "Sometimes fuller" } as Localized,
    flavor: {
      zh: "飽滿，呈現多種晚夏花源的層次",
      en: "Full, with the layered character of late-summer flowers",
    } as Localized,
    notes: {
      zh: "多種晚夏花源由蜜蜂自然採集，香氣飽滿，質地有時較為厚實。",
      en: "Bees gather several late-summer flowers. The aroma is full; the texture is sometimes thicker.",
    } as Localized,
    lede: {
      zh: "採集自晚夏花期，常見蜜源包括白三葉草、菩提、柳蘭與石楠。色澤較深，香氣飽滿，質地有時較為厚實。",
      en: "Gathered in late summer, often from white clover, lime, fireweed and heather. Deeper in colour, with a full aroma and, at times, a thicker texture.",
    } as Localized,
    pairings: {
      zh: "黑麥麵包、硬質起司、燕麥粥與紅茶",
      en: "Rye bread, hard cheese, porridge and black tea",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What sets it apart" },
        body: {
          zh: "這不是人工調配的風味。不同花源由蜜蜂在同一採集期自然帶回蜂巢，因此每年的花源比例、色澤和質地都可能不同。",
          en: "This is not a blended flavour. The bees bring different flowers home in the same period, so the mix, the colour and the texture can change from year to year.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "黑麥麵包、硬質起司、燕麥粥與紅茶。",
          en: "Rye bread, hard cheese, porridge and black tea.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "Sensommerhonning 丹麥晚夏蜜｜DANSK LYNG",
      en: "Sensommerhonning, Danish late-summer honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "採集自晚夏花期的丹麥蜂蜜。常見蜜源包括白三葉草、菩提、柳蘭與石楠。",
      en: "Danish honey from the late-summer bloom: white clover, lime, fireweed and heather among the flowers the bees bring home.",
    } as Localized,
    image: "/images/jar-sensommer.jpg",
    landscape: "/images/latesummer.jpg",
    featured: false,
  },
  {
    slug: "skov",
    danish: "Skovhonning",
    name: { zh: "森林蜜", en: "Forest honey" } as Localized,
    eyebrow: { zh: "DANISH FOREST HONEYDEW", en: "DANISH FOREST HONEYDEW" } as Localized,
    source: { zh: "林間蜜露", en: "Woodland honeydew" } as Localized,
    origin: { zh: "丹麥", en: "Denmark" } as Localized,
    color: { zh: "由淺至深，依批次而異", en: "Pale to dark, depending on the batch" } as Localized,
    texture: { zh: "有時較為流動", en: "Sometimes more fluid" } as Localized,
    flavor: {
      zh: "帶有辛香；深色批次可能更為強勁",
      en: "A spicy note; darker batches can taste stronger",
    } as Localized,
    notes: {
      zh: "來自林間蜜露，色澤與風味依批次而異，有時清亮，有時深沉強勁。",
      en: "From woodland honeydew. Colour and taste change with the batch: sometimes pale, sometimes dark and intense.",
    } as Localized,
    lede: {
      zh: "森林蜜屬於蜜露蜜，來源不是花蜜，而是林木環境中的蜜露。它有時色澤清亮、質地流動；有些批次則顏色較深，味道也更為強勁。",
      en: "Forest honey is a honeydew honey. It does not come from flower nectar, but from honeydew in woodland. Some batches are pale and fluid; others are darker, with a stronger taste.",
    } as Localized,
    pairings: {
      zh: "早餐麵包、清淡起司，也可用於料理",
      en: "Breakfast bread, mild cheese, and cooking",
    } as Localized,
    sections: [
      {
        title: { zh: "它有什麼不同？", en: "What sets it apart" },
        body: {
          zh: "森林蜜的來源與花蜜不同，批次之間也可能呈現明顯差異。產品描述應以實際批次為準，不將所有年份寫成相同味道。",
          en: "Forest honey does not come from flower nectar, and batches can differ clearly. What we say about it follows the jar in front of you, not a single taste for every year.",
        },
      },
      {
        title: { zh: "建議搭配", en: "How to serve it" },
        body: {
          zh: "早餐麵包、清淡起司，也可用於料理。",
          en: "Breakfast bread, mild cheese, and in cooking.",
        },
      },
    ] as ProductSection[],
    seoTitle: {
      zh: "Skovhonning 丹麥森林蜜｜DANSK LYNG",
      en: "Skovhonning, Danish forest honey | DANSK LYNG",
    } as Localized,
    seoDesc: {
      zh: "森林蜜屬於蜜露蜜，來源是林木環境中的蜜露。色澤與風味依批次而異。",
      en: "Danish forest honey is a honeydew honey. Colour and taste follow the batch, from pale and fluid to dark and intense.",
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
  { id: "gel", family: "texture", present: false, name: { zh: "凝膠", en: "Gel" } },
  { id: "silk", family: "texture", present: true, name: { zh: "絲絨", en: "Velvet" } },
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
      zh: "從蜜源、色澤、辛香與質地，認識 Lynghonning 與一般花蜜的不同。",
      en: "Heather as the source, then colour, spice and texture: how Lynghonning differs from ordinary blossom honey.",
    },
    body: {
      zh: [
        "Lynghonning 是來自日德蘭荒原的石楠花蜜。石楠迎著海風生長在開闊的砂質土地，到了晚夏，整片荒原轉為紫色。蜜蜂在這段花期採集，才有這款蜂蜜。",
        "它通常呈紅棕至深酒紅色，帶有鮮明辛香，質地細緻、濃稠而容易塗抹。石楠花蜜不以清淡為特色。深色、辛香與濃厚質地，使味道停留得更久，也與一般春夏花蜜形成清楚區別。",
        "DANSK LYNG 的石楠花蜜來自西日德蘭海岸線。石楠盛開時，合作養蜂人將蜂箱移至沿岸不同的石楠荒原與自然保護區，從北到南分布於三十多個採集地點。盛花期的沿岸荒原以石楠為主要蜜源。",
        "花期與天氣每年不同，色澤、香氣、質地與產量也可能有所變化。個別產品資訊以實際批次為準。",
      ],
      en: [
        "Lynghonning is heather honey from the Jutland heath. Heather grows in open, sandy ground in the sea wind. In late summer the land turns purple, and that is when the bees take this honey.",
        "It is usually red-brown to deep burgundy, with a clear spicy note and a fine, dense texture that spreads easily. Heather honey is not made to be mild. Colour, spice and density linger, and set it apart from the lighter blossom honeys of spring and summer.",
        "DANSK LYNG heather honey comes from the West Jutland coast. When the heather is in bloom, the beekeepers we work with move the hives to coastal heaths and nature reserves — more than thirty sites, from north to south. In full bloom, heather is the main source on those shores.",
        "Bloom and weather change from year to year, so colour, aroma, texture and yield can change with them. What is in the jar follows the batch.",
      ],
    },
  },
  {
    slug: "why-once-a-year",
    theme: "terroir" as JournalTheme,
    featured: true,
    date: "2026-03-01",
    title: { zh: "石楠花期如何影響蜂蜜？", en: "How the heather bloom shapes the honey" },
    lede: {
      zh: "開花、天氣與蜜蜂採集的條件，會讓每年的石楠花蜜有所不同。",
      en: "Flowering, weather and the conditions the bees meet all leave a mark on each year’s heather honey.",
    },
    body: {
      zh: [
        "石楠通常在晚夏進入主要花期，大致落在八月至九月。實際開始、盛開與結束的日期，會隨每年的溫度、風雨與氣候而提前或延後。",
        "蜂箱移動與採收因此依當年的花況安排，而不是按照固定日期。天氣好，蜜蜂能採得更穩；風雨一多，花期與產量都會改寫。",
        "這也是為什麼天然蜂蜜的色澤、香氣、質地與產量，可能隨年份而變化。",
        "個別產品資訊以實際批次為準。",
      ],
      en: [
        "Heather usually enters its main bloom in late summer, roughly from August to September. When it starts, peaks and ends depends on temperature, wind, rain and the year.",
        "The hives are moved, and the honey is taken, according to that year’s flowers — not a fixed calendar. Fair weather lets the bees work steadily; wind and rain rewrite both bloom and yield.",
        "That is why colour, aroma, texture and quantity can change from harvest to harvest.",
        "What is in the jar follows the batch.",
      ],
    },
  },
  {
    slug: "the-danish-heathlands",
    theme: "terroir" as JournalTheme,
    featured: true,
    date: "2026-04-20",
    title: { zh: "西日德蘭的石楠荒原", en: "The heather heaths of West Jutland" },
    lede: {
      zh: "Lyng 是丹麥文的石楠，也是 DANSK LYNG 名稱的由來。招牌蜂蜜的蜜源，從這裡開始。",
      en: "Lyng is the Danish word for heather, and the name DANSK LYNG. The signature honey begins on this ground.",
    },
    body: {
      zh: [
        "石楠生長於開闊、砂質而相對貧瘠的土地。開花時，荒原會出現大片紫色花叢，成為蜜蜂在這段花期的重要蜜源。",
        "DANSK LYNG 的石楠花蜜來自西日德蘭海岸線。石楠盛開時，合作養蜂人將蜂箱移至沿岸不同的石楠荒原與自然保護區，從北到南分布於三十多個採集地點。盛花期的沿岸荒原以石楠為主要蜜源，形成這款蜂蜜鮮明的色澤、辛香與質地。",
        "石楠荒原需要持續管理，才能避免老化植株與其他植被逐漸取代石楠。當地自然保護管理會依區域狀況，以週期性更新方式移除老化植株，讓新的石楠重新生長。",
        "石楠花蜜以深色、辛香與濃厚質地受到辨認。它不是被加工成一種荒原風格，而是由蜜源與當年環境形成。",
      ],
      en: [
        "Heather grows on open, sandy, rather poor ground. When it flowers, the heath turns in wide purple stands, and the bees take that bloom as their source.",
        "DANSK LYNG heather honey comes from the West Jutland coast. In bloom, the beekeepers we work with move the hives to coastal heaths and nature reserves — more than thirty sites from north to south. On those shores, heather is the main source in full bloom, and that is what gives the honey its colour, spice and texture.",
        "Heathland has to be kept. Left alone, older plants and other growth slowly take the place of heather. Local conservation work renews the ground in cycles, so new heather can grow.",
        "Heather honey is known by its dark colour, spice and dense texture. It is not styled to look like a heath. The plant and the year make it.",
      ],
    },
  },
  {
    slug: "meet-the-beekeeper",
    theme: "beekeeping" as JournalTheme,
    featured: true,
    date: "2026-02-10",
    title: { zh: "從蜂巢到玻璃罐", en: "From hive to jar" },
    lede: {
      zh: "離心取蜜、低溫處理與結晶控制，如何形成細緻、容易塗抹的蜂蜜質地。",
      en: "Centrifuge, no high heat, and a careful set: how the honey keeps a fine texture that spreads easily.",
    },
    body: {
      zh: [
        "蜂箱在石楠盛開時移至西日德蘭海岸線的石楠荒原。從北到南，三十多個採集地點依當年花況安排。晚夏花期大致在八月至九月，實際日期隨天氣而定。",
        "蜂蜜以離心方式取出，不以高溫加熱，也不添加其他成分。再以細緻的結晶控制，讓蜂蜜形成柔滑、容易塗抹的質地。",
        "罐裡只有蜂蜜，也保留每個年份自然形成的差異。Blomsterhonning、Sensommerhonning 與 Skovhonning 同樣來自丹麥的花期與蜜源，只是季節與來源不同。",
        "我們希望每一罐留下的，是它來自哪裡，以及那一年自然給出的樣子。",
      ],
      en: [
        "When the heather is in bloom, the hives are moved to the coastal heaths of West Jutland. More than thirty sites, north to south, are used according to the year. The late-summer bloom falls roughly in August and September; the exact days follow the weather.",
        "The honey is extracted by centrifuge. It is not heated at high temperature, and nothing else is added. A careful set then gives it a smooth texture that spreads easily.",
        "The jar holds honey only, including the differences each year leaves behind. Blomsterhonning, Sensommerhonning and Skovhonning come from the same Danish landscape, in other seasons and from other sources.",
        "What we want each jar to keep is where it came from, and what that year actually gave.",
      ],
    },
  },
  {
    slug: "importing-danish-honey",
    theme: "taste" as JournalTheme,
    featured: false,
    date: "2026-05-12",
    title: { zh: "四款丹麥蜂蜜有什麼不同？", en: "How the four Danish honeys differ" },
    lede: {
      zh: "比較石楠花蜜、野花蜜、晚夏蜜與森林蜜的蜜源、色澤、質地和風味。",
      en: "Heather, wildflower, late summer and forest: source, colour, texture and taste, side by side.",
    },
    body: {
      zh: [
        "Lynghonning 石楠花蜜來自日德蘭荒原的石楠。紅棕至深酒紅色，辛香而濃厚，質地細緻、易於塗抹。它是品牌最具代表性的風味。",
        "Blomsterhonning 野花蜜採集自丹麥春季與夏季的多種花源。色澤較淺，風味溫和，帶有細緻花香，是四款中最容易入門的一款。",
        "Sensommerhonning 晚夏蜜採集自晚夏花期，常見蜜源包括白三葉草、菩提、柳蘭與石楠。色澤較深，香氣飽滿，質地有時較為厚實。不同花源由蜜蜂在同一採集期自然帶回蜂巢，不是人工調配。",
        "Skovhonning 森林蜜屬於蜜露蜜。來源不是花蜜，而是林木環境中的蜜露。它有時色澤清亮、質地流動；有些批次則顏色較深，味道也更為強勁。批次之間可能有明顯差異，產品描述以實際批次為準。",
      ],
      en: [
        "Lynghonning is heather honey from the Jutland heath. Red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily. It is the flavour the brand is known by.",
        "Blomsterhonning is wildflower honey from many Danish flowers in spring and summer. Paler, milder, lightly floral — the most approachable of the four.",
        "Sensommerhonning is gathered in late summer, often from white clover, lime, fireweed and heather. It is deeper in colour, full in aroma, and sometimes thicker. The bees bring those flowers home in the same period; the taste is not blended by hand.",
        "Skovhonning is forest honey, a honeydew honey. It does not come from flower nectar, but from honeydew in woodland. Some batches are pale and fluid; others are darker and stronger. Batches can differ clearly, and the description follows the jar.",
      ],
    },
  },
  {
    slug: "what-our-honey-is-tested-for",
    theme: "knowledge" as JournalTheme,
    featured: false,
    date: "2026-03-08",
    title: { zh: "蜂蜜為什麼會結晶？", en: "Why honey crystallises" },
    lede: {
      zh: "天然結晶及正確保存方式。結晶並不代表蜂蜜變質。",
      en: "Natural crystallisation, and how to keep the jar. A set honey has not gone wrong.",
    },
    body: {
      zh: [
        "天然蜂蜜可能隨時間結晶。結晶速度與質地受到蜜源、溫度及保存方式影響，並不代表蜂蜜變質。",
        "DANSK LYNG 以細緻的結晶控制，讓蜂蜜形成柔滑、容易塗抹的質地。石楠花蜜尤其如此：細緻、濃稠，容易塗在麵包上。",
        "蜂蜜應置於陰涼、乾燥、避光處，不需冷藏。避免長時間接觸高溫或日光直射。",
        "罐裡只有蜂蜜。色澤、香氣與質地會隨蜜源和年份而變化，這是自然形成的差異，不是品質的等級。",
      ],
      en: [
        "Natural honey may crystallise with time. How quickly, and in what texture, depends on the source, the temperature and how it is kept. It does not mean the honey has spoiled.",
        "DANSK LYNG guides that set so the honey stays smooth and easy to spread. Heather honey especially: fine, dense, ready for bread.",
        "Keep it cool, dry and away from light. It does not need a refrigerator. Avoid long heat and direct sun.",
        "The jar holds honey only. Colour, aroma and texture change with source and year. That is natural variation, not a scale of quality.",
      ],
    },
  },
  {
    slug: "how-to-read-the-lyng-aroma-map",
    theme: "taste" as JournalTheme,
    featured: false,
    date: "2026-04-02",
    title: { zh: "如何品嚐四款丹麥蜂蜜？", en: "How to taste the four Danish honeys" },
    lede: {
      zh: "從色澤、香氣、入口質地到尾韻，找到四款蜂蜜各自適合的餐桌搭配。",
      en: "Colour, aroma, texture on the tongue, then the finish — and the table each honey belongs on.",
    },
    body: {
      zh: [
        "先觀察色澤與質地，再聞香、入口，最後留意尾韻。四款蜂蜜的差異，用這個順序最容易分辨。",
        "Lynghonning 深色、辛香、質地如絲絨。可單獨品嚐，也適合藍紋起司、熟成起司、燕麥餅與黑麥麵包。",
        "Blomsterhonning 色淺、風味溫和，適合早餐麵包、奶油、優格、燕麥粥與花草茶。Sensommerhonning 香氣飽滿，質地有時較厚，適合黑麥麵包、硬質起司、燕麥粥與紅茶。",
        "Skovhonning 是蜜露蜜，有時清亮流動，有時深沉強勁。適合早餐麵包、清淡起司，也可用於料理。產品頁上的風味圖譜，可以幫助閱讀 Lynghonning 的花香、焦糖、木質與質地。",
      ],
      en: [
        "Look first at colour and texture, then smell, taste, and wait for the finish. That order makes the four honeys easiest to tell apart.",
        "Lynghonning is dark, spicy, velvet on the knife. It stands alone, and sits well with blue cheese, aged cheese, oat biscuits and rye bread.",
        "Blomsterhonning is pale and mild — breakfast bread, butter, yoghurt, porridge, herbal tea. Sensommerhonning is fuller in aroma, sometimes thicker, and belongs with rye bread, hard cheese, porridge and black tea.",
        "Skovhonning is honeydew: sometimes pale and running, sometimes dark and intense. Use it on breakfast bread, with mild cheese, or in cooking. The aroma map on the Lynghonning page is a way to read its floral, caramel, wood and texture notes.",
      ],
    },
  },
  {
    slug: "become-a-distribution-partner",
    theme: "knowledge" as JournalTheme,
    featured: false,
    date: "2026-06-01",
    title: { zh: "荒原為什麼需要被維持", en: "Why the heath has to be kept" },
    lede: {
      zh: "石楠荒原不會自己一直開成紫色。沒有管理，其他植被會慢慢把它取代。",
      en: "Heather heath does not stay purple on its own. Without care, other growth slowly takes its place.",
    },
    body: {
      zh: [
        "石楠生長於開闊、砂質而相對貧瘠的土地。這樣的環境需要被維持，石楠才能繼續成為主要植物。",
        "石楠荒原需要持續管理，才能避免老化植株與其他植被逐漸取代石楠。當地自然保護管理會依區域狀況，以週期性更新方式移除老化植株，讓新的石楠重新生長。",
        "DANSK LYNG 的石楠花蜜，來自這類受管理的西日德蘭海岸荒原。蜂箱在盛開時移入，花期結束後再移走。蜂蜜的色澤、辛香與質地，與這片被維持下來的植物有關。",
      ],
      en: [
        "Heather grows on open, sandy, rather poor ground. That ground has to be kept that way if heather is to remain the main plant.",
        "Heathland needs ongoing care, or older plants and other growth slowly replace the heather. Local conservation work renews the ground in cycles, taking out ageing plants so new heather can grow.",
        "DANSK LYNG heather honey comes from this kind of managed coastal heath in West Jutland. The hives are moved in for the bloom and moved on when it ends. Colour, spice and texture belong to a plant that is still there because the land is kept.",
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
export const INSTAGRAM = "https://www.instagram.com/dansklyng/";
