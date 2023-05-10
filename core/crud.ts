import fs from "fs"; // ES6
// const fs = require("fs"); - CommonJS
const DB_FILE_PATH = "./core/database";

console.log("[CRUD]");

interface Todo {
  date: string;
  content: string;
  done?: boolean;
}

function create(content: string) {
  const todo = {
    date: new Date().toISOString(),
    content: content,
    done: false,
  };

  const todos: Array<Todo> = [
    ...read(),
    todo, 
  ]

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
  }, null, 2));
  return content;
}

function read(): Array<Todo> {
  // ler o conteúdo do sistema
  const databaseString =  fs.readFileSync(DB_FILE_PATH, "utf-8");
  const database = JSON.parse(databaseString || "{}");

  if (!database.todos) {
    return [];
  }

  return database.todos;
}

function CLEAR_DATABASE() {
  fs.writeFileSync(DB_FILE_PATH, "");
}

// [SIMULATION]
CLEAR_DATABASE();
create("beber água");
create("ler livro");
console.log(read());
