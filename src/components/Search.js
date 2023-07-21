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

  const getBackgroundImage = () => {
    if (weather && weather.weather[0].main === "Clouds") {
      return "url('https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=612x612&w=0&k=20&c=bqPHaI4d3ghIbLIwtbTDPxV8QQ2pIN2mbCfzLb7gucQ=')"; // Replace with the URL of the hot background image
    } else if (weather && weather.weather[0].main === "Rain") {
      return "url('https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.jpg?s=612x612&w=0&k=20&c=lH73ofHt2WKtJhatw8H53DN4EfgV4ZKDEGPqO4xOPho=')"; // Replace with the URL of the cold background image
    } else if (weather && weather.weather[0].main === "Clear") {
      return "url('https://img.freepik.com/premium-photo/beautiful-airatmosphere-bright-blue-sky-background-abstract-clear-texture-with-white-clouds_29332-3832.jpg')";
    } else {
      return "url('default-background-image.jpg')"; // Replace with the URL of the default background image
    }
  };

  // Define the inline style for the background image
  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Set the minimum height to cover the entire viewport
    minWidth: "100vh",
  };

  return (
    <>
      <div className="container" style={backgroundStyle}>
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
