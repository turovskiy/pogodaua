import React from 'react'
import { useState } from "react"
import Search from '../search/search'
import CurrentWeather from '../current-weather/current-weather'
import Forecast from '../forecast/forecast'
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api";
import MadeWithLove from "../ui/Madewithlove";

function Main() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

      console.log(`searchData->${searchData}`)

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    console.log(`currentWeatherFetch->${currentWeatherFetch}`)

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    console.log(`forecastFetch->${forecastFetch}`)
    
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full h-full mx-auto">
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
          <MadeWithLove/>
    </div>
    </>

  );
}

export default Main;