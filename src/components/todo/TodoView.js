import { TodoContext, useTodoContext } from "../../contexts/TodoContext";

const TodoView = () => {
  const { todos } = useTodoContext(TodoContext);
  return <ol>{JSON.stringify(todos, "", 2)}</ol>;
};

export default TodoView;
