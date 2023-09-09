const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
