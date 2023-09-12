import { TodoContext, useTodoContext } from "../../contexts/TodoContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TodoView = () => {
  const { todos } = useTodoContext(TodoContext);

  const todoCatMaker = (todos, cat) => {
    return todos
      .filter((todo) => todo.todoCategory == cat)
      .map((perTodo, i) => {
        return <li key={i}> {perTodo.todoName}</li>;
      });
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Personal</Tab>
        <Tab>Work</Tab>
      </TabList>
      <TabPanel>
        <h5>Personal Todos:</h5>
        <ol>{todoCatMaker(todos, "per")}</ol>
      </TabPanel>
      <TabPanel>
        <h5>Work Todos:</h5>
        <ol>{todoCatMaker(todos, "work")}</ol>
      </TabPanel>
    </Tabs>
  );
};

export default TodoView;
