import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/shop")({
  component: () => <Outlet />,
});
