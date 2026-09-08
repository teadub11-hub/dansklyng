import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { redirectPreservingPath } from "@/lib/locale";

export const Route = createFileRoute("/journal")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/journal/what-is-lyng-honey") {
      throw redirect({ href: "/en/journal/what-is-lyng-honey", statusCode: 301 });
    }
    redirectPreservingPath({ location });
  },
  component: () => <Outlet />,
});
