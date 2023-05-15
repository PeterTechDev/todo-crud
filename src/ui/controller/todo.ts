async function get() {
  return fetch("api/todos").then(async (ServerResponse) => {
    const todosString = await ServerResponse.text();
    const todosFromServer = JSON.parse(todosString).todos;
    return todosFromServer;
  });
}

export const todoController = {
  get,
};
