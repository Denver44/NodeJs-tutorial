const path = require("path");
const express = require("express");

const app = express();

// to set the view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views")); // Set the views directory


// template engine route.
app.get("/", (req, res) => {
  const params = {
    title: "Get the Gym Membership for Just 💲5️⃣0️⃣0️⃣ for 1️⃣year",
    latest: "Latest Black Friday offer Enroll now 😄",
  };
  res.status(200).render("index.hbs", params);
});


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
