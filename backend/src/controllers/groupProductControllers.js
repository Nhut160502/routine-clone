import { media } from "../configs/media.js";
import { GroupProduct } from "../models/index.js";

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
      createdAt: new Date(0),
    });
    await data.save();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    next(error);
  }
};

export { index, store };
