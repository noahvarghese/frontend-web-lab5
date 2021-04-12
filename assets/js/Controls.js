/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/

const Controls = ({
  numberOfDice,
  numberOfSides,
  roll,
  updateNumberOfDice,
  updateNumberOfSides,
}) => {
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
