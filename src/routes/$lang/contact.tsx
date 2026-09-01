import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EMAIL, INSTAGRAM } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { localePath } from "@/lib/locale";
import { uiHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => uiHead(params.lang, "/contact", "seoContactTitle", "seoContactDesc"),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl text-ink">{t.contactTitle}</h1>
      <p className="mt-4 text-lg text-ink-soft">{t.contactLede}</p>
      <dl className="mt-16 divide-y divide-line border-y border-line">
        <Row label={t.contactGeneral}>
          <a href={`mailto:${EMAIL}`} className="text-ink hover:text-heather">
            {EMAIL}
          </a>
        </Row>
        <Row label={t.contactPartner}>
          <Link to={localePath(lang, "/partner/apply") as "/"} className="text-ink hover:text-heather">
            {t.ctaPartner} →
          </Link>
        </Row>
        <Row label={t.contactPress}>
          <a href={INSTAGRAM} className="text-ink hover:text-heather" rel="noreferrer" target="_blank">
            @dansklyng
          </a>
        </Row>
      </dl>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between">
      <dt className="text-xs tracking-widest text-muted uppercase">{label}</dt>
      <dd className="text-lg">{children}</dd>
    </div>
  );
}
