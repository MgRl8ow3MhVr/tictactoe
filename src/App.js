import React, { useState } from "react";
import Case from "./Case";
import "./App.css";

let player = ["X"];

const App = () => {
  const [case0_0, setCase0_0] = useState(-1);
  const [case0_1, setCase0_1] = useState(-1);
  const [case0_2, setCase0_2] = useState(-1);
  const [case1_0, setCase1_0] = useState(-1);
  const [case1_1, setCase1_1] = useState(-1);
  const [case1_2, setCase1_2] = useState(-1);
  const [case2_0, setCase2_0] = useState(-1);
  const [case2_1, setCase2_1] = useState(-1);
  const [case2_2, setCase2_2] = useState(-1);
  let gagne = "NO";

  console.log(case0_0, case0_1, case0_2);
  if (case0_0 + case0_1 + case0_2 === "XXX") {
    gagne = "YES";
  }

  return (
    <div className="App">
      <section>
        <Case player={player} caSe={case0_0} setCase={setCase0_0}></Case>
        <Case player={player} caSe={case0_1} setCase={setCase0_1}></Case>
        <Case player={player} caSe={case0_2} setCase={setCase0_2}></Case>
      </section>

      <section>
        <Case player={player} caSe={case1_0} setCase={setCase1_0}></Case>
        <Case player={player} caSe={case1_1} setCase={setCase1_1}></Case>
        <Case player={player} caSe={case1_2} setCase={setCase1_2}></Case>
      </section>

      <section>
        <Case player={player} caSe={case2_0} setCase={setCase2_0}></Case>
        <Case player={player} caSe={case2_1} setCase={setCase2_1}></Case>
        <Case player={player} caSe={case2_2} setCase={setCase2_2}></Case>
      </section>

      <div className={gagne}>GAGNE</div>
    </div>
  );
};

export default App;
