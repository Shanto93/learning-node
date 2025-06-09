"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const pathname = path_1.default.join(__dirname, "../db/todo.json");
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Todo");
});
app.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(pathname, "utf-8");
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("hi");
});
exports.default = app;
