import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  journalAliases,
  journalBySlug,
  journalImageClass,
  nextJournal,
  themeLabel,
} from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath, parseLang } from "@/lib/locale";
import { articleJsonLd, JsonLd, seoHead } from "@/lib/seo";
import { TextLink } from "@/components/site-shell";

export const Route = createFileRoute("/$lang/journal/$slug")({
  loader: ({ params }) => {
    const lang = parseLang(params.lang);
    const alias = journalAliases[params.slug];
    if (alias) {
      throw redirect({ href: localePath(lang, alias) });
    }
    const entry = journalBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ params, loaderData }) => {
    const lang = parseLang(params.lang);
    const entry = loaderData?.entry;
    if (!entry) {
      return seoHead({ lang, path: `/journal/${params.slug}`, title: "Dansk Lyng", description: "" });
    }
    return seoHead({
      lang,
      path: `/journal/${entry.slug}`,
      title: `${entry.title[lang]} — Dansk Lyng`,
      description: entry.lede[lang],
      image: entry.image,
      type: "article",
    });
  },
  notFoundComponent: NotFoundNote,
  component: JournalEntry,
});

function JournalEntry() {
  const { entry } = Route.useLoaderData();
  const { lang } = useLang();
  const t = useT();
  const more = nextJournal(entry.slug, 2);
  const ctaTo = entry.cta === "lyng" ? "/products/lyng" : entry.cta === "heath" ? "/heath" : "/products";
  const ctaLabel = entry.cta === "lyng" ? t.ctaDiscoverLyng : entry.cta === "heath" ? t.navHeath : t.ctaCatalog;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          lang,
          title: entry.title[lang],
          description: entry.lede[lang],
          date: entry.date,
          slug: entry.slug,
          image: entry.image,
        })}
      />
      <p className="text-xs tracking-widest text-heather uppercase">{themeLabel[entry.theme][lang]}</p>
      <h1 className="mt-4 font-display text-5xl text-ink">{entry.title[lang]}</h1>
      <p className="mt-6 text-lg text-ink-soft">{entry.lede[lang]}</p>
      <img
        src={entry.image}
        alt={entry.imageAlt[lang]}
        className={`mt-12 ${journalImageClass(entry.imageShape)}`}
      />
      <div className="mt-12 space-y-6 text-base leading-relaxed text-ink">
        {entry.body[lang].map((p, i) => (
          <div key={p.slice(0, 24)}>
            <p>{p}</p>
            {entry.figures
              .filter((fig) => fig.after === i)
              .map((fig) => (
                <figure key={fig.src} className="py-8">
                  <img src={fig.src} alt={fig.alt[lang]} className={journalImageClass(fig.shape)} />
                  <figcaption className="mt-3 text-center text-xs tracking-wide text-muted">{fig.alt[lang]}</figcaption>
                </figure>
              ))}
          </div>
        ))}
      </div>
      <p className="mt-12">
        <TextLink to={ctaTo}>{ctaLabel}</TextLink>
      </p>
      <p className="mt-8">
        <Link to={localePath(lang, "/journal") as "/"} className="text-sm text-ink-soft">
          ← {t.backJournal}
        </Link>
      </p>
      <aside className="mt-16 border-t border-line pt-10">
        <p className="text-xs tracking-widest text-muted uppercase">{t.journalNext}</p>
        <ul className="mt-6 space-y-4">
          {more.map((j) => (
            <li key={j.slug}>
              <Link
                to={localePath(lang, `/journal/${j.slug}`) as "/"}
                className="font-display text-2xl text-ink hover:text-heather"
              >
                {j.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

function NotFoundNote() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-3xl">{t.notFound}</p>
      <Link to={localePath(lang, "/journal") as "/"} className="mt-6 inline-flex min-h-11 items-center text-sm">
        {t.backJournal}
      </Link>
    </div>
  );
}
