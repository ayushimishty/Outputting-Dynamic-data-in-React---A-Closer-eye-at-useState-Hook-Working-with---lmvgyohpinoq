import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [data, setData] = useState("");
  const [fdata, setFData] = useState("");
  function showData() {
    setFData(data);
  }
  return (
    <div id="main">
      <input id="input" onChange={(e) => setData(e.target.value)}></input>
      <button id="button" onClick={showData}>
        Click
      </button>
      <p id="text">
        {" "}
        Hello my name is {fdata === "" ? "____" : fdata} and I study at Newton
        School
      </p>
    </div>
  );
};

export default App;
