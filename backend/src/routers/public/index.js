import express from "express";
import collectionRouters from "./collections.js";
import productRouters from "./products.js";

const routers = express.Router();

routers.use("/collection", collectionRouters);
routers.use("/product", productRouters);

export default routers;
