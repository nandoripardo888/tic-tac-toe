import React from 'react';
import Board from '../components/Board';

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">Tic-Tac-Toe</h1>
        <Board />
      </main>
    </div>
  );
}