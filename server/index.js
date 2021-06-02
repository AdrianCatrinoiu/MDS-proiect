// server/index.js
const path = require("path");
const express = require("express");
const usersDB = require("./users.json");
const workoutsDB = require("./workouts.json");
const mealsDB = require("./meals.json");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/login", (req, res) => {
  const data = req.body;
  let response = {
    status: "ERROR",
    message: "Login Error",
  };
  const { username, password } = data;
  let userList = JSON.parse(JSON.stringify(usersDB));

  userList.forEach((user) => {
    if (user.username == username && user.password == password) {
      console.log("User found");
      response.status = "OK";
      response.message = "Login Ok";
    }
  });
  res.status(200).json(response);
});

app.post("/register", (req, res) => {
  const data = req.body;
  let response = {
    status: "ERROR",
    message: "Register error",
  };
  const { username, password } = data;
  let meals = mealsDB;
  let workouts = workoutsDB;
  let newUser = {
    username: username,
    password: password,
    workouts: workouts,
    meals: meals,
  };
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{7,15}$/;
  let userList = usersDB;
  existing = false;
  userList.forEach((user) => {
    if (user.username == newUser.username) {
      existing = true;
    }
  });

  if (existing == false) {
    if (newUser.password.match(paswd)) {
      userList.push(newUser);
      fs.writeFileSync("server/users.json", JSON.stringify(userList), (err) => {
        if (err) throw err;
      });
      response.status = "OK";
      response.message = "Register Ok";
      console.log("Data written to file");
    } else {
      response.message = "Password incorrect RegExp";
    }
  } else {
    response.message = "User already exists";
  }

  res.status(200).json(response);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
