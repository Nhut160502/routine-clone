import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import slugUpdate from "mongoose-slug-updater";
export const configMongoose = (Model) => {
  mongoose.plugin(slug);
  mongoose.plugin(slugUpdate);
};
