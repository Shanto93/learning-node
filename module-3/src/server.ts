// import app from "./app";
// import { client } from "./config/mongodb";

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

import app from "./app";
import { client } from "./config/mongodb";

let server;
const port = 5000;

const bootstrap = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

bootstrap();
