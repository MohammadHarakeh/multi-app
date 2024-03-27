import React, { useState } from "react";

const api = {
  key: "cbf8fcf84e8dd5d943bd8fdf313f859f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((result) => result.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };
  return (
    <div>
      <div>
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Search...."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>

          <button onClick={searchPressed}>Search</button>
        </div>

        <p>{weather.name}</p>

        {weather.main && <p>{weather.main.temp}°C</p>}

        <p>Sunny</p>
      </div>
    </div>
  );
}

export default Weather;
