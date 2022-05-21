const express = require("express");
const app = express();
const movieRouter = require("./routes/movieRouter");
const { mongo } = require("./utils/connection");
const bodyParser = require('body-parser')

app.use(bodyParser.json())
mongo();
app.use("/movie", movieRouter);

app.listen(4040);
