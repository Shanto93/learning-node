"use strict";
// import app from "./app";
// import { client } from "./config/mongodb";
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
// let server;
// const port = 5000;
// const bootstrap = async () => {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     await client.close();
//   }
//   const server = app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// };
// bootstrap();
const app_1 = __importDefault(require("./app"));
const mongodb_1 = require("./config/mongodb");
let server;
const port = 5000;
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongodb_1.client.connect();
        yield mongodb_1.client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        server = app_1.default.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
});
bootstrap();
