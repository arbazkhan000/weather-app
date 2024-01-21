import React from "react";
import { useWeather } from "./context/Weather";

const Input = () => {
  const weather = useWeather();
  console.log("weather", weather);
  return (
    <>
      <section>
        <div className="container">
          <input
            className="input-field"
            placeholder="Search here"
            value={weather.searchCity}
            onChange={(e) => weather.setSearchCity(e.target.value)}
          />
          <button onClick={weather.fetchData}>Search</button>
          <br />

          <div className="weather-desc">
            <img
              height={100}
              width={100}
              style={{ position: "relative", left: "38%","border":"none" }}
              src={weather.data?.current?.condition?.icon}
              alt=""
            />
            <h1 className="weather-temp">
              {weather.data?.current?.temp_c}. C
              <span className="weather-f">
                {weather.data?.current?.temp_f}. f
              </span>
            </h1>
            <br />
            <p className="weather-name">
              {weather.data?.location?.name},{weather.data?.location?.country}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Input;
