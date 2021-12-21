const http = require("http"); // "http" is module which helps us to create our own server as it listen to our request.


const HOST_IP = "127.0.0.1"; // Localhost IP
const PORT = 3000; // This port on which this will run 3000 is default for nodejs we can use 8000 also.

const HTMLContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Http Module Tutorial</title>
</head>
<body>
<h1>Hello Denver 👍</h1>
</body>
</html>
`

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(HTMLContent);
});

server.listen(PORT, HOST_IP, () => console.log(`Server running at http://${HOST_IP}:${PORT}`));

