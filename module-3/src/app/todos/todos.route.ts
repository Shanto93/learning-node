import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todoroutes = express.Router();

const todosDB = client.db("todosDB2").collection("todos");

//Get all TODOS
todoroutes.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await todosDB.find().toArray();
    res.send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error fetching todos", error });
  }
});

//GET single Todo
todoroutes.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const query = {
      _id: new ObjectId(id),
    };
    const result = await todosDB.findOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching single data", error });
  }
});

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
