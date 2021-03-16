import React, { useState } from "react";
import { Controls } from "./components/Controls";
import { Output } from "./components/Output";
import { Nav } from "./components/Nav";
import Dice from "./models/dice";

interface AppState {
  numberOfDice: number;
  numberOfSides: number;
  diceRoll: number[];
}

function App() {
  const [state, setState] = useState<AppState>({
    numberOfDice: 1,
    numberOfSides: 6,
    diceRoll: [],
  });

  const roll = () => {
    const diceRoll: number[] = [];

    for (let i = 0; i < state.numberOfDice; i++) {
      const die = new Dice(state.numberOfSides);
      diceRoll.push(die.roll());
    }

    setState({ ...state, diceRoll });
  };

  const updateNumberOfDice = (newValue: number) => {
    setState({
      ...state,
      numberOfDice: newValue,
    });
  };

  const updateNumberOfSides = (newValue: number) => {
    setState({
      ...state,
      numberOfSides: newValue,
    });
  };

  return (
    <div className="App">
      <Nav />
      <Controls
        numberOfDice={state.numberOfDice}
        numberOfSides={state.numberOfSides}
        roll={roll}
        updateNumberOfDice={updateNumberOfDice}
        updateNumberOfSides={updateNumberOfSides}
      />
      <Output output={state.diceRoll} />
    </div>
  );
}

export default App;
