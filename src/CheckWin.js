const checkRows = grid => {
  const size = grid[0].length;
  for (let i = 0; i < size; i++) {
    let sum = 0;
    for (let j = 0; j < size; j++) {
      sum += grid[i][j];
    }
    if (sum === size || sum === 0) {
      //changer les cases
      for (let j = 0; j < size; j++) {
        grid[i][j] = "Win";
      }
      return grid;
    }
  }
  return null;
};

const checkCols = grid => {
  const size = grid[0].length;
  for (let i = 0; i < size; i++) {
    let sum = 0;
    for (let j = 0; j < size; j++) {
      sum += grid[j][i];
    }
    if (sum === size || sum === 0) {
      //changer les cases
      for (let j = 0; j < size; j++) {
        grid[j][i] = "Win";
      }
      return grid;
    }
  }
  return null;
};

const checkWin = grid => {
  let checkColss = checkCols(grid);
  if (checkColss) {
    return checkColss;
  } else {
    return checkRows(grid);
  }
};

export default checkWin;
