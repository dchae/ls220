"use strict";

function assignTreats(pets, treats) {
  let sortedPets = pets.toSorted((a, b) => a - b);
  let sortedTreats = treats.toSorted((a, b) => a - b);

  let i = 0;
  let j = 0;
  let satisfiedPets = 0;
  while (i < sortedPets.length && j < sortedTreats.length) {
    if (sortedTreats[j] >= sortedPets[i]) {
      satisfiedPets++;
      i++;
    }
    j++;
  }

  return satisfiedPets;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1, 2, 3], [1, 2, 3]) === 3);
console.log(assignTreats([4, 5, 6], [1, 2, 3]) === 0);

// All test cases should log true.
