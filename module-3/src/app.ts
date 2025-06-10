import express, { Application, Request, Response } from "express";
import { todoroutes } from "./app/todos/todos.route";

const app: Application = express();

app.use(express.json());
app.use("/todos", todoroutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todo");
});

export default app;
