import { Router } from "express";
import {
  deleteFilm,
  getAllFilms,
  getFilmById,
  postFilm,
  updateFilm,
} from "../controller/FilmController.js";
// import { verfyAccess } from "../Middleware/AuthMiddleware.js";

export const filmRoute = Router();

filmRoute.get("/", getAllFilms);
filmRoute.get("/:id", getFilmById);

filmRoute.post("/",  postFilm);

filmRoute.put("/:id",  updateFilm);

filmRoute.delete("/:id",  deleteFilm)