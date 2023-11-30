import { media } from "../../configs/media.js";
import { Products } from "../../models/index.js";

export const findByCollection = async (req, res, next) => {
  try {
    const data = await Products.find({ collection: req.params.id })
      .populate("groupProduct", ["_id", "name"])
      .populate("collection", ["_id", "name"])
      .populate("category", ["_id", "name"])
      .populate("categoryChild", ["_id", "name"])
      .populate("colors", ["_id", "name"])
      .populate("sizes", ["_id", "name"])
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name"])
      .populate("attribute.form", ["_id", "name"])
      .populate("attribute.material", ["_id", "name"])
      .populate("attribute.design", ["_id", "name"])
      .populate("attribute.handType", ["_id", "name"])
      .populate("attribute.collarType", ["_id", "name"])
      .populate("attribute.sex", ["_id", "name"]);

    data.map((item) =>
      item.media.map((itemMedia) => {
        itemMedia.thumbnail &&
          (itemMedia.thumbnail = media("Products", itemMedia.thumbnail));
        itemMedia.gallery.map(
          (gall, idx) => (itemMedia.gallery[idx] = media("Products", gall))
        );
      })
    );

    return res
      .status(200)
      .json({ success: true, total: data.length, data: data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Products.findOne({ slug: req.params.slug })
      .populate("groupProduct", ["_id", "name"])
      .populate("collection", ["_id", "name"])
      .populate("category", ["_id", "name"])
      .populate("categoryChild", ["_id", "name"])
      .populate("colors", ["_id", "name"])
      .populate({ path: "sizes", options: { sort: { name: "asc" } } })
      .populate("stock.size", ["_id", "name"])
      .populate("stock.color", ["_id", "name"])
      .populate("attribute.form", ["_id", "name"])
      .populate("attribute.material", ["_id", "name"])
      .populate("attribute.design", ["_id", "name"])
      .populate("attribute.handType", ["_id", "name"])
      .populate("attribute.collarType", ["_id", "name"])
      .populate("attribute.sex", ["_id", "name"])
      .populate("media.color", ["_id", "name"]);

    if (!data) {
      throw new Error("Not found");
    }

    data.media.map((item) => {
      item.thumbnail = media("Products", item.thumbnail);
      item.gallery.map(
        (gall, idx) => (item.gallery[idx] = media("Products", gall))
      );
    });

    data.descImage.map(
      (item, idx) => (data.descImage[idx] = media("Products", item))
    );

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};
