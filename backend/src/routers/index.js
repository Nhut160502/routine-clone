import express from "express";
import groupProductRouters from "./private/groupProducts.js";
import collectionRouters from "./private/collections.js";
import categoriesRouters from "./private/categories.js";
import categoryChildsRouters from "./private/categoryChilds.js";

import colorsRouters from "./private/colors.js";
import sizesRouters from "./private/sizes.js";
import formsRouters from "./private/forms.js";
import materialsRouters from "./private/materials.js";
import designsRouters from "./private/designs.js";
import sexRouters from "./private/sex.js";
import handTypesRouters from "./private/handTypes.js";
import collarTypesRouters from "./private/collarTypes.js";

import productRouters from "./private/products.js";

const routers = express.Router();

routers.use("/group-product", groupProductRouters);
routers.use("/collection", collectionRouters);
routers.use("/categories", categoriesRouters);
routers.use("/category-child", categoryChildsRouters);

// attr
routers.use("/colors", colorsRouters);
routers.use("/sizes", sizesRouters);
routers.use("/forms", formsRouters);
routers.use("/materials", materialsRouters);
routers.use("/designs", designsRouters);
routers.use("/sex", sexRouters);
routers.use("/hand-types", handTypesRouters);
routers.use("/collar-types", collarTypesRouters);

// Product
routers.use("/product", productRouters);

export default routers;
