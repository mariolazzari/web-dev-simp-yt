const express = require("express");

const app = express();

// set view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // send string
  // res.send("Hello World!");
  // download file
  // res.download("server.js");
  // render file
  res.render("index");
});

app.listen(3000);
