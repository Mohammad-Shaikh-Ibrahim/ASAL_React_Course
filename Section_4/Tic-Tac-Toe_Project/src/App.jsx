import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const [activePlayer,setActivePlayer]= useState('X');
  const [gameTurns,setGameTurns]= useState([]);

  function handelSelectedSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X'?'O':'X')
    setGameTurns(prevTurns => {
      let currentPlayer= 'X';

      if(prevTurns.length>0 && prevTurns[0].player ==='X'){
        currentPlayer='O';
      }

      const updateTurns = [
        {square: { row: rowIndex, col: colIndex }, player:currentPlayer},
        ...prevTurns,];

        return updateTurns;
      });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handelSelectedSquare} 
        turns={gameTurns}/>
      </div>
      <Log/>
    </main>
  )
}

export default App