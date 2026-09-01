import { createFileRoute } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { SolidLink, TextLink } from "@/components/site-shell";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/partner/")({
  head: ({ params }) => uiHead(params.lang, "/partner", "seoPartnerTitle", "seoPartnerDesc"),
  component: PartnerPage,
});

function PartnerPage() {
  const t = useT();
  const { lang } = useLang();

  const chapters = [
    { n: "01", title: t.partnerCh1t, body: t.partnerCh1 },
    { n: "02", title: t.partnerCh2t, body: t.partnerCh2 },
    { n: "03", title: t.partnerCh3t, body: t.partnerCh3 },
  ];

  const support = [
    { n: "01", title: t.support1t, body: t.support1 },
    { n: "02", title: t.support2t, body: t.support2 },
    { n: "03", title: t.support3t, body: t.support3 },
    { n: "04", title: t.support4t, body: t.support4 },
  ];

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <img src="/images/hero-heath.jpg" alt="" className="h-[32rem] w-full object-cover sm:h-[40rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-heath via-heath/40 to-heath/20" />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-cream/70 uppercase">{t.partnerEyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-none text-balance text-cream sm:text-6xl">
            {t.partnerTitle}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-cream/80">{t.partnerLede}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SolidLink to="/partner/apply" invert>
              {t.ctaPartner}
            </SolidLink>
            <TextLink to="/products" tone="cream">
              {t.ctaCatalog}
            </TextLink>
          </div>
        </div>
      </header>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <img
            src="/images/jar-lyng.jpg"
            alt={lang === "zh" ? "Lynghonning" : "Lynghonning"}
            className="aspect-3/4 w-full object-cover object-bottom"
          />
          <div>
            <p className="text-xs tracking-widest text-muted uppercase">{t.partnerOriginK}</p>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{t.partnerOriginH}</h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">{t.partnerOriginB}</p>
            <div className="mt-10">
              <TextLink to="/products/lyng">{t.ctaDiscoverLyng}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <figure>
        <img
          src="/images/hives.jpg"
          alt={lang === "zh" ? "西日德蘭荒原上的蜂箱" : "Hives on the West Jutland heath"}
          className="h-[22rem] w-full object-cover sm:h-[32rem]"
        />
      </figure>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs tracking-widest text-muted uppercase">{t.partnerHow}</p>
        <ol className="mt-14 grid gap-16 lg:grid-cols-3">
          {chapters.map((c) => (
            <li key={c.n} className="border-t border-line pt-6">
              <p className="text-xs tabular-nums tracking-widest text-muted">{c.n}</p>
              <h2 className="mt-3 font-display text-3xl text-ink">{c.title}</h2>
              <p className="mt-4 text-pretty text-ink-soft">{c.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <SolidLink to="/partner/apply">{t.ctaDiscuss}</SolidLink>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <p className="text-xs tracking-widest text-muted uppercase">{t.supportTitle}</p>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {support.map((item) => (
              <li key={item.n} className="py-8">
                <p className="text-xs tabular-nums tracking-widest text-muted">{item.n}</p>
                <h2 className="mt-2 font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-3 text-pretty text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <SolidLink to="/partner/apply">{t.ctaPartner}</SolidLink>
          </div>
        </div>
      </section>
    </article>
  );
}
