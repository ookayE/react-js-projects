import { useState } from "react";
import "../Styles/TodoList.css";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodos(newTodoList);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((_, i) => i !== index);
    setTodos(newTodoList);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            {todo.text}
            <button
              onClick={() => handleToggleTodo(index)}
              className="toggle-button"
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
