import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookies — Dansk Lyng" }] }),
  component: function Cookies() {
    const t = useT();
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <h1 className="font-display text-4xl">{t.legalCookiesTitle}</h1>
        <p className="mt-6 text-ink-soft">{t.legalCookies}</p>
      </div>
    );
  },
});
