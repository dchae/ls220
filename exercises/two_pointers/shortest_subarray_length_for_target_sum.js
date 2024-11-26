"use strict";
// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.

/*
-- Algo --
inchworm
1. init best to Infinity
2. init left and right pointers to 0, 0
3. while left and right are less than nums length
  - the window bound by left and right is the current subarray
  - if the sum of the window is less than the target, increment right
  - else update best and increment left
4. return best

- optimise by keeping track of the sum as the window moves
*/

function sum(nums) {
  return nums.reduce((acc, x) => acc + x, 0);
}

function minLengthForTargetSum(nums, target) {
  let best;
  let left = 0;
  let right = 0;
  let curSum = nums[0];

  while (left <= right && right < nums.length) {
    if (curSum < target) {
      right++;
      curSum += nums[right];
    } else {
      let length = right + 1 - left;
      if (!(length >= best)) best = length;
      curSum -= nums[left];
      left++;
    }
  }

  return best ?? 0;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
