import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyShop } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/$lang/shop/")({
  beforeLoad: ({ params, location }) =>
    redirectLegacyShop({ lang: params.lang, search: location.search }),
});
