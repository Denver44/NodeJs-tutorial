const fs = require("fs");

const biodata = {
  first_name: "Durgesh",
  last_name: "Rai",
  Age: 20,
  Height: 178,
  Weight: 65,
};

const jsondata = JSON.stringify(biodata); // converted in JSON FORMAT

// Wrote the Json Data in file
// fs.writeFile("json_biodata.json", jsondata, (err) => {
//   console.log("Done");
// });

// Read Json Data form Json file.
fs.readFile("json_biodata.json", "utf-8", (err, data) => {
  const originaldata = JSON.parse(data);
  console.log(originaldata.first_name);
  console.log(originaldata.last_name);
  console.log(originaldata.Age);
  console.log(originaldata.Height);
  console.log(originaldata.Weight);
});
