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
  const lyng = products.find((p) => p.slug === "lyng")!;
  const seasonal = products.filter((p) => !p.featured);
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
            {t.homeH1b ? (
              <>
                <br />
                {t.homeH1b}
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base text-cream/80 sm:text-lg">{t.homeLede}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SolidLink to="/products/lyng" invert>
              {t.ctaDiscoverLyng}
            </SolidLink>
            <TextLink to="/partner" tone="cream">
              {t.ctaForTrade}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-heath px-4 py-5 text-cream sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-display text-xl italic text-honey sm:text-2xl">{t.bloomNow}</p>
          <p className="text-sm text-cream/70">{t.bloomNowBody}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-display text-lg italic text-heather">{lyng.danish}</p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{lyng.name[lang]}</h2>
          <p className="mt-8 font-display text-3xl text-ink">{t.homeQuietBody}</p>
          <p className="mt-6 max-w-md text-pretty text-ink-soft">{lyng.lede[lang]}</p>
          <div className="mt-10">
            <TextLink to="/products/lyng">{t.ctaDiscoverLyng}</TextLink>
          </div>
        </div>
        <img
          src="/images/honey-texture.jpg"
          alt={lang === "zh" ? "石楠花蜜的凝膠質地" : "Gel texture of heather honey"}
          className="aspect-square w-full object-cover"
        />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-widest text-muted uppercase">{t.homeRange}</p>
              <h2 className="mt-3 font-display text-3xl text-ink">{t.homeRangeLede}</h2>
            </div>
            <TextLink to="/products">{t.ctaCatalog}</TextLink>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {seasonal.map((p) => (
              <Link
                key={p.slug}
                to={localePath(lang, `/products/${p.slug}`) as "/"}
                className="group block"
              >
                <p className="font-display text-sm italic text-heather">{p.danish}</p>
                <h3 className="mt-1 font-display text-2xl text-ink group-hover:text-heather">{p.name[lang]}</h3>
                <p className="mt-3 text-sm text-ink-soft">{p.notes[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/hives.jpg"
            alt={lang === "zh" ? "荒原上的蜂箱" : "Hives on the heath"}
            className="aspect-video w-full object-cover"
          />
          <div>
            <p className="text-xs tracking-widest text-heather uppercase">{t.navJournal}</p>
            <h2 className="mt-4 font-display text-4xl text-ink">{note.title[lang]}</h2>
            <p className="mt-6 font-display text-2xl text-ink-soft">{note.lede[lang]}</p>
            <div className="mt-10">
              <Link
                to={localePath(lang, `/journal/${note.slug}`) as "/"}
                className="inline-flex min-h-11 items-center gap-2 text-sm text-ink"
              >
                {t.ctaRead}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/images/hero-heath.jpg" alt="" className="h-[26rem] w-full object-cover sm:h-[32rem]" />
        <div className="absolute inset-0 bg-heath/55" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 py-16 sm:px-6">
          <h2 className="max-w-xl font-display text-4xl text-cream sm:text-5xl">{t.homeTradeLine}</h2>
          <div className="mt-8">
            <SolidLink to="/partner" invert>
              {t.ctaPartner}
            </SolidLink>
          </div>
        </div>
      </section>
    </>
  );
}
