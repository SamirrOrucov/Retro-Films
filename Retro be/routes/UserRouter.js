import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/UserController.js";
// import { verfyAccess } from "../Middleware/AuthMiddleware.js";

export const userRouter = Router();

userRouter.get("/",getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
