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
exports.todoroutes = express_1.default.Router();
const todosDB = mongodb_1.client.db("todosDB2").collection("todos");
// todoroutes.get("/", async (req: Request, res: Response) => {
//   try {
//     const todos = await todosDB.find().toArray();
//     res.send(todos);
//   } catch (error) {
//     res.status(500).send({ message: "Error fetching todos", error });
//   }
// });
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
