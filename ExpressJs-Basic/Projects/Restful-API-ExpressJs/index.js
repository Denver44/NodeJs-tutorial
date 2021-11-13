const express = require("express");
const app = express();
require("./src/db/conn"); // db connection file connected with our index file.
const port = process.env.PORT || 8000; //  process.env.port will assign a port when we put it on herekou any other web server. // For localhost it will be 80.
const cors = require("cors");

const Student = require("./src/models/students");
const StudentRouter = require("./src/routers/student.js");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(StudentRouter);

//LISTENER
app.listen(port, () => {
  console.log(`listening the port at  ${port}`);
});
