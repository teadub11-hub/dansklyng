import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Dansk Lyng" }] }),
  component: function Privacy() {
    const t = useT();
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <h1 className="font-display text-4xl">{t.legalPrivacyTitle}</h1>
        <p className="mt-6 text-ink-soft">{t.legalPrivacy}</p>
      </div>
    );
  },
});
