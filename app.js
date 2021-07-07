// import express
const express = require("express"); //ES5
const isAuth = require("./middleware/auth");
//instance of all the method of express
const app = express();
// middleware golbale n°1
app.use(isAuth);

// creation route to send file
// app.get("/", (request, response) => {
//   //   console.log(__dirname);
//   response.sendFile(__dirname + "/public/index.html");
// });
// app.get("/services", (request, response) => {
//   //   console.log(__dirname);
//   response.sendFile(__dirname + "/public/services.html");
// });
// app.get("/style.css", (request, response) => {
//   //   console.log(__dirname);
//   response.sendFile(__dirname + "/public/style.css");
// });

//create port
const port = 7000;
//create server
app.listen(port, () => console.log("server is running"));
