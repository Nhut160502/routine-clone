import { Materials } from "../../models/index.js";

const index = async (req, res, next) => {
  try {
    const data = await Materials.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};
const store = async (req, res, next) => {
  try {
    const data = new Materials({
      name: req.body.name,
    });
    await data.save();
    return res.status(200).json({
      success: true,
      data: data,
      message: "Store material successfully!",
    });
  } catch (error) {
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Materials.findById(req.params.id);
    if (data) {
      throw new Error("Not found");
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await Materials.findById(req.params.id);
    data.name = req.body.name;
    data.updatedAt = Date.now();
    await data.save();
    return res
      .status(200)
      .json({ success: true, message: "Update material successfully!" });
  } catch (error) {
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const data = await Materials.findById(req.params.id);
    await data.deleteOne();
    return res
      .status(200)
      .json({ success: true, message: "Delete material successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, update, destroy };
