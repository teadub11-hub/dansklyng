import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { journal, themeLabel, type JournalTheme } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { localePath } from "@/lib/locale";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/journal/")({
  head: ({ params }) => uiHead(params.lang, "/journal", "seoJournalTitle", "seoJournalDesc"),
  component: JournalPage,
});

function JournalPage() {
  const t = useT();
  const { lang } = useLang();
  const [filter, setFilter] = useState<JournalTheme | "all">("all");
  const featured = journal.filter((j) => j.featured);
  const list = filter === "all" ? journal : journal.filter((j) => j.theme === filter);
  const themes: (JournalTheme | "all")[] = ["all", "terroir", "taste", "knowledge", "beekeeping"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-widest text-muted uppercase">{t.navJournal}</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl text-ink">{t.journalTitle}</h1>
      <p className="mt-4 max-w-2xl text-ink-soft">{t.journalLede}</p>

      <section className="mt-16 border-t border-line pt-12">
        <p className="text-xs tracking-widest text-muted uppercase">{t.journalStart}</p>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {featured.slice(0, 4).map((j) => (
            <Link
              key={j.slug}
              to={localePath(lang, `/journal/${j.slug}`) as "/"}
              className="group block border-t border-line pt-6"
            >
              <p className="text-xs tracking-widest text-heather uppercase">{themeLabel[j.theme][lang]}</p>
              <h2 className="mt-2 font-display text-3xl text-ink group-hover:text-heather">{j.title[lang]}</h2>
              <p className="mt-3 text-sm text-ink-soft">{j.lede[lang]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap gap-2">
          {themes.map((th) => (
            <button
              key={th}
              type="button"
              onClick={() => setFilter(th)}
              className={cn(
                "min-h-11 px-4 text-xs tracking-widest uppercase",
                filter === th ? "bg-heath text-cream" : "text-ink-soft hover:text-ink",
              )}
            >
              {th === "all" ? t.journalAll : themeLabel[th][lang]}
            </button>
          ))}
        </div>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {list.map((j) => (
            <li key={j.slug}>
              <Link
                to={localePath(lang, `/journal/${j.slug}`) as "/"}
                className="flex min-h-16 flex-col justify-center gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-display text-2xl text-ink">{j.title[lang]}</span>
                <span className="text-xs tracking-widest text-muted uppercase">{themeLabel[j.theme][lang]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
