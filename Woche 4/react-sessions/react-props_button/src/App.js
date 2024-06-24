import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("klappt alles");
    alert("You clicked me!");
  }

  return (
    <div>
      <Button color={"blue"} text={"Click me!"} onClick={handleClick} />
      <Button
        color={"red"}
        text={"Bin leider disabled"}
        disabled
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ color: color, padding: "20px" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
