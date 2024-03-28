import express from "express";
import { createTask, getAllTasks } from "../controllers/task.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);

export default router;
