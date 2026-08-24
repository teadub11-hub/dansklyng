import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/terms")({
  head: ({ params }) => uiHead(params.lang, "/terms", "seoTermsTitle", "seoTermsDesc"),
  component: function Terms() {
    const t = useT();
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <h1 className="font-display text-4xl">{t.legalTermsTitle}</h1>
        <p className="mt-6 text-ink-soft">{t.legalTerms}</p>
      </div>
    );
  },
});
