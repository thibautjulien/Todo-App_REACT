import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/Form.scss";

function Form({ onAddTodo }) {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTodo(input, priority);
      setInput("");
      setPriority("low");
    }
  };

  return (
    <>
      <div className="TodoApp__content">
        <h1>My Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" placeholder="Write a new todo" value={input} onChange={(e) => setInput(e.target.value)} />
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className={`priority-select ${priority}`}>
            <option value="low">🟢 Low Priority</option>
            <option value="medium">🟠 Medium Priority</option>
            <option value="high">🔴 High Priority</option>
          </select>
          <button className="buttonSubmit" type="submit">
            Add todo
          </button>
        </form>
      </div>
    </>
  );
}

/* Form.propTypes = {
   onAddTodo: PropTypes.func.isRequired,
}; */

export default Form;
