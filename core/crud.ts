import fs from "fs"; // ES6
// const fs = require("fs"); - CommonJS
const DB_FILE_PATH = "./core/database";

console.log("[CRUD]");

function create(content: string) {
  const todo = {
    date: new Date().toISOString(),
    content: content,
  };

  console.log(todo);

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(todo));
  return content;
}

function read() {
  // ler o conteúdo do sistema
  return fs.readFileSync(DB_FILE_PATH, "utf-8");
}

// [SIMULATION]
create("Hello World");
console.log(read());
