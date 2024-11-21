"use strict";
// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// function dfs(adjList, cur, seen = new Set()) {
//   if (seen.has(cur)) return;
//   console.log(cur);
//   seen.add(cur);
//
//   for (let neighbour of adjList.get(cur)) {
//     dfs(adjList, neighbour, seen);
//   }
// }

// stack version
function dfs(adjList, source) {
  let stack = [source];
  let seen = new Set();

  while (stack.length) {
    let cur = stack.pop();
    console.log(cur);
    seen.add(cur);

    for (let neighbour of adjList.get(cur)) {
      if (seen.has(neighbour)) continue;
      stack.push(neighbour);
    }
  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3
