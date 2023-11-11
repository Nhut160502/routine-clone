import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const colors = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    slug: { type: String, slug: "name" },
    image: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const Colors = mongoose.model("Colors", colors);
