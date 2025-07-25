"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoroutes = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
exports.todoroutes = express_1.default.Router();
const todosDB = mongodb_1.client.db("todosDB2").collection("todos");
//Get all TODOS
exports.todoroutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todosDB.find().toArray();
        res.send(todos);
    }
    catch (error) {
        res.status(500).send({ message: "Error fetching todos", error });
    }
}));
//GET single Todo
exports.todoroutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const query = {
            _id: new mongodb_2.ObjectId(id),
        };
        const result = yield todosDB.findOne(query);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({ message: "Error fetching single data", error });
    }
}));
exports.todoroutes.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield todosDB.insertOne(data);
        res.send({
            message: "Todo created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({ message: "Error creating todo", error });
    }
}));
exports.todoroutes.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const query = {
            _id: new mongodb_2.ObjectId(id),
        };
        const result = yield todosDB.deleteOne(query);
        res.send({
            message: "Todo deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({ message: "Error creating todo", error });
    }
}));
exports.todoroutes.patch("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, description, priority, isCompleted } = req.body;
        const updatedTodo = {
            $set: {
                title: title,
                description: description,
                priority: priority,
                isCompleted: isCompleted,
            },
        };
        const filter = {
            _id: new mongodb_2.ObjectId(id),
        };
        const options = { upsert: true };
        const result = yield todosDB.updateOne(filter, updatedTodo, options);
        res.send({
            message: "Todo updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({ message: "Error creating todo", error });
    }
}));
