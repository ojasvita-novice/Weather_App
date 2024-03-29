import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css"

const week_days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayinaWeek = new Date().getDay();
  const forecastDay = week_days
    .slice(dayinaWeek, week_days.length)
    .concat(week_days.slice(0, dayinaWeek));

  // console.log(forecastDay);..........

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded >
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <>
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        src={`icons/${item.weather[0].icon}.png`}
                        className="icon-small"
                        alt="weather"
                      />
                      <label className="day">{forecastDay[idx]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        Min Temp:{item.main.temp_min}°C/Max Temp:
                        {item.main.temp_max}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Wind speed</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Sea Level:</label>
                      <label>{item.main.sea_level} m</label>
                    </div>
                    <div className="daily-details-grid-item">
                      <label>Feels like:</label>
                      <label>{item.main.feels_like}°C</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </>
          );
         
        })}
        
      </Accordion>
    </>
  );
};

export default Forecast;
