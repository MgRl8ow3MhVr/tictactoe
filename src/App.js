import React, { useState } from "react";
import OneBox from "./OneBox";
import checkWin from "./CheckWin";
import "./App.css";

const App = () => {
  const [TTT, setTTT] = useState({
    grid: [[-10, -10, -10], [-10, -10, -10], [-10, -10, -10]],
    player: 1
  });

  let wingrid = checkWin(TTT.grid);
  console.log(wingrid);
  if (wingrid) {
    console.log("ingrid");
    setTTT({ grid: wingrid, player: TTT.player });
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
    </div>
  );
};

export default App;
