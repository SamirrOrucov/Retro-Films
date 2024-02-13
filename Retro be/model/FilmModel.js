import mongoose,{ Schema } from "mongoose";

const filmSchema = new Schema({
    image: String,
    title: String,
    desc: String,
    director: String,
    directorYears: String,
    directorImg:String,
    duration: String,
    date: String,
    category: String,
  });
  export const FilmModel = mongoose.model("Film", filmSchema);
  