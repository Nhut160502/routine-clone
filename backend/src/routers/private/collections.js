import express from "express";
import { collectionControllers } from "../../controllers/dashboard/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", collectionControllers.index);
routers.get("/:slug", collectionControllers.show);
routers.delete("/:id", collectionControllers.destroy);
routers.put(
  "/",
  upload("Collections").single("file"),
  collectionControllers.update
);
routers.post(
  "/",
  upload("Collections").single("file"),
  collectionControllers.store
);

export default routers;
