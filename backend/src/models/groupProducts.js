import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const groupProduct = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    shortcut: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    slug: { type: String, slug: "name" },
    banner: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
configMongoose();
export const GroupProduct = mongoose.model("GroupProduct", groupProduct);
