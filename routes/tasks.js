import express from "express";
import {
    updateTask,
    createTask,
    deleteTask,
    getAllTasks,
    getTask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;
