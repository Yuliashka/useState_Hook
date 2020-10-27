import React from "react";

function App() {
  var [time, getTime] = React.useState("00:00:00");

  function changeTime() {
    getTime(new Date().toLocaleTimeString());
    setInterval(changeTime, 1000);
    document.getElementById("myBtn").disabled = true;
  }

  return (
    <div>
      <div className="container">
        <h2>Get current time with React</h2>
        <h1>{time}</h1>
        <button id="myBtn" onClick={changeTime}>
          Get Time
        </button>
      </div>
    </div>
  );
}

export default App;
