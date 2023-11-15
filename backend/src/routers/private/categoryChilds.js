import express from "express";
import { categoryChildControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", categoryChildControllers.index);
routers.get("/:slug", categoryChildControllers.show);
routers.get("/category/:id", categoryChildControllers.showByIdCategory);

routers.post("/", categoryChildControllers.store);
routers.put("/", categoryChildControllers.update);
routers.delete("/:id", categoryChildControllers.destroy);

export default routers;
