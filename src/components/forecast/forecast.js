import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const WEEK_DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label className="font-bold text-center text-gray-600 title">Погода на сьогодні :</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="p-6 mt-4 bg-white border-2 shadow-2xl rounded-2xl border-gray-50">
                  <div className="flex flex-row items-center space-x-4">
                  <img src={`icons/${item.weather[0].icon}.png`} className="w-20 h-20" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  {/* <label className="description">{item.weather[0].description}</label> */}
                  <label className="min-max">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="ml-6">
                <div className="">
                  <label className="font-bold">Атмосферний тиск : </label>
                  <label className="italic">{item.main.pressure}hPa</label>
                </div>
                <div className="">
                  <label className="font-bold">Відносна вологість :</label>
                  <label className="italic">{item.main.humidity}%</label>
                </div>
                <div className="">
                  <label className="font-bold">Хмарність : </label>
                  <label className="italic">{item.clouds.all}%</label>
                </div>
                <div className="">
                  <label className="font-bold">Швидкість вітру :</label>
                  <label className="italic">{item.wind.speed} м/сек</label>
                </div>
                <div className="">
                  <label className="font-bold">Висота над рівнем моря : </label>
                  <label className="italic">{item.main.sea_level}м</label>
                </div>
                <div className="">
                  <label className="font-bold">Відчуваєтьсмя як : </label>
                  <label className="italic">{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
