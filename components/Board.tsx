import React, { useState } from "react";
import Square from "./Square";


const Board = () => {


    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i:number)=>{
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i:number) => {
        return(
            <Square value={squares[i]} onClick={()=>handleClick(i)} />
        )
    }

    return (
        <div>
            <div style={{marginBottom:"10px"}}>
                Status do jogo...
            </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;