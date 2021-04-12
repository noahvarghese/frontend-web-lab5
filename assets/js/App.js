/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/

function App() {
  const [state, setState] = React.useState({
    numberOfDice: 1,
    numberOfSides: 6,
    diceRoll: [],
  });

  const roll = () => {
    const diceRoll = [];

    for (let i = 0; i < state.numberOfDice; i++) {
      const die = new Dice(state.numberOfSides);
      diceRoll.push(die.roll());
    }

    setState({ ...state, diceRoll });
  };

  const updateNumberOfDice = (newValue) => {
    setState({
      ...state,
      numberOfDice: newValue,
    });
  };

  const updateNumberOfSides = (newValue) => {
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
