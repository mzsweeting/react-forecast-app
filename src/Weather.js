import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..." 
                className="form-control"
               />
             </div>
             <div className="col-3">
               <input 
               type="submit" 
               value="Search" 
               className="btn btn-primary w-100"
             />
            </div>
           </div>
          </form>
            <h1>Atlanta</h1>
            <ul>
                <li>Saturday 12:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="Cloudy"
                  />
                  9°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 93%</li>
                        <li>Wind 3 mph</li>
                    </ul>
                </div>
               </div>
              </div>   
    );
}