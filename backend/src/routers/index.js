import express from "express";
import groupProductRouters from "./private/groupProduct.js";
import collectionRouters from "./private/collection.js";
const routers = express.Router();

routers.use("/group-product", groupProductRouters);
routers.use("/collection", collectionRouters);
export default routers;
