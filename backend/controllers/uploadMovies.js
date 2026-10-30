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
  try {
    console.log(req.body)
    const date = moment().format("dddd, MMMM Do YYYY");
    const uploaded_response = await cloudinary.uploader.upload_large(
    req.body.movieString,
    {
      upload_preset:'wiwo',
      resource_type: "video",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" },
        {
          width: 160,
          height: 100,
          crop: "crop",
          gravity: "south",
          audio_codec: "none",
        },
      ],
      eager_async: true,
      eager_notification_url: "http://localhost:4040/admin",
    },
    (error, result) => {
      if(error) return console.log(error)
      console.log(result);
    }
  );
  console.log(uploaded_response.secure_url);

  const movie = await movieSchema({
    date: date,
    movieName: req.body.movieName,
    movieUrl: uploaded_response.secure_url,
    genre: req.body.genre,
  });
  await movie.save();
  return res.status(201).json({ message: "Movie uploaded successfuly" });
} catch (error) {
 console.log(error) 
}
};
exports.allMovies = async (req, res) => {
  const movies = await movieSchema.find();
  if (!movies) return res.status(404).json({ message: "No movies found" });
  return res.status(200).json({ message: "All movies found", movies });
};
