import { TodoItem } from "./TodoItem";

export function TodoList({ todoList, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todoList.length === 0 && "No Todos"}
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
