import DefaultLayout from "src/auth/layouts/DefaultLayout";
import Dashboard from "src/auth/pages/Dashboard";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
    layout: DefaultLayout,
  },
];

export default routes;
