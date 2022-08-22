import mongoose from "mongoose";
import app from "./api/index.js";
import config from "./config.js";

const start = async () => {
  await mongoose.connect(config.mongoUri, config.mongoOptions);

  app.listen(config.port, () => {
    console.log(`server working on port ${config.port}`);
  });
};
start();
