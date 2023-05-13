import { todoRepository } from "@ui/repository/todo";

interface TodoControllerParams {
  page?: number;
}

async function get({ page }: TodoControllerParams = {}) {
  return todoRepository.get({ page: page || 1, limit: 10 });
}

export const todoController = {
  get,
};
