import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList));
  }, [todoList]);

  function toggleTodo(id, completed) {
    setTodoList((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodoList((todoItems) => {
      return [
        ...todoItems,
        { id: crypto.randomUUID(), item: title, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodoList((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
