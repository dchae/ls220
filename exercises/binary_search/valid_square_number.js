"use strict";
/*
-- Problem --
Input: positive integer num
Output: boolean representing whether num is a square

-- Algo --
1. Binary search for minimum number x that satisfies condition x ** 2 >= num
2. return true if x**2 === num else false
*/

// Code
function isSquareInteger(num) {
  let left = 1;
  let right = num;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid ** 2 >= num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left ** 2 === num;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
