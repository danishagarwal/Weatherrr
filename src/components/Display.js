import React from "react";

const Display = ({ weather }) => {
  return (
    <>
      {weather && (
        <div className="display-container">
          {/* Display the relevant weather information here */}
          <h1>
            {weather?.name} {weather?.sys?.country}
          </h1>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Description: {weather.weather[0].main}</p>
          <p>Feels like: {weather.main.feels_like} °C</p>
          <p>Humidity: {weather.main.humidity}</p>

          {/* Add more weather details as needed */}
        </div>
      )}
    </>
  );
};

export default Display;
