import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;
const categories = new Schema(
  {
    groupProduct: {
      type: Schema.Types.ObjectId,
      ref: "GroupProduct",
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    banner: { type: String, required: true },
    slug: { type: String, slug: "name" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const Categories = mongoose.model("Categories", categories);
