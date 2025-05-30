const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/todo" && req.method === "GET") {
    res.end("ALL TODOs");
  } else if (req.url === "/todo/create-todos" && req.method === "POST") {
    res.end("TODO created");
  } else {
    res.end("Invalid request");
  }
});

server.on("error", (error) => {
  console.error("Server error:", error);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on port 5000");
});
