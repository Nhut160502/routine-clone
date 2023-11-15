import {
  index as getListGroupProduct,
  store as storeGroupProduct,
  show as showGroupProduct,
  update as updateGroupProduct,
  destroy as destroyGroupProduct,
} from "./groupProducts";

import {
  index as getListCollection,
  store as storeCollection,
  show as showCollection,
  update as updateCollection,
  destroy as destroyCollection,
} from "./collections";

import {
  index as getListCategory,
  store as storeCategory,
  show as showCategory,
  update as updateCategory,
  destroy as destroyCategory,
  showByIdGroup as getCategoryByIdGroup,
} from "./categories";

import {
  index as getListCategoryChild,
  store as storeCategoryChild,
  show as showCategoryChild,
  showByIdCategory as showChildbyIdCategory,
  update as updateCategoryChild,
  destroy as destroyCategoryChild,
} from "./categoryChilds";

import {
  index as getListAttribute,
  store as storeAttribute,
  storeColor,
  // show as showAttribute,
  // update as updateAttribute,
  destroy as destroyAttribute,
} from "./attribute";

import {
  index as getListProduct,
  store as storeProduct,
  show as showProduct,
  update as updateProduct,
  destroy as destroyProduct,
} from "./products";

export {
  // groupProduct
  getListGroupProduct,
  storeGroupProduct,
  showGroupProduct,
  updateGroupProduct,
  destroyGroupProduct,

  // Collection
  getListCollection,
  storeCollection,
  showCollection,
  updateCollection,
  destroyCollection,

  // Caetgory
  getListCategory,
  storeCategory,
  showCategory,
  getCategoryByIdGroup,
  updateCategory,
  destroyCategory,

  // CategoryChild
  getListCategoryChild,
  storeCategoryChild,
  showCategoryChild,
  showChildbyIdCategory,
  updateCategoryChild,
  destroyCategoryChild,

  // Attr
  getListAttribute,
  storeAttribute,
  storeColor,
  destroyAttribute,
  // showAttribute,
  // updateAttribute,

  // Product
  getListProduct,
  storeProduct,
  showProduct,
  updateProduct,
  destroyProduct,
};
