import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";

export const todoroutes = express.Router();

const todosDB = client.db("todosDB2").collection("todos");

// todoroutes.get("/", async (req: Request, res: Response) => {
//   try {
//     const todos = await todosDB.find().toArray();
//     res.send(todos);
//   } catch (error) {
//     res.status(500).send({ message: "Error fetching todos", error });
//   }
// });

todoroutes.post("/create-todo", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await todosDB.insertOne(data);
    res.send({
      message: "Todo created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({ message: "Error creating todo", error });
  }
});
