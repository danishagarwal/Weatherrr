import React, { useState } from "react";
import Display from "./Display";

const Search = () => {
  const [text, setText] = useState(""); //Storing the searched value
  const [weather, setWeather] = useState(""); //Storing the fetched weather Data

  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  };

  async function handleClick(e) {
    const data = await fetch(
      `${api.base}weather?q=${text}&appid=${api.key}&units=metric`
    );
    const json = await data.json();
    setWeather(json);
    setText("");
    console.log(json);
  }

  const searchElement = (
    <div className="search-container">
      <input
        className="search-input"
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      ></input>
      <button className="search-button" onClick={() => handleClick()}>
        Search
      </button>
    </div>
  );

  return (
    <>
      <div className="container">
        <h2> React Weather Application </h2>
        <h3> Search City</h3>
        <div className="weather">
          {weather.cod === "404" ? (
            <>
              {searchElement}
              <div className="weather-message">
                <p>{weather.message}</p>
              </div>
            </>
          ) : (
            <>
              {searchElement}
              <h1>
                {weather?.name} {weather?.sys?.country}
              </h1>
              <Display weather={weather} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
