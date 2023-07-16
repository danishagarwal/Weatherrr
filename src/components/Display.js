import React from "react";

const Display = ({ weather }) => {
  return (
    <>
      {weather && (
        <div>
          {/* Display the relevant weather information here */}
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Description: {weather.weather[0].description}</p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </>
  );
};

export default Display;
