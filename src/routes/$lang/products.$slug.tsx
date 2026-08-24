import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AromaMap } from "@/components/aroma-map";
import { SolidLink } from "@/components/site-shell";
import { JAR_SIZE, productBySlug, products } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath, parseLang } from "@/lib/locale";
import { JsonLd, productJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/products/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const lang = parseLang(params.lang);
    const product = loaderData?.product;
    if (!product) {
      return seoHead({ lang, path: `/products/${params.slug}`, title: "Dansk Lyng", description: "" });
    }
    return seoHead({
      lang,
      path: `/products/${product.slug}`,
      title: `${product.danish} — Dansk Lyng`,
      description: product.lede[lang],
      image: product.image,
    });
  },
  notFoundComponent: NotFoundProduct,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const t = useT();
  const { lang } = useLang();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <article>
      <JsonLd
        data={productJsonLd({
          lang,
          name: product.name[lang],
          danish: product.danish,
          description: product.lede[lang],
          image: product.image,
          slug: product.slug,
        })}
      />
      <section className="grid lg:grid-cols-2">
        <div className="bg-cream">
          <img
            src={product.image}
            alt={`${product.danish} — ${product.name[lang]}`}
            className="mx-auto max-h-dvh w-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-12">
          <p className="font-display text-xl italic text-heather">{product.danish}</p>
          <h1 className="mt-2 font-display text-5xl text-ink">{product.name[lang]}</h1>
          {product.featured ? (
            <p className="mt-4 text-sm tracking-widest text-heather uppercase">{t.homeSigNote}</p>
          ) : (
            <p className="mt-4 text-sm tracking-widest text-muted uppercase">{t.homeRange}</p>
          )}
          <p className="mt-6 max-w-md text-ink-soft">{product.lede[lang]}</p>
          <p className="mt-6 text-sm tracking-wide text-muted">
            {product.color[lang]} · {product.texture[lang]}
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.harvest}</dt>
              <dd className="mt-1">{product.season[lang]}</dd>
              <dd className="text-ink-soft">{product.months[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.format}</dt>
              <dd className="mt-1">{t.jar}</dd>
              <dd className="text-ink-soft">{JAR_SIZE}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.aroma}</dt>
              <dd className="mt-1">{product.notes[lang]}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.pairings}</dt>
              <dd className="mt-1">{product.pairings[lang]}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.storage}</dt>
              <dd className="mt-1 text-ink-soft">{t.storageBody}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <SolidLink to="/partner/apply">{t.requestSpec}</SolidLink>
            <Link to={localePath(lang, "/products") as "/"} className="inline-flex min-h-11 items-center text-sm text-ink-soft">
              {t.backProducts}
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <img src={product.landscape} alt="" className="h-80 w-full object-cover sm:h-[28rem]" />
      </section>

      {product.slug === "lyng" ? (
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs tracking-widest text-muted uppercase">{t.aromaTitle}</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">{t.aromaLede}</h2>
          <div className="mt-12">
            <AromaMap lang={lang} />
          </div>
        </section>
      ) : null}

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs tracking-widest text-muted uppercase">{t.homeRange}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={localePath(lang, `/products/${p.slug}`) as "/"}
                className="group block"
              >
                <img src={p.image} alt="" className="aspect-3/4 w-full object-cover" />
                <p className="mt-3 font-display italic text-heather">{p.danish}</p>
                <h3 className="font-display text-2xl text-ink group-hover:text-heather">{p.name[lang]}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function NotFoundProduct() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-3xl">{t.notFound}</p>
      <Link to={localePath(lang, "/products") as "/"} className="mt-6 inline-flex min-h-11 items-center text-sm">
        {t.backProducts}
      </Link>
    </div>
  );
}
