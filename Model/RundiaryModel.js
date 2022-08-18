import mongoose from "mongoose";

const rundiarySchema = mongoose.Schema({
  name: String,
  date: Date,
  distance: Number,
  location: String,
  motivate: String,
});

export default mongoose.model("rundiary", rundiarySchema);

// {
//   "name":"running with friends ",
//   "date":"2022-08-14T17:16:04.702Z",
//   "distance":6,
//   "motivate":"for whattt",
//   "location":"Jatujak Park"
//   }
