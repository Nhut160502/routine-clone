import { CategoryChilds } from "../models/index.js";

const index = async (req, res, next) => {
  try {
    const data = await CategoryChilds.find().populate("category");
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const data = new CategoryChilds({
      name: req.body.name,
      category: req.body.category,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      data: data,
      message: "Store category child successfully!",
    });
  } catch (error) {
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await CategoryChilds.findOne({ slug: req.params.slug });
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
    const data = await CategoryChilds.findById(req.body.id);
    data.name = req.body.name;
    data.category = req.body.category;
    data.updatedAt = Date.now();
    await data.save();

    return res
      .status(200)
      .json({ success: true, message: "Update category child successfully!" });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await CategoryChilds.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "Delete category child successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, update, destroy };
