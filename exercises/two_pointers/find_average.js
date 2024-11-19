"use strict";

function getAvg(arr) {
  return arr.reduce((sum, x) => sum + x) / arr.length;
}

// function findAverages(arr, k) {
//   return arr.slice(k - 1).map((_, i) => getAvg(arr.slice(i, i + k)));
// }

// one-liner
function findAverages(arr, k) {
  return arr
    .slice(k - 1)
    .map((_, i) => arr.slice(i, i + k).reduce((sum, x) => sum + x) / k);
}

// function findAverages(arr, k) {
//   let averages = [];
//   let kSum = 0;
//   for (let i = 0; i < k - 1; i++) kSum += arr[i];
//
//   for (let i = k - 1; i < arr.length; i++) {
//     kSum += -(arr[i - k] ?? 0) + arr[i];
//     averages.push(kSum / k);
//   }
//
//   return averages;
// }

function findAverages(arr, k) {
  let kSum = 0;

  return arr.reduce((averages, x, i) => {
    kSum += x - (arr[i - k] ?? 0);

    if (i >= k - 1) averages.push(kSum / k);
    return averages;
  }, []);
}

// -- Examples / Test Cases --
console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2)); // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1)); // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]

console.log(findAverages([1, 2, 3, 4, 5], 5)); // [ 3 ]
