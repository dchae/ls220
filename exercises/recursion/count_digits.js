"use strict";

function countDigits(n) {
  return 1 + (n < 10 ? 0 : countDigits(Math.floor(n / 10)));
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.
