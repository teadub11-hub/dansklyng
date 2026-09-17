import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyInquiry } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/$lang/inquiry")({
  beforeLoad: ({ params }) => redirectLegacyInquiry(params.lang),
});
