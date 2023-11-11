// import { Products } from "../models/products";

import { Products } from "../models/index.js";

const index = async (req, res, next) => {
  try {
    const data = await Products.find();
    return res
      .status(200)
      .json({ success: true, data: data, total: data.length });
  } catch (error) {
    return next(error);
  }
};

const store = async (req, res, next) => {
  try {
  } catch (error) {}
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
