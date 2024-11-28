import React, { useState } from "react";
<<<<<<< HEAD
import Display from "./Display";
import Button from "./Button";
=======
import Display from "./display";
import Button from "./button";
>>>>>>> newfeatures
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
<<<<<<< HEAD

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input)); // Evaluate the expression
=======
  
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input)); // Use eval carefully in real-world apps
>>>>>>> newfeatures
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
<<<<<<< HEAD
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
=======
>>>>>>> newfeatures
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
<<<<<<< HEAD
        {[
          "7", "8", "9", "/", 
          "4", "5", "6", "*", 
          "1", "2", "3", "-", 
          "0", ".", "=", "+", 
          "%", "x²", "x³"
        ].map((btn) => (
=======
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
>>>>>>> newfeatures
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
        <Button value="C" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
