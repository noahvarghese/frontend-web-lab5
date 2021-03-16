/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
import React from "react";
import { NumberInput as Input } from "./NumberInput";
import "../css/controls.css";

interface ControlProps {
  numberOfDice: number;
  numberOfSides: number;
  roll: () => void;
  updateNumberOfSides: (newValue: number) => void;
  updateNumberOfDice: (newValue: number) => void;
}

export const Controls = ({
  numberOfDice,
  numberOfSides,
  roll,
  updateNumberOfDice,
  updateNumberOfSides,
}: ControlProps) => {
  return (
    <div className="controlContainer">
      <Input
        name="Number Of Dice"
        min={1}
        currentValue={numberOfDice}
        changeValue={updateNumberOfDice}
      />
      <Input
        name="Number Of Sides"
        min={2}
        currentValue={numberOfSides}
        changeValue={updateNumberOfSides}
      />
      <button onClick={roll}>Roll</button>
    </div>
  );
};
