// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

// Example:
// Input: nums = [1, 2, 1, 4, 8]
// Output: [2, 4, 8, 1, 1]
//    [1, 2, 1, 4, 8] (i = 0, j = 1)
// => [2, 1, 1, 4, 8] (i = 1, j = 3)
// => [2, 4, 1, 1, 8] (i = 2, j = 4)
// => [2, 4, 8, 1, 1] (end)

"use strict";

// naive
// function moveOnes(arr) {
//   let i = 0;
//   let count = 0;
//   while (i < arr.length - 1 - count) {
//     if (arr[i] === 1) {
//       count++;
//       arr.push(arr.splice(i, 1)[0]);
//     } else i++;
//   }
//
//   return arr;
// }

// two-pointer (slow/fast)
// function moveOnes(arr) {
//   let oneCount = 0;
//   // console.log(arr, 0, 0);
//
//   for (let i = 0; i + oneCount < arr.length; i++) {
//     while (arr[i + oneCount] === 1 && i + oneCount < arr.length - 1) oneCount++;
//     if (oneCount) [arr[i], arr[i + oneCount]] = [arr[i + oneCount], arr[i]];
//
//     // console.log(arr, i, i + oneCount);
//   }
//
//   return arr;
// }

// function moveOnes(arr) {
//   let slow = 0;
//   let fast = 0;
//   while (fast < arr.length) {
//     if (fast - slow && arr[fast] !== 1) {
//       [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
//       slow++;
//     }
//     fast++;
//   }
//
//   return arr;
// }

// write/reader
function moveOnes(arr) {
  let reader = 0;
  let writer = 0;
  while (writer < arr.length) {
    while (arr[reader] === 1) {
      reader++;
    }

    arr[writer] = arr[reader];
    if (reader >= arr.length) arr[writer] = 1;

    writer++;
    reader++;
  }

  return arr;
}

console.log(moveOnes([1, 2, 1, 4, 8])); // [2, 4, 8, 1, 1]
console.log(moveOnes([1, 1, 1, 1, 8])); // [8, 1, 1, 1, 1]
console.log(moveOnes([1, 1, 1, 1, 1])); // [8, 1, 1, 1, 1]

const nums1 = [1, 2, 1, 4, 8];
const transformedNums1 = moveOnes(nums1);
console.log(nums1 === transformedNums1); // true
console.log(transformedNums1); // [2, 4, 8, 1, 1]

const nums2 = [3, 1, 5, 1, 1, 4, 8, 1];
const transformedNums2 = moveOnes(nums2);
console.log(nums2 === transformedNums2); // true
console.log(transformedNums2); // [3, 5, 4, 8, 1, 1, 1, 1]
