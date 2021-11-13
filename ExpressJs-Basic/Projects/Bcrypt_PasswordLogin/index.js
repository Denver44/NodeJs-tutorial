const express = require("express");
const bcrypt = require("bcrypt"); // To Hash Our Password we use bcrypt

const app = express();
app.use(express.json());

// List of users.
const users = [
  {
    name: "Denver",
    password: "pass123",
  },
];

// API ENDPOINTS
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10); //This way we create salt using genSlat.Default is 10, more the value more it will be secure.
    const hashedPassword = await bcrypt.hash(req.body.password, salt); // bcrypt save the salt in hashedPassword so we don't need to pass salt alone.
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send("created");
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.send("Not allowed");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("password wrong");
    }
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});

app.listen(3000);
