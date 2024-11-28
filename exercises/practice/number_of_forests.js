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

function dfs(grid, row, col, seen) {
  let key = [row, col].join();
  if (!grid[row] || grid[row][col] !== "T" || seen.has(key)) return;

  seen.add(key);
  for (let offset = -1; offset < 2; offset += 2) {
    dfs(grid, row + offset, col, seen);
    dfs(grid, row, col + offset, seen);
  }
}

function numOfForests(grid) {
  let count = 0;
  let seen = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let key = [row, col].join();
      if (seen.has(key) || grid[row][col] !== "T") continue;
      dfs(grid, row, col, seen);
      count++;
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
