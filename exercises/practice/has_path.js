"use strict";
// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

/*
-- Problem --
Input:
- edge list
- source vertex
- destination vertex

Output:
boolean (whether path from source to destination exists)

-- DS --
2D array (edgeList)
=> Adjacency List
=> boolean

-- Algo --
1. convert edgeList to AdjList
2. return leadsTo(dst, src)

HELPER
leadsTo(dst, cur, seen = new Set())
- complete condition: return true if cur === dst

- add cur to seen
- for vertex in AdjList.get(cur)
  - if vertex not in seen
    - return true if leadsTo(dst, vertex, seen)
- return false

toAdjList(edgeList)
1. init AdjList obj new Map()
2. for (vertexA, vertexB) in edgelist
  - if AdjList does not have vertexA as a key
    - create the entry, val = empty array
  - AdjList.get(vertexA).push(vertexB)
  - repeat for vertexB
3. return AdjList

*/
// -- Code --
function toAdjList(edgeList) {
  let adjList = new Map();
  for (let [vertexA, vertexB] of edgeList) {
    if (!adjList.has(vertexA)) adjList.set(vertexA, []);
    adjList.get(vertexA).push(vertexB);

    if (!adjList.has(vertexB)) adjList.set(vertexB, []);
    adjList.get(vertexB).push(vertexA);
  }

  return adjList;
}

function leadsTo(dst, src, adjList, seen = new Set()) {
  if (src === dst) return true;

  seen.add(src);

  for (let vertex of adjList.get(src)) {
    if (seen.has(vertex)) continue;
    if (leadsTo(dst, vertex, adjList, seen)) return true;
  }

  return false;
}

function hasPath(edgeList, src, dst) {
  let adjList = toAdjList(edgeList);
  return leadsTo(dst, src, adjList);
}

console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    1,
    4,
  ) === true,
);
console.log(
  hasPath(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4,
  ) === false,
);
console.log(
  hasPath(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [3, 5],
      [5, 6],
    ],
    1,
    6,
  ) === true,
);
console.log(hasPath([], 1, 1) === true);
console.log(
  hasPath(
    [
      [1, 2],
      [1, 3],
      [4, 5],
      [6, 7],
    ],
    2,
    5,
  ) === false,
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5],
      [2, 6],
      [6, 7],
      [7, 8],
      [8, 5],
    ],
    1,
    8,
  ) === true,
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
      [2, 7],
      [7, 8],
      [8, 7],
      [7, 9],
      [9, 10],
      [10, 11],
      [11, 12],
      [12, 10],
      [7, 13],
    ],
    1,
    13,
  ) === true,
);
console.log(
  hasPath(
    [
      [1, 2],
      [2, 3],
      [3, 1],
      [4, 5],
      [5, 6],
      [6, 4],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 7],
      [11, 12],
      [13, 14],
      [14, 15],
      [15, 13],
    ],
    1,
    12,
  ) === false,
);
// All test cases should log true
