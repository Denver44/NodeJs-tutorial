const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./src/public/home.html");
const about = fs.readFileSync("./src/public/about.html");
const contact = fs.readFileSync("./src/public/contact.html");
const service = fs.readFileSync("./src/public/services.html");

const hostname = "127.0.0.1";
const port = 3000;

// -----------------------------(Request,Response)
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html"); 
  // we have to setHeader so then in network we get our content type text/html now we set have set Header text/html so browser is waiting for html content.
  // We always have to pass header first before sending a response.
  // We can also passed ou own made-up header so this way we can set metadata for our response .
  if (req.url == "/") {
    // we can use write also but we have to use end() so writing two time it good to use .end()
    res.write(home);
    res.end();
  } else if (req.url == "/about") {
    res.end(about);
  } else if (req.url == "/contact") {
    res.end(contact);
  } else if (req.url == "/services") {
    res.end(service);
  } else {
    res.writeHead(404)
    // res.statusCode = 404;
    res.end(`<h1>404 Not found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// HTTP Header :- Is basically a piece of information about the response which we are sending about.