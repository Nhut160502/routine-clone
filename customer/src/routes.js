import DefaultLayout from "./layouts/DefaultLayout";
import Account from "./pages/Account";
import BestSeller from "./pages/BestSeller";
import Category from "./pages/Category";
import CategoryChild from "./pages/CategoryChild";
import Checkout from "./pages/Checkout";
import Collection from "./pages/Collection";
import GroupProduct from "./pages/GroupProduct";
import Home from "./pages/Home";
import News from "./pages/News";
import Product from "./pages/Product";
const routes = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: "/c/:slugGroup",
    element: GroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/p/:slugProduct",
    element: Product,
    layout: DefaultLayout,
  },
  {
    path: "/c/:slugGroup/:slugCategory",
    element: Category,
    layout: DefaultLayout,
  },
  {
    path: "/c/:slugGroup/:slugCategory/:slugCategoryChild",
    element: CategoryChild,
    layout: DefaultLayout,
  },
  {
    path: "/bestsellers",
    element: BestSeller,
    layout: DefaultLayout,
  },
  {
    path: "/checkout",
    element: Checkout,
    layout: DefaultLayout,
  },
  {
    path: "/customer/account",
    element: Account,
    layout: DefaultLayout,
  },
  {
    path: "/news",
    element: News,
    layout: DefaultLayout,
  },
  {
    path: "/collection/:slugCollection",
    element: Collection,
    layout: DefaultLayout,
  },
];

export default routes;
