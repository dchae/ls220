"use strict";
// Create a function that calculates the sum of the first `n`
// natural numbers. A natural number is a positive integer
// starting from 1. Therefore, the sum of the first `n` natural
// numbers is the sum of all integers from 1 to `n`.

// For example, if `n` is 5, the sum would be 1 + 2 + 3 + 4 + 5 == 15.

/*
A [data structure] is a [problem definition] if [some condition is true]
and the rest of the [data structure] is [problem definition].

A number is a sum of the first n natural numbers if
it is positive and the sum of n and the sum of the first n - 1 natural numbers

*/

function sumOfNaturalNumbers(n) {
  if (!n) return 0;

  return n + sumOfNaturalNumbers(n - 1);
}

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);

// All test cases should log true.
