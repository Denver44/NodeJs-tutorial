const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
// create a file path only.
const partialsPath = path.join(__dirname, "../template/partials");
app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);

// We have to register the Partials only.
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  const params = {
    title: "Get the Gym Membership for Just 💲5️⃣0️⃣0️⃣ for 1️⃣year",
    latest: "Latest Black Friday offer Enroll now 😄",
  };
  res.status(200).render("index.hbs", params);
});

app.get("/about", (req, res) => {
  res.status(200).render("about.hbs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// here we created a templates folder inside it we created a views and partials folder in it.
// for partials we have to use {{>filename}} don't put the extension.
