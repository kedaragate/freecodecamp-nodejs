const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app
  .route("/name")
  .get((req, res) => {
    console.log(req.query);
  })
  .post((req, res) => {
    console.log(req.query);
  });

module.exports = app;
