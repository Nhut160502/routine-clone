import express from "express";
import { materialControllers } from "../../controllers/dashboard/index.js";

const routers = express.Router();

routers.get("/", materialControllers.index);
routers.get("/:id", materialControllers.show);
routers.post("/", materialControllers.store);
routers.put("/", materialControllers.update);
routers.delete("/:id", materialControllers.destroy);

export default routers;
