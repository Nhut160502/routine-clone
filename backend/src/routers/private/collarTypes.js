import express from "express";
import { collectionControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", collectionControllers.index);
routers.get("/:id", collectionControllers.show);
routers.post("/", collectionControllers.store);
routers.put("/", collectionControllers.update);
routers.delete("/:id", collectionControllers.destroy);

export default routers;
