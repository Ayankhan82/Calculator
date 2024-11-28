import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input)); // Evaluate the expression
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "%") {
      if (input) {
        try {
          setInput((eval(input) / 100).toString());
        } catch {
          setInput("Error");
        }
      }
    } else if (value === "x²") {
      if (input) {
        try {
          setInput((Math.pow(eval(input), 2)).toString());
        } catch {
          setInput("Error");
        }
      }
    } else if (value === "x³") {
      if (input) {
        try {
          setInput((Math.pow(eval(input), 3)).toString());
        } catch {
          setInput("Error");
        }
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {[
          "7", "8", "9", "/", 
          "4", "5", "6", "*", 
          "1", "2", "3", "-", 
          "0", ".", "=", "+", 
          "%", "x²", "x³"
        ].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        <Button value="C" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
