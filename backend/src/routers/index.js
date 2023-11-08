import express from "express";
import groupProductRouters from "./private/groupProduct.js";
const routers = express.Router();

routers.use("/group-product", groupProductRouters);
routers.use("/collection", groupProductRouters);
export default routers;
