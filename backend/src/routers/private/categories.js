import express from "express";
import { categoryControllers } from "../../controllers/index.js";
import { upload } from "../../configs/multer.js";

const routers = express.Router();

routers.get("/", categoryControllers.index);
routers.get("/:slug", categoryControllers.show);
routers.get("/group/:id", categoryControllers.showByIdGroup);
routers.delete("/:id", categoryControllers.destroy);

routers.post(
  "/",
  upload("Categories").single("file"),
  categoryControllers.store
);

routers.put(
  "/",
  upload("Categories").single("file"),
  categoryControllers.update
);

export default routers;
