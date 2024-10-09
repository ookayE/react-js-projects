"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const updatedList = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedList);
  };

  return (
    <div>
      <h1>todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Type task here.."
      />
      <button
        type="button"
        className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleAddTask}
      >
        Add Text
      </button>

      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((taskItem, index) => (
            <li key={index}>
              {taskItem}
              <button
                type="button"
                className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <h2>Nothing to see here</h2>
        )}
      </ul>
    </div>
  );
}
