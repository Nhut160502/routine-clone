import { Designs } from "../../models/index.js";

const index = async (req, res, next) => {
  try {
    const data = await Designs.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};
const store = async (req, res, next) => {
  try {
    const data = new Designs({
      name: req.body.name,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      data: data,
      message: "Store design successfully!",
    });
  } catch (error) {
    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Designs.findById(req.params.id);
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
    const data = await Designs.findById(req.params.id);
    data.name = req.body.name;
    data.updatedAt = Date.now();
    await data.save();
    return res
      .status(200)
      .json({ success: true, message: "Update design successfully!" });
  } catch (error) {
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await Designs.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "Delete design successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, update, destroy };
