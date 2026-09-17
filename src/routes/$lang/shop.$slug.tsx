import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyShop } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/$lang/shop/$slug")({
  beforeLoad: ({ params, location }) =>
    redirectLegacyShop({ lang: params.lang, slug: params.slug, search: location.search }),
});
