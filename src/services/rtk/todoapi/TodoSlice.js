import { api } from "../api.ts";
import addTodo from "./addTodo.js";
import deleteTodo from "./deleteTodo.js";
import updateTodo from "./updateTodo.js";
import getAllTodo from "./getAllTodo.js";

export const TodoSlice = api.injectEndpoints({
  endpoints: (build) => ({
    addTodo: addTodo(build),
    getAllTodo: getAllTodo(build),
    deleteSingleTodo: deleteTodo(build),
    updateSingleTodo: updateTodo(build),
  }),
  overrideExisting: true,
});

export const {
  useAddTodoMutation,
  useGetAllTodoQuery,
  useUpdateSingleTodoMutation,
  useDeleteSingleTodoMutation,
} = TodoSlice;
