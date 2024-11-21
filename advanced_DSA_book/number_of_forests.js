"use strict";
// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.
/*
-- Problem --
Input: 2D string matrix represting an area of land
  - a cell can be populated with a tree ('T')
  - or open ('O')
Output: integer representing the number of connected forest regions

Constraints:
Args
- will always receive one array arg

grid (array)
- can be empty
- cannot be sparse
- will always contain only equal length subarrays (non-jagged)
- do not mutate

row (subarray)
- cannot be empty
- cannot be sparse
- will only contain chars "O" or "T"
- do not mutate

Rules:
- return the number of forest regions in the grid
- a forest region is a subset of cells in the grid for which:
  - each cell has value "T" and
  - each cell has at least one neighbour with value "T"
- a neighbour is a cell that shares an edge horizontally or vertically
- if grid is empty, return 0

-- DS --
matrix
=> int

-- Algo --
1. init count to 0
2. init seen set
3. iterate through each cell in the grid
  - if the cell is empty ('O'), continue
  - if the cell is part of a forest ('T') and not in seen
    - add the entire forest to seen
      - dfs the forest, starting from the cell
    - increment count
4. return count


HELPER

dfs(grid, cur, seen)
1. base case: if cur is in seen, or out of bounds, or not part of a forest return
2. add cur to seen
3. init neighbours array containing coordinates of all neighbours
4. for each neighbour, dfs(grid, neighbour, seen)

*/

// function dfs(grid, row, col, seen) {
//   let key = [row, col].join();
//   if (!grid[row] || grid[row][col] !== "T" || seen.has(key)) return;
//   seen.add(key);
//
//   for (let i = -1; i < 2; i += 2) {
//     dfs(grid, row + i, col, seen);
//     dfs(grid, row, col + i, seen);
//   }
// }
//
// function numOfForests(grid) {
//   let count = 0;
//   let seen = new Set();
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       let curVal = grid[row][col];
//       let key = [row, col].join();
//       if (curVal === "T" && !seen.has(key)) {
//         dfs(grid, row, col, seen);
//         count++;
//       }
//     }
//   }
//
//   return count;
// }

// no set version (mutates input)
function dfs(grid, row, col) {
  if (!grid[row] || grid[row][col] !== "T") return;

  grid[row][col] = "S"; // mark as seen

  for (let i = -1; i < 2; i += 2) {
    dfs(grid, row + i, col);
    dfs(grid, row, col + i);
  }
}

function numOfForests(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let curVal = grid[row][col];
      if (curVal === "T") {
        dfs(grid, row, col);
        count++;
      }
    }
  }

  return count;
}

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ["T", "T", "O"],
  ["T", "T", "O"],
  ["O", "O", "O"],
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ["O", "O", "T", "T", "O"],
  ["T", "T", "O", "T", "O"],
  ["T", "T", "O", "O", "O"],
  ["O", "O", "O", "T", "T"],
  ["O", "O", "O", "O", "O"],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ["T", "T", "T"],
  ["T", "O", "T"],
  ["T", "T", "T"],
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ["T", "O", "T", "O", "T"],
  ["O", "O", "O", "O", "O"],
  ["T", "O", "T", "O", "T"],
  ["O", "O", "O", "O", "O"],
  ["T", "O", "T", "O", "T"],
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ["T", "T", "T"],
  ["T", "T", "T"],
  ["T", "T", "T"],
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true
