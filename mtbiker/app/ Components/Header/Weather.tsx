import React from "react";
import { WeatherDataProps } from "../../types";

export const Weather = ({ weatherData }: { weatherData: WeatherDataProps }) => {
  return (
    <div>
      {weatherData ? (
        <div
          {...{
            className:
              "w-full, h-[200px] mt-5 bg-gray-200 rounded-xl flex flex-col",
          }}
        >
          <div {...{ className: "flex justify-between w-full h-3/5" }}>
            <div
              {...{
                className: "flex justify-start flex-col w-3/5 h-2/5 mt-5 px-5",
              }}
            >
              <p {...{ className: "text-lg font-bold font-mono" }}>
                {weatherData.name}, {weatherData.sys?.country}
              </p>
              <p {...{ className: "text-sm font-bold font-mono" }}>
                {weatherData.weather?.[0].description}
              </p>
            </div>
            <div
              {...{
                className: "flex justify-end w-1/5 h-1/5 ",
              }}
            >
              <img
                {...{
                  src: `http://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`,
                  alt: "weather img",
                  className: "h-[100px] w-[100px]",
                }}
              ></img>
            </div>
          </div>
          <div {...{ className: "flex justify-between w-full h-2/5" }}>
            <div {...{ className: "mt-5 px-5 w-2/5" }}>
              <p {...{ className: "text-5xl font-bold- font-mono" }}>
                {weatherData.main?.temp.toFixed()}°C
              </p>
            </div>
            <div {...{ className: "flex justify-end w-2/5 " }}>
              <div
                {...{
                  className: "mr-5 text-sm flex-col mt-3 w-full ",
                }}
              >
                <div {...{ className: "flex justify-between " }}>
                  <p>Pocitová teplota:</p>
                  <p {...{ className: "font-bold" }}>
                    {weatherData.main?.feels_like.toFixed()} °C
                  </p>
                </div>
                <div {...{ className: "flex justify-between" }}>
                  <p>Vlhkosť:</p>
                  <p {...{ className: "font-bold" }}>
                    {weatherData.main?.humidity} %
                  </p>
                </div>
                <div {...{ className: "flex justify-between" }}>
                  <p>Rýchlosť vetra:</p>
                  <p {...{ className: "font-bold" }}>
                    {weatherData.wind?.speed.toFixed()} m/s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
