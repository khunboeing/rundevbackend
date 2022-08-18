import UserModel from "../Model/UserModel.js";

//I'm a server

//send all of usersdata to user
export async function getAllUser(req, res) {
  const userdata = await UserModel.find().populate("rundiary");
  res.status(200).json(userdata);
}
//search user from idUser send to user
export async function getUserById(req, res) {
  const userId = req.params.userId;
  const userdata = await UserModel.findById(userId).populate("rundiary");
  res.status(200).json(userdata);
}
export async function createUser(req, res) {
  const newUser = req.body;
  await UserModel.create(newUser);
  res.status(201).json({ message: "Create User complete" });
}
export async function updateUser(req, res) {
  //request user the new data
  const newUpdate = req.body;
  const userId = req.params.userId;

  //find the old userdata
  let oldUser = await UserModel.findById(userId);

  //เปลี่ยนข้อมูลใหม่ใส่ข้อมูลเก่า
  if (newUpdate.auth?.password) oldUser.auth.password = newUpdate.auth.password;
  oldUser.bio = { ...oldUser.bio, ...newUpdate.bio };

  await oldUser.save();
  res.status(201).json({ message: "Update User complete" });
}
export async function deleteUser(req, res) {
  const userId = req.params.userId;
  await UserModel.deleteOne({ _id: userId });
  res.status(200).json({ message: "Delete User complete" });
}
