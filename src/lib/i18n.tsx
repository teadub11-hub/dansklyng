import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import type { Lang } from "./content";
import { STORAGE_KEY, localePath, stripLangPrefix } from "./locale";

type I18nCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const Ctx = createContext<I18nCtx | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next: Lang) => {
        window.localStorage.setItem(STORAGE_KEY, next);
        const rest = stripLangPrefix(router.state.location.pathname);
        void router.navigate({ href: localePath(next, rest) });
      },
    }),
    [lang, router],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export const ui = {
  zh: {
    skip: "跳至主要內容",
    navProducts: "蜂蜜",
    navHeath: "石楠與荒原",
    navJournal: "風土誌",
    navAbout: "品牌故事",
    navPartner: "批發與經銷",
    navContact: "聯絡",
    ctaPartner: "業務洽詢",
    ctaExplore: "批發與經銷",
    ctaCatalog: "查看蜂蜜",
    ctaStory: "品牌故事",
    ctaRead: "閱讀文章",
    ctaDiscoverLyng: "認識石楠花蜜",
    ctaHeath: "認識石楠花蜜",
    ctaForTrade: "批發與經銷",
    ctaDiscuss: "業務洽詢",
    ctaCraft: "我們如何製作",
    ctaFour: "查看四款蜂蜜",
    langSwitch: "EN",
    langLabel: "English",
    wordmark: "DANSK LYNG",
    footerNature: "丹麥的純淨，石楠的個性。四款來自丹麥自然的蜂蜜。",
    footerTag: "Honning fra Jylland · Danmark",
    footerMotto: "Naturen ved bedst. 自然最懂。",
    footerLegal: "法律",
    footerPrivacy: "隱私權政策",
    footerTerms: "使用條款",
    footerCookies: "Cookies",
    footerProducts: "蜂蜜",
    footerPartner: "批發與經銷",
    footerBrand: "品牌與知識",
    subscribeTitle: "DANSK LYNG 通訊",
    subscribeBody: "收到產品、石楠花期與風土誌的新消息。",
    subscribeCta: "以電子郵件聯絡",
    subscribePlaceholder: "電子郵件",
    subscribeDone: "請以電子郵件聯絡我們。",
    jar: "450 g 玻璃罐",
    danishOrigin: "丹麥產地",
    natural: "零添加",
    seasonal: "晚夏花期",
    singleOrigin: "丹麥來源",
    viewSpec: "查看蜂蜜",
    requestSpec: "洽詢產品",
    productExplore: "探索風味與搭配",
    productTradeTitle: "批發與經銷",
    productTradeBody: "如需產品、樣品或合作資訊，請聯絡我們。",
    homeEyebrow: "DANISH HONEY · JUTLAND",
    homeH1a: "丹麥的純淨，石楠的個性",
    homeH1b: "",
    homeLede:
      "四款來自丹麥自然的蜂蜜，從溫和花香到深色蜜露，各有自己的風味。品牌代表是石楠花蜜，來自西日德蘭石楠荒原，辛香、深色，質地如絲絨般細緻。",
    homeScroll: "往下",
    homeDanskEyebrow: "PURITY FROM DENMARK",
    homeDanskTitle: "純淨，是每一款蜂蜜共同的起點",
    homeDanskBody:
      "來自丹麥的自然環境，以離心方式取蜜，不以高溫加熱，也不添加其他成分。留下的，是不同花期與蜜源原有的色澤、香氣和質地。",
    homeLyngEyebrow: "THE SIGNATURE OF DANSK LYNG",
    homeLyngTitle: "Lyng，是丹麥文的石楠",
    homeLyngBody:
      "石楠迎著海風生長在開闊荒原，到了晚夏，整片土地轉為紫色。它的蜂蜜則呈紅棕至深酒紅色，帶有辛香與濃厚風味，質地細緻、柔滑而容易塗抹。這就是 DANSK LYNG 最鮮明的味道。",
    homeRange: "FOUR DANISH HONEYS",
    homeRangeTitle: "同一個丹麥，四種蜂蜜風味",
    homeRangeLede:
      "石楠花蜜是品牌最具代表性的風味；野花蜜、晚夏蜜與森林蜜，則從不同花期與蜜源，展現丹麥蜂蜜由明亮溫和到深沉飽滿的完整層次。",
    homeFlag: "品牌代表",
    homeCraftEyebrow: "SIMPLY HONEY",
    homeCraftTitle: "保留蜂蜜原來的樣子",
    homeCraftBody:
      "離心取蜜、不以高溫加熱、零添加。再以細緻的結晶控制，讓蜂蜜形成柔滑、容易塗抹的質地。罐裡只有蜂蜜，也保留每個年份自然形成的差異。",
    homeJournal: "走進丹麥蜂蜜的風味",
    homeJournalLede: "從石楠荒原、晚夏花期與移動蜂箱，到四款蜂蜜的風味、質地與餐桌搭配。",
    homeAllNotes: "閱讀風土誌",
    homeTradeLine: "一個有代表產品，也有完整系列的丹麥蜂蜜品牌",
    homeTradeBody:
      "鮮明的丹麥來源、容易記住的石楠故事，以及四款各有風味的產品，讓品牌容易被辨認，也讓消費者有更多選擇。",
    catalogEyebrow: "THE COLLECTION",
    catalogTitle: "四款丹麥蜂蜜",
    catalogLede:
      "石楠花蜜是品牌代表。其餘三款依花期閱讀：春夏野花、晚夏花源，再到林間蜜露。天然蜂蜜的色澤、質地與風味會隨蜜源和年份而變化。",
    catalogRest: "其餘花期",
    catalogRestTitle: "春夏、晚夏與森林",
    catalogReady: "尋找批發與經銷資訊？",
    catalogReadyBody: "查看產品系列、品牌資料與業務聯絡方式。",
    specSource: "蜜源",
    specOrigin: "產地",
    specDanish: "丹麥名稱",
    specColor: "色澤",
    specTexture: "質地",
    specFlavour: "風味",
    harvest: "蜜源",
    aroma: "風味",
    format: "規格",
    pairings: "搭配",
    storage: "保存",
    storageBody: "置於陰涼、乾燥、避光處，不需冷藏。避免長時間接觸高溫或日光直射。",
    aromaTitle: "Lyng 風味圖譜",
    aromaLede: "從花香、焦糖、木質到質地，閱讀這款日德蘭石楠花蜜。",
    aromaPresent: "此罐有",
    aromaAbsent: "家族裡有、此罐不寫",
    heathEyebrow: "LYNG & THE HEATHLAND",
    heathH1: "石楠花蜜，從荒原開始",
    heathLede: "Lyng 是丹麥文的石楠，也是 DANSK LYNG 名稱的由來。它不只是品牌意象，而是招牌蜂蜜真正的蜜源。",
    heathHeatherT: "石楠",
    heathHeather1:
      "石楠生長於開闊、砂質而相對貧瘠的土地。開花時，荒原會出現大片紫色花叢，成為蜜蜂在這段花期的重要蜜源。",
    heathHeather2:
      "DANSK LYNG 的石楠花蜜來自西日德蘭海岸線。石楠盛開時，合作養蜂人將蜂箱移至沿岸不同的石楠荒原與自然保護區，從北到南分布於三十多個採集地點。盛花期的沿岸荒原以石楠為主要蜜源，形成這款蜂蜜鮮明的色澤、辛香與質地。",
    heathBloomT: "花期",
    heathBloom:
      "石楠通常在晚夏進入主要花期，大致落在八月至九月。實際開始、盛開與結束日期，會隨每年的溫度、風雨與氣候而提前或延後。蜂箱移動與採收因此依當年的花況安排，而不是按照固定日期。",
    heathHoneyT: "蜂蜜",
    heathHoney: "石楠花蜜以深色、辛香與濃厚質地受到辨認。它不是被加工成一種荒原風格，而是由蜜源與當年環境形成。",
    heathCareT: "荒原的維護",
    heathCare:
      "石楠荒原需要持續管理，才能避免老化植株與其他植被逐漸取代石楠。當地自然保護管理會依區域狀況，以週期性更新方式移除老化植株，讓新的石楠重新生長。",
    aboutEyebrow: "ABOUT DANSK LYNG",
    aboutH1: "一個名字，說出品牌來自哪裡",
    aboutLede: "DANSK 是丹麥，LYNG 是石楠。這兩個字，組成了品牌的來源，也組成了我們想帶給餐桌的風味。",
    aboutDanskT: "DANSK｜丹麥的純淨",
    aboutDansk:
      "丹麥的自然環境，給了四款蜂蜜共同的品牌底色：乾淨、清楚、不過度修飾。從溫和的春夏花蜜到來自林間蜜露的森林蜜，每一款都保留自己的蜜源與季節個性。",
    aboutLyngT: "LYNG｜石楠的個性",
    aboutLyng:
      "Lyng 是丹麥文的石楠。它生長在西日德蘭開闊的海岸荒原，迎著風，在其他花期接近尾聲的晚夏盛開。紫色荒原、深酒紅色蜂蜜、鮮明辛香與絲絨般質地，共同形成 DANSK LYNG 的品牌識別。",
    aboutRangeT: "以石楠為代表，不只石楠",
    aboutRange:
      "石楠花蜜是品牌代表，但 DANSK LYNG 不只一款蜂蜜。野花蜜、晚夏蜜與森林蜜分別帶來春夏花香、晚夏層次與森林蜜露的深沉風味。四款產品一起，才是我們想呈現的丹麥蜂蜜。",
    aboutCraftT: "少一點加工，多一點蜂蜜本身",
    aboutCraft:
      "蜂蜜以離心方式取出，不以高溫加熱，也不添加其他成分。透過細緻的結晶控制，使質地柔滑而容易塗抹，同時保留不同蜜源與年份帶來的自然差異。",
    ctaStart: "業務洽詢",
    partnerEyebrow: "WHOLESALE & DISTRIBUTION",
    partnerTitle: "一個消費者容易記住的丹麥蜂蜜品牌",
    partnerLede:
      "丹麥的純淨、石楠的鮮明個性，加上四款風味清楚的蜂蜜，讓 DANSK LYNG 容易被看見、介紹與選購。",
    partnerOriginK: "清楚的購買理由",
    partnerOriginH: "從丹麥來源，到可以品嚐的差異。",
    partnerOriginB:
      "丹麥來源建立第一印象；色澤、香氣、風味與質地，讓四款蜂蜜各有清楚特色。從瓶身到實際品嚐，消費者都能直接感受到差異。",
    partnerHow: "有代表產品，也有完整系列",
    partnerCh1t: "代表產品",
    partnerCh1:
      "石楠花蜜以西日德蘭石楠荒原、深色辛香與絲絨般質地建立品牌記憶。",
    partnerCh2t: "完整系列",
    partnerCh2:
      "野花蜜、晚夏蜜與森林蜜提供由溫和至濃厚、由花蜜至蜜露的選擇，組成層次清楚的四款系列。",
    partnerCh3t: "容易說明",
    partnerCh3:
      "清楚的品名、風味區分與完整品牌視覺，適合選品零售、食品、餐飲、禮贈與生活風格通路。",
    supportTitle: "容易放上貨架，也容易說明",
    support1t: "產品介紹",
    support1: "四款蜂蜜各有清楚的蜜源、色澤、質地、風味與餐桌搭配，方便店員介紹，也方便消費者選擇。",
    support2t: "品牌故事",
    support2: "丹麥的純淨與石楠的個性，是消費者容易記住、也容易轉述的來源。",
    support3t: "圖片與銷售素材",
    support3: "合作夥伴可取得產品介紹、品牌故事、圖片與銷售素材。",
    support4t: "合作",
    support4: "如需產品、樣品或合作資訊，請聯絡我們。",
    applyTitle: "業務洽詢",
    applyLede: "請留下聯絡資料與感興趣的產品，我們會回覆相關資訊。",
    applyStepCompany: "公司",
    applyStepNeeds: "需求",
    applyStepContact: "聯絡",
    applyCompany: "公司名稱",
    applyCountry: "國家／地區",
    applyType: "通路類型（選填）",
    applyTypePh: "請選擇",
    typeImporter: "進口商",
    typeDistributor: "經銷",
    typeRetail: "零售",
    typeHoreca: "餐飲",
    typeOther: "其他",
    applyContinue: "繼續",
    applyBack: "返回",
    applyProducts: "感興趣的產品（選填）",
    applyMessage: "留言（選填）",
    applyName: "聯絡人",
    applyEmail: "工作信箱",
    applySubmit: "送出洽詢",
    applySending: "送出中",
    applyPrivacy: "我們只把資料用於回覆此次洽詢。",
    applyDoneTitle: "已收到你的洽詢。",
    applyDoneBody: "我們會寄信到你留下的信箱。若需要，也可寫信到 hej@dansklyng.com。",
    applyError: "沒有送出。請再試一次，或來信 hej@dansklyng.com。",
    applyDraft: "草稿已記在這台裝置上",
    contactTitle: "聯絡 DANSK LYNG",
    contactLede: "一般、媒體與產品詢問，請來信。批發與經銷請走業務洽詢。",
    contactGeneral: "一般、媒體與產品詢問",
    contactPartner: "批發與經銷",
    contactPress: "Instagram",
    journalTitle: "石楠、荒原與丹麥蜂蜜",
    journalLede: "從丹麥自然、石楠荒原與移動蜂箱，到四款蜂蜜的風味、質地與餐桌。",
    journalStart: "從這裡讀。",
    journalAll: "全部文章",
    journalNext: "下一篇",
    faqTitle: "常見問題",
    faqLede: "四款蜂蜜、石楠花蜜、森林蜜與保存。",
    faq1q: "DANSK LYNG 有哪些蜂蜜？",
    faq1a: "系列包含石楠花蜜、野花蜜、晚夏蜜與森林蜜。",
    faq2q: "石楠花蜜有什麼不同？",
    faq2a: "石楠花蜜通常呈紅棕至深酒紅色，帶有辛香與濃厚風味，質地細緻而易於塗抹。實際特性會因年份及批次而異。",
    faq3q: "森林蜜也是花蜜嗎？",
    faq3a: "不是。森林蜜屬於蜜露蜜，來源是林木環境中的蜜露，而非花朵的花蜜。",
    faq4q: "蜂蜜為什麼會結晶？",
    faq4a: "天然蜂蜜可能隨時間結晶。結晶速度與質地受到蜜源、溫度及保存方式影響，並不代表蜂蜜變質。",
    faq5q: "蜂蜜應如何保存？",
    faq5a: "置於陰涼、乾燥、避光處，不需冷藏。避免長時間接觸高溫或日光直射。",
    faq6q: "可以申請樣品嗎？",
    faq6a: "請透過業務洽詢表單聯絡我們，樣品安排以實際回覆為準。",
    faq7q: "如何洽詢批發或經銷？",
    faq7a: "請填寫業務洽詢表單，或寄信至 hej@dansklyng.com。",
    legalPrivacyTitle: "隱私權政策",
    legalPrivacy:
      "Dansk Lyng 是一個來自丹麥的品牌。業務洽詢表單只用於回覆該次詢問，資料寄至 hej@dansklyng.com。我們不出售個人資料。",
    legalTermsTitle: "使用條款",
    legalTerms: "本網站內容供了解品牌與產品。產品供應與商業條件以書面確認為準。",
    legalCookiesTitle: "Cookie 政策",
    legalCookies: "不使用追蹤 cookie，只在你的裝置上記住語言偏好。",
    notFound: "沒有這一篇。",
    backJournal: "回到風土誌",
    backProducts: "回到蜂蜜",
    menu: "選單",
    close: "關閉",
    seoHomeTitle: "DANSK LYNG｜丹麥石楠花蜜",
    seoHomeDesc: "DANSK LYNG 以丹麥的純淨自然為根、以石楠為品牌標誌，帶來石楠花蜜、野花蜜、晚夏蜜與森林蜜。",
    seoAboutTitle: "關於 DANSK LYNG｜丹麥蜂蜜品牌",
    seoAboutDesc: "DANSK LYNG 以日德蘭石楠花蜜為代表，呈現四款具有不同蜜源與風味的丹麥蜂蜜。",
    seoProductsTitle: "四款丹麥蜂蜜｜DANSK LYNG",
    seoProductsDesc: "比較丹麥石楠花蜜、野花蜜、晚夏蜜與森林蜜的蜜源、色澤、質地與風味。",
    seoHeathTitle: "石楠花蜜與日德蘭荒原｜DANSK LYNG",
    seoHeathDesc: "了解石楠的生長環境、花期與天氣如何影響丹麥石楠花蜜。",
    seoJournalTitle: "石楠、荒原與丹麥蜂蜜｜DANSK LYNG",
    seoJournalDesc: "從丹麥自然、石楠荒原與移動蜂箱，到四款蜂蜜的風味、質地、餐桌搭配與保存方式。",
    seoPartnerTitle: "丹麥蜂蜜批發與經銷｜DANSK LYNG",
    seoPartnerDesc: "洽詢 DANSK LYNG 石楠花蜜與丹麥蜂蜜系列的進口、經銷、零售及餐飲合作。",
    seoApplyTitle: "業務洽詢｜DANSK LYNG",
    seoApplyDesc: "請留下聯絡資料與感興趣的產品。以電子郵件與我們聯絡。",
    seoContactTitle: "聯絡 DANSK LYNG",
    seoContactDesc: "一般、媒體與產品詢問請寄 hej@dansklyng.com。批發與經銷請走業務洽詢。",
    seoFaqTitle: "常見問題｜DANSK LYNG",
    seoFaqDesc: "四款蜂蜜、石楠花蜜、森林蜜、結晶與保存。",
    seoPrivacyTitle: "隱私權政策｜DANSK LYNG",
    seoPrivacyDesc: "洽詢目前透過電子郵件進行。我們不出售個人資料。",
    seoTermsTitle: "使用條款｜DANSK LYNG",
    seoTermsDesc: "本網站內容供了解品牌與產品。商業條件以書面確認為準。",
    seoCookiesTitle: "Cookie 政策｜DANSK LYNG",
    seoCookiesDesc: "不使用追蹤 cookie。只在你的裝置上記住語言偏好。",
  },
  en: {
    skip: "Skip to main content",
    navProducts: "Honey",
    navHeath: "Heather & heathland",
    navJournal: "Journal",
    navAbout: "Our story",
    navPartner: "Wholesale",
    navContact: "Contact",
    ctaPartner: "Trade enquiry",
    ctaExplore: "Wholesale",
    ctaCatalog: "View the collection",
    ctaStory: "Our story",
    ctaRead: "Read the article",
    ctaDiscoverLyng: "Discover heather honey",
    ctaHeath: "Heather honey",
    ctaForTrade: "Wholesale",
    ctaDiscuss: "Trade enquiry",
    ctaCraft: "From hive to jar",
    ctaFour: "Explore all four honeys",
    langSwitch: "中文",
    langLabel: "繁體中文",
    wordmark: "DANSK LYNG",
    footerNature:
      "Pure Danish nature. The distinctive character of heather. Four honeys shaped by the landscape.",
    footerTag: "Honning fra Jylland · Danmark",
    footerMotto: "Naturen ved bedst. Nature knows best.",
    footerLegal: "Legal",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerCookies: "Cookies",
    footerProducts: "Honey",
    footerPartner: "Wholesale",
    footerBrand: "Brand & journal",
    subscribeTitle: "Notes from DANSK LYNG",
    subscribeBody: "News from the heather heath, the honey harvest and our journal.",
    subscribeCta: "Write to us",
    subscribePlaceholder: "Email",
    subscribeDone: "Please write to us by email.",
    jar: "450 g glass jar",
    danishOrigin: "Danish origin",
    natural: "Nothing added",
    seasonal: "Late-summer bloom",
    singleOrigin: "From Denmark",
    viewSpec: "View this honey",
    requestSpec: "Enquire",
    productExplore: "Explore flavour & pairings",
    productTradeTitle: "Wholesale enquiries",
    productTradeBody: "For product information, samples or wholesale enquiries, contact our team.",
    homeEyebrow: "DANISH HONEY · JUTLAND",
    homeH1a: "Pure Danish nature. Distinctly heather.",
    homeH1b: "",
    homeLede:
      "Four honeys shaped by Denmark's changing seasons, from delicate wildflower honey to dark forest honeydew. At the heart of the collection is our heather honey from West Jutland: deep in colour, warm with spice and naturally velvety.",
    homeScroll: "Scroll",
    homeDanskEyebrow: "PURE DANISH NATURE",
    homeDanskTitle: "Honey, with nothing unnecessary",
    homeDanskBody:
      "Harvested in Denmark, gently extracted from the comb and never exposed to high heat. Nothing else is added, allowing every jar to retain the colour, aroma and texture of its season and source.",
    homeLyngEyebrow: "THE SIGNATURE OF DANSK LYNG",
    homeLyngTitle: "Lyng is Danish for heather",
    homeLyngBody:
      "Heather grows across the open heath, exposed to the wind from the North Sea. In late summer, the landscape turns purple. The honey is red-brown to deep burgundy, distinctly spicy and naturally velvety—the defining taste of DANSK LYNG.",
    homeRange: "FOUR DANISH HONEYS",
    homeRangeTitle: "One landscape. Four distinct honeys.",
    homeRangeLede:
      "Heather honey is our signature. Wildflower, late-summer and forest honey reveal other seasons and sources, creating a collection that moves from pale and delicate to dark and full-flavoured.",
    homeFlag: "Signature",
    homeCraftEyebrow: "SIMPLY HONEY",
    homeCraftTitle: "Nothing added. Nature preserved.",
    homeCraftBody:
      "Gently extracted from the comb, never exposed to high heat and made with nothing but honey. Careful crystallisation develops a smooth, spreadable texture while preserving the natural character of each harvest.",
    homeJournal: "Discover the character of Danish honey",
    homeJournalLede:
      "Explore the heather heathlands, the late-summer bloom and the journeys of the hives—along with the flavour, texture and place behind each honey.",
    homeAllNotes: "Read the journal",
    homeTradeLine: "A signature honey. A complete Danish collection.",
    homeTradeBody:
      "A clear Danish origin, a distinctive heather story and four complementary flavour profiles give DANSK LYNG a strong identity on shelf and a collection customers can easily explore.",
    catalogEyebrow: "THE COLLECTION",
    catalogTitle: "Four Danish honeys",
    catalogLede:
      "Heather honey is our signature. The other three follow Denmark's seasons: spring and summer wildflowers, the late-summer bloom, then woodland honeydew. Each source brings its own colour, texture and flavour.",
    catalogRest: "THROUGH THE SEASONS",
    catalogRestTitle: "Wildflowers, late summer and the forest",
    catalogReady: "Interested in wholesale?",
    catalogReadyBody: "Discover the collection and contact our team for product information or samples.",
    specSource: "Source",
    specOrigin: "Origin",
    specDanish: "Danish name",
    specColor: "Colour",
    specTexture: "Texture",
    specFlavour: "Flavour",
    harvest: "Source",
    aroma: "Flavour",
    format: "Size",
    pairings: "Pairings",
    storage: "Storage",
    storageBody:
      "Store in a cool, dry place away from direct sunlight. Refrigeration is not required. Avoid prolonged exposure to heat.",
    aromaTitle: "The LYNG aroma map",
    aromaLede: "Floral, caramel, woodland and texture notes in our West Jutland heather honey.",
    aromaPresent: "In this honey",
    aromaAbsent: "Not found in this honey",
    heathEyebrow: "LYNG & THE HEATHLAND",
    heathH1: "Heather honey begins on the heath",
    heathLede:
      "Lyng is Danish for heather—and the word at the heart of DANSK LYNG. More than a symbol, it is the source of our signature honey.",
    heathHeatherT: "Heather",
    heathHeather1:
      "Heather thrives on open heathland, rooted in sandy, nutrient-poor soil. When it flowers, broad stretches of the landscape turn purple, providing an important late-summer source of nectar for the bees.",
    heathHeather2:
      "DANSK LYNG heather honey comes from the coastal heathlands of West Jutland. During the bloom, the beekeepers we work with move their hives among more than thirty heathland sites and nature reserves along the coast. Here, heather dominates the landscape in flower, shaping the honey's deep colour, warm spice and velvety texture.",
    heathBloomT: "The late-summer bloom",
    heathBloom:
      "Heather generally reaches full bloom between August and September. The exact timing changes with the year's temperature, wind and rainfall, so the hives move—and the honey is harvested—in step with the flowers rather than a fixed calendar.",
    heathHoneyT: "The honey",
    heathHoney:
      "Deep in colour, distinctly spicy and naturally velvety, heather honey carries the character of the plant, the place and the season.",
    heathCareT: "Caring for the heathland",
    heathCare:
      "Heathland needs active care. Without it, ageing plants and other vegetation gradually take over. Local conservation work renews the landscape in cycles, making space for young heather to grow.",
    aboutEyebrow: "ABOUT DANSK LYNG",
    aboutH1: "A name rooted in Denmark",
    aboutLede:
      "DANSK means Danish. LYNG means heather. Together, they name the place we come from and the flavour that defines us.",
    aboutDanskT: "DANSK · pure Danish nature",
    aboutDansk:
      "All four honeys begin in Denmark's landscape and changing seasons. From delicate spring and summer flowers to deep forest honeydew, each jar is made with nothing but honey and retains the natural character of its source and harvest.",
    aboutLyngT: "LYNG · the character of heather",
    aboutLyng:
      "Lyng is Danish for heather. It grows across the open coastal heathlands of West Jutland and flowers in late summer, as many other blooms begin to fade. Purple heathland, burgundy honey, warm spice and a velvety texture: this is the signature of DANSK LYNG.",
    aboutRangeT: "One signature. Four Danish honeys.",
    aboutRange:
      "Heather honey leads the collection. Wildflower honey brings the delicacy of spring and summer flowers; late-summer honey, the richness of the season's final bloom; and forest honey, the depth and natural variation of woodland honeydew. Together, they show the breadth of Danish honey.",
    aboutCraftT: "Handled gently, true to each harvest",
    aboutCraft:
      "The honey is gently extracted from the comb, never exposed to high heat and made with nothing else added. Careful crystallisation develops a smooth, spreadable texture while preserving the natural variation of every source and harvest.",
    ctaStart: "Trade enquiry",
    partnerEyebrow: "WHOLESALE & DISTRIBUTION",
    partnerTitle: "A Danish honey brand with a story customers remember",
    partnerLede:
      "A clear Danish origin, a distinctive signature honey and four complementary flavour profiles give DANSK LYNG a strong identity on shelf and an easy story to share.",
    partnerOriginK: "WHY DANSK LYNG",
    partnerOriginH: "Danish origin. A difference customers can taste.",
    partnerOriginB:
      "Denmark establishes the provenance. Distinct colours, textures and flavour profiles give each honey an identity customers can recognise on shelf and experience at the table.",
    partnerHow: "ONE SIGNATURE. FOUR HONEYS.",
    partnerCh1t: "The signature honey",
    partnerCh1:
      "Heather honey anchors the collection with a memorable origin and sensory identity: West Jutland heathland, deep burgundy colour, warm spice and a naturally velvety texture.",
    partnerCh2t: "The complete collection",
    partnerCh2:
      "Wildflower, late-summer and forest honey broaden the collection from delicate to full-flavoured, and from flower nectar to woodland honeydew.",
    partnerCh3t: "A clear story at every touchpoint",
    partnerCh3:
      "Distinct product names, clearly differentiated flavour profiles and a consistent visual identity make DANSK LYNG easy to present across speciality retail, food, hospitality, gifting and lifestyle channels.",
    supportTitle: "Easy on the shelf, and easy to explain",
    support1t: "Product notes",
    support1:
      "Clear source, colour, texture, flavour and pairing notes help retail teams present the range and customers choose between the four honeys.",
    support2t: "The story",
    support2:
      "The purity of Denmark and the character of heather give the brand a clear story that is easy to remember and share.",
    support3t: "Images and sales material",
    support3: "Partners receive product information, brand storytelling, imagery and sales materials.",
    support4t: "Working together",
    support4: "Contact us for product details, samples and wholesale enquiries.",
    applyTitle: "Trade enquiry",
    applyLede:
      "Leave your contact details and tell us which products interest you. Our team will reply with the relevant information.",
    applyStepCompany: "Company",
    applyStepNeeds: "Interest",
    applyStepContact: "Contact",
    applyCompany: "Company name",
    applyCountry: "Country or region",
    applyType: "Business type (optional)",
    applyTypePh: "Select one",
    typeImporter: "Importer",
    typeDistributor: "Distributor",
    typeRetail: "Retailer",
    typeHoreca: "Hospitality",
    typeOther: "Other",
    applyContinue: "Continue",
    applyBack: "Back",
    applyProducts: "Products of interest (optional)",
    applyMessage: "Message (optional)",
    applyName: "Contact name",
    applyEmail: "Business email",
    applySubmit: "Send enquiry",
    applySending: "Sending…",
    applyPrivacy: "We will use these details only to respond to your enquiry.",
    applyDoneTitle: "Thank you. We have received your enquiry.",
    applyDoneBody:
      "We will reply to the email address you provided. You can also contact us at hej@dansklyng.com.",
    applyError: "Your enquiry could not be sent. Please try again or email us at hej@dansklyng.com.",
    applyDraft: "Draft saved on this device",
    contactTitle: "Contact DANSK LYNG",
    contactLede:
      "For general, press or product enquiries, email us directly. For wholesale and distribution, use the trade enquiry form.",
    contactGeneral: "General, press & product",
    contactPartner: "Wholesale & distribution",
    contactPress: "Instagram",
    journalTitle: "Heather, heathland and Danish honey",
    journalLede:
      "Stories from the Danish landscape, from the heather heathlands and moving hives to the flavour, texture and place behind each honey.",
    journalStart: "Start here.",
    journalAll: "All stories",
    journalNext: "Read next",
    faqTitle: "Frequently asked questions",
    faqLede: "About our four honeys, their natural variation and how to store them.",
    faq1q: "Which honeys are in the DANSK LYNG collection?",
    faq1a:
      "The collection includes heather honey, wildflower honey, late-summer honey and forest honey.",
    faq2q: "What makes heather honey distinctive?",
    faq2a:
      "Heather honey is red-brown to deep burgundy, distinctly spicy and full-flavoured, with a smooth, velvety texture. Its exact character varies naturally from one harvest to the next.",
    faq3q: "Is forest honey made from flower nectar?",
    faq3a:
      "No. Forest honey is a honeydew honey, gathered from honeydew found in woodland rather than from flower nectar.",
    faq4q: "Why does honey crystallise?",
    faq4a:
      "Crystallisation is a natural process. How quickly it happens—and the texture it creates—depends on the honey's source, temperature and storage. It does not mean the honey has spoiled.",
    faq5q: "How should I store honey?",
    faq5a:
      "Keep honey in a cool, dry place away from direct sunlight. It does not need to be refrigerated, and should not be exposed to heat for long periods.",
    faq6q: "Are samples available?",
    faq6a:
      "Samples may be available for trade enquiries. Contact us through the trade enquiry form and we will reply with the relevant information.",
    faq7q: "How can I enquire about wholesale?",
    faq7a: "Use our trade enquiry form or email hej@dansklyng.com.",
    legalPrivacyTitle: "Privacy",
    legalPrivacy:
      "Information submitted through the trade enquiry form is used only to respond to that enquiry and is sent to hej@dansklyng.com. DANSK LYNG does not sell personal data.",
    legalTermsTitle: "Terms",
    legalTerms:
      "This website presents the DANSK LYNG brand and its products. Supply, pricing and other commercial terms apply only when confirmed in writing.",
    legalCookiesTitle: "Cookies",
    legalCookies:
      "This website does not use tracking cookies. Your language preference and locally saved enquiry draft may be stored on your device.",
    notFound: "We could not find this page.",
    backJournal: "Back to the journal",
    backProducts: "Back to all honeys",
    menu: "Menu",
    close: "Close",
    seoHomeTitle: "DANSK LYNG | Danish heather honey",
    seoHomeDesc:
      "Discover DANSK LYNG: heather, wildflower, late-summer and forest honey shaped by Denmark's landscape and changing seasons.",
    seoAboutTitle: "Our story | DANSK LYNG Danish honey",
    seoAboutDesc:
      "DANSK LYNG brings together four Danish honeys, led by our signature heather honey from the heathlands of West Jutland.",
    seoProductsTitle: "Four Danish honeys | DANSK LYNG",
    seoProductsDesc:
      "Explore four Danish honeys—heather, wildflower, late-summer and forest honeydew—each with its own colour, texture and flavour.",
    seoHeathTitle: "Heather honey and the heathlands of West Jutland | DANSK LYNG",
    seoHeathDesc:
      "Discover how heather, the late-summer bloom and the coastal climate shape Danish heather honey.",
    seoJournalTitle: "Heather, heathland and Danish honey | DANSK LYNG",
    seoJournalDesc:
      "Stories of Danish heathland, the moving hives and the flavour, texture and place behind each of our four honeys.",
    seoPartnerTitle: "Danish honey wholesale & distribution | DANSK LYNG",
    seoPartnerDesc:
      "Discover DANSK LYNG for import, distribution, speciality retail, hospitality and gifting. Enquire about products and samples.",
    seoApplyTitle: "Trade enquiry | DANSK LYNG",
    seoApplyDesc: "Contact DANSK LYNG for product information, samples, wholesale and distribution enquiries.",
    seoContactTitle: "Contact DANSK LYNG",
    seoContactDesc: "Contact DANSK LYNG for general, press, product or wholesale enquiries.",
    seoFaqTitle: "Frequently asked questions | DANSK LYNG",
    seoFaqDesc:
      "Answers about our four Danish honeys, heather honey, forest honeydew, crystallisation and storage.",
    seoPrivacyTitle: "Privacy | DANSK LYNG",
    seoPrivacyDesc: "How DANSK LYNG uses information submitted through this website.",
    seoTermsTitle: "Terms | DANSK LYNG",
    seoTermsDesc: "Terms for using the DANSK LYNG website.",
    seoCookiesTitle: "Cookies | DANSK LYNG",
    seoCookiesDesc: "Information about cookies and local preferences on the DANSK LYNG website.",
  }
} as const;

export type UiKey = keyof typeof ui.zh;

export function useT() {
  const { lang } = useLang();
  return ui[lang];
}
