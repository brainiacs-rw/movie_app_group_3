const express = require("express");
const app = express();
const movieRouter = require("./routes/movieRouter");
const { mongo } = require("./utils/connection");
const bodyParser = require('body-parser')
const cors = require('cors');
const compression = require("compression");


app.use(compression())
app.use(express.json({limit:'500mb'}))
app.use(cors())
app.use(bodyParser.json({limit:'500mb'}))
mongo();
app.use("/movie", movieRouter);

app.listen(4040);
