import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Atlanta" />
      <footer>
        This project was coded by: Anntoinette Sweeting and is{" "} 
        <a
          href="https://github.com/mzsweeting/react-forecast-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on github
        </a>
      </footer>
     </div>
    </div>
 );
}

