import express from "express";
import groupProductRouters from "./private/groupProduct.js";
const routers = express.Router();

routers.use("/group-product", groupProductRouters);
export default routers;
