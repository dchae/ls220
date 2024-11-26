"use strict";
// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.

/*
Input:
- integer array nums
- integer target

Output:
- integer representing the length of the smallest contiguous subarray,
  where the sum is greater than or equal to target

-- DS --
int array, int
=> array of rolling sums
=> int

[1, 2, 3], 5
=> [1, 3, 6]
=> minimal sum that is >= target is 6 at index 2
=> maximal sum that is <= minimal sum - target is 1 at index 0
=> index 2 - 0 = 2

[8, 2, 1, 4], 8
=> [8, 10, 11, 15]
=> minSum = 8 at i = 0
=> maxSum = DNE at -1
=> index 0 - -1 = 1

[1, 2, 5, 8], 5
[1, 3, 8, 16]

-- Algo --
1. map array to rolling sum
2. init best
3. for each sum sums[i] greater or equal to target:
  - minimize the length of the subarray by
    maximizing the index j where sum[i] - sum[j] >= target
  - update best
4. return best
*/

// function bsearchMax(arr, condition) {
//   let left = -1;
//   let right = arr.length - 1;
//
//   while (left < right) {
//     let mid = left + Math.ceil((right - left) / 2);
//     if (condition(mid)) {
//       left = mid;
//     } else {
//       right = mid - 1;
//     }
//   }
//
//   return left;
// }
//
// function toRollingSums(nums) {
//   let curSum = 0;
//   return nums.map((x) => (curSum += x));
// }
//
// function minLengthForTargetSum(nums, target) {
//   let sums = toRollingSums(nums);
//   let best = Infinity;
//   for (let i = sums.length - 1; sums[i] >= target; i--) {
//     // for every sum greater or equal to target
//     // maximize the numbers we can cut out
//     let maxUnneededIdx = bsearchMax(sums, (j) => sums[i] - sums[j] >= target);
//     best = Math.min(best, i - maxUnneededIdx);
//   }
//
//   return best === Infinity ? 0 : best;
// }

/*
-- Algo --
1. binary search for minimal length of subarray where sum(subarray) >= target
*/

function bsearchMin(arr, condition) {
  let left = 1;
  let right = arr.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return condition(left) ? left : 0;
}

function maxSubarraySum(nums, k) {
  let curSum = nums.slice(0, k).reduce((acc, x) => acc + x, 0);
  let best = curSum;

  for (let i = 0; i + k < nums.length; i++) {
    curSum += nums[i + k];
    curSum -= nums[i];
    best = Math.max(best, curSum);
  }

  return best;
}

function minLengthForTargetSum(nums, target) {
  let minLength = bsearchMin(nums, (length) => {
    return maxSubarraySum(nums, length) >= target;
  });

  return minLength;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
