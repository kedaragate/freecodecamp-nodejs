const { application } = require("express");
require("dotenv").config();
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "Hello Json".toUpperCase() });
  } else {
    res.json({ message: "Hello Json" });
  }
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
