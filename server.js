const express = require("express");
const mongoose = require("mongoose"); //ORM
const bodyParser = require("body-parser"); // allow take request get data from body

const items = require("./routes/api/items");

const app = express();

//BosyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Use Route
app.use("/api/items", items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
