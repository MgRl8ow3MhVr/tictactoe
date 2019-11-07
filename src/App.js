import React, { useState } from "react";
import OneBox from "./OneBox";
import checkWin from "./CheckWin";
import "./App.css";

const displayEnd = (bool, player, reset) => {
  if (bool) {
    return (
      <div>
        <h1>{player ? "O" : "X"} WINS ! !</h1>
        <button className="end" onClick={reset}>
          reset board ?
        </button>
      </div>
    );
  }
  return null;
};

const App = () => {
  const [TTT, setTTT] = useState({
    grid: [[-10, -10, -10], [-10, -10, -10], [-10, -10, -10]],
    player: 1
  });

  let wingrid = checkWin(TTT.grid);
  if (wingrid) {
    setTTT({ grid: wingrid, player: TTT.player, win: true });
  }

  return (
    <div className="App">
      <h1>{TTT.player ? "X" : "O"} PLAYS</h1>
      <section>
        <OneBox TTT={TTT} setTTT={setTTT} r="0" c="0"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="0" c="1"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="0" c="2"></OneBox>
      </section>
      <section>
        <OneBox TTT={TTT} setTTT={setTTT} r="1" c="0"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="1" c="1"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="1" c="2"></OneBox>
      </section>
      <section>
        <OneBox TTT={TTT} setTTT={setTTT} r="2" c="0"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="2" c="1"></OneBox>
        <OneBox TTT={TTT} setTTT={setTTT} r="2" c="2"></OneBox>
      </section>
      {displayEnd(TTT.win, TTT.player, () => {
        setTTT({
          grid: [[-10, -10, -10], [-10, -10, -10], [-10, -10, -10]],
          player: 1
        });
      })}
    </div>
  );
};

export default App;
