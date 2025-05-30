const http = require("http");

const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const data = fs.readFileSync(filePath, { encoding: "utf8" });

const server = http.createServer((req, res) => {
  if (req.url === "/todo" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
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
