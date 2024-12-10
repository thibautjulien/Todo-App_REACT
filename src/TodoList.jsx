import "./TodoList.css";
import PropTypes from "prop-types";

function TodoList({ todos, onToggleComplete }) {
   return (
      <div className="TodoApp__list">
         <p>Todo List</p>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  <label>
                     <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className="taskCheck" />
                     {todo.id} - {todo.text}
                  </label>
               </li>
            ))}
         </ul>
      </div>
   );
}

TodoList.propTypes = {
   todos: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
         completed: PropTypes.bool.isRequired,
      })
   ).isRequired,
   onToggleComplete: PropTypes.func.isRequired,
};

export default TodoList;
