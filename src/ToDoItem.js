import React from "react";

const ToDoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      {todo.text}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default ToDoItem;
