import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import Strike from "./components/Strike";

const App = () => {
  const[cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const[go, setGo] = useState("circle");
  const[winningMessage, setWinningMessage] = useState(null);
  const [winningStrike, setWinningStrike] = useState(null);
 

  const message = "It is now " + go + "'s go.";

  const checkScore = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (const array of winningCombinations) {
      if (array.every(index => cells[index] === "circle")) {
        setWinningMessage("Circle has won!");
        setWinningStrike(array);
        return;
      }
      if (array.every(index => cells[index] === "cross")) {
        setWinningMessage("Cross has won!");
        setWinningStrike(array);
        return;
      }
    }
  }

    useEffect(() => {
      checkScore()
    }, [cells])

  return (
    <div className="app">
      <h1>Tic Tack Toe Game</h1>
      <div className="gameboard">
        {cells.map((cell, index) => 
          <Cell 
          key={index}
          id={index}
          cell={cell}
          go={go}
          setGo={setGo}
          cells={cells}
          setCells={setCells}
          winningMessage={winningMessage}
          />
        )}
        <Strike winningStrike={winningStrike}/>  
      </div>
      <p>{ winningMessage || message }</p>
      <p className="instructions">Click reset to start a new game.</p>

      <button className="reset" onClick={() => {
        setCells(["", "", "", "", "", "", "", "", ""])
        setWinningMessage(null)
        setGo("circle")
        setWinningStrike(null)
      }}>Start New Game</button>
    </div>
  )
}

export default App;
