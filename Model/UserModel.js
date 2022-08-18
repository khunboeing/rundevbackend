import mongoose from "mongoose";

//schema user
const userSchema = mongoose.Schema({
  auth: {
    email: String,
    password: String,
  },
  bio: {
    name: String,
    weight: Number,
    height: Number,
    age: Number,
    gender: String,
    picture: String,
    bmi: Number,
  },
  rundiary: [{ type: mongoose.SchemaTypes.ObjectId, ref: "rundiary" }],
});

//model
export default mongoose.model("User", userSchema);

// {
//   "auth": {
//     "email": "omg@gmeow.com",
//     "password": "1234"
//   },
//   "bio": {
//     "name": "Boeing",
//     "weight": 53,
//     "height": 158,
//     "age": 28,
//     "gender": "female",
//     "picture": "",
//     "bmi": 0
//   },
//   "rundiary": []
//   }
