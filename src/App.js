import { useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import { useWeather } from "./components/context/Weather";

function App() {
  const weather = useWeather();

  useEffect(() => {
    //get current location
    weather.currentUserLocation();
  });
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
