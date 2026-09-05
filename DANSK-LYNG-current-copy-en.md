# DANSK LYNG — current published English copy

Extracted as currently published. No rewrite, paraphrase or improvement.

- Site freeze as of 5 September 2026
- Language: English (`/en`)
- Primary sources: `src/lib/i18n.tsx` (`ui.en`), `src/lib/content.ts`, route files, `src/lib/seo.tsx`, `src/components/`
- Decorative images with `alt=""` are listed as empty alt
- Unused keys still stored in `ui.en` are in the appendix; they are **not** currently rendered

---

## Global chrome (all `/en` routes)

### Navigation

#### Skip link

- **Route:** `all /en`
- **Section / component:** Skip link
- **Current English:** “Skip to main content”
- **Source:** `src/lib/i18n.tsx` → `ui.en.skip`

#### Wordmark / aria-label

- **Route:** `all /en`
- **Section / component:** Wordmark / aria-label
- **Current English:** “DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.wordmark`

#### Nav — Honey

- **Route:** `all /en`
- **Section / component:** Nav — Honey
- **Current English:** “Honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navProducts`

#### Nav — Heather & the heath

- **Route:** `all /en`
- **Section / component:** Nav — Heather & the heath
- **Current English:** “Heather & the heath”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navHeath`

#### Nav — Our story

- **Route:** `all /en`
- **Section / component:** Nav — Our story
- **Current English:** “Our story”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navAbout`

#### Nav — Journal

- **Route:** `all /en`
- **Section / component:** Nav — Journal
- **Current English:** “Journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navJournal`

#### Nav — Contact

- **Route:** `all /en`
- **Section / component:** Nav — Contact
- **Current English:** “Contact”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navContact`

#### Header CTA

- **Route:** `all /en`
- **Section / component:** Header CTA
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaForTrade`

#### Language switch label (visible)

- **Route:** `all /en`
- **Section / component:** Language switch label (visible)
- **Current English:** “中文”
- **Source:** `src/lib/i18n.tsx` → `ui.en.langSwitch`

#### Language switch aria-label

- **Route:** `all /en`
- **Section / component:** Language switch aria-label
- **Current English:** “繁體中文”
- **Source:** `src/lib/i18n.tsx` → `ui.en.langLabel`

#### Menu (mobile)

- **Route:** `all /en`
- **Section / component:** Menu (mobile)
- **Current English:** “Menu”
- **Source:** `src/lib/i18n.tsx` → `ui.en.menu`

#### Close (mobile)

- **Route:** `all /en`
- **Section / component:** Close (mobile)
- **Current English:** “Close”
- **Source:** `src/lib/i18n.tsx` → `ui.en.close`


### Footer

#### Footer wordmark

- **Route:** `all /en`
- **Section / component:** Footer wordmark
- **Current English:** “DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.wordmark`

#### Footer nature line

- **Route:** `all /en`
- **Section / component:** Footer nature line
- **Current English:** “The purity of Denmark. The character of heather. Four honeys from the Danish landscape.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerNature`

#### Footer motto

- **Route:** `all /en`
- **Section / component:** Footer motto
- **Current English:** “Naturen ved bedst. Nature knows best.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerMotto`

#### Notes title

- **Route:** `all /en`
- **Section / component:** Notes title
- **Current English:** “DANSK LYNG notes”
- **Source:** `src/lib/i18n.tsx` → `ui.en.subscribeTitle`

#### Notes body

- **Route:** `all /en`
- **Section / component:** Notes body
- **Current English:** “News of the honeys, the heather bloom, and the journal.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.subscribeBody`

#### Notes CTA (rendered with a trailing arrow)

- **Route:** `all /en`
- **Section / component:** Notes CTA (rendered with a trailing arrow)
- **Current English:** “Write to us” + ` →`
- **Source:** `src/lib/i18n.tsx + src/components/site-shell.tsx` → `ui.en.subscribeCta`

#### Footer column — Honey

- **Route:** `all /en`
- **Section / component:** Footer column — Honey
- **Current English:** “Honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerProducts`

#### Footer column — Wholesale

- **Route:** `all /en`
- **Section / component:** Footer column — Wholesale
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerPartner`

#### Footer column — Brand & journal

- **Route:** `all /en`
- **Section / component:** Footer column — Brand & journal
- **Current English:** “Brand & journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerBrand`

#### Footer link FAQ (hardcoded, not i18n)

- **Route:** `all /en`
- **Section / component:** Footer link FAQ (hardcoded, not i18n)
- **Current English:** “FAQ”
- **Source:** `src/components/site-shell.tsx` → `(hardcoded string)`

#### Copyright

- **Route:** `all /en`
- **Section / component:** Copyright
- **Current English:** “© 2026 Dansk Lyng”
- **Source:** `src/components/site-shell.tsx` → `(hardcoded)`

#### Footer tag (Danish, published on English pages)

- **Route:** `all /en`
- **Section / component:** Footer tag (Danish, published on English pages)
- **Current English:** “Honning fra Jylland · Danmark”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerTag`

#### Footer email

- **Route:** `all /en`
- **Section / component:** Footer email
- **Current English:** “hej@dansklyng.com”
- **Source:** `src/lib/content.ts` → `EMAIL`

#### Legal — Privacy

- **Route:** `all /en`
- **Section / component:** Legal — Privacy
- **Current English:** “Privacy”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerPrivacy`

#### Legal — Terms

- **Route:** `all /en`
- **Section / component:** Legal — Terms
- **Current English:** “Terms”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerTerms`

#### Legal — Cookies

- **Route:** `all /en`
- **Section / component:** Legal — Cookies
- **Current English:** “Cookies”
- **Source:** `src/lib/i18n.tsx` → `ui.en.footerCookies`


### Shared buttons / labels (reused across routes)

#### Trade enquiry

- **Route:** `shared`
- **Section / component:** Trade enquiry
- **Current English:** “Trade enquiry”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaPartner`

#### View the honeys

- **Route:** `shared`
- **Section / component:** View the honeys
- **Current English:** “View the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCatalog`

#### Discover heather honey

- **Route:** `shared`
- **Section / component:** Discover heather honey
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`

#### Heather honey

- **Route:** `shared`
- **Section / component:** Heather honey
- **Current English:** “Heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaHeath`

#### Explore all four

- **Route:** `shared`
- **Section / component:** Explore all four
- **Current English:** “Explore all four”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaFour`

#### How we make it

- **Route:** `shared`
- **Section / component:** How we make it
- **Current English:** “How we make it”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCraft`

#### Wholesale

- **Route:** `shared`
- **Section / component:** Wholesale
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaForTrade`

#### View this honey

- **Route:** `shared`
- **Section / component:** View this honey
- **Current English:** “View this honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.viewSpec`

#### Back to the journal

- **Route:** `shared`
- **Section / component:** Back to the journal
- **Current English:** “Back to the journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.backJournal`

#### Back to the honeys

- **Route:** `shared`
- **Section / component:** Back to the honeys
- **Current English:** “Back to the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.backProducts`

#### Not-found message

- **Route:** `shared`
- **Section / component:** Not-found message
- **Current English:** “This note is not here.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.notFound`

#### Jar format

- **Route:** `shared`
- **Section / component:** Jar format
- **Current English:** “450 g glass jar”
- **Source:** `src/lib/i18n.tsx` → `ui.en.jar`


### Global metadata / JSON-LD

#### Default document title (root, before page head)

- **Route:** `all`
- **Section / component:** Default document title (root, before page head)
- **Current English:** “Dansk Lyng”
- **Source:** `src/routes/__root.tsx` → `(hardcoded)`

#### Author meta

- **Route:** `all`
- **Section / component:** Author meta
- **Current English:** “Dansk Lyng”
- **Source:** `src/routes/__root.tsx` → `(hardcoded)`

#### Open Graph site_name

- **Route:** `all`
- **Section / component:** Open Graph site_name
- **Current English:** “Dansk Lyng”
- **Source:** `src/lib/seo.tsx` → `(hardcoded)`

#### Organization JSON-LD name

- **Route:** `all`
- **Section / component:** Organization JSON-LD name
- **Current English:** “Dansk Lyng”
- **Source:** `src/lib/seo.tsx` → `organizationJsonLd.name`

#### Organization JSON-LD description

- **Route:** `all`
- **Section / component:** Organization JSON-LD description
- **Current English:** “Danish heather honey from the West Jutland heathlands.”
- **Source:** `src/lib/seo.tsx` → `organizationJsonLd.description`

#### Organization JSON-LD email

- **Route:** `all`
- **Section / component:** Organization JSON-LD email
- **Current English:** “hej@dansklyng.com”
- **Source:** `src/lib/seo.tsx` → `organizationJsonLd.email`

#### Brand JSON-LD name (products)

- **Route:** `all`
- **Section / component:** Brand JSON-LD name (products)
- **Current English:** “Dansk Lyng”
- **Source:** `src/lib/seo.tsx` → `productJsonLd.brand.name`

#### Article JSON-LD author/publisher

- **Route:** `all`
- **Section / component:** Article JSON-LD author/publisher
- **Current English:** “Dansk Lyng”
- **Source:** `src/lib/seo.tsx` → `articleJsonLd`


---

## `/en` — Home

**File:** `src/routes/$lang/index.tsx`

### Metadata
#### SEO title

- **Route:** `/en`
- **Section / component:** SEO title
- **Current English:** “DANSK LYNG | Danish heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoHomeTitle`

#### SEO / meta description

- **Route:** `/en`
- **Section / component:** SEO / meta description
- **Current English:** “DANSK LYNG is rooted in the Danish landscape, with heather as its mark: heather honey, wildflower honey, late-summer honey and forest honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoHomeDesc`


### Hero
#### Hero eyebrow

- **Route:** `/en`
- **Section / component:** Hero eyebrow
- **Current English:** “DANISH HONEY · JUTLAND”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeEyebrow`

#### Hero H1

- **Route:** `/en`
- **Section / component:** Hero H1
- **Current English:** “The purity of Denmark. The character of heather.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeH1a`

#### Hero lede

- **Route:** `/en`
- **Section / component:** Hero lede
- **Current English:** “Four Danish honeys, from delicate wildflower to dark forest honeydew. Our signature is heather honey from the West Jutland heath: deep in colour, distinctly spicy and velvety-smooth.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeLede`

#### Hero primary CTA

- **Route:** `/en`
- **Section / component:** Hero primary CTA
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`

#### Hero secondary CTA

- **Route:** `/en`
- **Section / component:** Hero secondary CTA
- **Current English:** “Explore all four”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaFour`

#### Hero video

- **Route:** `/en`
- **Section / component:** Hero video
- **Current English:** Decorative (`aria-hidden`); poster `/images/hero-heath.jpg`; no visible alt
- **Source:** `src/routes/$lang/index.tsx` → `(no copy)`


### Purity from Denmark
#### Eyebrow

- **Route:** `/en`
- **Section / component:** Eyebrow
- **Current English:** “PURITY FROM DENMARK”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeDanskEyebrow`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “Purity begins with what we leave untouched”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeDanskTitle`

#### Body

- **Route:** `/en`
- **Section / component:** Body
- **Current English:** “Harvested in Denmark, gently spun from the comb, never exposed to high heat and made with nothing but honey. Each jar retains the colour, aroma and texture of its season and source.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeDanskBody`

#### CTA

- **Route:** `/en`
- **Section / component:** CTA
- **Current English:** “Explore all four”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaFour`

#### Image alt

- **Route:** `/en`
- **Section / component:** Image alt
- **Current English:** “Danish landscape in bloom”
- **Source:** `src/routes/$lang/index.tsx` → `(hardcoded ternary, English branch)`


### The signature of DANSK LYNG
#### Eyebrow

- **Route:** `/en`
- **Section / component:** Eyebrow
- **Current English:** “THE SIGNATURE OF DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeLyngEyebrow`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “Lyng is the Danish word for heather”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeLyngTitle`

#### Body

- **Route:** `/en`
- **Section / component:** Body
- **Current English:** “Heather grows in the sea wind across the open heath. By late summer, the landscape turns purple. Its honey is red-brown to deep burgundy, distinctly spicy and velvety-smooth — the unmistakable signature of DANSK LYNG.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeLyngBody`

#### CTA

- **Route:** `/en`
- **Section / component:** CTA
- **Current English:** “Heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaHeath`

#### Image alt

- **Route:** `/en`
- **Section / component:** Image alt
- **Current English:** “Fine texture of heather honey”
- **Source:** `src/routes/$lang/index.tsx` → `(hardcoded ternary)`


### Four Danish honeys
#### Eyebrow

- **Route:** `/en`
- **Section / component:** Eyebrow
- **Current English:** “FOUR DANISH HONEYS”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeRange`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “One Denmark. Four honeys.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeRangeTitle`

#### Lede

- **Route:** `/en`
- **Section / component:** Lede
- **Current English:** “Heather honey is the flavour the brand is known by. Wildflower, late-summer and forest honey follow other blooms and sources, from pale and mild to dark and full.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeRangeLede`

#### Section CTA

- **Route:** `/en`
- **Section / component:** Section CTA
- **Current English:** “View the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCatalog`

#### Range image alt

- **Route:** `/en`
- **Section / component:** Range image alt
- **Current English:** “The four DANSK LYNG honeys”
- **Source:** `src/routes/$lang/index.tsx` → `(hardcoded ternary)`

#### Signature flag on heather honey card

- **Route:** `/en`
- **Section / component:** Signature flag on heather honey card
- **Current English:** “Signature”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeFlag`


Product cards on the home range (names + notes from content):

#### Range card — lyng name

- **Route:** `/en`
- **Section / component:** Range card — lyng name
- **Current English:** “Heather honey”
- **Source:** `src/lib/content.ts` → `products[lyng].name.en`

#### Range card — lyng notes

- **Route:** `/en`
- **Section / component:** Range card — lyng notes
- **Current English:** “Spicy and dark, with a fine texture that spreads easily.”
- **Source:** `src/lib/content.ts` → `products[lyng].notes.en`

#### Range card — blomster name

- **Route:** `/en`
- **Section / component:** Range card — blomster name
- **Current English:** “Wildflower honey”
- **Source:** `src/lib/content.ts` → `products[blomster].name.en`

#### Range card — blomster notes

- **Route:** `/en`
- **Section / component:** Range card — blomster notes
- **Current English:** “From many spring and summer flowers. Paler in colour, mild in taste.”
- **Source:** `src/lib/content.ts` → `products[blomster].notes.en`

#### Range card — sensommer name

- **Route:** `/en`
- **Section / component:** Range card — sensommer name
- **Current English:** “Late-summer honey”
- **Source:** `src/lib/content.ts` → `products[sensommer].name.en`

#### Range card — sensommer notes

- **Route:** `/en`
- **Section / component:** Range card — sensommer notes
- **Current English:** “Bees gather several late-summer flowers. The aroma is full; the texture is sometimes thicker.”
- **Source:** `src/lib/content.ts` → `products[sensommer].notes.en`

#### Range card — skov name

- **Route:** `/en`
- **Section / component:** Range card — skov name
- **Current English:** “Forest honey”
- **Source:** `src/lib/content.ts` → `products[skov].name.en`

#### Range card — skov notes

- **Route:** `/en`
- **Section / component:** Range card — skov notes
- **Current English:** “From woodland honeydew. Colour and taste change with the batch: sometimes pale, sometimes dark and intense.”
- **Source:** `src/lib/content.ts` → `products[skov].notes.en`

### Simply honey / craft
#### Eyebrow

- **Route:** `/en`
- **Section / component:** Eyebrow
- **Current English:** “SIMPLY HONEY”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeCraftEyebrow`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “Nothing added. Nothing overwhelmed.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeCraftTitle`

#### Body

- **Route:** `/en`
- **Section / component:** Body
- **Current English:** “Gently spun from the comb, never exposed to high heat and made with nothing but honey. Careful crystallisation creates a smooth, spreadable texture while preserving the natural character of each harvest.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeCraftBody`

#### CTA

- **Route:** `/en`
- **Section / component:** CTA
- **Current English:** “How we make it”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCraft`

#### Image alt

- **Route:** `/en`
- **Section / component:** Image alt
- **Current English:** “Honey during crystallisation”
- **Source:** `src/routes/$lang/index.tsx` → `(hardcoded ternary)`


### Journal teaser
#### Eyebrow (reuses nav)

- **Route:** `/en`
- **Section / component:** Eyebrow (reuses nav)
- **Current English:** “Journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navJournal`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “Discover the character of Danish honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeJournal`

#### Lede

- **Route:** `/en`
- **Section / component:** Lede
- **Current English:** “Explore the heather heath, the late-summer bloom, the moving hives, and the distinct flavour and texture of each honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeJournalLede`

#### Featured article title (dynamic from journal)

- **Route:** `/en`
- **Section / component:** Featured article title (dynamic from journal)
- **Current English:** “The heather heaths of West Jutland”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].title.en`

#### CTA

- **Route:** `/en`
- **Section / component:** CTA
- **Current English:** “Read the journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeAllNotes`

#### Image alt

- **Route:** `/en`
- **Section / component:** Image alt
- **Current English:** “West Jutland dunes and heathland”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].imageAlt.en`


### Trade close
#### Eyebrow

- **Route:** `/en`
- **Section / component:** Eyebrow
- **Current English:** “WHOLESALE & DISTRIBUTION”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerEyebrow`

#### Title

- **Route:** `/en`
- **Section / component:** Title
- **Current English:** “A distinctive Danish honey brand, with a signature product and a complete range”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeTradeLine`

#### Body

- **Route:** `/en`
- **Section / component:** Body
- **Current English:** “A clear Danish origin, a memorable heather story and four distinct flavour profiles make DANSK LYNG easy to recognise, present and choose.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeTradeBody`

#### CTA

- **Route:** `/en`
- **Section / component:** CTA
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaForTrade`

#### Background image alt

- **Route:** `/en`
- **Section / component:** Background image alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/index.tsx` → `(decorative)`


---

## `/en/products` — Four Danish honeys

**File:** `src/routes/$lang/products.index.tsx`

#### SEO title

- **Route:** `/en/products`
- **Section / component:** SEO title
- **Current English:** “Four Danish honeys | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoProductsTitle`

#### SEO description

- **Route:** `/en/products`
- **Section / component:** SEO description
- **Current English:** “Heather, wildflower, late-summer and forest honey: source, colour, texture and taste.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoProductsDesc`

#### Eyebrow

- **Route:** `/en/products`
- **Section / component:** Eyebrow
- **Current English:** “THE COLLECTION”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogEyebrow`

#### H1

- **Route:** `/en/products`
- **Section / component:** H1
- **Current English:** “Four Danish honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogTitle`

#### Lede

- **Route:** `/en/products`
- **Section / component:** Lede
- **Current English:** “Heather honey is the signature. The other three follow the year: spring and summer wildflower, the late-summer bloom, then woodland honeydew. Colour, texture and taste change with source and year.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogLede`

#### Hero image alt

- **Route:** `/en/products`
- **Section / component:** Hero image alt
- **Current English:** “The four DANSK LYNG honeys”
- **Source:** `src/routes/$lang/products.index.tsx` → `(hardcoded ternary)`

#### Signature product flag (assembled)

- **Route:** `/en/products`
- **Section / component:** Signature product flag (assembled)
- **Current English:** `Signature · Late-summer bloom`
- **Source:** `src/routes/$lang/products.index.tsx` → `ui.en.homeFlag + ` · ` + products[lyng].season.en`

#### Signature product name

- **Route:** `/en/products`
- **Section / component:** Signature product name
- **Current English:** “Heather honey”
- **Source:** `src/lib/content.ts` → `products[lyng].name.en`

#### Signature tasting line

- **Route:** `/en/products`
- **Section / component:** Signature tasting line
- **Current English:** “Red-brown to burgundy · Spicy · Fine and dense”
- **Source:** `src/lib/content.ts` → `products[lyng].tasting.en`

#### Signature lede

- **Route:** `/en/products`
- **Section / component:** Signature lede
- **Current English:** “Heather honey from the Jutland heath. Red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily.”
- **Source:** `src/lib/content.ts` → `products[lyng].lede.en`

#### View this honey (with arrow)

- **Route:** `/en/products`
- **Section / component:** View this honey (with arrow)
- **Current English:** “View this honey” + ` →`
- **Source:** `src/lib/i18n.tsx + products.index.tsx` → `ui.en.viewSpec`

#### Rest of year eyebrow

- **Route:** `/en/products`
- **Section / component:** Rest of year eyebrow
- **Current English:** “The rest of the year”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogRest`

#### Rest of year title

- **Route:** `/en/products`
- **Section / component:** Rest of year title
- **Current English:** “Spring, late summer, and the forest”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogRestTitle`


#### Wildflower honey — season

- **Route:** `/en/products`
- **Section / component:** Wildflower honey — season
- **Current English:** “Spring and summer”
- **Source:** `src/lib/content.ts` → `products[blomster].season.en`

#### Wildflower honey — name

- **Route:** `/en/products`
- **Section / component:** Wildflower honey — name
- **Current English:** “Wildflower honey”
- **Source:** `src/lib/content.ts` → `products[blomster].name.en`

#### Wildflower honey — tasting

- **Route:** `/en/products`
- **Section / component:** Wildflower honey — tasting
- **Current English:** “Pale gold · Mild floral · Soft and spreadable”
- **Source:** `src/lib/content.ts` → `products[blomster].tasting.en`

#### Wildflower honey — lede

- **Route:** `/en/products`
- **Section / component:** Wildflower honey — lede
- **Current English:** “Gathered from many Danish flowers in spring and summer. Paler in colour, mild in taste, with a light floral note.”
- **Source:** `src/lib/content.ts` → `products[blomster].lede.en`

#### Late-summer honey — season

- **Route:** `/en/products`
- **Section / component:** Late-summer honey — season
- **Current English:** “Late summer”
- **Source:** `src/lib/content.ts` → `products[sensommer].season.en`

#### Late-summer honey — name

- **Route:** `/en/products`
- **Section / component:** Late-summer honey — name
- **Current English:** “Late-summer honey”
- **Source:** `src/lib/content.ts` → `products[sensommer].name.en`

#### Late-summer honey — tasting

- **Route:** `/en/products`
- **Section / component:** Late-summer honey — tasting
- **Current English:** “Deeper colour · Full aroma · Sometimes thicker”
- **Source:** `src/lib/content.ts` → `products[sensommer].tasting.en`

#### Late-summer honey — lede

- **Route:** `/en/products`
- **Section / component:** Late-summer honey — lede
- **Current English:** “Gathered in late summer, often from white clover, lime, fireweed and heather. Deeper in colour, with a full aroma and, at times, a thicker texture.”
- **Source:** `src/lib/content.ts` → `products[sensommer].lede.en`

#### Forest honey — season

- **Route:** `/en/products`
- **Section / component:** Forest honey — season
- **Current English:** “Woodland honeydew”
- **Source:** `src/lib/content.ts` → `products[skov].season.en`

#### Forest honey — name

- **Route:** `/en/products`
- **Section / component:** Forest honey — name
- **Current English:** “Forest honey”
- **Source:** `src/lib/content.ts` → `products[skov].name.en`

#### Forest honey — tasting

- **Route:** `/en/products`
- **Section / component:** Forest honey — tasting
- **Current English:** “Pale to dark · A spicy note · Sometimes fluid”
- **Source:** `src/lib/content.ts` → `products[skov].tasting.en`

#### Forest honey — lede

- **Route:** `/en/products`
- **Section / component:** Forest honey — lede
- **Current English:** “Forest honey is a honeydew honey. It does not come from flower nectar, but from honeydew in woodland. Some batches are pale and fluid; others are darker, with a stronger taste.”
- **Source:** `src/lib/content.ts` → `products[skov].lede.en`

#### Wholesale close title

- **Route:** `/en/products`
- **Section / component:** Wholesale close title
- **Current English:** “Looking for wholesale?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogReady`

#### Wholesale close body

- **Route:** `/en/products`
- **Section / component:** Wholesale close body
- **Current English:** “Explore the range, discover the brand and contact our team.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.catalogReadyBody`

#### Wholesale CTA

- **Route:** `/en/products`
- **Section / component:** Wholesale CTA
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaForTrade`


---

## Product pages

Shared chrome on every `/en/products/{slug}` (`src/routes/$lang/products.$slug.tsx`):

#### Spec label — Danish name

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Danish name
- **Current English:** “Danish name”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specDanish`

#### Spec label — Source

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Source
- **Current English:** “Source”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specSource`

#### Spec label — Origin

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Origin
- **Current English:** “Origin”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specOrigin`

#### Spec label — Colour

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Colour
- **Current English:** “Colour”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specColor`

#### Spec label — Texture

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Texture
- **Current English:** “Texture”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specTexture`

#### Spec label — Taste

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Taste
- **Current English:** “Taste”
- **Source:** `src/lib/i18n.tsx` → `ui.en.specFlavour`

#### Spec label — Format

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Format
- **Current English:** “Format”
- **Source:** `src/lib/i18n.tsx` → `ui.en.format`

#### Format value

- **Route:** `/en/products/{slug}`
- **Section / component:** Format value
- **Current English:** “450 g glass jar”
- **Source:** `src/lib/i18n.tsx` → `ui.en.jar`

#### Spec label — To serve with

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — To serve with
- **Current English:** “To serve with”
- **Source:** `src/lib/i18n.tsx` → `ui.en.pairings`

#### Spec label — Storage

- **Route:** `/en/products/{slug}`
- **Section / component:** Spec label — Storage
- **Current English:** “Storage”
- **Source:** `src/lib/i18n.tsx` → `ui.en.storage`

#### Storage body

- **Route:** `/en/products/{slug}`
- **Section / component:** Storage body
- **Current English:** “Store in a cool, dry place away from direct light. Refrigeration is not required. Avoid prolonged heat or direct sunlight.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.storageBody`

#### In-page CTA

- **Route:** `/en/products/{slug}`
- **Section / component:** In-page CTA
- **Current English:** “Explore flavour & pairings”
- **Source:** `src/lib/i18n.tsx` → `ui.en.productExplore`

#### Back link

- **Route:** `/en/products/{slug}`
- **Section / component:** Back link
- **Current English:** “Back to the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.backProducts`

#### Trade block title

- **Route:** `/en/products/{slug}`
- **Section / component:** Trade block title
- **Current English:** “Wholesale enquiries”
- **Source:** `src/lib/i18n.tsx` → `ui.en.productTradeTitle`

#### Trade block body

- **Route:** `/en/products/{slug}`
- **Section / component:** Trade block body
- **Current English:** “Contact us for product details, samples and wholesale enquiries.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.productTradeBody`

#### Trade CTA

- **Route:** `/en/products/{slug}`
- **Section / component:** Trade CTA
- **Current English:** “Trade enquiry”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaPartner`

#### Other honeys eyebrow

- **Route:** `/en/products/{slug}`
- **Section / component:** Other honeys eyebrow
- **Current English:** “FOUR DANISH HONEYS”
- **Source:** `src/lib/i18n.tsx` → `ui.en.homeRange`

#### JSON-LD Product name

- **Route:** `/en/products/{slug}`
- **Section / component:** JSON-LD Product name
- **Current English:** uses `product.name.en`
- **Source:** `src/lib/seo.tsx` → `productJsonLd.name`

#### JSON-LD Product description

- **Route:** `/en/products/{slug}`
- **Section / component:** JSON-LD Product description
- **Current English:** uses `product.lede.en`
- **Source:** `src/lib/seo.tsx` → `productJsonLd.description`

#### Landscape image alt

- **Route:** `/en/products/{slug}`
- **Section / component:** Landscape image alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/products.$slug.tsx` → `(decorative)`

#### Other-jar thumbnails alt

- **Route:** `/en/products/{slug}`
- **Section / component:** Other-jar thumbnails alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/products.$slug.tsx` → `(decorative)`

#### Not-found

- **Route:** `/en/products/{slug}`
- **Section / component:** Not-found
- **Current English:** “This note is not here.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.notFound`


### `/en/products/lyng` — Heather honey

**Content:** `src/lib/content.ts` → `products` entry `lyng`

#### Danish name (value, not translated)

- **Route:** `/en/products/lyng`
- **Section / component:** Danish name (value, not translated)
- **Current English:** “Lynghonning”
- **Source:** `src/lib/content.ts` → `products[lyng].danish`

#### Eyebrow

- **Route:** `/en/products/lyng`
- **Section / component:** Eyebrow
- **Current English:** “DANISH HEATHER HONEY”
- **Source:** `src/lib/content.ts` → `products[lyng].eyebrow.en`

#### H1 / name

- **Route:** `/en/products/lyng`
- **Section / component:** H1 / name
- **Current English:** “Heather honey”
- **Source:** `src/lib/content.ts` → `products[lyng].name.en`

#### Lede

- **Route:** `/en/products/lyng`
- **Section / component:** Lede
- **Current English:** “Heather honey from the Jutland heath. Red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily.”
- **Source:** `src/lib/content.ts` → `products[lyng].lede.en`

#### Source

- **Route:** `/en/products/lyng`
- **Section / component:** Source
- **Current English:** “Heather”
- **Source:** `src/lib/content.ts` → `products[lyng].source.en`

#### Origin

- **Route:** `/en/products/lyng`
- **Section / component:** Origin
- **Current English:** “Jutland, Denmark”
- **Source:** `src/lib/content.ts` → `products[lyng].origin.en`

#### Colour

- **Route:** `/en/products/lyng`
- **Section / component:** Colour
- **Current English:** “Red-brown to deep burgundy”
- **Source:** `src/lib/content.ts` → `products[lyng].color.en`

#### Texture

- **Route:** `/en/products/lyng`
- **Section / component:** Texture
- **Current English:** “Fine, dense, easy to spread”
- **Source:** `src/lib/content.ts` → `products[lyng].texture.en`

#### Taste

- **Route:** `/en/products/lyng`
- **Section / component:** Taste
- **Current English:** “Clear, spicy character”
- **Source:** `src/lib/content.ts` → `products[lyng].flavor.en`

#### Pairings

- **Route:** `/en/products/lyng`
- **Section / component:** Pairings
- **Current English:** “Blue cheese, aged cheese, oat biscuits and rye bread”
- **Source:** `src/lib/content.ts` → `products[lyng].pairings.en`

#### SEO title

- **Route:** `/en/products/lyng`
- **Section / component:** SEO title
- **Current English:** “Heather honey | DANSK LYNG”
- **Source:** `src/lib/content.ts` → `products[lyng].seoTitle.en`

#### SEO description

- **Route:** `/en/products/lyng`
- **Section / component:** SEO description
- **Current English:** “Danish heather honey from the Jutland heath: dark in the glass, spicy on the palate, fine in texture.”
- **Source:** `src/lib/content.ts` → `products[lyng].seoDesc.en`

#### Jar image alt

- **Route:** `/en/products/lyng`
- **Section / component:** Jar image alt
- **Current English:** “Heather honey”
- **Source:** `src/lib/content.ts` → `product.name.en used as alt`

#### Section 1 title

- **Route:** `/en/products/lyng`
- **Section / component:** Section 1 title
- **Current English:** “What sets it apart”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[0].title.en`

#### Section 1 body

- **Route:** `/en/products/lyng`
- **Section / component:** Section 1 body
- **Current English:** “Heather honey is distinctly full-flavoured. Its deep colour, spicy character and dense texture linger on the palate, setting it apart from the lighter blossom honeys of spring and summer.”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[0].body.en`

#### Section 2 title

- **Route:** `/en/products/lyng`
- **Section / component:** Section 2 title
- **Current English:** “How to taste it”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[1].title.en`

#### Section 2 body

- **Route:** `/en/products/lyng`
- **Section / component:** Section 2 body
- **Current English:** “Begin with the colour and texture, then notice the aroma, flavour and finish. Enjoy it on its own or pair it with blue cheese, aged cheese, oat biscuits or rye bread.”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[1].body.en`

#### Section 3 title

- **Route:** `/en/products/lyng`
- **Section / component:** Section 3 title
- **Current English:** “Natural variation”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[2].title.en`

#### Section 3 body

- **Route:** `/en/products/lyng`
- **Section / component:** Section 3 body
- **Current English:** “Bloom and weather vary from year to year, and the honey varies with them. Each harvest may differ slightly in colour, aroma and texture.”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[2].body.en`

#### Section 4 title

- **Route:** `/en/products/lyng`
- **Section / component:** Section 4 title
- **Current English:** “From hive to jar”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[3].title.en`

#### Section 4 body

- **Route:** `/en/products/lyng`
- **Section / component:** Section 4 body
- **Current English:** “When the heather blooms, the hives are moved to the coastal heaths of West Jutland. The honey is gently spun from the comb, never exposed to high heat and carefully crystallised for a fine, velvety texture that spreads easily. Nothing else is added.”
- **Source:** `src/lib/content.ts` → `products[lyng].sections[3].body.en`

#### Lifestyle image alt

- **Route:** `/en/products/lyng`
- **Section / component:** Lifestyle image alt
- **Current English:** “Heather honey with rye bread and tea”
- **Source:** `src/routes/$lang/products.$slug.tsx` → `src/routes/$lang/products.$slug.tsx hardcoded ternary`

#### Aroma map (Lyng page only)

**Files:** `src/components/aroma-map.tsx`, `src/lib/content.ts` (`aromaNotes`, `aromaFamilies`)

#### Aroma eyebrow (uses aromaTitle)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma eyebrow (uses aromaTitle)
- **Current English:** “The Lyng aroma map”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aromaTitle`

#### Aroma H2 (uses aromaLede)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma H2 (uses aromaLede)
- **Current English:** “Floral, caramel, wood and texture: a way to read this Jutland heather honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aromaLede`

#### SVG centre word

- **Route:** `/en/products/lyng`
- **Section / component:** SVG centre word
- **Current English:** “Lyng”
- **Source:** `src/components/aroma-map.tsx` → `(hardcoded)`

#### SVG centre sublabel

- **Route:** `/en/products/lyng`
- **Section / component:** SVG centre sublabel
- **Current English:** “five in the jar”
- **Source:** `src/components/aroma-map.tsx` → `(hardcoded ternary, English branch)`

#### Present state

- **Route:** `/en/products/lyng`
- **Section / component:** Present state
- **Current English:** “In this jar”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aromaPresent`

#### Absent state

- **Route:** `/en/products/lyng`
- **Section / component:** Absent state
- **Current English:** “Not present in this honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aromaAbsent`

#### SVG aria-label

- **Route:** `/en/products/lyng`
- **Section / component:** SVG aria-label
- **Current English:** “The Lyng aroma map”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aromaTitle`


Families:
#### Aroma family — floral

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma family — floral
- **Current English:** “Floral”
- **Source:** `src/lib/content.ts` → `aromaFamilies[floral].name.en`

#### Aroma family — caramel

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma family — caramel
- **Current English:** “Caramel”
- **Source:** `src/lib/content.ts` → `aromaFamilies[caramel].name.en`

#### Aroma family — wood

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma family — wood
- **Current English:** “Wood”
- **Source:** `src/lib/content.ts` → `aromaFamilies[wood].name.en`

#### Aroma family — texture

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma family — texture
- **Current English:** “Texture”
- **Source:** `src/lib/content.ts` → `aromaFamilies[texture].name.en`


Notes (name + present/absent):
#### Aroma note — bloom (floral, present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — bloom (floral, present)
- **Current English:** “Heather bloom”
- **Source:** `src/lib/content.ts` → `aromaNotes[bloom].name.en`

#### Aroma note — dried (floral, present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — dried (floral, present)
- **Current English:** “Dried flower”
- **Source:** `src/lib/content.ts` → `aromaNotes[dried].name.en`

#### Aroma note — meadow (floral, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — meadow (floral, not present)
- **Current English:** “Meadow”
- **Source:** `src/lib/content.ts` → `aromaNotes[meadow].name.en`

#### Aroma note — toffee (caramel, present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — toffee (caramel, present)
- **Current English:** “Toffee”
- **Source:** `src/lib/content.ts` → `aromaNotes[toffee].name.en`

#### Aroma note — sugar (caramel, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — sugar (caramel, not present)
- **Current English:** “Warm sugar”
- **Source:** `src/lib/content.ts` → `aromaNotes[sugar].name.en`

#### Aroma note — malt (caramel, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — malt (caramel, not present)
- **Current English:** “Malt”
- **Source:** `src/lib/content.ts` → `aromaNotes[malt].name.en`

#### Aroma note — spice (wood, present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — spice (wood, present)
- **Current English:** “Spice”
- **Source:** `src/lib/content.ts` → `aromaNotes[spice].name.en`

#### Aroma note — resin (wood, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — resin (wood, not present)
- **Current English:** “Resin”
- **Source:** `src/lib/content.ts` → `aromaNotes[resin].name.en`

#### Aroma note — peat (wood, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — peat (wood, not present)
- **Current English:** “Heath peat”
- **Source:** `src/lib/content.ts` → `aromaNotes[peat].name.en`

#### Aroma note — gel (texture, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — gel (texture, not present)
- **Current English:** “Gel”
- **Source:** `src/lib/content.ts` → `aromaNotes[gel].name.en`

#### Aroma note — silk (texture, present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — silk (texture, present)
- **Current English:** “Velvet”
- **Source:** `src/lib/content.ts` → `aromaNotes[silk].name.en`

#### Aroma note — tannin (texture, not present)

- **Route:** `/en/products/lyng`
- **Section / component:** Aroma note — tannin (texture, not present)
- **Current English:** “Tannin”
- **Source:** `src/lib/content.ts` → `aromaNotes[tannin].name.en`

### `/en/products/blomster` — Wildflower honey

#### Danish name

- **Route:** `/en/products/blomster`
- **Section / component:** Danish name
- **Current English:** “Blomsterhonning”
- **Source:** `src/lib/content.ts` → `products[blomster].danish`

#### Eyebrow

- **Route:** `/en/products/blomster`
- **Section / component:** Eyebrow
- **Current English:** “DANISH WILDFLOWER HONEY”
- **Source:** `src/lib/content.ts` → `products[blomster].eyebrow.en`

#### H1 / name

- **Route:** `/en/products/blomster`
- **Section / component:** H1 / name
- **Current English:** “Wildflower honey”
- **Source:** `src/lib/content.ts` → `products[blomster].name.en`

#### Lede

- **Route:** `/en/products/blomster`
- **Section / component:** Lede
- **Current English:** “Gathered from many Danish flowers in spring and summer. Paler in colour, mild in taste, with a light floral note.”
- **Source:** `src/lib/content.ts` → `products[blomster].lede.en`

#### Source

- **Route:** `/en/products/blomster`
- **Section / component:** Source
- **Current English:** “Spring and summer flowers”
- **Source:** `src/lib/content.ts` → `products[blomster].source.en`

#### Origin

- **Route:** `/en/products/blomster`
- **Section / component:** Origin
- **Current English:** “Denmark”
- **Source:** `src/lib/content.ts` → `products[blomster].origin.en`

#### Colour

- **Route:** `/en/products/blomster`
- **Section / component:** Colour
- **Current English:** “Very pale, light yellow to light brown”
- **Source:** `src/lib/content.ts` → `products[blomster].color.en`

#### Texture

- **Route:** `/en/products/blomster`
- **Section / component:** Texture
- **Current English:** “Soft, easy to spread”
- **Source:** `src/lib/content.ts` → `products[blomster].texture.en`

#### Taste

- **Route:** `/en/products/blomster`
- **Section / component:** Taste
- **Current English:** “Mild and delicate”
- **Source:** `src/lib/content.ts` → `products[blomster].flavor.en`

#### Pairings

- **Route:** `/en/products/blomster`
- **Section / component:** Pairings
- **Current English:** “Breakfast bread, butter, yoghurt, porridge and herbal tea”
- **Source:** `src/lib/content.ts` → `products[blomster].pairings.en`

#### SEO title

- **Route:** `/en/products/blomster`
- **Section / component:** SEO title
- **Current English:** “Wildflower honey | DANSK LYNG”
- **Source:** `src/lib/content.ts` → `products[blomster].seoTitle.en`

#### SEO description

- **Route:** `/en/products/blomster`
- **Section / component:** SEO description
- **Current English:** “Danish wildflower honey from spring and summer flowers. Pale, mild, and lightly floral.”
- **Source:** `src/lib/content.ts` → `products[blomster].seoDesc.en`

#### Jar image alt

- **Route:** `/en/products/blomster`
- **Section / component:** Jar image alt
- **Current English:** “Wildflower honey”
- **Source:** `src/lib/content.ts` → `products[blomster].name.en as alt`

#### Section 1 title

- **Route:** `/en/products/blomster`
- **Section / component:** Section 1 title
- **Current English:** “What sets it apart”
- **Source:** `src/lib/content.ts` → `products[blomster].sections[0].title.en`

#### Section 1 body

- **Route:** `/en/products/blomster`
- **Section / component:** Section 1 body
- **Current English:** “Wildflower honey is the most approachable of the four. The mix of flowers changes with season and year, and so do colour and aroma.”
- **Source:** `src/lib/content.ts` → `products[blomster].sections[0].body.en`

#### Section 2 title

- **Route:** `/en/products/blomster`
- **Section / component:** Section 2 title
- **Current English:** “How to serve it”
- **Source:** `src/lib/content.ts` → `products[blomster].sections[1].title.en`

#### Section 2 body

- **Route:** `/en/products/blomster`
- **Section / component:** Section 2 body
- **Current English:** “Breakfast bread, butter, yoghurt, porridge and herbal tea.”
- **Source:** `src/lib/content.ts` → `products[blomster].sections[1].body.en`

### `/en/products/sensommer` — Late-summer honey

#### Danish name

- **Route:** `/en/products/sensommer`
- **Section / component:** Danish name
- **Current English:** “Sensommerhonning”
- **Source:** `src/lib/content.ts` → `products[sensommer].danish`

#### Eyebrow

- **Route:** `/en/products/sensommer`
- **Section / component:** Eyebrow
- **Current English:** “DANISH LATE SUMMER HONEY”
- **Source:** `src/lib/content.ts` → `products[sensommer].eyebrow.en`

#### H1 / name

- **Route:** `/en/products/sensommer`
- **Section / component:** H1 / name
- **Current English:** “Late-summer honey”
- **Source:** `src/lib/content.ts` → `products[sensommer].name.en`

#### Lede

- **Route:** `/en/products/sensommer`
- **Section / component:** Lede
- **Current English:** “Gathered in late summer, often from white clover, lime, fireweed and heather. Deeper in colour, with a full aroma and, at times, a thicker texture.”
- **Source:** `src/lib/content.ts` → `products[sensommer].lede.en`

#### Source

- **Route:** `/en/products/sensommer`
- **Section / component:** Source
- **Current English:** “Late-summer flowers including white clover, lime, fireweed and heather”
- **Source:** `src/lib/content.ts` → `products[sensommer].source.en`

#### Origin

- **Route:** `/en/products/sensommer`
- **Section / component:** Origin
- **Current English:** “Denmark”
- **Source:** `src/lib/content.ts` → `products[sensommer].origin.en`

#### Colour

- **Route:** `/en/products/sensommer`
- **Section / component:** Colour
- **Current English:** “Deeper”
- **Source:** `src/lib/content.ts` → `products[sensommer].color.en`

#### Texture

- **Route:** `/en/products/sensommer`
- **Section / component:** Texture
- **Current English:** “Sometimes fuller”
- **Source:** `src/lib/content.ts` → `products[sensommer].texture.en`

#### Taste

- **Route:** `/en/products/sensommer`
- **Section / component:** Taste
- **Current English:** “Full, with the layered character of late-summer flowers”
- **Source:** `src/lib/content.ts` → `products[sensommer].flavor.en`

#### Pairings

- **Route:** `/en/products/sensommer`
- **Section / component:** Pairings
- **Current English:** “Rye bread, hard cheese, porridge and black tea”
- **Source:** `src/lib/content.ts` → `products[sensommer].pairings.en`

#### SEO title

- **Route:** `/en/products/sensommer`
- **Section / component:** SEO title
- **Current English:** “Late-summer honey | DANSK LYNG”
- **Source:** `src/lib/content.ts` → `products[sensommer].seoTitle.en`

#### SEO description

- **Route:** `/en/products/sensommer`
- **Section / component:** SEO description
- **Current English:** “Danish honey from the late-summer bloom: white clover, lime, fireweed and heather among the flowers the bees bring home.”
- **Source:** `src/lib/content.ts` → `products[sensommer].seoDesc.en`

#### Jar image alt

- **Route:** `/en/products/sensommer`
- **Section / component:** Jar image alt
- **Current English:** “Late-summer honey”
- **Source:** `src/lib/content.ts` → `products[sensommer].name.en as alt`

#### Section 1 title

- **Route:** `/en/products/sensommer`
- **Section / component:** Section 1 title
- **Current English:** “What sets it apart”
- **Source:** `src/lib/content.ts` → `products[sensommer].sections[0].title.en`

#### Section 1 body

- **Route:** `/en/products/sensommer`
- **Section / component:** Section 1 body
- **Current English:** “The bees naturally gather nectar from several late-summer flowers during the same period. Their changing proportions give each harvest its own colour, flavour and texture; the honey is not blended to create a flavour.”
- **Source:** `src/lib/content.ts` → `products[sensommer].sections[0].body.en`

#### Section 2 title

- **Route:** `/en/products/sensommer`
- **Section / component:** Section 2 title
- **Current English:** “How to serve it”
- **Source:** `src/lib/content.ts` → `products[sensommer].sections[1].title.en`

#### Section 2 body

- **Route:** `/en/products/sensommer`
- **Section / component:** Section 2 body
- **Current English:** “Rye bread, hard cheese, porridge and black tea.”
- **Source:** `src/lib/content.ts` → `products[sensommer].sections[1].body.en`

### `/en/products/skov` — Forest honey

#### Danish name

- **Route:** `/en/products/skov`
- **Section / component:** Danish name
- **Current English:** “Skovhonning”
- **Source:** `src/lib/content.ts` → `products[skov].danish`

#### Eyebrow

- **Route:** `/en/products/skov`
- **Section / component:** Eyebrow
- **Current English:** “DANISH FOREST HONEYDEW”
- **Source:** `src/lib/content.ts` → `products[skov].eyebrow.en`

#### H1 / name

- **Route:** `/en/products/skov`
- **Section / component:** H1 / name
- **Current English:** “Forest honey”
- **Source:** `src/lib/content.ts` → `products[skov].name.en`

#### Lede

- **Route:** `/en/products/skov`
- **Section / component:** Lede
- **Current English:** “Forest honey is a honeydew honey. It does not come from flower nectar, but from honeydew in woodland. Some batches are pale and fluid; others are darker, with a stronger taste.”
- **Source:** `src/lib/content.ts` → `products[skov].lede.en`

#### Source

- **Route:** `/en/products/skov`
- **Section / component:** Source
- **Current English:** “Woodland honeydew”
- **Source:** `src/lib/content.ts` → `products[skov].source.en`

#### Origin

- **Route:** `/en/products/skov`
- **Section / component:** Origin
- **Current English:** “Denmark”
- **Source:** `src/lib/content.ts` → `products[skov].origin.en`

#### Colour

- **Route:** `/en/products/skov`
- **Section / component:** Colour
- **Current English:** “Pale to dark, depending on the batch”
- **Source:** `src/lib/content.ts` → `products[skov].color.en`

#### Texture

- **Route:** `/en/products/skov`
- **Section / component:** Texture
- **Current English:** “Sometimes more fluid”
- **Source:** `src/lib/content.ts` → `products[skov].texture.en`

#### Taste

- **Route:** `/en/products/skov`
- **Section / component:** Taste
- **Current English:** “A spicy note; darker batches can taste stronger”
- **Source:** `src/lib/content.ts` → `products[skov].flavor.en`

#### Pairings

- **Route:** `/en/products/skov`
- **Section / component:** Pairings
- **Current English:** “Breakfast bread, mild cheese, and cooking”
- **Source:** `src/lib/content.ts` → `products[skov].pairings.en`

#### SEO title

- **Route:** `/en/products/skov`
- **Section / component:** SEO title
- **Current English:** “Forest honey | DANSK LYNG”
- **Source:** `src/lib/content.ts` → `products[skov].seoTitle.en`

#### SEO description

- **Route:** `/en/products/skov`
- **Section / component:** SEO description
- **Current English:** “Danish forest honey is a honeydew honey. Colour and taste follow the batch, from pale and fluid to dark and intense.”
- **Source:** `src/lib/content.ts` → `products[skov].seoDesc.en`

#### Jar image alt

- **Route:** `/en/products/skov`
- **Section / component:** Jar image alt
- **Current English:** “Forest honey”
- **Source:** `src/lib/content.ts` → `products[skov].name.en as alt`

#### Section 1 title

- **Route:** `/en/products/skov`
- **Section / component:** Section 1 title
- **Current English:** “What sets it apart”
- **Source:** `src/lib/content.ts` → `products[skov].sections[0].title.en`

#### Section 1 body

- **Route:** `/en/products/skov`
- **Section / component:** Section 1 body
- **Current English:** “Unlike blossom honey, forest honey comes from woodland honeydew. Its colour, texture and flavour can vary noticeably from one harvest to the next.”
- **Source:** `src/lib/content.ts` → `products[skov].sections[0].body.en`

#### Section 2 title

- **Route:** `/en/products/skov`
- **Section / component:** Section 2 title
- **Current English:** “How to serve it”
- **Source:** `src/lib/content.ts` → `products[skov].sections[1].title.en`

#### Section 2 body

- **Route:** `/en/products/skov`
- **Section / component:** Section 2 body
- **Current English:** “Breakfast bread, mild cheese, and in cooking.”
- **Source:** `src/lib/content.ts` → `products[skov].sections[1].body.en`

---

## `/en/heath` — Heather & the heath

**File:** `src/routes/$lang/heath.tsx`

#### SEO title

- **Route:** `/en/heath`
- **Section / component:** SEO title
- **Current English:** “Heather honey and the Jutland heath | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoHeathTitle`

#### SEO description

- **Route:** `/en/heath`
- **Section / component:** SEO description
- **Current English:** “How heather grows, when it blooms, and how weather shapes Danish heather honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoHeathDesc`

#### Eyebrow

- **Route:** `/en/heath`
- **Section / component:** Eyebrow
- **Current English:** “LYNG & THE HEATHLAND”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathEyebrow`

#### H1

- **Route:** `/en/heath`
- **Section / component:** H1
- **Current English:** “Heather honey begins on the heath”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathH1`

#### Lede

- **Route:** `/en/heath`
- **Section / component:** Lede
- **Current English:** “Lyng is the Danish word for heather and the name at the heart of DANSK LYNG. More than a symbol, it is the floral source of our signature honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathLede`

#### Hero image alt

- **Route:** `/en/heath`
- **Section / component:** Hero image alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/heath.tsx` → `(decorative)`

#### Heather heading

- **Route:** `/en/heath`
- **Section / component:** Heather heading
- **Current English:** “Heather”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathHeatherT`

#### Heather p1

- **Route:** `/en/heath`
- **Section / component:** Heather p1
- **Current English:** “Heather thrives on the open heath, in sandy, nutrient-poor soil. When it flowers, broad stretches of the landscape turn purple and become an important source of nectar for the bees.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathHeather1`

#### Heather p2

- **Route:** `/en/heath`
- **Section / component:** Heather p2
- **Current English:** “DANSK LYNG heather honey comes from the West Jutland coast. In bloom, the beekeepers we work with move the hives to coastal heaths and nature reserves — more than thirty sites, from north to south. On those shores, heather is the main source in full bloom, and that is what gives the honey its colour, spice and texture.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathHeather2`

#### Mid image alt

- **Route:** `/en/heath`
- **Section / component:** Mid image alt
- **Current English:** “Hives placed on the heath in bloom”
- **Source:** `src/routes/$lang/heath.tsx` → `(hardcoded ternary)`

#### The bloom heading

- **Route:** `/en/heath`
- **Section / component:** The bloom heading
- **Current English:** “The bloom”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathBloomT`

#### The bloom body

- **Route:** `/en/heath`
- **Section / component:** The bloom body
- **Current English:** “Heather usually reaches its main bloom in late summer, broadly between August and September. The exact timing depends on the year’s temperature, wind and rain, so the hives are moved and the honey harvested in step with the flowers, not a fixed calendar.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathBloom`

#### The honey heading

- **Route:** `/en/heath`
- **Section / component:** The honey heading
- **Current English:** “The honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathHoneyT`

#### The honey body

- **Route:** `/en/heath`
- **Section / component:** The honey body
- **Current English:** “Heather honey is recognised by its deep colour, spicy flavour and dense, smooth texture — qualities shaped by the plant, the place and the season.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathHoney`

#### Keeping the heath heading

- **Route:** `/en/heath`
- **Section / component:** Keeping the heath heading
- **Current English:** “Keeping the heath”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathCareT`

#### Keeping the heath body

- **Route:** `/en/heath`
- **Section / component:** Keeping the heath body
- **Current English:** “Heathland needs active care. Without it, ageing plants and other vegetation gradually replace the heather. Local conservation work renews the landscape in cycles, allowing fresh heather to grow.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.heathCare`

#### Heath closing CTA 1

- **Route:** `/en/heath`
- **Section / component:** Closing nav
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`

#### Heath closing CTA 2

- **Route:** `/en/heath`
- **Section / component:** Closing nav
- **Current English:** “Journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navJournal`



---

## `/en/about` — Our story

**File:** `src/routes/$lang/about.tsx`

#### SEO title

- **Route:** `/en/about`
- **Section / component:** SEO title
- **Current English:** “About DANSK LYNG | Danish honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoAboutTitle`

#### SEO description

- **Route:** `/en/about`
- **Section / component:** SEO description
- **Current English:** “DANSK LYNG takes Jutland heather honey as its signature, and shows four Danish honeys of different sources and tastes.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoAboutDesc`

#### Hero image alt

- **Route:** `/en/about`
- **Section / component:** Hero image alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/about.tsx` → `(decorative)`

#### Eyebrow

- **Route:** `/en/about`
- **Section / component:** Eyebrow
- **Current English:** “ABOUT DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutEyebrow`

#### H1

- **Route:** `/en/about`
- **Section / component:** H1
- **Current English:** “A name that says where it comes from”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutH1`

#### Lede

- **Route:** `/en/about`
- **Section / component:** Lede
- **Current English:** “DANSK means Danish. LYNG means heather. Together, they express where we come from and the distinctive taste we bring to the table.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutLede`

#### DANSK heading

- **Route:** `/en/about`
- **Section / component:** DANSK heading
- **Current English:** “DANSK · the purity of Denmark”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutDanskT`

#### DANSK body

- **Route:** `/en/about`
- **Section / component:** DANSK body
- **Current English:** “All four honeys share a distinctly Danish foundation: pure ingredients, a light touch and nothing unnecessary. From delicate spring and summer blossom to deep forest honeydew, each jar retains the character of its source and season.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutDansk`

#### LYNG heading

- **Route:** `/en/about`
- **Section / component:** LYNG heading
- **Current English:** “LYNG · the character of heather”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutLyngT`

#### LYNG body

- **Route:** `/en/about`
- **Section / component:** LYNG body
- **Current English:** “Lyng is the Danish word for heather. It grows on the open coastal heath of West Jutland, in the wind, and flowers in late summer when other blooms are ending. Purple heath, burgundy honey, clear spice and a velvet texture: that is how DANSK LYNG is recognised.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutLyng`

#### Range heading

- **Route:** `/en/about`
- **Section / component:** Range heading
- **Current English:** “Led by heather, completed by four honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutRangeT`

#### Range body

- **Route:** `/en/about`
- **Section / component:** Range body
- **Current English:** “Heather honey is our signature, but it is only one expression of Danish honey. Wildflower honey brings delicate spring and summer blossom, late-summer honey the fullness of late summer, and forest honey the depth of forest honeydew. Together, they form the DANSK LYNG collection.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutRange`

#### Craft heading

- **Route:** `/en/about`
- **Section / component:** Craft heading
- **Current English:** “A light touch, so the honey speaks for itself”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutCraftT`

#### Craft body

- **Route:** `/en/about`
- **Section / component:** Craft body
- **Current English:** “Gently spun from the comb, never exposed to high heat and made with nothing but honey. Careful crystallisation creates a smooth, spreadable texture while preserving the natural variation of each source and harvest.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.aboutCraft`

#### Comb image alt

- **Route:** `/en/about`
- **Section / component:** Comb image alt
- **Current English:** “A well-capped comb from a healthy colony”
- **Source:** `src/routes/$lang/about.tsx` → `(hardcoded ternary)`

#### Nav link 1

- **Route:** `/en/about`
- **Section / component:** Nav link 1
- **Current English:** “Explore all four”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaFour`

#### Nav link 2

- **Route:** `/en/about`
- **Section / component:** Nav link 2
- **Current English:** “Heather & the heath”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navHeath`

#### Nav link 3

- **Route:** `/en/about`
- **Section / component:** Nav link 3
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaForTrade`


---

## `/en/journal` — Journal index

**File:** `src/routes/$lang/journal.index.tsx`

#### SEO title

- **Route:** `/en/journal`
- **Section / component:** SEO title
- **Current English:** “Heather, heath and Danish honey | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoJournalTitle`

#### SEO description

- **Route:** `/en/journal`
- **Section / component:** SEO description
- **Current English:** “The Danish landscape, the heather heath, moving hives, and the flavour, texture and table of the four honeys.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoJournalDesc`

#### Eyebrow

- **Route:** `/en/journal`
- **Section / component:** Eyebrow
- **Current English:** “Journal”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navJournal`

#### H1

- **Route:** `/en/journal`
- **Section / component:** H1
- **Current English:** “Heather, heath and Danish honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.journalTitle`

#### Lede

- **Route:** `/en/journal`
- **Section / component:** Lede
- **Current English:** “Explore the Danish landscape, the heather heath and the moving hives, alongside the flavour, texture and table of each honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.journalLede`

#### Filter — All

- **Route:** `/en/journal`
- **Section / component:** Filter — All
- **Current English:** “All articles”
- **Source:** `src/lib/i18n.tsx` → `ui.en.journalAll`

#### Filter / theme — Terroir

- **Route:** `/en/journal`
- **Section / component:** Filter / theme — Terroir
- **Current English:** “Terroir”
- **Source:** `src/lib/content.ts` → `themeLabel.terroir.en`

#### Filter / theme — Taste

- **Route:** `/en/journal`
- **Section / component:** Filter / theme — Taste
- **Current English:** “Taste”
- **Source:** `src/lib/content.ts` → `themeLabel.taste.en`

#### Filter / theme — Beekeeping

- **Route:** `/en/journal`
- **Section / component:** Filter / theme — Beekeeping
- **Current English:** “Beekeeping”
- **Source:** `src/lib/content.ts` → `themeLabel.beekeeping.en`

#### Theme stored but no live articles — Knowledge

- **Route:** `/en/journal`
- **Section / component:** Theme stored but no live articles — Knowledge
- **Current English:** “Knowledge”
- **Source:** `src/lib/content.ts` → `themeLabel.knowledge.en`


---

## Journal articles

Shared chrome (`src/routes/$lang/journal.$slug.tsx`):

#### SEO title (assembled)

- **Route:** `/en/journal/{slug}`
- **Section / component:** SEO title (assembled)
- **Current English:** `{entry.title.en} — Dansk Lyng`
- **Source:** `src/routes/$lang/journal.$slug.tsx` → `dynamic`

#### SEO description

- **Route:** `/en/journal/{slug}`
- **Section / component:** SEO description
- **Current English:** uses `entry.lede.en`
- **Source:** `src/routes/$lang/journal.$slug.tsx` → `dynamic`

#### JSON-LD headline

- **Route:** `/en/journal/{slug}`
- **Section / component:** JSON-LD headline
- **Current English:** uses `entry.title.en`
- **Source:** `src/lib/seo.tsx` → `articleJsonLd`

#### Next heading

- **Route:** `/en/journal/{slug}`
- **Section / component:** Next heading
- **Current English:** “Next”
- **Source:** `src/lib/i18n.tsx` → `ui.en.journalNext`

#### Back link (assembled)

- **Route:** `/en/journal/{slug}`
- **Section / component:** Back link (assembled)
- **Current English:** `← ` + “Back to the journal”
- **Source:** `src/routes/$lang/journal.$slug.tsx` → `ui.en.backJournal`

#### Not-found

- **Route:** `/en/journal/{slug}`
- **Section / component:** Not-found
- **Current English:** “This note is not here.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.notFound`

#### Figure captions

- **Route:** `/en/journal/{slug}`
- **Section / component:** Figure captions
- **Current English:** reuse each figure’s `alt.en` as visible figcaption
- **Source:** `src/routes/$lang/journal.$slug.tsx` → `fig.alt.en`


### `/en/journal/what-is-lyng-honey`

**Content:** `src/lib/content.ts` → `journal` entry `what-is-lyng-honey`

#### Theme

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Theme
- **Current English:** “Taste”
- **Source:** `src/lib/content.ts` → `themeLabel.*.en`

#### Title / H1

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Title / H1
- **Current English:** “What is Danish heather honey?”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].title.en`

#### Lede

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Lede
- **Current English:** “Discover how heather gives this honey its deep colour, spicy flavour and distinctive texture.”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].lede.en`

#### Cover alt

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Cover alt
- **Current English:** “Heather in bloom”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].imageAlt.en`

#### Body paragraph 1

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Body paragraph 1
- **Current English:** “Heather honey from the Jutland heath. Heather thrives in open, sandy ground exposed to the sea wind. In late summer, the landscape turns purple and the bees begin to gather from the bloom.”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].body.en[0]`

#### Body paragraph 2

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Body paragraph 2
- **Current English:** “The honey is usually red-brown to deep burgundy, distinctly spicy and full-flavoured, with a fine, dense texture that spreads easily. Its colour, flavour and texture set it apart from the lighter blossom honeys of spring and summer.”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].body.en[1]`

#### Body paragraph 3

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Body paragraph 3
- **Current English:** “DANSK LYNG heather honey comes from the West Jutland coast. When the heather is in bloom, the beekeepers we work with move the hives to coastal heaths and nature reserves — more than thirty sites, from north to south. In full bloom, heather is the main source on those shores.”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].body.en[2]`

#### Body paragraph 4

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Body paragraph 4
- **Current English:** “Bloom and weather vary from year to year, and the honey varies with them. It is the flavour the brand is known by. Each harvest may differ slightly in colour, aroma and texture.”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].body.en[3]`

#### Figure alt + caption (after paragraph 2)

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** Figure alt + caption (after paragraph 2)
- **Current English:** “The dense, fine texture of heather honey”
- **Source:** `src/lib/content.ts` → `journal[what-is-lyng-honey].figures.alt.en`

#### End CTA

- **Route:** `/en/journal/what-is-lyng-honey`
- **Section / component:** End CTA
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`


### `/en/journal/why-once-a-year`

**Content:** `src/lib/content.ts` → `journal` entry `why-once-a-year`

#### Theme

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Theme
- **Current English:** “Terroir”
- **Source:** `src/lib/content.ts` → `themeLabel.*.en`

#### Title / H1

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Title / H1
- **Current English:** “How the heather bloom shapes the honey”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].title.en`

#### Lede

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Lede
- **Current English:** “Flowering, weather and the conditions the bees meet all leave a mark on each year’s heather honey.”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].lede.en`

#### Cover alt

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Cover alt
- **Current English:** “Heather in full bloom in West Jutland”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].imageAlt.en`

#### Body paragraph 1

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Body paragraph 1
- **Current English:** “Heather usually enters its main bloom in late summer, roughly from August to September. When it starts, peaks and ends depends on temperature, wind, rain and the year.”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].body.en[0]`

#### Body paragraph 2

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Body paragraph 2
- **Current English:** “The hives are moved and the honey harvested in step with that year’s flowers, not a fixed calendar. Fair weather lets the bees forage steadily, while wind and rain can change both the bloom and the yield.”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].body.en[1]`

#### Body paragraph 3

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Body paragraph 3
- **Current English:** “That is why colour, aroma, texture and quantity can change from harvest to harvest.”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].body.en[2]`

#### Body paragraph 4

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Body paragraph 4
- **Current English:** “Each jar reflects the conditions of its harvest.”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].body.en[3]`

#### Figure alt + caption (after paragraph 2)

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** Figure alt + caption (after paragraph 2)
- **Current English:** “Bees gathering from heather bloom”
- **Source:** `src/lib/content.ts` → `journal[why-once-a-year].figures.alt.en`

#### End CTA

- **Route:** `/en/journal/why-once-a-year`
- **Section / component:** End CTA
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`


### `/en/journal/the-danish-heathlands`

**Content:** `src/lib/content.ts` → `journal` entry `the-danish-heathlands`

#### Theme

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Theme
- **Current English:** “Terroir”
- **Source:** `src/lib/content.ts` → `themeLabel.*.en`

#### Title / H1

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Title / H1
- **Current English:** “The heather heaths of West Jutland”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].title.en`

#### Lede

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Lede
- **Current English:** “Lyng is the Danish word for heather, and the name DANSK LYNG. The signature honey begins on this ground.”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].lede.en`

#### Cover alt

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Cover alt
- **Current English:** “West Jutland dunes and heathland”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].imageAlt.en`

#### Body paragraph 1

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Body paragraph 1
- **Current English:** “Heather thrives on open heathland, in sandy, nutrient-poor soil. When it flowers, broad stretches of the landscape turn purple and become an important source of nectar for the bees.”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].body.en[0]`

#### Body paragraph 2

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Body paragraph 2
- **Current English:** “DANSK LYNG heather honey comes from the West Jutland coast. In bloom, the beekeepers we work with move the hives to coastal heaths and nature reserves — more than thirty sites from north to south. When the bloom ends, the hives move on.”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].body.en[1]`

#### Body paragraph 3

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Body paragraph 3
- **Current English:** “Heather heath does not stay purple on its own. Without care, ageing plants and other vegetation slowly take its place. Local conservation work renews the landscape in cycles, allowing fresh heather to grow.”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].body.en[2]`

#### Body paragraph 4

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Body paragraph 4
- **Current English:** “The honey’s deep colour, spice and dense texture begin with the heather preserved in this landscape, not with a process designed to imitate it.”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].body.en[3]`

#### Figure alt + caption (after paragraph 1)

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Figure alt + caption (after paragraph 1)
- **Current English:** “Purple heather across the heath”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].figures.alt.en`

#### Figure alt + caption (after paragraph 2)

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Figure alt + caption (after paragraph 2)
- **Current English:** “Wild red deer on the heath”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].figures.alt.en`

#### Figure alt + caption (after paragraph 3)

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Figure alt + caption (after paragraph 3)
- **Current English:** “Cyclical renewal of the heath”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].figures.alt.en`

#### Figure alt + caption (after paragraph 4)

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** Figure alt + caption (after paragraph 4)
- **Current English:** “Fresh heather rising after renewal”
- **Source:** `src/lib/content.ts` → `journal[the-danish-heathlands].figures.alt.en`

#### End CTA

- **Route:** `/en/journal/the-danish-heathlands`
- **Section / component:** End CTA
- **Current English:** “Heather & the heath”
- **Source:** `src/lib/i18n.tsx` → `ui.en.navHeath`


### `/en/journal/from-hive-to-jar`

**Content:** `src/lib/content.ts` → `journal` entry `from-hive-to-jar`

#### Theme

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Theme
- **Current English:** “Beekeeping”
- **Source:** `src/lib/content.ts` → `themeLabel.*.en`

#### Title / H1

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Title / H1
- **Current English:** “From hive to jar”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].title.en`

#### Lede

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Lede
- **Current English:** “Gentle extraction, no high heat and careful crystallisation create a fine texture that spreads easily.”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].lede.en`

#### Cover alt

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Cover alt
- **Current English:** “A healthy colony on the comb”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].imageAlt.en`

#### Body paragraph 1

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Body paragraph 1
- **Current English:** “When the heather is in bloom, the hives are moved to the coastal heaths of West Jutland. More than thirty sites, north to south, are used according to the year. The late-summer bloom falls roughly in August and September; the exact days follow the weather.”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].body.en[0]`

#### Body paragraph 2

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Body paragraph 2
- **Current English:** “The honey is gently spun from the comb, never exposed to high heat and made with nothing else added. Careful crystallisation creates a smooth texture that spreads easily.”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].body.en[1]`

#### Body paragraph 3

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Body paragraph 3
- **Current English:** “Each jar contains honey only and preserves the natural differences of its harvest. Wildflower, late-summer and forest honey come from other Danish seasons and sources, each with its own character.”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].body.en[2]`

#### Body paragraph 4

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Body paragraph 4
- **Current English:** “Every jar should taste of where it came from and the season in which it was made.”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].body.en[3]`

#### Figure alt + caption (after paragraph 1)

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Figure alt + caption (after paragraph 1)
- **Current English:** “Hives gathered for moving”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].figures.alt.en`

#### Figure alt + caption (after paragraph 3)

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** Figure alt + caption (after paragraph 3)
- **Current English:** “Honey spun gently from the comb”
- **Source:** `src/lib/content.ts` → `journal[from-hive-to-jar].figures.alt.en`

#### End CTA

- **Route:** `/en/journal/from-hive-to-jar`
- **Section / component:** End CTA
- **Current English:** “View the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCatalog`


### `/en/journal/four-honeys`

**Content:** `src/lib/content.ts` → `journal` entry `four-honeys`

#### Theme

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Theme
- **Current English:** “Taste”
- **Source:** `src/lib/content.ts` → `themeLabel.*.en`

#### Title / H1

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Title / H1
- **Current English:** “How the four honeys differ, and how to eat them”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].title.en`

#### Lede

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Lede
- **Current English:** “One Denmark, four sources. First the differences, then the table.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].lede.en`

#### Cover alt

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Cover alt
- **Current English:** “The four Danish honeys”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].imageAlt.en`

#### Body paragraph 1

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Body paragraph 1
- **Current English:** “Begin with colour and texture, then notice the aroma, flavour and finish. This makes the differences between the four honeys easy to recognise.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].body.en[0]`

#### Body paragraph 2

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Body paragraph 2
- **Current English:** “Heather honey from the Jutland heath is red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily. Eat it on its own, or with blue cheese, aged cheese, oat biscuits or rye bread. It is the flavour the brand is known by.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].body.en[1]`

#### Body paragraph 3

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Body paragraph 3
- **Current English:** “Wildflower honey from many Danish flowers in spring and summer is paler, milder and lightly floral — the most approachable of the four. It belongs with breakfast bread, butter, yoghurt, porridge and herbal tea.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].body.en[2]`

#### Body paragraph 4

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Body paragraph 4
- **Current English:** “Late-summer honey is gathered in late summer, often from white clover, lime, fireweed and heather. It is deeper in colour, full in aroma and sometimes thicker in texture. Serve it with rye bread, hard cheese, porridge and black tea. The bees gather from these flowers in the same period; the flavour is not blended by hand.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].body.en[3]`

#### Body paragraph 5

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Body paragraph 5
- **Current English:** “Forest honey is a honeydew honey from woodland rather than flower nectar. Some harvests are pale and fluid; others are darker and more intense. Serve it on breakfast bread, with mild cheese or in cooking. The aroma map on the heather honey page explores its floral, caramel, woody and textural notes.”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].body.en[4]`

#### Figure alt + caption (after paragraph 2)

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Figure alt + caption (after paragraph 2)
- **Current English:** “Heather honey with cheese”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].figures.alt.en`

#### Figure alt + caption (after paragraph 3)

- **Route:** `/en/journal/four-honeys`
- **Section / component:** Figure alt + caption (after paragraph 3)
- **Current English:** “Honey with breakfast bread”
- **Source:** `src/lib/content.ts` → `journal[four-honeys].figures.alt.en`

#### End CTA

- **Route:** `/en/journal/four-honeys`
- **Section / component:** End CTA
- **Current English:** “View the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCatalog`


---

## `/en/faq`

**File:** `src/routes/$lang/faq.tsx`

#### SEO title

- **Route:** `/en/faq`
- **Section / component:** SEO title
- **Current English:** “Questions | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoFaqTitle`

#### SEO description

- **Route:** `/en/faq`
- **Section / component:** SEO description
- **Current English:** “The four honeys, heather honey, forest honey, crystallisation and storage.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoFaqDesc`

#### H1

- **Route:** `/en/faq`
- **Section / component:** H1
- **Current English:** “Questions”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faqTitle`

#### Lede

- **Route:** `/en/faq`
- **Section / component:** Lede
- **Current English:** “The four honeys, heather honey, forest honey, crystallisation and storage.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faqLede`

#### Q1

- **Route:** `/en/faq`
- **Section / component:** Q1
- **Current English:** “Which honeys does DANSK LYNG make?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq1q`

#### A1

- **Route:** `/en/faq`
- **Section / component:** A1
- **Current English:** “The range is heather honey, wildflower honey, late-summer honey, and forest honey.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq1a`

#### Q2

- **Route:** `/en/faq`
- **Section / component:** Q2
- **Current English:** “What is different about heather honey?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq2q`

#### A2

- **Route:** `/en/faq`
- **Section / component:** A2
- **Current English:** “Heather honey is usually red-brown to deep burgundy, spicy and full, with a fine texture that spreads easily. The exact character follows the year and the batch.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq2a`

#### Q3

- **Route:** `/en/faq`
- **Section / component:** Q3
- **Current English:** “Is forest honey a blossom honey?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq3q`

#### A3

- **Route:** `/en/faq`
- **Section / component:** A3
- **Current English:** “No. Forest honey is a honeydew honey. It comes from honeydew in woodland, not from the nectar of flowers.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq3a`

#### Q4

- **Route:** `/en/faq`
- **Section / component:** Q4
- **Current English:** “Why does honey crystallise?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq4q`

#### A4

- **Route:** `/en/faq`
- **Section / component:** A4
- **Current English:** “Natural honey may crystallise with time. How quickly, and in what texture, depends on the source, the temperature and how it is kept. It does not mean the honey has spoiled.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq4a`

#### Q5

- **Route:** `/en/faq`
- **Section / component:** Q5
- **Current English:** “How should honey be kept?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq5q`

#### A5

- **Route:** `/en/faq`
- **Section / component:** A5
- **Current English:** “Store honey in a cool, dry place away from direct light. Refrigeration is not required. Avoid prolonged heat or direct sunlight.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq5a`

#### Q6

- **Route:** `/en/faq`
- **Section / component:** Q6
- **Current English:** “Can I ask for samples?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq6q`

#### A6

- **Route:** `/en/faq`
- **Section / component:** A6
- **Current English:** “Please use the trade enquiry form. Samples are arranged in the reply.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq6a`

#### Q7

- **Route:** `/en/faq`
- **Section / component:** Q7
- **Current English:** “How do I enquire about wholesale?”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq7q`

#### A7

- **Route:** `/en/faq`
- **Section / component:** A7
- **Current English:** “Please use the trade enquiry form, or write to hej@dansklyng.com.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.faq7a`

---

## `/en/contact`

**File:** `src/routes/$lang/contact.tsx`

#### SEO title

- **Route:** `/en/contact`
- **Section / component:** SEO title
- **Current English:** “Contact DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoContactTitle`

#### SEO description

- **Route:** `/en/contact`
- **Section / component:** SEO description
- **Current English:** “General, press and product notes: hej@dansklyng.com. Wholesale through a trade enquiry.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoContactDesc`

#### H1

- **Route:** `/en/contact`
- **Section / component:** H1
- **Current English:** “Contact DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.contactTitle`

#### Lede

- **Route:** `/en/contact`
- **Section / component:** Lede
- **Current English:** “For general, press or product enquiries, email us directly. For wholesale, use the trade enquiry form.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.contactLede`

#### Row — general label

- **Route:** `/en/contact`
- **Section / component:** Row — general label
- **Current English:** “General, press and product”
- **Source:** `src/lib/i18n.tsx` → `ui.en.contactGeneral`

#### Row — general value

- **Route:** `/en/contact`
- **Section / component:** Row — general value
- **Current English:** “hej@dansklyng.com”
- **Source:** `src/lib/content.ts` → `EMAIL`

#### Row — wholesale label

- **Route:** `/en/contact`
- **Section / component:** Row — wholesale label
- **Current English:** “Wholesale”
- **Source:** `src/lib/i18n.tsx` → `ui.en.contactPartner`

#### Row — wholesale link (assembled)

- **Route:** `/en/contact`
- **Section / component:** Row — wholesale link (assembled)
- **Current English:** “Trade enquiry” + ` →`
- **Source:** `src/lib/i18n.tsx + contact.tsx` → `ui.en.ctaPartner`

#### Row — Instagram label

- **Route:** `/en/contact`
- **Section / component:** Row — Instagram label
- **Current English:** “Instagram”
- **Source:** `src/lib/i18n.tsx` → `ui.en.contactPress`

#### Row — Instagram handle

- **Route:** `/en/contact`
- **Section / component:** Row — Instagram handle
- **Current English:** “@dansklyng”
- **Source:** `src/routes/$lang/contact.tsx` → `(hardcoded)`


---

## `/en/partner` — Wholesale

**File:** `src/routes/$lang/partner.index.tsx`

#### SEO title

- **Route:** `/en/partner`
- **Section / component:** SEO title
- **Current English:** “Danish honey wholesale | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoPartnerTitle`

#### SEO description

- **Route:** `/en/partner`
- **Section / component:** SEO description
- **Current English:** “Enquire about DANSK LYNG heather honey and the Danish range for import, distribution, retail and hospitality.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoPartnerDesc`

#### Hero image alt

- **Route:** `/en/partner`
- **Section / component:** Hero image alt
- **Current English:** empty (`alt=""`)
- **Source:** `src/routes/$lang/partner.index.tsx` → `(decorative)`

#### Eyebrow

- **Route:** `/en/partner`
- **Section / component:** Eyebrow
- **Current English:** “WHOLESALE & DISTRIBUTION”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerEyebrow`

#### H1

- **Route:** `/en/partner`
- **Section / component:** H1
- **Current English:** “A Danish honey brand people remember”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerTitle`

#### Lede

- **Route:** `/en/partner`
- **Section / component:** Lede
- **Current English:** “Danish purity, the distinctive character of heather and four clearly defined honeys make DANSK LYNG easy to recognise, present and choose.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerLede`

#### Primary CTA

- **Route:** `/en/partner`
- **Section / component:** Primary CTA
- **Current English:** “Trade enquiry”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaPartner`

#### Secondary CTA

- **Route:** `/en/partner`
- **Section / component:** Secondary CTA
- **Current English:** “View the honeys”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaCatalog`

#### Origin image alt

- **Route:** `/en/partner`
- **Section / component:** Origin image alt
- **Current English:** “Heather honey”
- **Source:** `src/routes/$lang/partner.index.tsx` → `(hardcoded ternary)`

#### Origin eyebrow

- **Route:** `/en/partner`
- **Section / component:** Origin eyebrow
- **Current English:** “A reason to buy”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerOriginK`

#### Origin title

- **Route:** `/en/partner`
- **Section / component:** Origin title
- **Current English:** “Danish origin. A difference you can taste.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerOriginH`

#### Origin body

- **Route:** `/en/partner`
- **Section / component:** Origin body
- **Current English:** “Danish origin creates the first impression. Colour, aroma, flavour and texture give each honey a clear identity that customers can see on the shelf and experience at the table.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerOriginB`

#### Origin CTA

- **Route:** `/en/partner`
- **Section / component:** Origin CTA
- **Current English:** “Discover heather honey”
- **Source:** `src/lib/i18n.tsx` → `ui.en.ctaDiscoverLyng`

#### Chapters eyebrow

- **Route:** `/en/partner`
- **Section / component:** Chapters eyebrow
- **Current English:** “A signature, and a full range”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerHow`

#### Chapter number 01

- **Route:** `/en/partner`
- **Section / component:** Chapter number 01
- **Current English:** “01”
- **Source:** `src/routes/$lang/partner.index.tsx` → `(hardcoded)`

#### Chapter 1 title

- **Route:** `/en/partner`
- **Section / component:** Chapter 1 title
- **Current English:** “The signature”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh1t`

#### Chapter 1 body

- **Route:** `/en/partner`
- **Section / component:** Chapter 1 body
- **Current English:** “Heather honey gives the range its signature: the West Jutland heath, deep colour, distinct spice and a velvety texture.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh1`

#### Chapter number 02

- **Route:** `/en/partner`
- **Section / component:** Chapter number 02
- **Current English:** “02”
- **Source:** `src/routes/$lang/partner.index.tsx` → `(hardcoded)`

#### Chapter 2 title

- **Route:** `/en/partner`
- **Section / component:** Chapter 2 title
- **Current English:** “The range”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh2t`

#### Chapter 2 body

- **Route:** `/en/partner`
- **Section / component:** Chapter 2 body
- **Current English:** “Wildflower, late-summer and forest honey extend the range from delicate to full-flavoured, and from blossom nectar to forest honeydew.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh2`

#### Chapter number 03

- **Route:** `/en/partner`
- **Section / component:** Chapter number 03
- **Current English:** “03”
- **Source:** `src/routes/$lang/partner.index.tsx` → `(hardcoded)`

#### Chapter 3 title

- **Route:** `/en/partner`
- **Section / component:** Chapter 3 title
- **Current English:** “Easy to explain”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh3t`

#### Chapter 3 body

- **Route:** `/en/partner`
- **Section / component:** Chapter 3 body
- **Current English:** “Clear product names, clearly differentiated flavours and a consistent visual identity make the range easy to present across speciality retail, food, hospitality, gifting and lifestyle channels.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerCh3`


---

## `/en/partner/apply` — Trade enquiry

**File:** `src/routes/$lang/partner.apply.tsx`

#### SEO title

- **Route:** `/en/partner/apply`
- **Section / component:** SEO title
- **Current English:** “Trade enquiry | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoApplyTitle`

#### SEO description

- **Route:** `/en/partner/apply`
- **Section / component:** SEO description
- **Current English:** “Leave your details and the honeys you are interested in. Write to us by email.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoApplyDesc`

#### Eyebrow

- **Route:** `/en/partner/apply`
- **Section / component:** Eyebrow
- **Current English:** “WHOLESALE & DISTRIBUTION”
- **Source:** `src/lib/i18n.tsx` → `ui.en.partnerEyebrow`

#### H1

- **Route:** `/en/partner/apply`
- **Section / component:** H1
- **Current English:** “Trade enquiry”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyTitle`

#### Lede

- **Route:** `/en/partner/apply`
- **Section / component:** Lede
- **Current English:** “Tell us how to reach you and which honeys interest you. We will follow up with the relevant information.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyLede`

#### Draft saved

- **Route:** `/en/partner/apply`
- **Section / component:** Draft saved
- **Current English:** “Draft saved on this device”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyDraft`

#### Label — company

- **Route:** `/en/partner/apply`
- **Section / component:** Label — company
- **Current English:** “Company name”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyCompany`

#### Label — name

- **Route:** `/en/partner/apply`
- **Section / component:** Label — name
- **Current English:** “Name”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyName`

#### Label — email

- **Route:** `/en/partner/apply`
- **Section / component:** Label — email
- **Current English:** “Work email”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyEmail`

#### Label — country

- **Route:** `/en/partner/apply`
- **Section / component:** Label — country
- **Current English:** “Country / region”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyCountry`

#### Honeypot label (visually hidden)

- **Route:** `/en/partner/apply`
- **Section / component:** Honeypot label (visually hidden)
- **Current English:** “Website”
- **Source:** `src/routes/$lang/partner.apply.tsx` → `(hardcoded)`

#### Label — channel

- **Route:** `/en/partner/apply`
- **Section / component:** Label — channel
- **Current English:** “Channel (optional)”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyType`

#### Channel placeholder

- **Route:** `/en/partner/apply`
- **Section / component:** Channel placeholder
- **Current English:** “Please choose”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyTypePh`

#### Channel — Importer

- **Route:** `/en/partner/apply`
- **Section / component:** Channel — Importer
- **Current English:** “Importer”
- **Source:** `src/lib/i18n.tsx` → `ui.en.typeImporter`

#### Channel — Distributor

- **Route:** `/en/partner/apply`
- **Section / component:** Channel — Distributor
- **Current English:** “Distributor”
- **Source:** `src/lib/i18n.tsx` → `ui.en.typeDistributor`

#### Channel — Retail

- **Route:** `/en/partner/apply`
- **Section / component:** Channel — Retail
- **Current English:** “Retail”
- **Source:** `src/lib/i18n.tsx` → `ui.en.typeRetail`

#### Channel — Hospitality

- **Route:** `/en/partner/apply`
- **Section / component:** Channel — Hospitality
- **Current English:** “Hospitality”
- **Source:** `src/lib/i18n.tsx` → `ui.en.typeHoreca`

#### Channel — Other

- **Route:** `/en/partner/apply`
- **Section / component:** Channel — Other
- **Current English:** “Other”
- **Source:** `src/lib/i18n.tsx` → `ui.en.typeOther`

#### Honeys of interest

- **Route:** `/en/partner/apply`
- **Section / component:** Honeys of interest
- **Current English:** “Honeys of interest (optional)”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyProducts`

#### Honey checkboxes

- **Route:** `/en/partner/apply`
- **Section / component:** Honey checkboxes
- **Current English:** the four `products[].name.en` values
- **Source:** `src/lib/content.ts` → `products[].name.en`

#### Message label

- **Route:** `/en/partner/apply`
- **Section / component:** Message label
- **Current English:** “Message (optional)”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyMessage`

#### Submit

- **Route:** `/en/partner/apply`
- **Section / component:** Submit
- **Current English:** “Send enquiry”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applySubmit`

#### Submitting state

- **Route:** `/en/partner/apply`
- **Section / component:** Submitting state
- **Current English:** “Sending”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applySending`

#### Privacy line

- **Route:** `/en/partner/apply`
- **Section / component:** Privacy line
- **Current English:** “We use these details only to reply to this enquiry.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyPrivacy`

#### Success title

- **Route:** `/en/partner/apply`
- **Section / component:** Success title
- **Current English:** “We have received your enquiry.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyDoneTitle`

#### Success body

- **Route:** `/en/partner/apply`
- **Section / component:** Success body
- **Current English:** “We will write to the address you left. You can also email hej@dansklyng.com.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyDoneBody`

#### Error

- **Route:** `/en/partner/apply`
- **Section / component:** Error
- **Current English:** “It did not send. Please try again, or write to hej@dansklyng.com.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.applyError`

#### Email in success/error (embedded)

- **Route:** `/en/partner/apply`
- **Section / component:** Email in success/error (embedded)
- **Current English:** “hej@dansklyng.com”
- **Source:** `src/lib/i18n.tsx` → `inside applyDoneBody / applyError`


---

## Legal routes (also published in English)

#### SEO title

- **Route:** `/en/privacy`
- **Section / component:** SEO title
- **Current English:** “Privacy | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoPrivacyTitle`

#### SEO description

- **Route:** `/en/privacy`
- **Section / component:** SEO description
- **Current English:** “Enquiries go by email. We do not sell personal data.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoPrivacyDesc`

#### H1

- **Route:** `/en/privacy`
- **Section / component:** H1
- **Current English:** “Privacy”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalPrivacyTitle`

#### Body

- **Route:** `/en/privacy`
- **Section / component:** Body
- **Current English:** “Dansk Lyng is a Danish brand. Trade enquiry details are used only to reply to that enquiry, and are sent to hej@dansklyng.com. We do not sell personal data.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalPrivacy`

#### SEO title

- **Route:** `/en/terms`
- **Section / component:** SEO title
- **Current English:** “Terms | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoTermsTitle`

#### SEO description

- **Route:** `/en/terms`
- **Section / component:** SEO description
- **Current English:** “This site is for the brand and the honeys. Commercial terms are those confirmed in writing.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoTermsDesc`

#### H1

- **Route:** `/en/terms`
- **Section / component:** H1
- **Current English:** “Terms”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalTermsTitle`

#### Body

- **Route:** `/en/terms`
- **Section / component:** Body
- **Current English:** “This site is for the brand and the honeys. Supply and commercial terms are those confirmed in writing.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalTerms`

#### SEO title

- **Route:** `/en/cookies`
- **Section / component:** SEO title
- **Current English:** “Cookies | DANSK LYNG”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoCookiesTitle`

#### SEO description

- **Route:** `/en/cookies`
- **Section / component:** SEO description
- **Current English:** “No tracking cookies. Language preference stays on your device.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.seoCookiesDesc`

#### H1

- **Route:** `/en/cookies`
- **Section / component:** H1
- **Current English:** “Cookies”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalCookiesTitle`

#### Body

- **Route:** `/en/cookies`
- **Section / component:** Body
- **Current English:** “No tracking cookies. Language preference stays on your device.”
- **Source:** `src/lib/i18n.tsx` → `ui.en.legalCookies`


---

## Dynamically assembled English (not stored as complete sentences)

These are built at render time. A later master copy should specify the **full visible string**, not only the parts.

| Visible result (English) | How it is assembled | Files |
|---|---|---|
| `Heather honey \| DANSK LYNG` (and the other three product titles) | `product.seoTitle.en` is stored complete; listed here because product JSON-LD `name` is the short name only | `content.ts`, `seo.tsx` |
| `{article title} — Dansk Lyng` | `` `${entry.title[lang]} — Dansk Lyng` `` | `src/routes/$lang/journal.$slug.tsx` |
| `Signature · Late-summer bloom` | `ui.en.homeFlag` + ` · ` + `products[lyng].season.en` | `products.index.tsx` |
| `View this honey →` | `ui.en.viewSpec` + ` →` | `products.index.tsx` |
| `Write to us →` | `ui.en.subscribeCta` + ` →` | `site-shell.tsx` |
| `Trade enquiry →` | `ui.en.ctaPartner` + ` →` | `contact.tsx` |
| `← Back to the journal` | `` `← ${t.backJournal}` `` | `journal.$slug.tsx` |
| Email links `mailto:hej@dansklyng.com` | `EMAIL` constant interpolated into `href` | `content.ts`, shell, contact |
| Success/error bodies containing `hej@dansklyng.com` | stored complete in `applyDoneBody` / `applyError` | `i18n.tsx` |
| Aroma map centre `Lyng` + `five in the jar` | two hardcoded English fragments | `aroma-map.tsx` |
| Aroma present/absent + note name + family | three separate strings shown together, not one sentence | `aroma-map.tsx` |
| Product spec grid | labels from `ui.en` + values from `content.ts` (Danish name is never translated) | `products.$slug.tsx` |
| Home / catalog product cards | `name.en` + `notes.en` / `tasting.en` / `lede.en` composed in layout | index + products.index |
| Journal CTA | chosen from `ctaDiscoverLyng` / `navHeath` / `ctaCatalog` by `entry.cta` | `journal.$slug.tsx` |
| Journal next titles | `nextJournal()` rotates other `title.en` values | `content.ts` |
| Footer featured honey link | `products.find(featured).name.en` | `site-shell.tsx` |
| Open Graph locale | `en_GB` when lang is `en` | `seo.tsx` |
| Canonical / hreflang URLs | `localePath('en', path)` | `locale.ts`, `seo.tsx` |
| Enquiry email subject `DANSK LYNG — {company}` | template + user input | `enquiry.ts` (not page copy) |

Danish product names published on English pages (spec field, not translated): `Lynghonning`, `Blomsterhonning`, `Sensommerhonning`, `Skovhonning`.

Danish / mixed lines published on English pages:

- `Honning fra Jylland · Danmark` (`ui.en.footerTag`)
- `Naturen ved bedst. Nature knows best.` (`ui.en.footerMotto`)
- `Lyng is the Danish word for heather` (home + heath + journal)
- Wordmark `DANSK LYNG`

---

## Appendix — English keys stored but not currently rendered

These exist in `ui.en` and would be easy to revive, but they do **not** appear on the published pages now.

- `ctaExplore`: “Wholesale”
- `ctaStory`: “Our story”
- `ctaRead`: “Read the article”
- `ctaDiscuss`: “Trade enquiry”
- `footerLegal`: “Legal”
- `subscribePlaceholder`: “Email”
- `subscribeDone`: “Please write to us by email.”
- `danishOrigin`: “Danish origin”
- `natural`: “Nothing added”
- `seasonal`: “Late-summer bloom”
- `singleOrigin`: “From Denmark”
- `requestSpec`: “Enquire”
- `homeH1b`: *(empty)*
- `homeScroll`: “Scroll”
- `harvest`: “Source”
- `aroma`: “Taste”
- `ctaStart`: “Trade enquiry”
- `supportTitle`: “Easy on the shelf, and easy to explain”
- `support1t`: “Product notes”
- `support1`: “Clear source, colour, texture, flavour and pairing notes help retail teams present the range and customers choose between the four honeys.”
- `support2t`: “The story”
- `support2`: “The purity of Denmark and the character of heather give the brand a clear story that is easy to remember and share.”
- `support3t`: “Images and sales material”
- `support3`: “Partners receive product information, brand storytelling, imagery and sales materials.”
- `support4t`: “Working together”
- `support4`: “Contact us for product details, samples and wholesale enquiries.”
- `applyStepCompany`: “Company”
- `applyStepNeeds`: “Interest”
- `applyStepContact`: “Contact”
- `applyContinue`: “Continue”
- `applyBack`: “Back”
- `journalStart`: “Start here.”

End of extract. Do not treat this file as new copy; apply the later English master exactly as written.
