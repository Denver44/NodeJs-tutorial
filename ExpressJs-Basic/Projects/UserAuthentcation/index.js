const express = require("express");
const bcrypt = require("bcrypt"); // To Hash Our Password we use bcrypt

const app = express();
app.use(express.json());

// List of users.
const users = [
  {
    name: "DURGESH",
    password: "password",
  },
];

// API ENDPOINTS
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10); //This way we create salt using genslat. Otheriwse we can pass the round in the 2nd args also.
    //  Default is 10 the more the round the more it will be secure.
    const hashedPassword = await bcrypt.hash(req.body.password, salt); // bcyrpt save the salt in hashedPassword so we dont need to pass salt alone.
    const user = { name: req.body.name, password: hashedPassword };
    console.log("🧂  " + salt, "㊙️ " + hashedPassword);
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
