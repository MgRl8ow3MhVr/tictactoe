import React from "react";

const Case = props => {
  const { player, caSe, setCase } = props;

  if (caSe === -1) {
    return (
      <button
        onClick={() => {
          setCase(player[0]);
          player[0] = player[0] === "X" ? "O" : "X";
        }}
        className="case"
      ></button>
    );
  } else {
    return <div className="case">{caSe}</div>;
  }
};

export default Case;
