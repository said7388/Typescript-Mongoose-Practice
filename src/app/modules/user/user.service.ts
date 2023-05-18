import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (user: IUser): Promise<IUser> => {
  // Insert data to database

  const newUser = new User(user);

  await newUser.save();

  return newUser;
};

export const getUserFromDB = async () => {
  // Get data from database
  const users = await User.find();

  return users;
};

export const getUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);
  return user;
};
