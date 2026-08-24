import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { journal, journalBySlug, themeLabel } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const entry = journalBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.entry.title.en} — Dansk Lyng` : "Dansk Lyng",
      },
    ],
  }),
  notFoundComponent: NotFoundNote,
  component: JournalEntry,
});

function JournalEntry() {
  const { entry } = Route.useLoaderData();
  const { lang } = useLang();
  const t = useT();
  const more = journal.filter((j) => j.slug !== entry.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-widest text-heather uppercase">{themeLabel[entry.theme][lang]}</p>
      <h1 className="mt-4 font-display text-5xl text-ink">{entry.title[lang]}</h1>
      <p className="mt-6 text-lg text-ink-soft">{entry.lede[lang]}</p>
      <div className="mt-12 space-y-6 text-base leading-relaxed text-ink">
        {entry.body[lang].map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <p className="mt-16">
        <Link to="/journal" className="text-sm text-ink-soft">
          ← {t.backJournal}
        </Link>
      </p>
      <aside className="mt-16 border-t border-line pt-10">
        <p className="text-xs tracking-widest text-muted uppercase">{t.journalAll}</p>
        <ul className="mt-6 space-y-4">
          {more.map((j) => (
            <li key={j.slug}>
              <Link to="/journal/$slug" params={{ slug: j.slug }} className="font-display text-2xl text-ink hover:text-heather">
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
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-3xl">{t.notFound}</p>
      <Link to="/journal" className="mt-6 inline-flex min-h-11 items-center text-sm">
        {t.backJournal}
      </Link>
    </div>
  );
}
