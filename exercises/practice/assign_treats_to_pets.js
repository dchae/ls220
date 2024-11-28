"use strict";

function assignTreats(appetites, treats) {
  appetites.sort((a, b) => a - b);
  treats.sort((a, b) => a - b);

  let count = 0;
  let i = 0;

  for (let appetite of appetites) {
    while (i < treats.length && treats[i] < appetite) i++;
    if (i >= treats.length) break;
    count++;
    i++;
  }

  return count;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1, 2, 3], [1, 2, 3]) === 3);
console.log(assignTreats([4, 5, 6], [1, 2, 3]) === 0);

// All test cases should log true.
