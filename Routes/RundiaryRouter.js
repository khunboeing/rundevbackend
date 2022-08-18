import express from "express";
import {
  getAllRundiary,
  createRundiary,
  deleteRundiary,
} from "../Controller/rundiaryController.js";

const router = express.Router({ mergeParams: true });
router.get("/", getAllRundiary);
router.get("/:diaryId");
router.post("/", createRundiary);
router.put("/:diaryId");
router.delete("/:diaryId", deleteRundiary);

export default router;
