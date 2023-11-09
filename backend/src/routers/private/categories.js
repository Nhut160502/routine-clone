import express from "express";
import { categoryControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", categoryControllers.index);
routers.get("/:slug", categoryControllers.show);
export default routers;
