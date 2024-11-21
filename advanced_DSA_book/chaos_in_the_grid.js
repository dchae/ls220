"use strict";

// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/*
-- Problem --
Input: matrix (2D array) containing empty strings
Output: number of distinct paths from top-left cell to bottom-right cell

Constraints:
grid (2D array)
- Grid will have at least 1 row and column
  - i.e. will not be empty
- non-jagged

rows (grid elements)
- non-empty non-sparse arrays
- will only contain empty strings

Rules:
- return the number of distinct paths from top-left cell to bottom-right cell
- there will always be at least one path
  - for 1x1 grid, the count is 1

-- DS --
matrix
=> int

-- Algo --
1. base case: we start at the end
  - return 1
2. else return the sum of calling the algo for each possible path
  - recursively travel all possible paths from start to end

*/

// function chaosInTheGrid(grid, row = 0, col = 0) {
//   if (row >= grid.length || col >= grid.at(-1).length) return 0;
//   if (row === grid.length - 1 && col === grid.at(-1).length - 1) return 1;
//
//   let paths =
//     chaosInTheGrid(grid, row + 1, col) + chaosInTheGrid(grid, row, col + 1);
//   return paths;
// }

// function chaosInTheGrid(grid) {
//   let memo = new Map();
//   memo.set([grid.length - 1, grid.at(-1).length - 1].join(), 1);
//
//   function traverse(grid, row = 0, col = 0) {
//     let key = [row, col].join();
//     if (memo.has(key)) return memo.get(key);
//
//     let paths =
//       row < grid.length && col < grid.at(-1).length
//         ? traverse(grid, row + 1, col) + traverse(grid, row, col + 1)
//         : 0;
//
//     memo.set(key, paths);
//     return paths;
//   }
//
//   return traverse(grid);
// }

// base case: we are in the starting cell
// if the current cell does not exist, return 0
// otherwise, the number of paths it takes to get to the current cell
// is the number of paths it takes to get to the cell above (if it exists)
// + the number of paths to get to the cell to the left (if it exists)

// function chaosInTheGrid(grid) {
//   let memo = [...new Array(grid.length)].map((_) => new Array(grid[0].length));
//   memo[0][0] = 1;
//
//   function countPaths(grid, targetRow, targetCol) {
//     if (targetRow < 0 || targetCol < 0) return 0;
//     memo[targetRow][targetCol] ??=
//       countPaths(grid, targetRow - 1, targetCol) +
//       countPaths(grid, targetRow, targetCol - 1);
//     return memo[targetRow][targetCol];
//   }
//   return countPaths(grid, grid.length - 1, grid.at(-1).length - 1);
// }

function chaosInTheGrid(grid) {
  for (let row = 0; row < grid.length; row++) {
    grid[row][0] = 1;
  }

  for (let col = 0; col < grid[0].length; col++) {
    grid[0][col] = 1;
  }

  function countPaths(grid, row, col) {
    if (typeof grid[row][col] === "number") return grid[row][col];
    grid[row][col] =
      countPaths(grid, row - 1, col) + countPaths(grid, row, col - 1);
    return grid[row][col];
  }

  return countPaths(grid, grid.length - 1, grid.at(-1).length - 1);
}

// time complexity
// O(rows*cols)

// -- Examples / Test cases --

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true
