import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath } from "@/lib/locale";
import { uiHead } from "@/lib/seo";
import { SolidLink } from "@/components/site-shell";

export const Route = createFileRoute("/$lang/products/")({
  head: ({ params }) => uiHead(params.lang, "/products", "seoProductsTitle", "seoProductsDesc"),
  component: ProductsPage,
});

function ProductsPage() {
  const t = useT();
  const { lang } = useLang();
  const lyng = products.find((p) => p.featured)!;
  const rest = products.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-widest text-muted uppercase">{t.catalogEyebrow}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{t.catalogTitle}</h1>
      <p className="mt-4 max-w-2xl text-pretty text-ink-soft">{t.catalogLede}</p>

      <article className="mt-16 grid items-center gap-10 border-b border-line pb-20 lg:grid-cols-2">
        <img
          src={lyng.image}
          alt={`${lyng.danish} — ${lyng.name[lang]}`}
          className="aspect-3/4 w-full object-cover object-bottom"
        />
        <div>
          <p className="font-display text-lg italic text-heather">{lyng.danish}</p>
          <h2 className="mt-1 font-display text-4xl text-ink">{lyng.name[lang]}</h2>
          <p className="mt-6 text-lg text-ink-soft">{lyng.lede[lang]}</p>
          <p className="mt-4 text-sm text-muted">
            {lyng.color[lang]} · {lyng.texture[lang]}
          </p>
          <div className="mt-10">
            <Link
              to={localePath(lang, `/products/${lyng.slug}`) as "/"}
              className="inline-flex min-h-11 items-center text-sm text-ink"
            >
              {t.viewSpec} →
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-16">
        <p className="text-xs tracking-widest text-muted uppercase">{t.homeRange}</p>
        <h2 className="mt-3 font-display text-3xl text-ink">{t.homeRangeTitle}</h2>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {rest.map((p) => (
          <article key={p.slug}>
            <img
              src={p.image}
              alt={`${p.danish} — ${p.name[lang]}`}
              className="aspect-3/4 w-full object-cover"
            />
            <p className="mt-5 font-display italic text-heather">{p.danish}</p>
            <h2 className="font-display text-2xl text-ink">{p.name[lang]}</h2>
            <p className="mt-3 text-sm text-ink-soft">{p.lede[lang]}</p>
            <Link
              to={localePath(lang, `/products/${p.slug}`) as "/"}
              className="mt-4 inline-flex min-h-11 items-center text-sm text-ink"
            >
              {t.viewSpec} →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-line py-12 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-3xl text-ink">{t.catalogReady}</p>
          <p className="mt-2 text-ink-soft">{t.catalogReadyBody}</p>
        </div>
        <SolidLink to="/partner">{t.ctaForTrade}</SolidLink>
      </div>
    </div>
  );
}
