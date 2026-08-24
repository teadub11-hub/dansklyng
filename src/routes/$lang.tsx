import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { SiteShell } from "@/components/site-shell";
import { isLang } from "@/lib/locale";
import { JsonLd, organizationJsonLd } from "@/lib/seo";
import type { Lang } from "@/lib/content";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    return { lang: params.lang as Lang };
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  const safe: Lang = isLang(lang) ? lang : "zh";
  return (
    <LanguageProvider lang={safe}>
      <SiteShell>
        <JsonLd data={organizationJsonLd()} />
        <Outlet />
      </SiteShell>
    </LanguageProvider>
  );
}
