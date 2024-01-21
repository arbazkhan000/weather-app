import { createContext, useContext, useState } from "react";
import { getdataCity, getdatalocation } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState([]);

  const fetchData = async () => {
    const response = await getdataCity(searchCity);
    setData(response);
  };

  const currentUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getdatalocation(position.coords.latitude, position.coords.longitude).then(
        (data) => setData(data)
      );
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        currentUserLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
