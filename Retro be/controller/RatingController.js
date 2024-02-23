import { RatingModel } from "../model/RatingModel.js";

export const createRating = async (req, res) => {
  try {
    const { userId, filmId, rating } = req.body;
    const existingRating = await RatingModel.findOne({ userId, filmId });

    if (existingRating) {
      // If the user has already rated the film, update the existing rating
      existingRating.rating = rating;
      await existingRating.save();
      res.send("Rating updated successfully");
    } else {
      // If the user hasn't rated the film yet, create a new rating
      const newRating = new RatingModel({ userId, filmId, rating });
      await newRating.save();
      res.send("Rating created successfully");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getRatingsForFilm = async (req, res) => {
  try {
    const { filmId } = req.params;
    const ratings = await RatingModel.find({ filmId });
    res.send(ratings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteRating = async (req, res) => {
  try {
    const { userId, filmId } = req.body;
    await RatingModel.deleteOne({ userId, filmId });
    res.send("Rating deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
