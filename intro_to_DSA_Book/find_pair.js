"use strict";
// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:

/*
-- Problem --
Input: int array
Output: 2 element int array representing pair that adds up to 10, OR null

constraints:
args
- will always receive one arg of type array

array
- can be empty
- cannot be sparse
- will only contain numbers
- will not contain object properties
- can contain duplicates
- order influences order of returned pair
- do not mutate

array elements
- will always be integers (no NaN or +-INF)
- can be negative or zero

Rules:
- return the pair of elements that add up to 10, else null
- the pair should be sorted by order of appearance

-- Data Structure --
int array
=> seen set
=> int array OR null

[2, 3, 9, 7]
=> {}, 2
=> {2}, 3
=> {2, 3}, 9
=> {2, 3, 9}, 7
=> [3, 7]

-- Algorithm --
1. init seen set
2. iterate through array elements
  - init complement to 10 - current element
  - if complement is in seen
    - return [complement, current element]
  - else update seen
    - seen.add(current element)
3. return null if we have reached this point (no pair to be found)

*/

// -- Code --

function findPair(arr, target = 10) {
  let seen = new Set();

  for (let cur of arr) {
    let complement = target - cur;
    if (seen.has(complement)) return [complement, cur];
    seen.add(cur);
  }

  return null;
}

// happy path
console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]

// duplicates
console.log(findPair([2, 2, 5, 5])); // Output: [5, 5]

// zero
console.log(findPair([1, 3, 0, 10, 4, 5])); // [0, 10]

// negative
console.log(findPair([13, 2, 2, -3, 1])); // [13, -3]

// no pair
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1])); // Output: null
console.log(findPair([1, 2])); // Output: null

// empty arr
console.log(findPair([])); // Output: null
