import mongoose from "mongoose";
import "dotenv/config";

export const connectDatabase = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connect database successfully!");
    })
    .catch((err) => {
      throw new Error("Connect database failed!");
    });
};
