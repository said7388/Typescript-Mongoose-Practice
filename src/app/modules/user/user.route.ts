import express from "express";
import { createNewUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/create", createNewUser);

export default router;
