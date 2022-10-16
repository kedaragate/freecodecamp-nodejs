const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.post("/name", (req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}` });
});

module.exports = app;
