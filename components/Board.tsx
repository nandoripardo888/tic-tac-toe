import React, { useState } from "react";
import Square from "./Square";
import { List } from "postcss/lib/list";


const Board = () => {


    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i:number)=>{
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const calculateWinner = (squares:Array<number>) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i=0; i<lines.length; i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c] &&squares[c]){
                return squares[a]
            }
        }
        return null;
    }

    const renderSquare = (i:number, quina:number) => {
        return(
            <Square value={squares[i]} onClick={()=>handleClick(i)} quina={quina}/>
        )
    }

    const winner = calculateWinner(squares);
    const status = winner ? "Winner: " + winner : 'Next player: ' + (xIsNext ? 'X':'O');
    //const status = winner ? "Winner: " + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

    return (
        <div className="board">
            <div className="status">
                {status}
            </div>
            <div className="board-row">
                {renderSquare(0,1)}
                {renderSquare(1,0)}
                {renderSquare(2,2)}
            </div>
            <div className="board-row">
                {renderSquare(3,0)}
                {renderSquare(4,0)}
                {renderSquare(5,0)}
            </div>
            <div className="board-row">
                {renderSquare(6,3)}
                {renderSquare(7,0)}
                {renderSquare(8,4)}
            </div>
        </div>
    )
}

export default Board;