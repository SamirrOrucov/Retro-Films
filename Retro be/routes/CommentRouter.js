
import { Router } from "express";
import { createComment, deleteComment, getAvarageForFilm, getCommentsForFilm, updateComment } from "../controller/CommentController.js";


export const commentRoute = Router();

commentRoute.post("/", createComment);
commentRoute.get("/:filmId", getCommentsForFilm);
commentRoute.put("/", updateComment);
commentRoute.post("/avarage", getAvarageForFilm);

commentRoute.delete("/", deleteComment);