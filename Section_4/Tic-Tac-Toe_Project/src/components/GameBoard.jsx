// import { useState } from "react";
//we cut this code into App.jsx
// const initialGameBoard =[
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]



export default function GameBoard({onSelectSquare,board}){

    /*We cut this code into App.jsx */
    // let gameBoard = initialGameBoard;

    // for(const turn of turns){
    //     const {square,player} = turn;
    //     const {row,col}= square;

    //     gameBoard[row][col]= player;
    // }
    // ******
    // const [gameBoard,setGameBoard]= useState(initialGameBoard);

    // function handelSelectedSquare(rowIndex,colIndex){
    //     setGameBoard(prevGameBoard =>{
    //         const updateGameBoard= [...prevGameBoard.map((innerArray)=>[...innerArray])];
    //         updateGameBoard[rowIndex][colIndex]= activePlayerSymbol;
    //         return updateGameBoard
    //     })
    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button 
                                    onClick={ ()=> onSelectSquare(rowIndex,colIndex)} 
                                    disabled={playerSymbol !== null} >
                                    {playerSymbol}
                                </button>
                            </li>
                                )
                            )
                        }
                            </ol>
                        </li>
                    )
                )
            }
        </ol>
    );
}