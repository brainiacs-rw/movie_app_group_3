const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    time:{
        type:Date
    },
    movieName:{
        type:String
    },
    movieUrl:{
        type:String
    },
    genre:{
        type:String
    }
})

module.exports.movieSchema = mongoose.model('Movies',movieSchema)