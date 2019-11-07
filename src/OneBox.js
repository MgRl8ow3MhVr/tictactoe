import React from "react";

const OneBox = props => {
  const { TTT, setTTT, r, c } = props;
  let state = TTT.grid[r][c];
  let grid = TTT.grid;
  let player = TTT.player;
  if (state === -10) {
    return (
      <div
        onClick={() => {
          grid[r][c] = player;
          setTTT({ grid: grid, player: (player + 1) % 2 });
        }}
        className="caseempty"
      ></div>
    );
  } else if (state === "Win") {
    return <div className="Win">{!player ? "X" : "O"}</div>;
  } else {
    return <div className="casefilled">{state ? "X" : "O"}</div>;
  }
};

export default OneBox;
