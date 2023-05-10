import { log } from "console";
import fs from "fs"; // ES6
import { v4 as uuidv } from 'uuid';
// const fs = require("fs"); - CommonJS
const DB_FILE_PATH = "./core/database";

console.log("[CRUD]");

interface Todo {
  id: string;
  date: string;
  content: string;
  done?: boolean;
}

function create(content: string) {
  const todo = {
    id: uuidv(),
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

function update(id: string, partialTodo: Partial<Todo>): Todo {
  let updatedTodo;

  const todos = read();
  todos.forEach((currentTodo) => {
    const isUpdate = currentTodo.id === id;
    if (isUpdate) {
      updatedTodo = Object.assign(currentTodo, partialTodo);
    }
  });
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
  }, null, 2));

  if (!updatedTodo) {
    throw new Error("Todo not found");
  }

  return updatedTodo;
}

function CLEAR_DATABASE() {
  fs.writeFileSync(DB_FILE_PATH, "");
}

// [SIMULATION]
CLEAR_DATABASE();
create("beber água");
create("ler livro");
const thirdTodo = create("comer bolo");
console.log(thirdTodo.);

update(thirdTodo.id, {
  content: "comer bolo de chocolate",
  done: true,
});
console.log(read());
