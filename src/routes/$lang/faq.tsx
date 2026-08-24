import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/faq")({
  head: ({ params }) => uiHead(params.lang, "/faq", "seoFaqTitle", "seoFaqDesc"),
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  const items = [
    [t.faq1q, t.faq1a],
    [t.faq2q, t.faq2a],
    [t.faq3q, t.faq3a],
    [t.faq4q, t.faq4a],
    [t.faq5q, t.faq5a],
    [t.faq6q, t.faq6a],
    [t.faq7q, t.faq7a],
    [t.faq8q, t.faq8a],
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl text-ink">{t.faqTitle}</h1>
      <p className="mt-4 text-ink-soft">{t.faqLede}</p>
      <dl className="mt-16 space-y-12">
        {items.map(([q, a]) => (
          <div key={q} className="border-t border-line pt-6">
            <dt className="font-display text-2xl text-ink">{q}</dt>
            <dd className="mt-3 text-ink-soft">{a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
