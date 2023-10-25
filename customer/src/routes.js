import DefaultLayout from "./layouts/DefaultLayout";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
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
  {
    path: "/p/:slugProduct",
    element: Product,
    layout: DefaultLayout,
  },
];

export default routes;
