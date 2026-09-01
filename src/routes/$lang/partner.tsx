import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/partner")({
  component: () => <Outlet />,
});
