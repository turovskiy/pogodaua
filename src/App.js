import React from 'react';
import { useState } from "react";
import Irpin from "./components/search/irpin";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import MadeWithLove from "./components/ui/Madewithlove";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState("Irpin")
  const [forecast, setForecast] = useState("Irpin")

  const handleOnSearchChange = () => {
    // const currentWeatherFetch = fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=50.516667&lon=30.25&appid=${WEATHER_API_KEY}&units=metric`
    );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=50.516667&lon=30.25&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: data.label, ...weatherResponse });
        setForecast({ city: data.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full h-full mx-auto">
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
          <MadeWithLove/>

    </div>
    </>

  );
}

export default App;