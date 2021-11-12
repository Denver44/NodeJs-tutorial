// Asynchronous or non-blocking
// line by line executuon not guaranteed
// Callbacks will fire

const fs = require("fs");

//------------------ CREATING A NEW FILE -----------------------
fs.writeFile(
  "Tutorial/2tut.txt",
  "this is the first tutorial for node js ",
  () => {
    console.log("Done Writing in file");
  }
);

fs.appendFile("Tutorial/2tut.txt", "Append done 2", (err) => {
  console.log("Data Appended in file");
});

fs.readFile("Tutorial/2tut.txt", "utf-8", (err, data) => {
  console.log(data);
});

//----------------- To rename the existimg file name with new filename.
// fs.rename("1tut.txt", "1readwrite.txt", () => {
//   console.log("filename changed");
// });

//--------------- To delte a file ---------------------
// fs.unlink("Tutorial/1tut.txt", () => {
//   console.log("filename Unlink");
// });

// --------------- To delet a Whole Directory---------------
// fs.rmdir("challenge", () => {
//   console.log("folder deleted Unlink");
// });
