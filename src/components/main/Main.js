import React from 'react'
import { useState } from "react"
import Search from '../search/search'
import CurrentWeather from '../current-weather/current-weather'
import Forecast from '../forecast/forecast'
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api"
import MadeWithLove from "../ui/Madewithlove"

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
    

       
   
    <div class="flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:py-12">
                <div class="relative py-3 sm:mx-auto sm:max-w-xl">
                    <div class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-green-200 to-blue-300 shadow-lg sm:-rotate-3 sm:skew-y-0 sm:rounded-3xl">
                    
                    <div class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-green-300 to-[#B1FFF3] shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
                    
                    </div>

                    <div class="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="mx-auto max-w-md">
                            <div>
                            <Search onSearchChange={handleOnSearchChange} />
                            {currentWeather && <CurrentWeather data={currentWeather} />}
                            {forecast && <Forecast data={forecast} />}
          
                            </div>
                            <MadeWithLove/>
                        </div>
                    </div>

                </div>
            </div>
    </>

  );
}

export default Main;