/*
“StAuth10065: I Noah Varghese, 000753196 certify that this material is my original work. 
No other person’s work has been used without due acknowledgement. 
I have not made my work available to anyone else.”
*/

const Output = ({ output }) => {
  const sum = output.reduce((a, b) => a + b, 0);

  return (
    <div className="output">
      <div className="dice">
        {output.map((roll, index) => (
          <div key={index} className="die">
            <span>{roll}</span>
          </div>
        ))}
      </div>
      <div className="sum">
        <p>
          Sum: <span>{sum}</span>
        </p>
      </div>
    </div>
  );
};
