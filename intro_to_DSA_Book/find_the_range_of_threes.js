// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

"use strict";
/*
-- Problem --
*/

// Code
function bsearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (arr[left] !== target) left = -1;
  return left;
}

// function bsearchLast(arr, target) {
//   // find the index of the last occurrence of target
//   let left = 0;
//   let right = arr.length - 1;
//
//   // while (left <= right) {
//   //   let mid = left + Math.floor((right - left) / 2);
//   //   if (arr[mid] > target) {
//   //     right = mid - 1;
//   //   } else {
//   //     left = mid + 1;
//   //   }
//   // }
//   //
//   // return left - 1;
//
//   while (left < right) {
//     let mid = left + Math.floor((right - left) / 2);
//     if (arr[mid] >= target + 1) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//
//   if (arr[left] === target) return left;
//   if (arr[left - 1] !== target) return -1;
//   return left - 1;
// }

function bsearchLast(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  if (arr[left] !== target) return -1;
  return left;
}

function findRange(nums) {
  let start = bsearch(nums, 3);
  let end = bsearchLast(nums, 3);
  console.log(start, end);
  if (start < 0 || end < 0) return [-1, -1];
  return [start, end];
}

// Examples / Test Cases

console.log(
  JSON.stringify(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5])) ===
    JSON.stringify([2, 6]),
);

console.log(
  JSON.stringify(findRange([1, 2, 3, 4, 5])) === JSON.stringify([2, 2]),
);

console.log(
  JSON.stringify(findRange([0, 1, 2, 2, 2])) === JSON.stringify([-1, -1]),
);

console.log(
  JSON.stringify(findRange([1, 2, 3, 3, 3, 3, 6, 7])) ===
    JSON.stringify([2, 5]),
);

console.log(
  JSON.stringify(findRange([1, 2, 3, 3, 3, 3, 3, 3])) ===
    JSON.stringify([2, 7]),
);

console.log(
  JSON.stringify(findRange([-3, -2, 3, 3, 3, 3, 3, 3])) ===
    JSON.stringify([2, 7]),
);

console.log(
  JSON.stringify(findRange([3, 3, 3, 3, 3])) === JSON.stringify([0, 4]),
);

console.log(
  JSON.stringify(findRange([1, 2, 5, 5, 6, 9, 10])) ===
    JSON.stringify([-1, -1]),
);
