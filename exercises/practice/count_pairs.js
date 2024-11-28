"use strict";

function countPairs(nums, target) {
  if (nums.length < 2) return 0;

  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      count += right - left;
      right--;
    } else {
      left++;
    }
  }

  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs
