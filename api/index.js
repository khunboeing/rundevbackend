import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "../Routes/UserRouter.js";
import login from "../Routes/Login.js";

import config from "../config.js";

dotenv.config();
const app = express();

if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}

//midddleware
app.use(
  cors()
  // cors({
  //   origin: process.env.ORIGIN,
  // })
);
app.use(morgan("dev"), bodyParser.json({ limit: "30mb", extended: true }));

app.use("/user", userRouter);
app.use("/login", login);

export default app;
