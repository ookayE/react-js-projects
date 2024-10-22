"use client";

import { useState, useRef } from "react";

export default function ReactionTimeGame() {
  const [message, setMessage] = useState("Click 'Start' to begin the game!");
  const [reactionTime, setReactionTime] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const timeoutRef = useRef(null); // Holds the timeout ID
  const startTimeRef = useRef(null); // Holds the time when the signal is given

  const handleStart = () => {
    setMessage("Wait for it...");
    setReactionTime(null);
    setIsWaiting(true);

    // Set a random delay (2 to 5 seconds) for the signal
    const randomDelay = Math.random() * 3000 + 2000;

    timeoutRef.current = setTimeout(() => {
      setMessage("CLICK!");
      setIsWaiting(false); // User can click now
      startTimeRef.current = Date.now(); // Record the time when the signal is given
    }, randomDelay);
  };

  const handleClick = () => {
    if (isWaiting) {
      clearTimeout(timeoutRef.current);
      setMessage("You clicked too soon.");
      setIsWaiting(false);
    } else if (startTimeRef.current) {
      const endTime = Date.now();
      const reaction = endTime - startTimeRef.current;
      setReactionTime(reaction);
      setMessage("Well done! Click 'Start' to play again.");

      const newScores = [...highScores, reaction]
        .sort((a, b) => a - b)
        .slice(0, 5);
      setHighScores(newScores);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Reaction Time Game</h1>
      <p>{message}</p>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Start
      </button>
      <button
        onClick={handleClick}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Click Here!
      </button>
      {reactionTime !== null && <p>Your reaction time: {reactionTime} ms</p>}

      <h2>High Scores:</h2>
      <ul>
        {highScores && highScores.length > 0 ? (
          highScores.map((scores) => <li>{scores}</li>)
        ) : (
          <p>Nothing yet</p>
        )}
      </ul>
    </div>
  );
}
