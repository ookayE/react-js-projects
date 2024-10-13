"use client";

import { useState } from "react";

import { listOfQuotes } from "../../../utilities/quotes";

export default function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * listOfQuotes.length);

    setQuote(listOfQuotes[randomIndex]);
  };

  return (
    <div>
      <h1>Random Quotes Below</h1>

      <button
        type="button"
        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleGenerate}
      >
        Generate Quote
      </button>

      <p>{quote.text}</p>
      <p>{quote.author}</p>
    </div>
  );
}
