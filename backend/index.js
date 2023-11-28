import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import "dotenv/config";

import privateRouters from "./src/routers/private/index.js";
import publicRouters from "./src/routers/public/index.js";
import { connectDatabase } from "./src/configs/database.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

connectDatabase();

app.use("/api", privateRouters);
app.use("/public/api", publicRouters);

app.use(errorHandler);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`);
});
