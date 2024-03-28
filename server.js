import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import morgan from "morgan";
import express from "express";
import taskRoutes from "./routes/tasks.js";
import { dbClient } from "./db/db.js";

const app = express();

// DB connection
dbClient();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/tasks", taskRoutes);

app.get("/", () => {
    console.log("Hello Shopping portal!");
});

const PORT = process.env.PORT;
// console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
