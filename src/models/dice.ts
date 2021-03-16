/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/
export default class Dice {
  public numberOfSides: number;
  public currentValue?: number;

  constructor(_numberOfSides: number) {
    this.numberOfSides = _numberOfSides;
  }

  public roll = (): number => {
    this.currentValue = Math.floor(Math.random() * this.numberOfSides) + 1;
    return this.currentValue;
  };
}
