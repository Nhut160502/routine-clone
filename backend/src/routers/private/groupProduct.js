import express from "express";
import { groupProductControllers } from "../../controllers/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", groupProductControllers.index);
routers.get("/:slug", groupProductControllers.show);
routers.delete("/:id", groupProductControllers.destroy);
routers.post(
  "/",
  upload("GroupProduct").single("file"),
  groupProductControllers.store
);
routers.put(
  "/",
  upload("GroupProduct").single("file"),
  groupProductControllers.update
);

export default routers;
