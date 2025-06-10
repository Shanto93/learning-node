import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://todosDB2:1e7d5khORRIxfyvU@cluster0.tuf9wrv.mongodb.net/todosDB2?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
