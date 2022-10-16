const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/:word/echo", (req, res, next) => {
  res.json({ echo: req.params.word });
});

module.exports = app;
