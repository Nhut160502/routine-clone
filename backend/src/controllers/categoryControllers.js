import { media } from "../configs/media.js";
import { Categories } from "../models/index.js";
import fs from "fs";

const index = async (req, res, next) => {
  try {
    const data = await Categories.find().populate("groupProduct");
    data.map((item) => (item.banner = media("Categories", item.banner)));
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("Banner category is not valid!");
    }

    const data = new Categories({
      name: req.body.name,
      groupProduct: req.body.groupProduct,
      banner: req.file.filename,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      data: data,
      message: "Store category successfully!",
    });
  } catch (error) {
    if (req.file) {
      const filePath = `public/Categories/${req.file.filename}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Categories.findOne({ slug: req.params.slug }).populate(
      "groupProduct"
    );

    if (!data) {
      throw new Error("Not found");
    }

    data.banner = media("Categories", data.banner);
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const showByIdGroup = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const data = await Categories.find({ groupProduct: req.params.id });
    console.log(data);
    if (!data) {
      throw new Error("Not found");
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await Categories.findById(req.body.id);
    data.groupProduct = req.body.groupProduct;
    data.name = req.body.name;
    data.updatedAt = Date.now();

    if (req.file) {
      const filePath = `public/Categories/${data.banner}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
      data.banner = req.file.filename;
    }

    await data.save();
    return res
      .status(200)
      .json({ success: true, message: "Update Category Successfully!" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const data = await Categories.findById(req.params.id);

    const filePath = `public/Categories/${data.banner}`;
    fs.existsSync(filePath) && fs.unlinkSync(filePath);

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete Category Successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, showByIdGroup, update, destroy };
