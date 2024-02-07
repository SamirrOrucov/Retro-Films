// import { UserModel } from "../../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../model/UserModel.js";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await UserModel.findOne({ email });
  const hash = bcrypt.hashSync(password, 12);

    const chechkPassword = await bcrypt.compare(password, hash)

    if (!users) {
      res.send("users not found");
      return
    }
    if (!chechkPassword) {
        console.log(chechkPassword)
      res.send("password is incorrect");
      return
    }
    const token = jwt.sign({ name:nickName, role: users.role,email:email}, process.env.JWT_SECRET_KEY);
    res.send(token);
  } catch (error) {
    res.send(error.message)
  }
};

export const userRegister = async (req, res) => {
  const {  nickName,email, password, image } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  try {
    const users = new UserModel({ nickName, hash,email,image });
    const token = jwt.sign({  role: users.role,email:email}, process.env.JWT_SECRET_KEY);
    await users.save();
    res.send(token);
  } catch (error) {
    res.send(error.message);     
  }
};