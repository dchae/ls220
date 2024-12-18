"use strict";

function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
