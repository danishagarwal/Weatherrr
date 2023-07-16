import React, { useState } from "react";

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

  return (
    <>
      <div>
        <h2> React Weather Application </h2>
        <div className="search">
          <h3> Search City</h3>

          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
          ></input>
          <button onClick={() => handleClick()}>Search</button>
        </div>

        <div className="weather">
          <h1>{weather.name}</h1>
          <h2>{weather.message}</h2> {/* if there is a wrong input  */}
        </div>
      </div>
    </>
  );
};

export default Search;
