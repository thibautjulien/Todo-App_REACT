import { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form({ onAddTodo }) {
   const [input, setInput] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      if (input.trim()) {
         onAddTodo(input);
         setInput("");
      }
   };


   return (
      <>
         <div className="TodoApp__content">
            <h1>My Todo App</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" name="todo" placeholder="Write a new todo" value={input} onChange={(e) => setInput(e.target.value)} />
               <button type="submit">Add todo</button>
            </form>
         </div>
      </>
   );
}

Form.propTypes = {
   onAddTodo: PropTypes.func.isRequired,
};

export default Form;
