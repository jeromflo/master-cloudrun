const express = require("express");
const app = express();
const users = [
  {id: 1, nombre: "Alejandro"},
  {id: 2, nombre: "Jesus"},
  {id: 3, nombre: "Juan"},
];
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === parseInt(id));
  res.status(200).json(user);
});

exports.users = app;
app.listen(8080, () => console.log("Listening on port 8080!"));
