import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText.trim());
      setInputText("");
    }
  };

  return (
    <div className="no_back">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            toggleTodo={() => toggleTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
