import express from "express";
import { formControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", formControllers.index);
routers.get("/:id", formControllers.show);
routers.post("/", formControllers.store);
routers.put("/", formControllers.update);
routers.delete("/:id", formControllers.destroy);

export default routers;
