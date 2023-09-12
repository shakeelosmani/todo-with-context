import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";
import { CategoryContext } from "./contexts/CategoryContext";
import { TodoContext } from "./contexts/TodoContext";
import TodoView from "./components/todo/TodoView";

function App() {
  const [category, setCategory] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <CategoryContext.Provider value={category}>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <div className="main">
            <div className="leftSide">
              <div className="leftWrapper">
                <h5>Select a Category</h5>
                <form onSubmit={(e) => e.preventDefault()}>
                  <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select</option>
                    <option value="per">Personal</option>
                    <option value="work">Work</option>
                  </select>
                </form>
                <h5>Current category: {category}</h5>
                <Todo />
              </div>
            </div>
            <div className="rightSide">
              <TodoView />
            </div>
          </div>
        </TodoContext.Provider>
      </CategoryContext.Provider>
    </>
  );
}

export default App;
