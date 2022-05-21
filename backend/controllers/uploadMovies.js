const { movieSchema } = require("../models/movies");
const moment = require("moment");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

exports.addMovie = async (req, res) => {
  const date = moment().format("dddd, MMMM Do YYYY");
  // const uploaded_response = await cloudinary.uploader.upload(
  //   req.body.movieString,
  //   {
  //     upload_preset: "wiwo",
  //   }
  // );
  // console.log(uploaded_response.secure_url);
  const movie = await movieSchema({
    date: date,
    movieName: req.body.movieName,
    movieUrl: "uploaded_response.secure_url",
    genre: req.body.genre,
  });
  await movie.save();
  return res.status(201).json({ message: "Movie uploaded successfuly" });
};
exports.allMovies = async (req, res) => {
  const movies = await movieSchema.find();
  if (!movies) return res.status(404).json({ message: "No movies found" });
  return res.status(200).json({ message: "All movies found", movies });
};
