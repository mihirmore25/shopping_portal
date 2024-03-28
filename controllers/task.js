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
