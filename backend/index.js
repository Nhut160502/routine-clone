import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import "dotenv/config";
import routers from "./src/routers/index.js";
import { connectDatabase } from "./src/configs/database.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
const errorHandler = (error) => {
  let errMsg;
  if (error.code == 11000) {
    errMsg = Object.keys(error.keyValue)[0] + " already exists.";
  } else {
    errMsg = error.message;
  }
  res.status(400).json({ statusText: "Bad Request", message: errMsg });
};

connectDatabase();
app.use("/api", routers);
app.use(errorHandler);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`);
});
