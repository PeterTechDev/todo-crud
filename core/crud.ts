const { log } = require("console");
const fs = require("fs");
const DB_FILE_PATH = "./core/database";

console.log("[CRUDzeira]");

function create(content: string) {
  //save content to the database
  fs.writeFileSync(DB_FILE_PATH, content);

  return content;
}

// Simulate creation
console.log(create("tmj junto papai"));