import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyShop } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/shop/")({
  beforeLoad: ({ location }) => redirectLegacyShop({ search: location.search }),
});
