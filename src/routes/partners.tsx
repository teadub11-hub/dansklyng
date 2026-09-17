import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyPartners } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/partners")({
  beforeLoad: () => redirectLegacyPartners(),
});
