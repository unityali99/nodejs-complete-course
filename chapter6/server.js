const express = require("express");

const app = express();
const port = 3000;

const users = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.post("/users", (req, res) => {
  const { user } = req.body;
  users.push(user);
  res.render("users", { users: users });
});

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port);
