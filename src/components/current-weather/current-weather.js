import React from "react";

const CurrentWeather = ({ data }) => {
  console.log(`CurrentWeather-data->${data}`)
  return (
    <div className="flex p-6 border-2 shadow-2xl weather top rounded-2xl border-gray-50 ">
      <div className="">
        <div className="">
          <p className="text-base font-bold text-center city ">{data.city}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="font-bold">Детальніше 👇</span>
          </div>
          <div className="parameter-row">
            <span className="font-bold">Відчувається як :</span>
            <span className="italic">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="font-bold">швидкість вітру :</span>
            <span className="italic">{data.wind.speed} м/сек</span>
          </div>
          <div className="parameter-row">
            <span className="font-bold">Вологість :</span>
            <span className="italic">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="font-bold">Атмосферний тиск :</span>
            <span className="italic">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
