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
  Edit as EditCollection,
} from "src/auth/pages/Collection";

import {
  List as ListCategory,
  Store as StoreCategory,
  Edit as EditCategory,
} from "src/auth/pages/Category";

import {
  List as ListCategoryChild,
  Store as StoreCategoryChild,
  Edit as EditCategoryChild,
} from "src/auth/pages/CategoryChild";

import {
  List as ListProduct,
  Store as StoreProduct,
  Edit as EditProduct,
} from "src/auth/pages/Product";

import {
  List as ListAttribute,
  Store as StoreAttribute,
} from "src/auth/pages/Attribute";

import { List as ListOrder } from "src/auth/pages/Order";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
    layout: DefaultLayout,
  },
  // Group Product
  {
    path: "/dashboard/group-product",
    name: "Group Product",
    element: ListGroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product/store",
    name: "Store Group Product",
    element: StoreGroupProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/group-product/edit/:slug",
    name: "Edit Group Product",
    element: EditGroupProduct,
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
    name: "Store Collection",
    element: StoreCollection,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/collection/edit/:slug",
    name: "Edit Collection",
    element: EditCollection,
    layout: DefaultLayout,
  },

  // Category
  {
    path: "/dashboard/category",
    name: "Category",
    element: ListCategory,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/category/store",
    name: "Store Category",
    element: StoreCategory,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/category/edit/:slug",
    name: "Edit Category",
    element: EditCategory,
    layout: DefaultLayout,
  },

  // Category Child
  {
    path: "/dashboard/category-child",
    name: "Category Child",
    element: ListCategoryChild,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/category-child/store",
    name: "Store Category Child",
    element: StoreCategoryChild,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/category-child/edit/:slug",
    name: "Edit Category Child",
    element: EditCategoryChild,
    layout: DefaultLayout,
  },

  // Product
  {
    path: "/dashboard/product",
    name: "Product",
    element: ListProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/product/store",
    name: "Store Product",
    element: StoreProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/product/edit/:slug",
    name: "Edit Product",
    element: EditProduct,
    layout: DefaultLayout,
  },

  // Attribute
  {
    path: "/dashboard/attribute",
    name: "Attribute",
    element: ListAttribute,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/attribute/store/:slugAttr",
    name: "Store Attribute",
    element: StoreAttribute,
    layout: DefaultLayout,
  },

  // Orders
  {
    path: "/dashboard/orders",
    name: "Orders",
    element: ListOrder,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard/attribute/store/:slugAttr",
    name: "Store Attribute",
    element: StoreAttribute,
    layout: DefaultLayout,
  },
];

export default routes;
