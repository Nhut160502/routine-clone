import express from "express";
import { sexControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", sexControllers.index);
routers.get("/:id", sexControllers.show);
routers.post("/", sexControllers.store);
routers.put("/", sexControllers.update);
routers.delete("/:id", sexControllers.destroy);

export default routers;
