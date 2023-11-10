import express from "express";
import { sizesControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", sizesControllers.index);
routers.get("/:id", sizesControllers.show);
routers.post("/", sizesControllers.store);
routers.put("/", sizesControllers.update);
routers.delete("/:id", sizesControllers.destroy);

export default routers;
