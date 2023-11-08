import { media } from "../configs/media.js";
import { GroupProduct } from "../models/index.js";
import fs from "fs";
const index = async (req, res) => {
  try {
    const data = await GroupProduct.find();
    data.map((item) => (item.banner = media("GroupProduct", item.banner)));
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const store = async (req, res, next) => {
  try {
    const data = new GroupProduct({
      name: req.body.name,
      banner: req.file.filename,
    });
    await data.save();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.file) {
      var filePath = `public/GroupProduct/${req.file.filename}`;
      fs.unlinkSync(filePath);
    }
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await GroupProduct.findOne({ slug: req.params.slug });
    if (!data) {
      throw new Error("Not found");
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await GroupProduct.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      // banner: req.files,
    });
  } catch (error) {}
};

export { index, store, show };
