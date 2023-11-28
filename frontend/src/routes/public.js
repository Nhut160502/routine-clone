import DefaultLayout from "../customer/layouts/DefaultLayout";
import Account from "../customer/pages/Account";
import BestSeller from "../customer/pages/BestSeller";
import Category from "../customer/pages/Category";
import CategoryChild from "../customer/pages/CategoryChild";
import Checkout from "../customer/pages/Checkout";
import Collection from "../customer/pages/Collection";
import GroupProduct from "../customer/pages/GroupProduct";
import Home from "../customer/pages/Home";
import News from "../customer/pages/News";
import Product from "../customer/pages/Product";

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
    path: "/p/:slug",
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
    path: "/collection/:slug",
    element: Collection,
    layout: DefaultLayout,
  },
];

export default routes;
