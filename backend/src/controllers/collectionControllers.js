import { media } from "../configs/media.js";
import { Collections } from "../models/index.js";
import fs from "fs";

const index = async (req, res, next) => {
  try {
    const data = await Collections.find();
    data.map((item) => (item.banner = media("Collection", item.banner)));
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("Banner collection is not valid!");
    }
    const data = new Collections({
      name: req.body.name,
      banner: req.file.filename,
    });
    await data.save();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.file) {
      var filePath = `public/collection/${req.file.filename}`;
      fs.unlinkSync(filePath);
    }
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Collections.findOne({ slug: req.params.slug });
    if (!data) {
      throw new Error("Not found");
    }
    data.banner = media("collection", data.banner);
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show };
