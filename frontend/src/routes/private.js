import DefaultLayout from "src/auth/layouts/DefaultLayout";
import Dashboard from "src/auth/pages/Dashboard";
import {
  List as ListGroupProduct,
  Store as StoreGroupProduct,
  Edit as EditGroupProduct,
} from "src/auth/pages/GroupProduct";
import {
  Store as StoreCollection,
  List as ListCollection,
} from "src/auth/pages/Collection";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
    layout: DefaultLayout,
  },
  // Group Product
  {
    path: "/dashboard/group-product/edit/:slug",
    name: "Edit",
    element: EditGroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product",
    name: "Group Product",
    element: ListGroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product/store",
    name: "Store",
    element: StoreGroupProduct,
    layout: DefaultLayout,
  },

  // Collection
  {
    path: "/dashboard/collection",
    name: "Collection",
    element: ListCollection,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/collection/store",
    name: "Collection",
    element: StoreCollection,
    layout: DefaultLayout,
  },
];

export default routes;
