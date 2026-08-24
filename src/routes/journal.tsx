import { Outlet, createFileRoute } from "@tanstack/react-router";
import { redirectPreservingPath } from "@/lib/locale";

export const Route = createFileRoute("/journal")({
  beforeLoad: redirectPreservingPath,
  component: () => <Outlet />,
});
