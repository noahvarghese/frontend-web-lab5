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
