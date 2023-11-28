import express from "express";
import { colorControllers } from "../../controllers/dashboard/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", colorControllers.index);
routers.get("/:id", colorControllers.show);
routers.post("/", upload("Colors").single("file"), colorControllers.store);
routers.put("/", colorControllers.update);
routers.delete("/:id", colorControllers.destroy);

export default routers;
