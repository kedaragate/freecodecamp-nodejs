const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

module.exports = app;
