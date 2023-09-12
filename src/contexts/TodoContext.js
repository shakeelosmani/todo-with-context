import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      todoId: "",
      todoName: "",
      todoCategory: "",
    },
  ],
  setTodos: () => {},
});

export function useTodoContext() {
  const todos = useContext(TodoContext);
  return todos;
}
