import { Collections } from "../../models/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Collections.find();
    return res
      .status(200)
      .json({ success: true, total: data.length, data: data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Collections.findOne({ slug: req.params.slug });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};
