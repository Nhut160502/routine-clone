import DefaultLayout from "src/auth/layouts/DefaultLayout";
import Dashboard from "src/auth/pages/Dashboard";
import {
  List as ListGroupProduct,
  Store as StoreGroupProduct,
} from "src/auth/pages/GroupProduct";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product",
    name: "Group Product",
    element: ListGroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product/add",
    name: "Store",
    element: StoreGroupProduct,
    layout: DefaultLayout,
  },
];

export default routes;
