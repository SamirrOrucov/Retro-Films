import { UserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt";
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
};
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await UserModel.findById(id);
    res.send(User);
  } catch (error) {
    res.send(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, password, image, nickName } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const newUser = new UserModel({ email, password: hash, image, nickName });
    await newUser.save();

    res.send("New User Created!");
  } catch (error) {
    res.send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, name, desc, city } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(id, {
      image,
      title,
      name,
      desc,
      city,
    });
    res.send("User Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const delUser = await UserModel.findByIdAndDelete(id);

    res.send("Selected User deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
