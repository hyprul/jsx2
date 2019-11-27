import React from "react";
import ReactDOM from "react-dom";

const name = "Sean";
const lucky_number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {lucky_number}</p>
  </div>,
  document.getElementById("root")
);
