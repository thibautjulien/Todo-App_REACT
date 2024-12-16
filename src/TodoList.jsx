import "./styles/TodoList.scss";
import PropTypes from "prop-types";

function TodoList({ remainingTodos, todos, onToggleComplete, onDeleteTodo, onAllDeleteTodo }) {
  return (
    <div className="TodoApp__list">
      <p>
        Todo List ― <span id="remainingTodos">{remainingTodos === 0 ? "No task" : `${remainingTodos} task${remainingTodos <= 1 ? "" : "s"} left`}</span>
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className="taskCheck" />
              <span className={`priority ${todo.priority}`}>{todo.priority}</span> - {todo.text}
            </label>
            <button className={`buttonDelete ${!todo.completed ? "hidden" : ""}`} disabled={!todo.completed} onClick={() => onDeleteTodo(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => onAllDeleteTodo()}>Clear Completed</button>
    </div>
  );
}

/* TodoList.propTypes = {
   todos: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
         completed: PropTypes.bool.isRequired,
      })
   ).isRequired,
   onToggleComplete: PropTypes.func.isRequired,
}; */

export default TodoList;
