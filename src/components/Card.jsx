import React from "react";
import { useWeather } from "./context/Weather";

export const Card = () => {
  const weather = useWeather(); // Added parentheses to call the useWeather hook
  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} alt="Weather Icon" />
      <h2>{weather?.data?.current?.temp_c}°C</h2>
      <br />
      <h3>
        {weather?.data?.location?.name}, {weather?.data?.location?.region} ,
        {weather?.data?.location?.country}
      </h3>
    </div>
  );
};
