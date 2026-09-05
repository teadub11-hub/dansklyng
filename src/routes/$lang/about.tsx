import { createFileRoute } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { TextLink } from "@/components/site-shell";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => uiHead(params.lang, "/about", "seoAboutTitle", "seoAboutDesc"),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const { lang } = useLang();

  const blocks = [
    { title: t.aboutDanskT, body: t.aboutDansk },
    { title: t.aboutLyngT, body: t.aboutLyng },
    { title: t.aboutRangeT, body: t.aboutRange },
    { title: t.aboutCraftT, body: t.aboutCraft },
  ];

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <img
          src="/images/journal/beekeeper.jpg"
          alt=""
          className="h-[32rem] w-full object-cover object-top sm:h-[40rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heath via-heath/40 to-heath/15" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.aboutEyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-balance text-cream sm:text-7xl">{t.aboutH1}</h1>
          <p className="mt-6 text-lg text-cream/80">{t.aboutLede}</p>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
        {blocks.map((block, i) => (
          <div key={block.title} className={i === 0 ? "" : "mt-16"}>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{block.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{block.body}</p>
          </div>
        ))}
      </section>

      <figure className="bg-cream">
        <img
          src="/images/journal/honeycomb.jpg"
          alt={lang === "zh" ? "室溫下處理的蜂巢" : "Comb handled at room temperature"}
          className="mx-auto max-h-[36rem] w-full max-w-3xl object-cover"
        />
      </figure>

      <nav className="border-t border-line">
        <div className="mx-auto flex max-w-2xl flex-col px-4 py-16 sm:px-6">
          <TextLink to="/products">{t.ctaFour}</TextLink>
          <TextLink to="/heath">{t.navHeath}</TextLink>
          <TextLink to="/partner">{t.ctaForTrade}</TextLink>
        </div>
      </nav>
    </article>
  );
}
