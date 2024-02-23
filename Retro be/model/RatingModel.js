import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
    filmId: { type: Schema.Types.ObjectId, ref: "Film" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rating: Number
  });
  
  export const RatingModel = mongoose.model("Rating", ratingSchema);
  