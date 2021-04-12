/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
class Dice {
  numberOfSides;
  currentValue;

  constructor(_numberOfSides) {
    this.numberOfSides = _numberOfSides;
  }

  roll = () => {
    this.currentValue = Math.floor(Math.random() * this.numberOfSides) + 1;
    return this.currentValue;
  };
}
