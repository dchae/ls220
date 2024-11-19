"use strict";
// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.
/*
-- Problem --
Input: sorted integer array
Output: integer representing the size of the smallest group (not including 0s)
        when the elements of the array are partitioned by their sign

Constraints:
Args
- Will always receive one arg of type array

nums (array)
- can be empty
- cannot be sparse
- will only contain integers
  - No NaN, +/- INF
  - No fractionals
- will be sorted in increasing order
- can contain duplicates
- do not mutate
- will not contain object properties

Rules:
- find the number of negative elements and the number of positive elements
  - return the lesser of the two
- if either count is zero, return zero

-- DS --
Array
=> count

-- Algo --
1. Use binary search to determine the index of the maximal
   element satisfying x < 0
    - return last index of negative number OR -1
2. Determine negativeCount = maximalNegativeIndex + 1
3. Use binary search to determine the index of the minimal
   element satisfying x > 0
    - return first index of positive number OR array length
4. Deterine positiveCount = nums.length - minimalPositiveIndex
5. return min(negativeCount, positiveCount)
*/

// Code
function bsearchMin(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function bsearchMax(arr, target) {
  // let left = 0;
  // let right = arr.length;
  //
  // while (left < right) {
  //   let mid = left + Math.floor((right - left) / 2);
  //
  //   if (arr[mid] >= target) {
  //     right = mid;
  //   } else {
  //     left = mid + 1;
  //   }
  // }
  //
  // return left - 1;

  let left = -1;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);

    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
}

function minimumCount(nums) {
  let maximalNegativeIndex = bsearchMax(nums, 0);
  let minimalPositiveIndex = bsearchMin(nums, 0);

  // console.log(
  //   "smallest positive num: " +
  //     nums[minimalPositiveIndex] +
  //     " at: " +
  //     minimalPositiveIndex,
  // );
  // console.log(
  //   "greatest negative num: " +
  //     nums[maximalNegativeIndex] +
  //     " at: " +
  //     maximalNegativeIndex,
  // );

  let negativeCount = maximalNegativeIndex + 1;
  let positiveCount = nums.length - minimalPositiveIndex;

  return Math.min(negativeCount, positiveCount);
}

// -- Examples / Test Cases --
console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
