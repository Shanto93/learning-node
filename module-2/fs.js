const fs = require("fs");

// const data = fs.readFile(`./file-read.txt`, "utf8", (err, data) => {
//   if (err) {
//     console.log("Error reading file: ", err);
//   }
//   console.log(data);
// });

const text = "Learning Node.js is fun!";
fs.writeFileSync('./file-read.txt', text);

const data = fs.readFileSync("./file-read.txt", {
  encoding: "utf8",
  flag: "r",
});
console.log(data);

// const fs = require('fs');

// const data = fs.readFileSync('./file-read.txt', 'utf8');
// console.log(data);
