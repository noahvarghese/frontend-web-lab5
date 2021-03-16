/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React from "react";
import "../css/input.css";

interface InputProps {
  name: string;
  min: number;
  currentValue: number;
  changeValue: (newValue: number) => void;
}

export const NumberInput = ({
  min,
  changeValue,
  name,
  currentValue,
}: InputProps) => {
  const id = name.split(" ").join();
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{name}</label>
      <input
        type="number"
        min={min}
        id={id}
        name={id}
        value={currentValue}
        onChange={(e) => changeValue(Number(e.currentTarget.value))}
      />
    </div>
  );
};
