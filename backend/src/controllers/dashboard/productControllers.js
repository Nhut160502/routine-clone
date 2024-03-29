import fs from "fs";
import { Products } from "../../models/index.js";
import { media } from "../../configs/media.js";

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
      .json({ success: true, data: data, total: data.length });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {
  try {
    if (!req.files.length) {
      throw new Error("Image product is not valid!");
    }
    if (!req.body.colors) {
      throw new Error("Image product is not valid!");
    }
    const sizes = [];
    const colors = [];
    const media = [];
    const stock = [];
    const filesDesc = [];

    if (typeof req.body.sizes === "string")
      sizes.push(JSON.parse(req.body.sizes));
    else req.body.sizes.map((size) => sizes.push(JSON.parse(size)));

    if (typeof req.body.colors === "string")
      colors.push(JSON.parse(req.body.colors));
    else req.body.colors.map((color) => colors.push(JSON.parse(color)));

    if (typeof req.body.media === "string")
      media.push(JSON.parse(req.body.media));
    else req.body.media.map((item) => media.push(JSON.parse(item)));

    if (typeof req.body.stock === "string")
      stock.push(JSON.parse(req.body.stock));
    else req.body.stock.map((item) => stock.push(JSON.parse(item)));

    let i = 0;
    media.map((item) => {
      item.thumbnail = req.files[i].filename;
      item.gallery.map((gall, idx) => {
        i++;
        item.gallery[idx] = req.files[i].filename;
      });
      i++;
    });

    let j = req.body?.filesDesc?.length - 1;
    for (let idx = j; idx < req.files.length; idx++) {
      filesDesc.push(req.files[idx].filename);
    }

    const attribute = {
      sex: req.body.sex,
      form: req.body.form,
      design: req.body.design,
      material: req.body.material,
      handType: req.body.handType,
      collarType: req.body.collarType,
    };

    const data = new Products({
      sizes: sizes,
      media: media,
      stock: stock,
      colors: colors,
      name: req.body.name,
      descImage: filesDesc,
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
    if (req.files) {
      req.files.map(
        (file) =>
          fs.existsSync(`public/Products/${file.filename}`) &&
          fs.unlinkSync(`public/Products/${file.filename}`)
      );
    }

    console.log(error);

    return next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const data = await Products.findOne({ slug: req.params.slug })
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

const update = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  try {
    const media = [];
    const oldMedia = [];
    const stock = [];
    const sizes = [];
    const colors = [];
    const filesDesc = [];
    const files = req.files;

    if (typeof req.body.sizes === "string")
      sizes.push(JSON.parse(req.body.sizes));
    else req.body.sizes.map((size) => sizes.push(JSON.parse(size)));

    if (typeof req.body.colors === "string")
      colors.push(JSON.parse(req.body.colors));
    else req.body.colors.map((color) => colors.push(JSON.parse(color)));

    if (typeof req.body.media === "string")
      media.push(JSON.parse(req.body.media));
    else {
      req.body.media.map((item) => media.push(JSON.parse(item)));
    }

    if (req.body.stock) {
      if (typeof req.body.stock === "string")
        stock.push(JSON.parse(req.body.stock));
      else req.body.stock.map((item) => stock.push(JSON.parse(item)));
    }

    const data = await Products.findById(req.body.id);

    let i = 0;
    media.map((item) => {
      if (typeof item.thumbnail === "string")
        item.thumbnail = item.thumbnail.split("/Products/", 2)[1];
      else {
        item.thumbnail = item.thumbnail = files[i].filename;
        const old = data.media.find((val) => val.color + "" === item.color);
        oldMedia.push(old?.thumbnail);
        i++;
      }

      if (typeof item.gallery[0] === "string") {
        item.gallery.map(
          (gall, key) => (item.gallery[key] = gall.split("/Products/", 2)[1])
        );
      } else {
        item.gallery.map((gall, key) => {
          item.gallery[key] = files[i].filename;
          i++;
        });
        const old = data.media.find((val) => val.color + "" === item.color);
        old?.gallery?.map((val) => oldMedia.push(val));
      }
    });

    const attribute = {
      form: null,
      material: null,
      design: null,
      handType: null,
      collarType: null,
      sex: null,
    };

    attribute.sex = req.body?.sex;
    attribute.form = req.body?.form;
    attribute.design = req.body?.design;
    attribute.material = req.body?.material;
    attribute.handType = req.body?.handType;
    attribute.collarType = req.body?.collarType;

    if (req.body.filesDesc) {
      let j = req.body.filesDesc.length;
      for (let idx = i; idx < j; idx++) {
        console.log(req.files[idx].filename);
        filesDesc.push(req.files[idx].filename);
      }
      data.descImage.map(
        (file) =>
          fs.existsSync(`public/Products/${file}`) &&
          fs.unlinkSync(`public/Products/${file}`)
      );
      data.descImage = filesDesc;
    }

    data.sizes = sizes;
    data.media = media;
    data.stock = stock;
    data.colors = colors;
    data.sale = req.body.sale;
    data.name = req.body.name;
    data.attribute = attribute;
    data.price = req.body.price;
    data.category = req.body.category;
    data.collection = req.body.collection;
    data.description = req.body.description;
    data.groupProduct = req.body.groupProduct;
    data.categoryChild = req.body.categoryChild;

    await data.save();

    oldMedia.map(
      (item) =>
        fs.existsSync(`public/Products/${item}`) &&
        fs.unlinkSync(`public/Products/${item}`)
    );

    return res
      .status(200)
      .json({ success: true, message: "Update Product Successfully" });
  } catch (error) {
    if (req.files) {
      req.files.map(
        (file) =>
          fs.existsSync(`public/Products/${file.filename}`) &&
          fs.unlinkSync(`public/Products/${file.filename}`)
      );
    }
    console.log(error);
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const data = await Products.findById(req.params.id);
    data.media.map((item) => {
      fs.existsSync(`public/Products/${item.thumbnail}`) &&
        fs.unlinkSync(`public/Products/${item.thumbnail}`);
      item.gallery.map(
        (gall) =>
          fs.existsSync(`public/Products/${gall}`) &&
          fs.unlinkSync(`public/Products/${gall}`)
      );
    });

    data?.descImage?.map(
      (item) =>
        fs.existsSync(`pulic/Products/${item}`) &&
        fs.unlinkSync(`pulic/Products/${item}`)
    );

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete product successfully!" });
  } catch (error) {
    return next(error);
  }
};

export { index, store, show, update, destroy };
