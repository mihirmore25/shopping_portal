import mongoose from "mongoose";
const Schema = mongoose.Schema;

// models/task.js
const mongoose = require("mongoose");

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Your title is required"],
            max: 70,
        },
        description: {
            type: String,
            required: [true, "Your description is required"],
        },
        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

export const Task = mongoose.model("Task", taskSchema);
