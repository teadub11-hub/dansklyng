import { createFileRoute } from "@tanstack/react-router";
import { redirectLegacyInquiry } from "@/lib/legacy-redirects";

export const Route = createFileRoute("/inquiry")({
  beforeLoad: () => redirectLegacyInquiry(),
});
