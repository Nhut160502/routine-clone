import express from "express";
import { groupProductControllers } from "../../controllers/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", groupProductControllers.index);
routers.post(
  "/",
  upload("GroupProduct").single("file"),
  groupProductControllers.store
);
routers.get("/:slug", groupProductControllers.show);

export default routers;
