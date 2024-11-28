import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input)); // Use eval carefully in real-world apps
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        <Button value="C" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
