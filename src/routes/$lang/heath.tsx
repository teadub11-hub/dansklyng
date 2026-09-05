import { createFileRoute } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { SolidLink, TextLink } from "@/components/site-shell";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/heath")({
  head: ({ params }) => uiHead(params.lang, "/heath", "seoHeathTitle", "seoHeathDesc"),
  component: HeathPage,
});

function HeathPage() {
  const t = useT();
  const { lang } = useLang();

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <img src="/images/hero-heath.jpg" alt="" className="h-[32rem] w-full object-cover sm:h-[40rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-heath via-heath/40 to-heath/15" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.heathEyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-balance text-cream sm:text-7xl">{t.heathH1}</h1>
          <p className="mt-6 text-lg text-cream/80">{t.heathLede}</p>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">{t.heathHeatherT}</h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{t.heathHeather1}</p>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-ink-soft">{t.heathHeather2}</p>
      </section>

      <figure className="bg-cream">
        <img
          src="/images/journal/heathland.jpg"
          alt={lang === "zh" ? "西日德蘭海岸的紫色石楠荒原" : "Purple heather on the West Jutland coast"}
          className="mx-auto max-h-[36rem] w-full max-w-6xl object-cover"
        />
      </figure>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">{t.heathBloomT}</h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{t.heathBloom}</p>
        <h2 className="mt-16 font-display text-3xl text-ink sm:text-4xl">{t.heathHoneyT}</h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{t.heathHoney}</p>
        <h2 className="mt-16 font-display text-3xl text-ink sm:text-4xl">{t.heathCareT}</h2>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{t.heathCare}</p>
      </section>

      <nav className="border-t border-line">
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-2 px-4 py-16 sm:px-6">
          <SolidLink to="/products/lyng">{t.ctaDiscoverLyng}</SolidLink>
          <TextLink to="/journal/the-danish-heathlands">{t.navJournal}</TextLink>
        </div>
      </nav>
    </article>
  );
}
