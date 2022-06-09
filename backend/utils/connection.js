require("dotenv").config();
const mongoose = require("mongoose");
const dbConnection = async() => {
    mongoose.connect(process.env.ONLINE_URL, (error) => {
        if (error) return console.log("Error in DB connection: ", error);
        console.log("Connected to database");
    });
}
module.exports.mongo = dbConnection