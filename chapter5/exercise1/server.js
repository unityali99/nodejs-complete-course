import express from "express";

const port = 3000;
const app = express();

// app.use((req, res, next) => {
//   console.log("logger 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("logger 1");
//   res.send("Some Response");
// });

app.use("/users", (req, res, next) => {
  res.send("Users Page");
});

app.use("/", (req, res, next) => {
  res.send("Main Page");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
