const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

app
  .route("/name")
  .get((req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
  })
  .post((req, res) => {
    console.log(req.body);
  });

module.exports = app;
