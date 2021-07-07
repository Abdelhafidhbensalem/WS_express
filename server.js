// import express
const express = require("express");
const isAuth = require("./middleware/auth");

// instance of all methods const app
const app = express();
// console.log(app);

let users = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Peter", age: 20 },
];

// CRUD
// Create=>POST
// Read=>GET
// Update=>PUT
// DELETE=>delete


// to use json type
// middleware global
app.use(express.json()); //bodyparser
app.use(isAuth);

// create a route =>
// Method:GET
// path: /
app.get("/", (request, response) => {
  response.send("hello world");
});

// endPoint
// Method:GET
// path: /users
app.get("/users", (req, res) => {
  res.send({ msg: "all users", users: users });
});

// Get User by id
// method :GET
// Path : /users/:id
app.get("/users/:id", (req, res) => {
  //res.send(req.params);
  //   les parametres sont au niveau du URL

  const user = users.find((el) => el.id == req.params.id);
  if (!user) {
    return res.status(400).send({ msg: "user dont exist" });
  }
  return res.send(user);
});


// port
const port = 5000;

// create server
app.listen(port, (err) => {
  err ? console.error(err) : console.log(`server is running on ${port}`);
});
