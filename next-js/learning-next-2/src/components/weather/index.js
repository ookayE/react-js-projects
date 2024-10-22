"use client";

import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const handleWeatherSearch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Weather App</h1>

      <div className="flex flex-col space-y-4">
        <input
          className="border-2 p-2 rounded-md focus:outline-none focus:border-green-300"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter city..."
        />

        <button
          onClick={handleWeatherSearch}
          className="bg-green-500 text-white font-bold p-2 rounded-xl"
        >
          Get Weather
        </button>

        {weather && (
          <div>
            <h2>Weather in {weather.name}</h2>
            <p>{((weather.main.temp * 9) / 5 + 32).toFixed(2)}°F</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
