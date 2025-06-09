import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const pathname = path.join(__dirname, "../db/todo.json");

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todo");
});
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(pathname, "utf-8");
  res.json(data);
});
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const {title, body} = req.body;
  console.log(title, body);
  res.send("hi")
});

export default app;
