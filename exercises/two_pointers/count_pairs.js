"use strict";
/*
-- Problem --
Input: integer array sorted in ascending order, integer target
Output: count of pairs in array that sum to greater than target

*/

// Code
function countPairs(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    let pairSum = nums[left] + nums[right];
    if (pairSum > target) {
      count += right - left;
      // reduce pairsum
      right--;
    } else left++;
  }

  return count;
}

// -- Examples / Test Cases --
console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs

console.log(countPairs([1, 2], 2) === 1);
console.log(countPairs([1, 2], 3) === 0);
console.log(countPairs([1], 3) === 0);
console.log(countPairs([], 3) === 0);
