// import { Products } from "../models/products";

import { Products } from "../models/index.js";
import { media } from "../configs/media.js";

const index = async (req, res, next) => {
  try {
    const data = await Products.find()
      .populate("groupProduct", ["_id", "name"])
      .populate("collection", ["_id", "name"])
      .populate("category", ["_id", "name"])
      .populate("categoryChild", ["_id", "name"])
      .populate("colors", ["_id", "name"])
      .populate("sizes", ["_id", "name"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name"])
      .populate("attribute.sex", ["_id", "name"])
      .populate("attribute.form", ["_id", "name"])
      .populate("attribute.design", ["_id", "name"])
      .populate("attribute.material", ["_id", "name"])
      .populate("attribute.handType", ["_id", "name"])
      .populate("attribute.collarType", ["_id", "name"]);

    data.map((item) =>
      item.media.map((itemMedia) => {
        itemMedia.thumbnail = media("Products", itemMedia.thumbnail);
        itemMedia.gallery.map(
          (gall, idx) => (itemMedia.gallery[idx] = media("Products", gall))
        );
      })
    );
    return res
      .status(200)
      .json({ success: true, data: data, total: data.length });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const sizes = [];
    const colors = [];
    const media = [];
    const stock = [];
    const attribute = {
      form: null,
      material: null,
      design: null,
      handType: null,
      collarType: null,
      sex: null,
    };
    req.body.sizes.map((size) => sizes.push(JSON.parse(size)));
    req.body.colors.map((color) => colors.push(JSON.parse(color)));
    req.body.media.map((item) => {
      media.push(JSON.parse(item));
    });
    req.body.stock.map((item) => stock.push(JSON.parse(item)));
    console.log(stock);

    let i = 0;
    media.map((item) => {
      item.thumbnail = req.files[i].filename;
      item.gallery.map((gall, idx) => {
        i++;
        item.gallery[idx] = req.files[i].filename;
      });
      i++;
    });

    attribute.sex = req.body?.sex;
    attribute.form = req.body?.form;
    attribute.design = req.body?.design;
    attribute.material = req.body?.material;
    attribute.handType = req.body?.handType;
    attribute.collarType = req.body?.collarType;

    const data = new Products({
      sizes: sizes,
      media: media,
      stock: stock,
      colors: colors,
      name: req.body.name,
      attribute: attribute,
      price: req.body.price,
      category: req.body.category,
      collection: req.body.collection,
      description: req.body.description,
      groupProduct: req.body.groupProduct,
      categoryChild: req.body.categoryChild,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      data: data,
      message: "Store product successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
  } catch (error) {}
};

const update = async (req, res, next) => {
  try {
  } catch (error) {}
};

const destroy = async (req, res, next) => {
  try {
  } catch (error) {}
};

export { index, store, show, update, destroy };
