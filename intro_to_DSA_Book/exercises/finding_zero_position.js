// Write a function named `findZeroPosition` that takes in a
// sorted array of distinct integers as input.
// The function should return the index where the value 0 is
// found in the array, or the index where it would be inserted if
// it were not found.

// If the value 0 is found in the array, the function should
// return the index of the value 0. If the value 0 is not found,
// the function should return the index where it would be inserted
// while maintaining the sorted order of the array.

// Example:
// Input: nums = [-7, -5, -3, 0, 2]
// Output: 3

// Example:
// Input: nums = [3, 5, 7, 9, 11]
// Output: 0

"use strict";
/*
-- Problem --
input: sorted array of distinct integers
output: index of 0 in the array

Rules:
- Return the smallest index i in array where nums[i] >= 0

-- DS --
Array
=> integer (index)

-- Algo --
1. use binary search template

*/

// -- Code --
function findZeroPosition(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// -- Examples / Test Cases --
// Happy Path
console.log(findZeroPosition([-7, -5, -3, 0, 2]) === 3);
console.log(findZeroPosition([-7, -5, -3, -2, 0]) === 4);
console.log(findZeroPosition([-7, -5, -3, -2, -1]) === 5);
console.log(findZeroPosition([3, 5, 7, 9, 11]) === 0);
console.log(findZeroPosition([-3, 5, 7, 9, 11]) === 1);

// Empty Array
console.log(findZeroPosition([]) === 0);

// Single Element Array
console.log(findZeroPosition([2]) === 0);
console.log(findZeroPosition([-2]) === 1);
