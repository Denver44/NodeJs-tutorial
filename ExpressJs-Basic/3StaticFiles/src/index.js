const path = require("path");
const express = require("express");

const app = express();

// builtin Middleware
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("HELLO ");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// This is the way to serve the static files
// use absolute path for giving the directory path name
// Don't use the absolute path like ../ to give the address of file.
