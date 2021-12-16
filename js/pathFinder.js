function pathFinder(maze) {
  const mazeArray = maze.split("\n").map((r) => r.split(""));
  const positionX = 0;
  const positionY = 0;
  const cells = [[positionX, positionY]];

  while (cells.length) {
    const [x, y] = cells.pop();
    let flag = false;
    mazeArray[x][y] = "V";
    [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].forEach(([x, y]) => {
      if ((mazeArray[x] || [])[y] === ".") {
        if (x === mazeArray.length - 1 && y === mazeArray.length - 1) {
          flag = true;
        } else {
          cells.push([x, y]);
        }
      }
    });
    if (flag) {
      return true;
    }
  }

  return false;
}
