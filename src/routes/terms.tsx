import { createFileRoute } from "@tanstack/react-router";
import { redirectPreservingPath } from "@/lib/locale";

export const Route = createFileRoute("/terms")({
  beforeLoad: redirectPreservingPath,
});
