"use strict";

function bsearchMin(n, condition) {
  let left = 0;
  let right = n;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function isSquareInteger(n) {
  let candidate = bsearchMin(n, (x) => x ** 2 >= n);
  return candidate ** 2 === n;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// zero
console.log(isSquareInteger(0) === true);

// neg
console.log(isSquareInteger(-1) === false);
console.log(isSquareInteger(-4) === false);
