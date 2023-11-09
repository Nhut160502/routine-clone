import { media } from "../configs/media.js";
import { Categories } from "../models/index.js";

const index = async (req, res, next) => {
  try {
    const data = await Categories.find();
    data.map((item) => (item.banner = media("categories", item.banner)));
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {};

const show = async (req, res, next) => {};

const update = async (req, res, next) => {};

const destroy = async (req, res, next) => {};

export { index, store, show, update, destroy };
