import { NextApiRequest, NextApiResponse } from "next";
import { read } from "@database-crud-todo";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // eslint-disable-next-line no-console
  console.log(request.method);
  if (request.method === "GET") {
    const ALL_TODOS = read();
    response.status(200).json({
      todos: ALL_TODOS,
    });
    return; // return is used to stop the execution of the function
  }

  response.status(405).json({
    message: "Method not allowed",
  });
}
