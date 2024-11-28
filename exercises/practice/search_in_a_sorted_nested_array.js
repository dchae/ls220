"use strict";
/*
-- Problem --
Input:
- matrix
  - nested array of integer subarrays
    - each subarray is sorted in ascending order
    - the first element of each subarray is greater
      than the last element of the preceding subarray

- target
  - integer

Output:
- boolean
  - whether the target exists in some subarray of matrix

-- DS --
2D integer array / matrix
=> boolean

-- Algo --
1. binary search for the subarray that should contain target
  - bsearch for the maximal index i where the condition
    (matrix[i][0] <= target) holds true
2. within that subarray, bsearch for the maximal index i where the condition
    (subarray[i] <= target)
    - set that index to targetIndex
3. return true if subarray[targetIndex] === target else false

*/

// -- Code --
function bsearchMax(arr, condition) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (condition(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function findInNestedArray(matrix, target) {
  let subarrayIndex = bsearchMax(matrix, (i) => matrix[i][0] <= target);
  let subarray = matrix[subarrayIndex];
  let targetIndex = bsearchMax(subarray, (i) => subarray[i] <= target);

  return subarray[targetIndex] === target;
}

console.log(
  findInNestedArray(
    [
      [4, 8, 12],
      [16, 20, 24],
      [28, 32, 36],
    ],
    20,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [3, 6, 9],
      [12, 15, 18],
      [21, 24, 27],
    ],
    27,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [1, 3, 5],
      [7, 9, 11],
      [13, 15, 17],
    ],
    19,
  ) === false,
);
console.log(
  findInNestedArray(
    [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ],
    10,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [15, 25, 35],
      [45, 55, 65],
      [75, 85, 95],
    ],
    5,
  ) === false,
);

// All test cases should return true.
