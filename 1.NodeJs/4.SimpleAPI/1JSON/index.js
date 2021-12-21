const fs = require("fs");

const bioData = {
  first_name: "Denver",
  last_name: "Heist",
  Age: 20,
  Height: 178,
  Weight: 65,
};

const JSONData = JSON.stringify(bioData); // converted in JSON FORMAT

// Writing the Json Data in file and the data must be type of string or an instance of Buffer, TypedArray or DataView.

fs.writeFile("./data/db.json", JSONData, (err) => {
  console.log("Data read successfully");
});

// Reading Json Data form Json file.
fs.readFile("./data/db.json", "utf-8", (err, data) => {
  console.log(typeof data);
  const parsedData = JSON.parse(data);
  console.log(parsedData.first_name);
  console.log(parsedData.last_name);
  console.log(parsedData.Age);
  console.log(parsedData.Height);
  console.log(parsedData.Weight);
});
