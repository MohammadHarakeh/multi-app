import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./weather.css";

const api = {
  key: "cbf8fcf84e8dd5d943bd8fdf313f859f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [predicted, setPredicted] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const navigate = useNavigate();
  const backClick = () => {
    navigate("/");
  };

  const searchPressed = async () => {
    const response = await fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    const data = await response.json();
    setWeather(data);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
    console.log(data);
    predictedWeather();
  };

  const predictedWeather = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto&forecast_days=3`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setPredicted(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (lat !== "" && lon !== "") {
      predictedWeather();
    }
  }, [lat, lon]);

  return (
    <div className="weather-wrapper">
      <div className="weather-card-wrapper">
        <h1>Weather Forcast</h1>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search...."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>

          <button onClick={searchPressed}>Search</button>
        </div>

        {searchPressed && weather.name && (
          <p>
            <b>Country: </b>
            {weather.name}
          </p>
        )}

        {searchPressed && weather.main && (
          <p>
            <b>Current Temperature:</b> {weather.main.temp} °C
          </p>
        )}

        {searchPressed && weather.main && (
          <p>
            <b>Conditions:</b> {weather.weather[0].main}
          </p>
        )}
        {searchPressed && weather.main && weather.weather[0].description && (
          <p>
            <b>Description:</b> ({weather.weather[0].description})
          </p>
        )}

        {searchPressed && predicted.hourly && (
          <p>
            <b>Day 2 Forecast: </b> {predicted.hourly.temperature_2m[45]} °C
          </p>
        )}

        {searchPressed && predicted.hourly && (
          <p>
            <b>Day 3 Forecast: </b> {predicted.hourly.temperature_2m[68]} °C
          </p>
        )}

        <div className="search-wrapper back-btn">
          <button onClick={backClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Weather;
