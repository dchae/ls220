"use strict";

function edgeToAdjacency(edgeList) {
  let adjList = new Map();
  for (let [a, b] of edgeList) {
    if (!adjList.has(a)) adjList.set(a, []);
    adjList.get(a).push(b);
    if (!adjList.has(b)) adjList.set(b, []);
    adjList.get(b).push(a);
  }
  return adjList;
}

let edgeList = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [5, 6],
];

console.log(edgeToAdjacency(edgeList));
