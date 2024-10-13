"use client";

import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const handleSearch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city.."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-pink-500 text-black-400 rounded-lg p-2 font-bold"
        onClick={handleSearch}
      >
        Get Weather
      </button>
    </div>
  );
}
