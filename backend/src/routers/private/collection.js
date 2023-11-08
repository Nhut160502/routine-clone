import express from "express";
import { collectionControllers } from "../../controllers/index.js";

const routers = express.Router();

routers.get("/", collectionControllers.index);
export default routers;
