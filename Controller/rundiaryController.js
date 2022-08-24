import RundiaryModel from "../Model/RundiaryModel.js";
import UserModel from "../Model/UserModel.js";

export async function getAllRundiary(req, res) {
  const userId = req.params.userId;
  const diaries = await UserModel.findOne(
    { _id: userId },
    { rundiary: 1, _id: 1 }
  );
  res.status(200).json(diaries);
}

//post
export async function createRundiary(req, res) {
  const userId = req.params.userId; //เอาไปสร้างให้ user คนไหน
  const newRundiary = req.body; //ข้อมูลใหม่ที่จะเอามาสร้าง
  const createdDiary = await RundiaryModel.create(newRundiary); //create card
  console.log(createdDiary);
  const user = await UserModel.findById(userId); // user that i want to create a card
  user.rundiary = [createdDiary._id, ...user.rundiary];
  try {
    await user.save();
    res.status(200).json({ message: "Create Rundiary Complete" });
  } catch (error) {
    res.status(400).json({ message: "Can't Create Card" });
  }
}
//delete
export async function deleteRundiary(req, res) {
  const userId = req.params.userId; // user id
  const diaryId = req.params.diaryId; // card id

  const deletedRundiary = await RundiaryModel.deleteOne({ _id: diaryId }); //delete

  const user = await UserModel.findById(userId); // find user for update
  const filtered = user.rundiary.filter(
    (diary) => diary._id.toString() !== diaryId //filter for delete card by id
  );
  console.log(filtered);

  user.rundiary = filtered;
  console.log(user.rundiary);
  await user.save();
  res.status(200).json({ message: "Delete complete" });
}
