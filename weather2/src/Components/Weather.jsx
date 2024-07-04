import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather(weatherResponse.data);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="city-input"
          placeholder="Enter city name..."
        />
        <button
          onClick={fetchWeather}
          className="fetch-button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
