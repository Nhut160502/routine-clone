import { media } from "../configs/media.js";
import { Colors } from "../models/index.js";
import fs from "fs";
const index = async (req, res, next) => {
  try {
    const data = await Colors.find();

    data.map((item) => (item.image = media("Colors", item.image)));

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};
const store = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("Image color is not valid!");
    }
    const data = new Colors({
      name: req.body.name,
      image: req.file.filename,
    });
    await data.save();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    if (req.file) {
      const filePath = `public/Colors/${req.file.filename}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }

    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Colors.findById(req.params.id);
    if (data) {
      throw new Error("Not found");
    }
    data.image = media("Colors", data.image);
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await Colors.findById(req.params.id);
    data.name = req.body.name;
    data.updatedAt = Date.now();
    if (req.file) {
      data.image = req.file.filname;
      const filePath = `public/Colors/${data.image}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    await data.save();
    return res
      .status(200)
      .json({ success: true, message: "Update color successfully!" });
  } catch (error) {
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const data = await Colors.findById(req.params.id);
    if (data.image) {
      const filePath = `public/Colors/${data.image}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    await data.deleteOne();
    return res
      .status(200)
      .json({ success: true, message: "Delete color successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, update, destroy };
