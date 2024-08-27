import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from './WINNING_COMBINATIONS';

const PLAYERS= {
  X: 'Player 1',
  O: 'Player 2'
};

const initialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]



function deriveActivePlayer(gameTurns){
  let currentPlayer= 'X';

  if(gameTurns.length>0 && gameTurns[0].player ==='X'){
    currentPlayer='O';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns){
      const {square,player} = turn;
      const {row,col}= square;

      gameBoard[row][col]= player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard,players){
  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol= gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol= gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol)
      {
        winner= players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players,setPlayers]= useState(PLAYERS)
  const [gameTurns,setGameTurns]= useState([]);
  // const [activePlayer,setActivePlayer]= useState('X');
  // const [hasWinner,setHasWinner]= useState(false);

  const activePlayer= deriveActivePlayer(gameTurns);

  const gameBoard =deriveGameBoard(gameTurns);
  // let gameBoard = [...initialGameBoard.map(array => [...array])];

  // for(const turn of gameTurns){
  //     const {square,player} = turn;
  //     const {row,col}= square;

  //     gameBoard[row][col]= player;
  // }

  const winner= deriveWinner(gameBoard,players);

  // for(const combination of WINNING_COMBINATIONS){
  //   const firstSquareSymbol= gameBoard[combination[0].row][combination[0].column];
  //   const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
  //   const thirdSquareSymbol= gameBoard[combination[2].row][combination[2].column];

  //   if(firstSquareSymbol && 
  //     firstSquareSymbol === secondSquareSymbol && 
  //     firstSquareSymbol === thirdSquareSymbol)
  //     {
  //       winner= players[firstSquareSymbol];
  //   }
  // }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handelSelectedSquare(rowIndex,colIndex){
    // setActivePlayer((curActivePlayer)=>curActivePlayer === 'X'?'O':'X')
   
    setGameTurns(prevTurns => {
      // let currentPlayer= 'X';

      // if(prevTurns.length>0 && prevTurns[0].player ==='X'){
      //   currentPlayer='O';
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        {square: { row: rowIndex, col: colIndex }, player:currentPlayer},
        ...prevTurns,];

        return updateTurns;
      });
  }

  function handelRestart(){
    setGameTurns([]);
  }

  function handelPlayerNameChange(symbol,newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,[symbol]:newName
      };
    }
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
          initialName={PLAYERS.X} 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onChangeName={handelPlayerNameChange}
          />
          <Player 
          initialName={PLAYERS.O} 
          symbol="O" 
          isActive={activePlayer === 'O'}
          onChangeName={handelPlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handelRestart} />}
        <GameBoard onSelectSquare={handelSelectedSquare} 
        board={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App