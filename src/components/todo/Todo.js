import { useState } from "react";
import { useCategoryContext } from "../../contexts/CategoryContext";
import { TodoContext, useTodoContext } from "../../contexts/TodoContext";

const Todo = () => {
  const category = useCategoryContext();

  const [newTodo, setNewTodo] = useState("");

  const todoContext = useTodoContext(TodoContext);

  const saveTodo = (e) => {
    e.preventDefault();
    if (!category.length) {
      alert("Please select a category");
      return;
    }
    todoContext.setTodos([
      ...todoContext.todos,
      { todoName: newTodo, todoCategory: category },
    ]);
    setNewTodo("");
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={newTodo}
          placeholder="Enter a Todo"
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button type="submit" onClick={(e) => saveTodo(e)}>
          Save
        </button>
      </form>
    </>
  );
};

export default Todo;
