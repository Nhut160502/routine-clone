import DefaultLayout from "./layouts/DefaultLayout";
import Category from "./pages/Category";
import Home from "./pages/Home";
const routes = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: "/c/:slugCategory",
    element: Category,
    layout: DefaultLayout,
  },
];

export default routes;
