import React, { Children, useState } from "react";
import "./App.css";
import "./index.css";

const TURNS = {
  X: "x",
  0: "o",
};



const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  let dummy  = ['x', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'o']
  const [board, setBoard] = useState(dummy)
  // const [board, setBoard] = useState(Array(9).fill(null))
  console.log(board);
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
