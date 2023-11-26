import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const products = new Schema({
  groupProduct: {
    type: Schema.Types.ObjectId,
    ref: "GroupProduct",
    required: true,
  },
  collection: {
    type: Schema.Types.ObjectId,
    ref: "Collections",
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: "Categories", required: true },
  categoryChild: {
    type: Schema.Types.ObjectId,
    ref: "CategoryChilds",
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  slug: { type: String, slug: "name" },
  colors: [{ type: Schema.Types.ObjectId, ref: "Colors", required: true }],
  sizes: [{ type: Schema.Types.ObjectId, ref: "Sizes", required: true }],
  media: [
    {
      color: {
        type: Schema.Types.ObjectId,
        ref: "Colors",
        required: true,
      },
      thumbnail: { type: String },
      gallery: [{ type: String }],
    },
  ],
  stock: [
    {
      color: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Colors",
      },
      size: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Sizes",
      },
      qty: { type: Number, required: true },
    },
  ],
  price: { type: Number, required: true },
  sale: { type: Number, required: true, min: 0, max: 100, default: 0 },
  sold: { type: Number, default: 0 },
  attribute: {
    form: {
      type: Schema.Types.ObjectId,
      ref: "Forms",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: "Materials",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
    design: {
      type: Schema.Types.ObjectId,
      ref: "Designs",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
    handType: {
      type: Schema.Types.ObjectId,
      ref: "HandTypes",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
    collarType: {
      type: Schema.Types.ObjectId,
      ref: "CollarTypes",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
    sex: {
      type: Schema.Types.ObjectId,
      ref: "Sex",
      required: false,
      set: (v) => (v === "undefined" ? null : v),
    },
  },
  description: { type: String },
  descImage: [],
  isActive: { type: Boolean, default: true },
});

configMongoose();

export const Products = mongoose.model("Products", products);
