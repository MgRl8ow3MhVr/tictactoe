import React from "react";

const OneBox = props => {
  const { TTT, setTTT, r, c } = props;
  let state = TTT.grid[r][c];
  let grid = TTT.grid;
  let player = TTT.player;

  switch (state) {
    case -10:
      return (
        <div
          onClick={() => {
            grid[r][c] = player;
            setTTT({ grid: grid, player: (player + 1) % 2 });
          }}
          className="box empty"
        ></div>
      );
    case "Win":
      return <div className="box Win">{!player ? "X" : "O"}</div>;
    case 0:
      return <div className="box O">{state ? "X" : "O"}</div>;
    case 1:
      return <div className="box X">{state ? "X" : "O"}</div>;
  }
};

export default OneBox;
