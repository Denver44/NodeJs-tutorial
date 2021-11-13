const mongoose = require("mongoose");

// "mongodb://Adrress:PORT/db-name"
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connection Successful....");
  })
  .catch((err) => {
    console.log(err);
  });
