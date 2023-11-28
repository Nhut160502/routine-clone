import express from "express";
import { collectionControllers } from "../../controllers/customer/index.js";

const routers = express.Router();

routers.get("/", collectionControllers.index);
routers.get("/:slug", collectionControllers.show);

export default routers;
