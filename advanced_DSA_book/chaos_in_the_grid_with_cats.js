"use strict";
// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

/*
-- Problem --
Input: 2d matrix containing strings
Output: int representing number of possible paths from top left to bottom right

Constraints:
Args
- will always receive one array arg grid

grid (2d matrix)
- cannot be empty or sparse
- will only contain arrays of same length

rows (arrays)
- cannot be empty or sparse
- will only contain strings

Rules:
- return the number of distinct paths from [0, 0] to [lastRow][lastCol]
- cells containing "C" cannot be entered
- if each cell has a path value representing the number of paths from
  the cell to the goal
  - cells with "C" have a path value of 0
  - cells outside the bounds of the matrix have a path value of 0
  - the goal cell has a path value of 1
  - otherwise, the path value of a cell is the sum of the path values
    for the cells we can move to from it
    - (i.e., the cell to the bottom and the cell to the right)

-- DS --
matrix
memo map
=> int

-- algo --
1. init memo map
2. populate memo map with known path values
3. travel through all paths recursively
  - if the current cell's path value is known (goal, out of bounds, 'C')
    - return that path value
  - else return the path value sum of bottom and right cells

*/

function chaosInTheGridWithCats(grid) {
  let memo = new Map();
  let goalKey = [grid.length - 1, grid[0].length - 1].join();
  memo.set(goalKey, 1);

  function getPathValue(grid, row = 0, col = 0) {
    let key = [row, col].join();
    if (row >= grid.length || col >= grid[0].length || grid[row][col] === "C") {
      return 0;
    }

    if (memo.has(key)) return memo.get(key);

    let pathVal =
      getPathValue(grid, row + 1, col) + getPathValue(grid, row, col + 1);
    memo.set(key, pathVal);
    return pathVal;
  }

  return getPathValue(grid);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);
