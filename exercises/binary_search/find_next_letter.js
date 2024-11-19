"use strict";
/*
-- Problem --
Input:
- array `chars` containing lowercase letters sorted in ascending order
- char `key`

Output:
- char representing the smallest letter in `chars` greater than key
  - ELSE first letter in chars

Constraints:
Args
- Assume we will always receive one array and one string arg

chars (array)
- assume it cannot be empty
- assume it cannot be sparse
- will only contain lowercase alpha chars
- order matters -> the array is sorted in increasing lexicographical order
- assume it may contain duplicates
- assume it will not contain object properties
- do not mutate

key (char / length 1 string)
- assume it will be length 1 (not empty)
- will contain one lowercase alpha char

-- DS --
Array of chars
=> char

-- Algo --
1. Binary search for the minimal element greater than target
  - at the end of the search, left is the minimal index satisfying:
    - condition: chars[i] > key
  - if chars[left] <= key, return chars[0]
*/

// -- Code --
function findNextLetter(chars, key) {
  let [left, right] = [0, chars.length - 1];
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (chars[mid] > key) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (chars[left] <= key) left = 0;
  return chars[left];
}

// -- Examples / Test Cases --

// Happy path
console.log(findNextLetter(["b", "d", "f"], "a") === "b");
console.log(findNextLetter(["b", "d", "f"], "c") === "d");
console.log(findNextLetter(["b", "d", "f"], "f") === "b");
console.log(findNextLetter(["c", "f", "j"], "c") === "f");
console.log(findNextLetter(["a", "c", "f", "h", "i", "j"], "g") === "h");

// duplicates
console.log(findNextLetter(["a", "a", "b", "c"], "a") === "b");
console.log(findNextLetter(["a", "b", "b", "c"], "a") === "b");
console.log(findNextLetter(["a", "b", "b", "c"], "b") === "c");

// length 1
console.log(findNextLetter(["b"], "a") === "b");
console.log(findNextLetter(["a"], "a") === "a");
console.log(findNextLetter(["a"], "b") === "a");

// All test cases should log true.
