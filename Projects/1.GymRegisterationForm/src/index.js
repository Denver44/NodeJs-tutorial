const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const port = process.env.PORT || 3000;

var root = path.dirname(require.main.filename);
const inFile = root + "/output.txt";

// Middlewares
const app = express();
app.use(express.urlencoded({ extended: true })); // to get the data from the form we used a Middle ware to encode the data
app.use(express.json());

const staticPath = path.join(__dirname, "../public"); // we have to use absolute path for static files like img and css.
app.use(express.static(staticPath)); // to use static we have to give its address to express.static(address of static folder)

const templatePath = path.join(__dirname, "../template/views"); // the template file path
app.set("view engine", "hbs"); // this is for the set the template and for tempate we have to make views folder for that.
app.set("views", templatePath); // and also we have to set the path of the tempaltes.
const partialsPath = path.join(__dirname, "../template/partials"); // this is specially for the partials.
hbs.registerPartials(partialsPath); // we have to first regsiter the partials.H

// API ENDPOINTS
app.get("/", (req, res) => {
  const params = {
    title: "Get the Gym Membership for Just 💲5️⃣0️⃣0️⃣ for 1️⃣year",
    latest: "Latest Black Friday offer Enroll now 😄",
  };
  res.status(200).render("index.hbs", params);
});

app.post("/", (req, res) => {
  let olddata = fs.readFileSync(inFile, "utf-8");
  let details =
    olddata + `\nThe name :- ${req.body.name} age:- ${req.body.age} gender:- ${req.body.gender}  Weight:- ${req.body.weight} Height:- ${req.body.height}  Address:- ${req.body.address}`;
  fs.writeFileSync(inFile, details);
  res.status(201).render("index.hbs");
});

app.get("/about", (req, res) => {
  res.status(200).render("about.hbs");
});

// it handle the error page it is universal operator.
app.get("*", (req, res) => {
  res.render("404");
});

// Listeners
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
