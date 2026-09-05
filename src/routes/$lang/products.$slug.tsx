import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AromaMap } from "@/components/aroma-map";
import { SolidLink } from "@/components/site-shell";
import { productBySlug, products } from "@/lib/content";
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
      title: product.seoTitle[lang],
      description: product.seoDesc[lang],
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
          description: product.lede[lang],
          image: product.image,
          slug: product.slug,
        })}
      />
      <section className="grid lg:grid-cols-2">
        <div className="bg-cream">
          <img
            src={product.image}
            alt={product.name[lang]}
            className="mx-auto max-h-dvh w-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-12">
          <p className="text-xs tracking-widest text-heather uppercase">{product.eyebrow[lang]}</p>
          <h1 className="mt-3 font-display text-5xl text-ink">{product.name[lang]}</h1>
          <p className="mt-6 max-w-md text-ink-soft">{product.lede[lang]}</p>
          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specDanish}</dt>
              <dd className="mt-1">{product.danish}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specSource}</dt>
              <dd className="mt-1">{product.source[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specOrigin}</dt>
              <dd className="mt-1">{product.origin[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specColor}</dt>
              <dd className="mt-1">{product.color[lang]}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specTexture}</dt>
              <dd className="mt-1">{product.texture[lang]}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.specFlavour}</dt>
              <dd className="mt-1">{product.flavor[lang]}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.format}</dt>
              <dd className="mt-1">{t.jar}</dd>
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
            <a
              href="#flavour-and-pairings"
              className="inline-flex min-h-11 items-center justify-center bg-heath px-5 text-xs tracking-widest text-cream uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("flavour-and-pairings")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {t.productExplore}
            </a>
            <Link to={localePath(lang, "/products") as "/"} className="inline-flex min-h-11 items-center text-sm text-ink-soft">
              {t.backProducts}
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-cream">
        <img
          src={product.landscape}
          alt=""
          className="mx-auto aspect-square w-full max-w-4xl object-cover"
        />
      </section>

      <section
        id="flavour-and-pairings"
        className="mx-auto max-w-3xl scroll-mt-20 px-4 py-24 sm:scroll-mt-24 sm:px-6"
      >
        {product.sections.map((section) => (
          <div key={section.title.zh} className="mt-12 first:mt-0">
            <h2 className="font-display text-3xl text-ink">{section.title[lang]}</h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft">{section.body[lang]}</p>
          </div>
        ))}
      </section>

      {product.slug === "lyng" ? (
        <figure className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
          <img
            src="/images/lyng-scene-breakfast.jpg"
            alt={lang === "zh" ? "石楠花蜜配黑麥麵包與茶" : "Heather honey with rye bread and tea"}
            className="aspect-square w-full object-cover"
          />
        </figure>
      ) : null}

      {product.slug === "lyng" ? (
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <p className="text-xs tracking-widest text-muted uppercase">{t.aromaTitle}</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">{t.aromaLede}</h2>
          <div className="mt-12">
            <AromaMap lang={lang} />
          </div>
        </section>
      ) : null}

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl text-ink">{t.productTradeTitle}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{t.productTradeBody}</p>
          <div className="mt-8">
            <SolidLink to="/partner/apply">{t.ctaPartner}</SolidLink>
          </div>
        </div>
      </section>

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
                <p className="mt-3 font-display text-2xl text-ink group-hover:text-heather">{p.name[lang]}</p>
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
