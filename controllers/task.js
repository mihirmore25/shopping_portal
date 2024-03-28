import { Task } from "../models/Task.js";

export const createTask = async (req, res) => {
    console.log(`Create Task!`);

    let { title, description } = req.body;

    if (!title || !description) {
        return res.status(500).json({
            status: false,
            error: res.statusCode,
            message: "Both Title and Description are required!",
        });
    }

    const newTask = await Task.create({
        title,
        description,
    });

    const newCreatedTask = await newTask.save();

    console.log(newCreatedTask._doc);

    return res.status(201).json({
        status: true,
        data: [newCreatedTask._doc],
        message: "New Task created successfully.",
    });
};

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find()
        .limit(10)
        .sort({ createdAt: -1 })
        .select("-__v");

    if (tasks.length === 0 || tasks === null || 0) {
        return res.status(404).json({
            status: false,
            error: res.statusCode,
            message: "Tasks not found! Try creating new task",
        });
    }

    return res.status(200).json({ status: true, data: tasks });
};

export const getTask = async (req, res) => {
    let taskId = req.params.id;

    if (!taskId || String(taskId).length < 24) {
        return res.status(404).json({
            status: false,
            message: "Please search task with valid task id.",
        });
    }

    const task = await Task.findById(taskId).select("-__v");

    if (taskId && (task === null || undefined || 0)) {
        return res.status(404).json({
            status: false,
            message: `Task did not found with ${taskId} id.`,
        });
    }

    return res.status(200).json({
        status: true,
        data: task,
    });
};
