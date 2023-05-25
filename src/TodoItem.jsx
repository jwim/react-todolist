export function TodoItem({ completed, id, item, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {item}
      </label>
      <button className="btn btn-btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
