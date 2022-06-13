const express = require('express')
const { addMovie, allMovies } = require('../controllers/uploadMovies')
const movieRouter = express.Router()

movieRouter.post('/newMovie',addMovie)
movieRouter.get('/getAllMovies',allMovies)

module.exports = movieRouter