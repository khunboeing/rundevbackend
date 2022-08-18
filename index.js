import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./Routes/UserRouter.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 2408;

//midddleware
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(morgan("dev"), bodyParser.json());

app.use("/user", userRouter);
const start = async () => {
  await mongoose.connect(process.env.DB_URI);

  app.listen(PORT, () => {
    console.log(`server working on port ${PORT}`);
  });
};
start();
