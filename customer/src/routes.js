import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
const routes = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
];

export default routes;
