//  This my own Custom Backend
const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./Files/home.html");
const about = fs.readFileSync("./Files/about.html");
const conatct = fs.readFileSync("./Files/contact.html");
const service = fs.readFileSync("./Files/services.html");

const hostname = "127.0.0.1";
const port = 3000;

// -----------------------------(Request,Response)
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // we have to setHeader to then in network we get our content type texthtml.
  if (req.url == "/") {
    // we can use write also but we have to use end() so writing two time it good to use .end()
    res.write(home);
    res.end();
  } else if (req.url == "/about") {
    res.end(about);
  } else if (req.url == "/contact") {
    res.end(conatct);
  } else if (req.url == "/services") {
    res.end(service);
  } else {
    res.statusCode = 404;
    res.end(`<h1>404 Not found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
