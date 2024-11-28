"use strict";
/*
You're given an array, chars, of lowercase English letters sorted in
ascending order, and a lowercase letter, key.
Your task is to find the smallest letter in chars that is
lexicographically greater than key.
If no such letter exists, return the first letter in chars.

-- Problem --
input:
- chars, sorted array of lowercase alpha chars
- key, lowercase alpha char

constraints
args
- will always receive two args of type array, string

chars (array)
- will not be empty or sparse
- will only contain lowercase alpha chars (strings of length 1)
- can contain duplicates
- order: sorted ascending
- do not mutate
- no obj props

key (string)
- will always be a char (length 1 str)
- will always be a lowercase alpha

rules:
- find the element at the minimal index i where chars[i] > key
- if no such element, return chars[0]

-- DS --
sorted array
=> bsearch pointers
=> index
=> element

-- Algo --
1. bsearch for the minimal index i where the condition chars[i] > key is true
2. if the condition is true for the resulting index, return the char at that index
  - else return chars[0];
*/

// Code
function bsearchMin(arr, condition) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return condition(left) ? left : 0;
}

function findNextLetter(chars, key) {
  let minIndex = bsearchMin(chars, (i) => chars[i] > key);
  return chars[minIndex];
}

// Examples / Test Cases
console.log(findNextLetter(["b", "d", "f"], "a") === "b");
console.log(findNextLetter(["b", "d", "f"], "c") === "d");
console.log(findNextLetter(["b", "d", "f"], "f") === "b");
console.log(findNextLetter(["a", "a", "b", "c"], "a") === "b");
console.log(findNextLetter(["c", "f", "j"], "c") === "f");
console.log(findNextLetter(["a", "c", "f", "h", "i", "j"], "g") === "h");
// All test cases should log true.
