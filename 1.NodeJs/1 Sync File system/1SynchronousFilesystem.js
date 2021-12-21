// Synchronous or Blocking
// line by line execution


const fs = require("fs");

//------------------ CREATING A NEW FILE -----------------------
// We are writing the file sync way ("filename",'data');
fs.writeFileSync(
  "Tutorial/1tut.txt",
  "this is the first tutorial for node js "
);

//----------------apending data in  exisiting file sync way ("filename",'data');
fs.appendFileSync("Tutorial/1tut.txt", "Append done 2");

//--------------------------------- We convert the buffer data to string by using tostring().--------------------------------
// const a = fs.readFileSync("1tut.txt");
// console.log(a.toString());

//---------------------- Without buffer we have decrypted it then use UTF-8---------------------------
const a = fs.readFileSync("Tutorial/1tut.txt", "utf-8");
console.log(a);

//----------------- To rename the existimg file name with new filename.
// fs.renameSync("1tut.txt","1readwrite.txt")

//--------------- To delte a file ---------------------
fs.unlinkSync("Tutorial/1tut.txt");

// --------------- To delet a Whole Directory---------------
fs.rmdirSync("challenge");


// /--------------------------------------//
// Tutorial For ----------- Reading and writing data in a file.

const fs = require("fs"); // For reading and writing data in file we need Fs module.

// ------------------------(Filename/ Encoding utf-8)
let text = fs.readFileSync("Files/dele.txt", "utf-8");

// This replace actually replace the word from the text variable which is declare here.
text = text.replace("Content", "Durgesh");
text = text.replace("u", "you are");
console.log("The Content of the file is ", text);

//To create a file and write on it this synchronous version.
fs.writeFileSync("Files/durgesh.txt", text);
