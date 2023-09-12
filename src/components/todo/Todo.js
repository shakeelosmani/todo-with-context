import { useState } from "react";
import { useCategoryContext } from "../../contexts/CategoryContext";
import { TodoContext, useTodoContext } from "../../contexts/TodoContext";
import ShortUniqueId from "short-unique-id";

const Todo = () => {
  const category = useCategoryContext();

  const [newTodo, setNewTodo] = useState("");

  const todoContext = useTodoContext(TodoContext);

  const { randomUUID } = new ShortUniqueId({ length: 10 });

  const saveTodo = (e) => {
    e.preventDefault();
    if (!category.length) {
      alert("Please select a category");
      return;
    }
    todoContext.setTodos([
      ...todoContext.todos,
      { todoId: randomUUID(), todoName: newTodo, todoCategory: category },
    ]);
    setNewTodo("");
  };

  return (
    <>
      <form className="actionForm" onSubmit={(e) => e.preventDefault()}>
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
