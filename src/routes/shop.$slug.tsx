import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyShop } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/shop/$slug")({
  beforeLoad: ({ params, location }) =>
    redirectLegacyShop({ slug: params.slug, search: location.search }),
});
