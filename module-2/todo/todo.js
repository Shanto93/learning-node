const http = require("http");
const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "./db/todo.json");
const data = fs.readFileSync(filePath, { encoding: "utf8" });

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  // GET all TODO
  if (req.url === "/todo" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
  //   POST TODO
  else if (req.url === "/todo/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const createdAt = new Date().toISOString();
      const todo = { title, body, createdAt };
      const allTodos = fs.readFileSync(filePath, { encoding: "utf8" });
      const parsedTodos = JSON.parse(allTodos);
      parsedTodos.push(todo);
      fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), {
        encoding: "utf8",
      });
      res.end(JSON.stringify(todo, null, 2));
    });
  }
  //   GET single TODO
  else if (req.url.startsWith("/todo") && req.method === "GET") {
    const title = url.searchParams.get("title");
    const todos = fs.readFileSync(filePath, { encoding: "utf8" });
    const parsedTodos = JSON.parse(todos);
    const todo = parsedTodos.find((todo) => todo.title === title);
    if (!todo) {
      res.writeHead(404, {
        "content-type": "application/json",
      });
      return res.end(JSON.stringify({ error: "TODO not found" }));
    }

    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });
    res.end(JSON.stringify(todo, null, 2));
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
