const fs = require("fs");
const http = require("http");

const server = http.createServer();

// 1st WAY

// server.on("request", (req, res) => {
//   fs.readFile("./input.txt", (err, data) => {
//     if (err) return console.log(err);
//     res.end(data);
//   });
// });


//2nd WAY


server.on("request", (req, res) => {

  const rStream = fs.createReadStream("./input.txt");
  rStream.on("data", (chunkData) => {
    res.write(chunkData);
  });

  rStream.on("end", () => {
    res.end();
  });

  rStream.on("error", () => {
    console.log(err);
    res.end("File Not Found")
  });

});




// 3rd Way 

// Most effective & Efficient method to read any data from a file.
// This type of stream is called pipeStream.

server.on("request", (req, res) => {
  const rStream = fs.createReadStream("./input.txt");
  rStream.pipe(res);
});

server.listen(8000, "127.0.0.1");
