import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Particle_background from "./components/particle_background";
import RotatingBackground from "./components/RotatingBackground";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (<>
    <div className="backdrop">
      <h1 className="title">ToDo List</h1>
      <div className="todo">
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      </div>
    </div>
    <Particle_background></Particle_background>
  </>);
};

export default App;
