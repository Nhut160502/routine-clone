import express from "express";
import groupProductRouters from "./private/groupProducts.js";
import collectionRouters from "./private/collections.js";
import categoriesRouters from "./private/categories.js";

const routers = express.Router();

routers.use("/group-product", groupProductRouters);
routers.use("/collection", collectionRouters);
routers.use("/categories", categoriesRouters);

export default routers;
