import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherData from "./components/WeatherData";

function App() {
  const [counter, setCounter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("akash");
  // const counter = 0 ;
  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  const cleared = () => {
    setSearchQuery("");
    console.log(searchQuery);
  };



  



  return (
    <>
      
      <WeatherData/>
    </>
  );
}

export default App;
