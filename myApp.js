const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.use("/json", (req, res, next) => {
  console.log(`${req.method} /${req.path} - ${req.ip}`);
  next();
});

module.exports = app;
