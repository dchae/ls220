"use strict";

function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}

console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.
