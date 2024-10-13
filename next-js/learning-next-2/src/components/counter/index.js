"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleSubtractCount = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div className="flex space-x-2">
        <button
          type="button"
          className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubtractCount}
        >
          -
        </button>

        <h1>{count}</h1>

        <button
          type="button"
          className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleAddCount}
        >
          +
        </button>
      </div>
      <button
        className="rounded-full bg-red-600 p-1.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
