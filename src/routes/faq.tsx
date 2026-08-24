import { createFileRoute } from "@tanstack/react-router";
import { redirectPreservingPath } from "@/lib/locale";

export const Route = createFileRoute("/faq")({
  beforeLoad: redirectPreservingPath,
});
