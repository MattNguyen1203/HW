import { createContext } from "react";
const TodoContext = createContext({
  todoList: [],
  setTodoList: () => {},
});

export default TodoContext;
