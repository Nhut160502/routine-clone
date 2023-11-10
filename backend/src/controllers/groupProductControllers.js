import { media } from "../configs/media.js";
import { GroupProduct } from "../models/index.js";
import fs from "fs";
const index = async (req, res) => {
  try {
    const data = await GroupProduct.find();
    data.map((item) => (item.banner = media("GroupProducts", item.banner)));
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const store = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("Banner group product is not valid!");
    }
    const data = new GroupProduct({
      name: req.body.name,
      shortcut: req.body.shortcut,
      banner: req.file.filename,
    });
    await data.save();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.file) {
      var filePath = `public/GroupProducts/${req.file.filename}`;
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
    data.banner = media("GroupProducts", data.banner);
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await GroupProduct.findById(req.body.id);
    data.name = req.body.name;
    data.updatedAt = Date.now();

    if (req.file) {
      var filePath = `public/GroupProducts/${data.banner}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
      data.banner = req.file.filename;
    }

    await data.save();

    return res
      .status(200)
      .json({ success: true, message: "Update Group Product Successfully!" });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const data = await GroupProduct.findById(req.params.id);
    if (data.banner) {
      var filePath = `public/GroupProducts/${data.banner}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    await data.deleteOne();
    return res
      .status(200)
      .json({ success: true, message: "Delete Group Product Successfully!" });
  } catch (error) {
    next(error);
  }
};

export { index, store, show, update, destroy };
