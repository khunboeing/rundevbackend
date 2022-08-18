import express from "express";
import RundiaryRouter from "./RundiaryRouter.js";
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../Controller/userController.js";

const router = express.Router();
router.use("/:userId/diary", RundiaryRouter);

router.get("/", getAllUser);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);
export default router;
