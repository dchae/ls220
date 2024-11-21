"use strict";
// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  let queue = [source];
  let seen = new Set();

  while (queue.length) {
    let cur = queue.shift();

    if (seen.has(cur)) continue;
    console.log(cur);
    seen.add(cur);

    for (let neighbour of adjList.get(cur)) {
      queue.push(neighbour);
    }
  }
}

const adjList = new Map();
adjList.set(1, [2, 3]);
adjList.set(2, [1, 4]);
adjList.set(3, [1, 4, 5]);
adjList.set(4, [2, 3]);
adjList.set(5, [3, 6]);
adjList.set(6, [5]);

console.log(bfs(adjList, 1)); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6
