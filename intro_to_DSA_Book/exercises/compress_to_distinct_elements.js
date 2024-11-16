"use strict";
// Given a sorted array of integers, your task is to implement a function
// `compressToDistinct` that modifies the array in-place to ensure
// it starts with a sequence of distinct elements in their original order.
// After making these modifications, the function should return
// the count of these distinct elements.

// The elements in the latter part of the array, after the distinct ones, are
// not important.

// Example:

// If the input array is [3, 3, 5, 7, 7, 8], there are four distinct elements:
// 3, 5, 7, and 8.
// After modifying the array to place these distinct elements at the beginning,
// the resulting array should look like this -> [3, 5, 7, 8, _, _].
// The underscores (_) represent the elements that are no longer important.

// You should name the function `compressToDistinct` for the tests to work
// correctly.
//
// two pointers
// i represents the index after the last confirmed distinct element
// j represents the index of the first unseen element
// i moves when we confirm and swap a new element
// j moves every iteration
// at the end, i represents the count of distinct elements

// function compressToDistinct(arr) {
//   let distinctCount = 0;
//   let seen = new Set();
//
//   for (let j = 0; j < arr.length; j++) {
//     // if (!arr.slice(0, distinctCount).includes(arr[j])) {
//     if (!seen.has(arr[j])) {
//       seen.add(arr[j]);
//       arr[distinctCount] = arr[j];
//       distinctCount++;
//     }
//   }
//
//   return distinctCount;
// }

function compressToDistinct(arr) {
  if (arr.length === 0) return 0;

  let distinctCount = 1;

  for (let j = 1; j < arr.length; j++) {
    if (arr[distinctCount - 1] !== arr[j]) {
      arr[distinctCount] = arr[j];
      distinctCount++;
    }
  }

  console.log(arr);
  console.log(distinctCount);
  return distinctCount;
}

function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array
    .slice(0, expectedLength)
    .every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([1, 3, 5, 7, 7, 8], 5));
console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.
