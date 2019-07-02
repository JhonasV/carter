import * as mongoose from "mongoose";
const GenreSchema = mongoose.model("Genre");
const ActorSchema = mongoose.model("Actor");
const CinemaSchema = mongoose.model("Cinema");

const { Schema } = mongoose;

export const MovieSchema = new Schema({
  Portada: { type: String, Required: true },
  Rating: { type: Number, Default: 0 },
  Genres: [GenreSchema],
  Language: { type: String },
  ReleaseDate: { type: Date },
  casting: [ActorSchema],
  Sinopsis: String,
  cinemas: [CinemaSchema]
});
