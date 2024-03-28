import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import morgan from "morgan";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", () => {
    console.log("Hello Shopping portal!");
});

const PORT = process.env.PORT;
// console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});