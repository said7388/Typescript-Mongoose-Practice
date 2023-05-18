import cors from "cors";
import express, { Application } from "express";
import userRoute from "./app/modules/user/user.route";

const app: Application = express();

// Using cors to allow cross origin requests
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);

export default app;
