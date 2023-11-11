import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const handTypes = new Schema(
  {
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

export const HandTypes = mongoose.model("HandTypes", handTypes);
