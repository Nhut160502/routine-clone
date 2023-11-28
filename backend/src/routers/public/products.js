import express from "express";
import { productControllers } from "../../controllers/customer/index.js";

const routers = express.Router();

routers.get("/collection/:id", productControllers.findByCollection);

routers.get("/:slug", productControllers.show);

export default routers;
