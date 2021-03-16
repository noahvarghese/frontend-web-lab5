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
