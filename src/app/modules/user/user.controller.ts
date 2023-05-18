import { Request, Response } from "express";
import {
  createUserToDB,
  getUserByIdFromDB,
  getUserFromDB,
} from "./user.service";

export const createNewUser = async (req: Request, res: Response) => {
  const userInput = req.body;
  const user = await createUserToDB(userInput);

  res.status(200).json({
    message: "New user created successfully",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUserFromDB();
  res.status(200).json({
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    data: user,
  });
};
