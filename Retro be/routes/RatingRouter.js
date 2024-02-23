
import { Router } from "express";
import { createRating, deleteRating, getRatingsForFilm } from "../controller/RatingController.js";


export const ratingRoute = Router();

ratingRoute.post("/", createRating);
ratingRoute.get("/:filmId", getRatingsForFilm);
ratingRoute.delete("/", deleteRating);