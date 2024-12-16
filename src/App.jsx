import { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import Form from "./Form.jsx";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.scss";

const LSKEY = "MyTodoApp";

function App() {
  function getInitialTodos() {
    const savedTodos = window.localStorage.getItem(LSKEY + ".todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  const [todos, setTodos] = useState(getInitialTodos);

  const addTodo = (text, priority) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      completed: false,
      priority: priority || "low",
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const allDeleteTodo = () => {
    const allDeletedTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(allDeletedTodos);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div id="TodoApp">
        <Form onAddTodo={addTodo} />
        <TodoList remainingTodos={remainingTodos} todos={todos} onToggleComplete={toggleComplete} onDeleteTodo={deleteTodo} onAllDeleteTodo={allDeleteTodo} />
      </div>
    </>
  );
}

export default App;
