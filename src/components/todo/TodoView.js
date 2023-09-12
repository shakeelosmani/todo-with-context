import { TodoContext, useTodoContext } from "../../contexts/TodoContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TodoView = () => {
  const { todos } = useTodoContext(TodoContext);

  return (
    <Tabs>
      <TabList>
        <Tab>Personal</Tab>
        <Tab>Work</Tab>
      </TabList>
      <TabPanel>
        <h5>Personal Todos:</h5>
        <ol>
          {todos
            .filter((todo) => todo.todoCategory == "per")
            .map((perTodo, i) => {
              return <li key={i}> {perTodo.todoName}</li>;
            })}
        </ol>
      </TabPanel>
      <TabPanel>
        <h5>Work Todos:</h5>
        <ol>
          {todos
            .filter((todo) => todo.todoCategory == "work")
            .map((perTodo, i) => {
              return <li key={i}> {perTodo.todoName}</li>;
            })}
        </ol>
      </TabPanel>
    </Tabs>
  );
};

export default TodoView;
