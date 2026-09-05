import { createFileRoute, Link } from "@tanstack/react-router";
import { products, journal } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath } from "@/lib/locale";
import { uiHead } from "@/lib/seo";
import { SolidLink, TextLink } from "@/components/site-shell";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => uiHead(params.lang, "/", "seoHomeTitle", "seoHomeDesc"),
  component: Home,
});

function Home() {
  const t = useT();
  const { lang } = useLang();
  const note = journal.find((j) => j.slug === "the-danish-heathlands")!;

  return (
    <>
      <section className="relative isolate -mt-16 min-h-dvh overflow-hidden bg-heath sm:-mt-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-heath.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero-heath.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-heath via-heath/45 to-heath/20" />
        <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.homeEyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-balance text-cream sm:text-7xl">
            {t.homeH1a}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base text-cream/80 sm:text-lg">{t.homeLede}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SolidLink to="/products/lyng" invert>
              {t.ctaDiscoverLyng}
            </SolidLink>
            <TextLink to="/products" tone="cream">
              {t.ctaFour}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">{t.homeDanskEyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{t.homeDanskTitle}</h2>
          <p className="mt-8 max-w-md text-pretty text-lg text-ink-soft">{t.homeDanskBody}</p>
          <div className="mt-10">
            <TextLink to="/products">{t.ctaFour}</TextLink>
          </div>
        </div>
        <img
          src="/images/meadow.jpg"
          alt={lang === "zh" ? "丹麥自然中的花期" : "Danish landscape in bloom"}
          className="aspect-square w-full object-cover"
        />
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/honey-texture.jpg"
            alt={lang === "zh" ? "石楠花蜜細緻的質地" : "Fine texture of heather honey"}
            className="aspect-square w-full object-cover lg:order-last"
          />
          <div>
            <p className="text-xs tracking-widest text-heather uppercase">{t.homeLyngEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{t.homeLyngTitle}</h2>
            <p className="mt-8 max-w-md text-pretty text-lg text-ink-soft">{t.homeLyngBody}</p>
            <div className="mt-10">
              <TextLink to="/products/lyng">{t.ctaHeath}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-widest text-muted uppercase">{t.homeRange}</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl text-ink">{t.homeRangeTitle}</h2>
              <p className="mt-4 max-w-2xl text-pretty text-ink-soft">{t.homeRangeLede}</p>
            </div>
            <TextLink to="/products">{t.ctaCatalog}</TextLink>
          </div>
          <img
            src="/images/honey-flight.jpg"
            alt={lang === "zh" ? "DANSK LYNG 四款蜂蜜" : "The four DANSK LYNG honeys"}
            className="mt-12 aspect-video w-full object-cover"
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={localePath(lang, `/products/${p.slug}`) as "/"}
                className="group block"
              >
                <h3 className="font-display text-2xl text-ink group-hover:text-heather">{p.name[lang]}</h3>
                {p.featured ? (
                  <p className="mt-2 text-xs tracking-widest text-heather uppercase">{t.homeFlag}</p>
                ) : null}
                <p className="mt-3 text-sm text-ink-soft">{p.notes[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/hives.jpg"
            alt={lang === "zh" ? "荒原上的蜂箱" : "Hives on the heath"}
            className="aspect-video w-full object-cover"
          />
          <div>
            <p className="text-xs tracking-widest text-heather uppercase">{t.homeCraftEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl text-ink">{t.homeCraftTitle}</h2>
            <p className="mt-6 text-pretty text-lg text-ink-soft">{t.homeCraftBody}</p>
            <div className="mt-10">
              <TextLink to="/journal/from-hive-to-jar">{t.ctaCraft}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-muted uppercase">{t.navJournal}</p>
            <h2 className="mt-4 font-display text-4xl text-ink">{t.homeJournal}</h2>
            <p className="mt-6 font-display text-2xl text-ink-soft">{t.homeJournalLede}</p>
            <p className="mt-4 text-ink-soft">{note.title[lang]}</p>
            <div className="mt-10">
              <Link
                to={localePath(lang, "/journal") as "/"}
                className="inline-flex min-h-11 items-center gap-2 text-sm text-ink"
              >
                {t.homeAllNotes}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <img
            src="/images/hero-heath.jpg"
            alt={lang === "zh" ? "西日德蘭石楠荒原" : "West Jutland heather heath"}
            className="aspect-video w-full object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/images/table.jpg" alt="" className="h-[26rem] w-full object-cover sm:h-[32rem]" />
        <div className="absolute inset-0 bg-heath/55" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.partnerEyebrow}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-cream sm:text-5xl">{t.homeTradeLine}</h2>
          <p className="mt-4 max-w-lg text-pretty text-cream/80">{t.homeTradeBody}</p>
          <div className="mt-8">
            <SolidLink to="/partner" invert>
              {t.ctaForTrade}
            </SolidLink>
          </div>
        </div>
      </section>
    </>
  );
}
