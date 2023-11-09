import express from "express";
import { collectionControllers } from "../../controllers/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", collectionControllers.index);
routers.get("/:slug", collectionControllers.show);
routers.post(
  "/",
  upload("collection").single("file"),
  collectionControllers.store
);

export default routers;
