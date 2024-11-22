"use strict";

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }
//
// function getPermutations(arr) {
//   let res = [];
//
//   function backtrack(arr, i = 0) {
//     if (i === arr.length - 1) {
//       res.push(arr.slice());
//       return;
//     }
//
//     for (let j = i; j < arr.length; j++) {
//       swap(arr, i, j);
//       backtrack(arr, i + 1);
//       swap(arr, i, j);
//     }
//   }
//
//   backtrack(arr);
//
//   return res;
// }

// naive + pruning
// function getPermutations(arr, cur = [], res = []) {
//   if (cur.length === arr.length) {
//     res.push(cur.slice());
//     return res;
//   }
//
//   for (let i = 0; i < arr.length; i++) {
//     if (cur.includes(arr[i])) continue;
//     cur.push(arr[i]);
//     getPermutations(arr, cur, res);
//     cur.pop();
//   }
//
//   return res;
// }

// optimised
// function backtrack(arr, cur, res) {
//   if (cur.size === arr.length) {
//     res.push([...cur].map((i) => arr[i]));
//     return res;
//   }
//
//   for (let i = 0; i < arr.length; i++) {
//     if (cur.has(i)) continue;
//     cur.add(i);
//     backtrack(arr, cur, res);
//     cur.delete(i);
//   }
//
//   return res;
// }
//
// function getPermutations(arr) {
//   let res = [];
//   let cur = new Set();
//
//   return backtrack(arr, cur, res);
// }

// splice version
function backtrack(arr, cur = [], res = []) {
  if (arr.length === 0) {
    res.push(cur.slice());
    return res;
  }

  for (let i = 0; i < arr.length; i++) {
    let selected = arr.splice(i, 1)[0];
    cur.push(selected);
    backtrack(arr, cur, res);
    arr.splice(i, 0, cur.pop());
  }

  return res;
}

function getPermutations(arr) {
  return backtrack(arr);
}

console.log(getPermutations([1, 2, 3]));
