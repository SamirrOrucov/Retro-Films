import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../model/UserModel.js";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    const token = jwt.sign(
      { name: user.nickName, role: user.role, email: email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.json({ token }); // Wrap the token in an object
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userRegister = async (req, res) => {
  const { nickName, email, password, image } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hash = bcrypt.hashSync(password, 12);
    const newUser = new UserModel({
      nickName,
      email,
      password: hash,
      image: "http://localhost:3003/static/" + req.static,
    });
    await newUser.save();
    console.log(req.static)

    const token = jwt.sign(
      { role: newUser.role, name: nickName, email: email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
