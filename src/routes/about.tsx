import { createFileRoute } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { TextLink } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dansk Lyng" },
      {
        name: "description",
        content: "Dansk Lyng began with a landscape. Heather, a short season on the Jutland heath, and a jar that leaves Denmark as the heath made it.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const { lang } = useLang();

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <img src="/images/hero-heath.jpg" alt="" className="h-[32rem] w-full object-cover sm:h-[40rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-heath via-heath/40 to-heath/15" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.aboutEyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-balance text-cream sm:text-7xl">{t.aboutH1}</h1>
          <p className="mt-6 text-lg text-cream/80">{t.aboutLede}</p>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        <p className="font-display text-3xl text-ink sm:text-4xl">{t.aboutOpen}</p>
        <p className="mt-12 whitespace-pre-line text-lg leading-relaxed text-ink-soft">{t.aboutStanza}</p>
        <p className="mt-12 text-lg leading-relaxed text-ink">{t.aboutP1}</p>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-ink-soft">{t.aboutP2}</p>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-ink-soft">{t.aboutP3}</p>
      </section>

      <figure className="bg-cream">
        <img
          src="/images/hives.jpg"
          alt={lang === "zh" ? "荒原上的蜂箱" : "Hives on the heath"}
          className="mx-auto max-h-[36rem] w-full max-w-6xl object-cover"
        />
      </figure>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        <p className="text-lg leading-relaxed text-pretty text-ink-soft">{t.aboutP4}</p>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-ink-soft">{t.aboutP5}</p>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-ink-soft">{t.aboutP6}</p>
        <p className="mt-12 font-display text-3xl text-ink sm:text-4xl">{t.aboutP7}</p>

        <blockquote className="mt-20 border-l-2 border-honey pl-6">
          <p className="font-display text-2xl whitespace-pre-line text-ink italic">{t.aboutQuote}</p>
          <footer className="mt-6">
            <p className="text-sm tracking-widest text-ink uppercase">{t.aboutFounder}</p>
            <p className="mt-1 text-xs tracking-widest text-muted uppercase">{t.aboutFounderRole}</p>
          </footer>
        </blockquote>
      </section>

      <nav className="border-t border-line">
        <div className="mx-auto flex max-w-2xl flex-col px-4 py-16 sm:px-6">
          <TextLink to="/products/lyng">{t.ctaDiscoverLyng}</TextLink>
          <TextLink to="/journal/the-danish-heathlands">
            {lang === "zh" ? "西日德蘭的荒原" : "The heathlands of West Jutland"}
          </TextLink>
          <TextLink to="/partner">{t.ctaForTrade}</TextLink>
        </div>
      </nav>
    </article>
  );
}
