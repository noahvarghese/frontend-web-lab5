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
