import { useState } from "react";
import TodoList from "./TodoList.jsx";
import Form from "./Form.jsx";

function App() {
   const [todos, setTodos] = useState([
      { id: 1, text: "My first todo", completed: false },
      { id: 2, text: "Patato", completed: false },
      { id: 3, text: "Faire les courses", completed: false },
   ]);

   const addTodo = (text) => {
      const newTodo = {
         id: todos.length + 1,
         text: text,
         completed: false,
      };
      setTodos([...todos, newTodo]);
   };

   const toggleComplete = (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
   };

   return (
      <>
         <Form onAddTodo={addTodo} />
         <TodoList todos={todos} onToggleComplete={toggleComplete} />
      </>
   );
}

export default App;
