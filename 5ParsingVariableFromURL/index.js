const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

// -----------------------------(Request,Response)
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const { query, pathname } = url.parse(req.url, true);
  console.log("query ", query);

  if (req.url == "/") {
    res.end('<h1>Home</h1>');
  } else if (req.url == "/product" || pathname === '/product') {
    if (query.id) {
      res.end(`<h1>Product Your query is ${query.id} </h1>`);
    } else {
      res.end(`<h1>Product</h1>`);
    }
  } else {
    res.writeHead(404)
    res.end(`<h1>404 Not found</h1>`);
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

