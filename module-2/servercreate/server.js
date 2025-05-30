const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to server");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on port 5000");
});
