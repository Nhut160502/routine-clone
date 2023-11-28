import express from "express";
import { collarTypeControllers } from "../../controllers/dashboard/index.js";

const routers = express.Router();

routers.get("/", collarTypeControllers.index);
routers.get("/:id", collarTypeControllers.show);
routers.post("/", collarTypeControllers.store);
routers.put("/", collarTypeControllers.update);
routers.delete("/:id", collarTypeControllers.destroy);

export default routers;
