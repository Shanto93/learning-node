let fs = require("fs");

const readstream = fs.createReadStream("./file-read.txt", { encoding: "utf8" });
const writestream = fs.createWriteStream("./hello.txt", { encoding: "utf8" });

readstream.on("data", (chunk) => {
  console.log(chunk);
  writestream.write(chunk, (err) => {
    if (err) {
      console.error("Error writing chunk:", err);
    }
  });
});

readstream.on("end", () => {
  console.log("Reading completed.");
  writestream.end();
});

writestream.on("finish", () => {
  console.log("Writing completed.");
});