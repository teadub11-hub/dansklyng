import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyPartners } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/$lang/partners")({
  beforeLoad: ({ params }) => redirectLegacyPartners(params.lang),
});
