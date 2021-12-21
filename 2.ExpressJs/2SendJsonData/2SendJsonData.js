const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.write("<h1>Hello World</h1> "); // the res.write helps us to write as many html data we can write
  res.send(); // we have to use res.send to close the that data in end to declare that all written part is finish.
});

app.get("/about", (req, res) => {
  res.send("About us Page ");
});

app.get("/temp", (req, res) => {
  // It will automatic will convert it in to Json.stringify
  // we can use both res.json and res.write but the use keywords null and undefined while using .write create error so use json primarily.
  res.json([
    {
      id: 1,
      name: "durgesh",
      job: null,
    },
    {
      id: 2,
      name: "Vishal",
      age: undefined,
    },
    {
      id: 3,
      name: "Denver",
    },
  ]);
});

app.listen(8000, () => {
  console.log("listening the port at 8000");
});
