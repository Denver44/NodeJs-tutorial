const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const data = fs.readFileSync("./data/db.json", "utf-8");


const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.write("Hello, Please Go to /api route");
    res.end();
  } else if (req.url == "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end(`<h1>404 Not found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
