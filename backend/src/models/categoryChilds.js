import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const categoryChilds = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Categories" },
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    slug: { type: String, slug: "name" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const CategoryChilds = mongoose.model("CategoryChilds", categoryChilds);
