//  This my own Custom Backend
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// -----------------------------(Request,Response)
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./json_data.json", "utf-8");
  const objdata = JSON.parse(data);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // we have to setHeader to then in network we get our content type texthtml.
  if (req.url == "/") {
    // we can use write also but we have to use end() so writing two time it good to use .end()
    res.write("Hello form the Home Side");
    res.end();
  } else if (req.url == "/about") {
    res.write("Hello form the About us Side");

    res.end();
  } else if (req.url == "/contact") {
    res.write("Hello form the Contact Side");
    res.end();
  } else if (req.url == "/services") {
    res.write("Hello form the Service Side");
    res.end();
  } else if (req.url == "/userapi") {
    let details = `${objdata[0].last_name}   ${objdata[0].first_name} ${objdata[0].Age}  ${objdata[0].Height} ${objdata[0].Weight}   `;
    res.end(details);
  } else {
    res.statusCode = 404;

    res.end(`<h1>404 Not found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
