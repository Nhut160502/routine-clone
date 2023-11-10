import express from "express";
import { designControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", designControllers.index);
routers.get("/:id", designControllers.show);
routers.post("/", designControllers.store);
routers.put("/", designControllers.update);
routers.delete("/:id", designControllers.destroy);

export default routers;
