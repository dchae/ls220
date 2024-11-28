"use strict";

function countDigits(n) {
  n = Math.abs(n);

  if (n < 10) return 1;

  return countDigits(Math.floor(n / 10)) + 1;
}

console.log(countDigits(12) === 2);
console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// neg
console.log(countDigits(-0) === 1);
console.log(countDigits(-7) === 1);
console.log(countDigits(-17) === 2);
console.log(countDigits(-12345) === 5);
