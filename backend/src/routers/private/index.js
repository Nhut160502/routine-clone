import express from "express";
import groupProductRouters from "./groupProducts.js";
import collectionRouters from "./collections.js";
import categoriesRouters from "./categories.js";
import categoryChildsRouters from "./categoryChilds.js";

import colorsRouters from "./colors.js";
import sizesRouters from "./sizes.js";
import formsRouters from "./forms.js";
import materialsRouters from "./materials.js";
import designsRouters from "./designs.js";
import sexRouters from "./sex.js";
import handTypesRouters from "./handTypes.js";
import collarTypesRouters from "./collarTypes.js";

import productRouters from "./products.js";

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
