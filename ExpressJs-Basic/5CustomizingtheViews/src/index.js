const path = require("path");
const express = require("express");

const app = express();

// builtin Middleware
// for static files like css and static html file.
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../template")); // Set the views directory

// template engine route.

app.get("/", (req, res) => {
  const params = {
    title: "Get the Gym Membership for Just 💲5️⃣0️⃣0️⃣ for 1️⃣year",
    latest: "Latest Black Friday offer Enroll now 😄",
  };
  res.status(200).render("index.hbs", params);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
