const express = require("express"); // first we have to to get the express module to use express module feature

const app = express(); // now all the function of the express class are now in app so we can use app to create server and listen request

// in place of res.end we now write res.send in express.

// app.method(Route,CallbackFun(request,response))
// The callback function has 2 params, request(req)  and response(res).
// The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, and http headers ,etc.
//Similarly the response object represents the http response that the Express app sends when it receives an Http request.

app.get("/", (req, res) => {
  res.send("Hello Boss ");
});

app.get("/about", (req, res) => {
  res.send("About us Page ");
});

app.get("/contact", (req, res) => {
  res.send("Contact us Page  ");
});

app.listen(8000, () => {
  console.log("listening the port at 8000");
});

//Theory
// get - read
// post - create
// put - update
// delete - delete
