"use strict";
/*
-- Problem --
input:
- nums
  - integer array sorted in ascending order
- target
  - integer

output:
- boolean representing whether target appears more than three times in the array

-- Algo --
1. binary search for minimal index i where nums[i] >= target
2. return true if nums[i] === target && nums[i + 3] === target
*/

// Code
function bsearchMin(iter, condition) {
  let left = 0;
  let right = iter.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(iter[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function isTargetFrequent(nums, target) {
  let i = bsearchMin(nums, (x) => x >= target);
  return nums[i] === target && nums[i + 3] === target;
}

// -- Examples / Test Cases
// All test cases should log true.
// Happy path
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// target DNE
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 0) === false);
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 5) === false);

// empty array
console.log(isTargetFrequent([], 5) === false);

// length 1-4 arrays
console.log(isTargetFrequent([5], 5) === false);
console.log(isTargetFrequent([5, 5], 5) === false);
console.log(isTargetFrequent([5, 5, 5], 5) === false);
console.log(isTargetFrequent([5, 5, 5, 5], 5) === true);
