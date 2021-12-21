const fs = require("fs");
// Asynchronous or non-blocking or in simple words line by line execution not guaranteed here Callbacks will fire as background process complete.

const filePath = "document/textFile.txt";
const dirName = "document";



//1. Creating a new file 


const textToWrite = "First tutorial for NodeJs and learning about file system."

fs.writeFile(filePath, textToWrite, () => {
  console.log("Done Writing in file");
}
);


//2. Appending data into a File


fs.appendFile(filePath, "Append done 2", (err) => {
  console.log("Data Appended in file");
});


//3. Reading a file 


fs.readFile(filePath, "utf-8", (err, data) => {
  console.log(data);
});




// 4. Rename a  File

fs.rename("1tut.txt", "1readwrite.txt", () => {
  console.log("filename changed");
});




// 5. To Delete a file 

fs.unlink(filePath, () => {
  console.log("filename Unlink");
});



// 6. To delete a Whole Directory

fs.rmdir(dirName, () => {
  console.log("folder deleted Unlink");
});


// Async way or non-Blocking code
// This example shows us that steps that depend on previous step and using callback we have executed this.

fs.readFile('../txt/start.txt', "utf-8", (err, data1) => {
  fs.readFile(`../txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(`\n1. I am ${data1}.txt response ${data2}\n`);
    fs.readFile('../txt/append.txt', 'utf-8', (err, data3) => {
      console.log(`2. I am append.txt response ${data3}\n`);
      fs.writeFile('../txt/final.txt', `1. ${data2}\n\n2. ${data3}`, err => {
        console.log("3. Your file has been written Successfully ✅");
      })
    })
  })

})