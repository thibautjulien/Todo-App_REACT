import { useState } from "react";
import "./App.css";

function App() {
  const initialTodos = [
    { id: 1, text: "My first todo", completed: false },
    { id: 2, text: "Patato", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <>
      <div className="TodoApp">
        <h1>My Todo App</h1>
        <div className="TodoApp__content">
          <input type="text" id="TodoName" name="TodoTask" placeholder="Write your task" />
          <input type="submit" id="TodoSend" value="Send" />
        </div>
        <div className="TodoApp__list">
          <p>Todo List</p>
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toggleComplete(todo.id)} className="taskCheck" />
                  {todo.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
