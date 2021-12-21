// This is the http module which helps us to create our won server
// It also helps us to listen our requst.
const http = require("http"); // "http" is module.
const hostname = "127.0.0.1"; // Localhost IP
const port = 3000; // This port on which this will run.
// 3000 is default for nodejs we can use 8000 also.

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Http Module Tutorial</title>
            </head>
            <body>

            <h1>Hello Durgesh 👍</h1>
            </body>
            </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});


//------------------------
//------------------- Serving Html file using Node js


const http = require("http")
// http moudle :- which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const fs = require("fs")
// fs moudle :- The Node.js file system module allows you to work with the file system on your computer.

const filecontent = fs.readFileSync('Files/home.html')

//1. req is request
//2. res is response
//3.  200 status code
//4.  80 port
//5. 127.0.0.1 localhost url
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-tye': 'text/html'
    });
    res.end(filecontent)
})

// This Below line help us to run our server at 127.0.0.1 at port 80
server.listen(80, '127.0.0.1', () => {
    console.log(`Listening on port 80 http://127.0.0.1`)
})
// If we write any other like 8000 then we to write 127.0.0.1:8000 to get the page .