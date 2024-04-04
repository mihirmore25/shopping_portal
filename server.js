import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import morgan from "morgan";
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";
import { dbClient } from "./db/db.js";

const app = express();

// DB connection
dbClient();

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

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
