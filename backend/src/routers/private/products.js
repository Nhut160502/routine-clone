import express from "express";
import { productControllers } from "../../controllers/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", productControllers.index);
routers.get("/:slug", productControllers.show);
routers.post("/", upload("Products").array("files"), productControllers.store);
routers.put("/", upload("Products").array("files"), productControllers.index);
routers.delete("/:id", productControllers.destroy);

export default routers;
