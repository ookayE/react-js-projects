"use client";
import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const internalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      internalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(internalRef.current);
    }
  };

  const handleReset = () => {
    clearInterval(internalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Stopwatch</h1>
      <div className="text-3xl">{formatTime(time)}</div>
      <div className="space-x-4">
        <button
          onClick={handleStart}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-xl"
        >
          Start
        </button>
        <button
          onClick={isRunning ? handleStop : handleReset}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl"
        >
          {isRunning ? "Stop" : "Reset"}
        </button>
      </div>
    </div>
  );
}
