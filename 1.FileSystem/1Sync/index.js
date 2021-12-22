const fs = require("fs"); // For reading and writing data in file we need Fs module.
// Synchronous or Blocking
// A synchronous code is also known as Blocking code, as a certain code can be executed only if one before is finished or in a simple words line by line execution of synchronous.

const filePath = "document/textFile.txt";





//1. Creating a new file 

// To write a data in a file sync way fs.writeFileSync("filename",'data');

const textToWrite = "First tutorial for NodeJs and learning about file system."
fs.writeFileSync(filePath, textToWrite);





// 2. Reading a File

// Method-1 Here we will get a Buffer data as we have not decrypted the encoding.
//  We convert the buffer data to string by using toString()

const encodedMessage = fs.readFileSync(filePath);
console.log(encodedMessage.toString());

// Method-2 Here we will get a text as we have decrypted the text and use UTF-8 for decoding

const decodedMessage = fs.readFileSync(filePath, "utf-8");
console.log(decodedMessage);





// 3. Appending data into a File

// append data in existing  file sync way fs.appendFileSync("filename",'data');

fs.appendFileSync(filePath, "Append done 2");




// 4. Rename a  File

//  To rename the existing file name with new filename.

fs.renameSync("1tut.txt", "1readwrite.txt")






// 5. To Delete a file 

fs.unlinkSync("Tutorial/1tut.txt");


// 6. To delete a Whole Directory

fs.rmdirSync("challenge");


