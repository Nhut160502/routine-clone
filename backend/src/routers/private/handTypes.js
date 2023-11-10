import express from "express";
import { handTypeControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", handTypeControllers.index);
routers.get("/:id", handTypeControllers.show);
routers.post("/", handTypeControllers.store);
routers.put("/", handTypeControllers.update);
routers.delete("/:id", handTypeControllers.destroy);

export default routers;
