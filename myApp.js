const { application } = require("express");
let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

module.exports = app;
