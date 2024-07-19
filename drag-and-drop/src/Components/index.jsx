import { useEffect, useState } from "react";

function DragAndDropFeature() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const response = await fetch("http://dummyjson.com/todos?limit=5&skip=0");
      const result = await response.json();

      if (result && result.todos.length > 0) {
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "work in progress",
        }));
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  function renderTodos() {
    const todoListToRender = {
      workInProgressTodos: [],
      completedTodos: [],
    };
    todos.forEach((todoItem) => {
      if (todoItem.status === "work in progress") {
        todoListToRender.workInProgressTodos.push(
          <div
            onDragStart={(e) => onDragStart(e, todoItem.id)}
            draggable
            key={todoItem.id}
            className="todo-card"
          >
            {todoItem.todo}
          </div>
        );
      } else {
        todoListToRender.completedTodos.push(
          <div key={todoItem.id} className="todo-card">
            {todoItem.todo}
          </div>
        );
      }
    });
    return todoListToRender;
  }

  const todoLists = renderTodos();

  return (
    <div className="drag-and-drop-container">
      <h1>Drag and Drop</h1>
      <div className="drag-and-drop-board">
        <div className="work-in-progress">
          <h3>In Progress</h3>
          {renderTodos().workInProgressTodos}
        </div>
        <div className="completed-todos">
          <h3>Completed</h3>
          {renderTodos().completedTodos}
        </div>
      </div>
    </div>
  );
}

export default DragAndDropFeature;
