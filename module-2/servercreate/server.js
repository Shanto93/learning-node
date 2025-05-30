const http = require("http");
const data = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build a REST API", completed: false },
];

const server = http.createServer((req, res) => {
  if (req.url === "/todo" && req.method === "GET") {
    res.writeHead(201, {
      "content-type": "application/json",
      email: "shanto@gmail.com",
    });
    res.end(JSON.stringify(data));

    // res.setHeader("Content-Type", "application/json");
    // res.statusCode = 202;
    // res.setHeader("email", "default@gmail.com");
    // res.end(JSON.stringify(data));
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
