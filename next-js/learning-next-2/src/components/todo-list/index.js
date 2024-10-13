"use client";

import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleLogTasks = () => {
    console.log(tasks);
  };

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTaskList);
  };

  return (
    <div>
      <h1>Pop up</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task Here.."
      />
      <button
        type="button"
        onClick={handleAddTask}
        className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add
      </button>
      <button
        type="button"
        onClick={handleLogTasks}
        className="rounded-full bg-purple-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Log Tasks
      </button>

      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((taskItem, index) => (
            <li key={index}>
              {taskItem}
              <button className="ml-10" onClick={() => handleDeleteTask(index)}>
                X
              </button>
            </li>
          ))
        ) : (
          <h2>No tasks to show here.</h2>
        )}
      </ul>
    </div>
  );
}
