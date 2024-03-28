import express from "express";
import { createTask, deleteTask, getAllTasks, getTask } from "../controllers/task.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

export default router;
