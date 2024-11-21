"use strict";
// You are provided with an 'm x n' 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O'). Your task
// is to find the largest contiguous forest area on the map. A
// forest area consists of a group of tree cells ('T') connected
// 4-directionally (horizontally or vertically, but not diagonally).

// Write a function largestForestArea that accepts a nested
// array grid representing the 2D map. The function should
// return the size of the largest forest area, which is the
// number of contiguous 'T' cells in the largest forest.
// If there are no trees in the grid, return 0.

// Example:
// Input:
// [
//   ['O', 'T', 'O', 'O'],
//   ['T', 'T', 'O', 'T'],
//   ['O', 'O', 'O', 'T'],
//   ['O', 'O', 'T', 'T']
// ]
// Output: 4 (The largest forest area has 4 connected tree cells)

/*
-- Algorithm --
1. init best to 0;
2. init totalSeen set
3. iterate through each cell in grid
4. if the cell is 'T' and not in totalSeen
  - let forest = DFS the forest
  - update best to max (best, forest.size)
  - add forest to totalSeen
5. return best

HELPER
dfs(grid, row, col, seen = new Set)
1. base case: if
  - grid[row][col] is out of bounds
  - grid[row][col] is not part of the forest (not 'T')
  - row,col is already in seen
  return
2. add row,col to seen
3. visit all four neighbours
4. return seen

*/

// function dfs(grid, row, col, seen = new Set()) {
//   let key = [row, col].join();
//   if (!grid[row] || grid[row][col] !== "T" || seen.has(key)) return;
//   seen.add(key);
//
//   for (let i = -1; i <= 1; i += 2) {
//     dfs(grid, row + i, col, seen);
//     dfs(grid, row, col + i, seen);
//   }
//
//   return seen;
// }
//
// function largestForestArea(grid) {
//   let best = 0;
//   let seen = new Set();
//
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       let key = [row, col].join();
//       if (grid[row][col] === "T" && !seen.has(key)) {
//         let forest = dfs(grid, row, col);
//         best = Math.max(best, forest.size);
//         for (let key of forest) seen.add(key);
//       }
//     }
//   }
//
//   return best;
// }

// mutative version
function dfs(grid, row, col, count = 0) {
  if (!grid[row] || grid[row][col] !== "T") return 0;
  grid[row][col] = "S";

  for (let i = -1; i <= 1; i += 2) {
    count += dfs(grid, row + i, col);
    count += dfs(grid, row, col + i);
  }

  return count + 1;
}

function largestForestArea(grid) {
  let best = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "T") {
        let forestSize = dfs(grid, row, col);
        best = Math.max(best, forestSize);
      }
    }
  }

  return best;
}

// Test cases
const grid1 = [];
console.log(largestForestArea(grid1) === 0);

const grid2 = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
console.log(largestForestArea(grid2) === 0);

const grid3 = [
  ["T", "T", "O"],
  ["T", "T", "O"],
  ["O", "O", "O"],
];
console.log(largestForestArea(grid3) === 4);

const grid4 = [
  ["O", "O", "T", "T", "O"],
  ["T", "T", "O", "T", "O"],
  ["T", "T", "O", "O", "O"],
  ["O", "O", "O", "T", "T"],
  ["O", "O", "O", "O", "O"],
];
console.log(largestForestArea(grid4) === 4);

const grid5 = [
  ["T", "T", "T"],
  ["T", "O", "T"],
  ["T", "T", "T"],
];
console.log(largestForestArea(grid5) === 8);

const grid6 = [
  ["T", "O", "T", "O", "T"],
  ["O", "O", "O", "O", "O"],
  ["T", "O", "T", "O", "T"],
  ["O", "O", "O", "O", "O"],
  ["T", "O", "T", "O", "T"],
];
console.log(largestForestArea(grid6) === 1);

const grid7 = [
  ["T", "T", "T"],
  ["T", "T", "T"],
  ["T", "T", "T"],
];
console.log(largestForestArea(grid7) === 9);

const grid8 = [
  ["O", "T", "O", "T", "T"],
  ["O", "T", "O", "O", "O"],
  ["O", "O", "T", "O", "O"],
  ["O", "O", "T", "T", "T"],
  ["T", "O", "T", "T", "T"],
];
console.log(largestForestArea(grid8) === 7);

const grid9 = [
  ["T", "O", "T", "T"],
  ["O", "T", "O", "T"],
  ["T", "T", "O", "O"],
  ["O", "T", "T", "T"],
];
console.log(largestForestArea(grid9) === 6);

const grid10 = [
  ["O", "T", "O", "O"],
  ["T", "T", "O", "T"],
  ["O", "O", "O", "T"],
  ["O", "O", "T", "T"],
];
console.log(largestForestArea(grid10) === 4);

const grid11 = [
  ["O", "T", "T", "T", "O"],
  ["T", "T", "O", "T", "T"],
  ["O", "O", "O", "O", "O"],
  ["T", "T", "O", "T", "O"],
  ["T", "T", "O", "T", "T"],
];
console.log(largestForestArea(grid11) === 7);

// All test cases should log true
