import { media } from "../configs/media.js";
import { Collections } from "../models/index.js";

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
    const data = new Collections({
      name: req.body.name,
      banner: req.file.filename,
    });
  } catch (error) {}
};
export { index, store };
