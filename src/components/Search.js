import React, { useState } from "react";

const Search = () => {
  const [state, setState] = useState("");
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  };
  const [text, setText] = useState("");

  async function handleClick() {
    const data = await fetch(
      `${api.base}weather?q=${text}&appid=${api.key}&units=metric`
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <>
      <div>
        <h2> React Weather Application </h2>
        <div>
          <h3> Search City</h3>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
          ></input>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
