"use strict";
// Create a function `combinations` that takes an array of integers and an
// integer, k, and returns all possible combinations of k numbers chosen
// from the array. The input array will contain at most 20 numbers.

// Example:
// Input: nums = [1,2,3,4], k = 2
// Output: [
//   [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
// ]
/*
-- Problem --
Input:
- nums, integer array
- k, integer

Output:
- 2D array of length k integer subarrays
- contains all unique combinations of k elements from nums

Constraints:
Args
- will always receive one array arg and one integer arg, in that order

nums (int array)
- can be empty
- cannot be sparse
- will only contain integers
  - can be positive, negative, 0
- order does not matter
- may contain duplicate elements
- do not mutate
- will not have obj props

k (int)
- can be positive, or 0
  - will not be negative

output (array)
- order does not matter

Rules:
- return array containing every unique length k combination of elements from nums
- a combination is an unordered subset of elements
  - i.e., [1, 2] and [2, 1] are the same combination

- if nums is empty:
  - if k === 0
    - return array containing one empty array
  else
    - return empty array
- if nums contains duplicate elements:
  - they may be chosen multiple times
    - [1, 1] is a valid combination for input nums = [1, 1, 1, 2], k = 2
  - combinations must be unique
    - the combination [1, 1] will only appear once
    for input nums = [1, 1, 1, 2], k = 2

- do not mutate nums

-- DS --
array
=> non-ragged 2D nested array

-- Algo --
1. explore all potential combination recursively
  - if combination is length k, add it to res
2. return res

HELPER
backtrack(candidates, combination, res)
- terminal condition
  - if length of combination is k, push a copy to res
  - return

- prune paths
- explore paths
  - for every index:
    - add element at index to combination
    - remove that index and all previous indices from candidates
    - call backtrack(newCandidates, combination, res)
    - remove the index from combination
    - add the index back to candidates

*/
// code
function backtrack(candidates, k, start = 0, combination = [], res = []) {
  if (combination.length === k) {
    res.push(combination.slice());
  } else {
    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(candidates, k, i + 1, combination, res);
      combination.pop();
    }
  }
  return res;
}

function unique(arr) {
  let set = new Set(arr.map((comb) => JSON.stringify(comb)));
  return [...set].map((combStr) => JSON.parse(combStr));
}

function combinations(nums, k) {
  let res = backtrack(nums, k);
  return unique(res);
}

function testCombinations(nums, k, expectedLength) {
  const result = combinations(nums, k);
  if (result.length !== expectedLength) return false;

  const stringifiedCombs = result.map(JSON.stringify);
  const uniqueCombs = new Set(stringifiedCombs);
  return uniqueCombs.size === expectedLength;
}

// Test Cases:
// empty nums
console.log(testCombinations([], 2, 0)); // C(4,2) = 6
console.log(testCombinations([], 0, 1)); // C(4,2) = 6

// duplicates
console.log(testCombinations([1, 1, 1, 2], 2, 2));
console.log(testCombinations([1, 1, 1, 2], 1, 2));
console.log(testCombinations([1, 1, 1, 2], 3, 2));

console.log(testCombinations([1, 2, 3, 4], 2, 6)); // C(4,2) = 6
console.log(testCombinations([1, 2, 3, 4, 5], 3, 10)); // C(5,3) = 10
console.log(testCombinations([1, 2, 3, 4, 5, 6], 4, 15)); // C(6,4) = 15
console.log(testCombinations([1, 2, 3, 4, 5, 6, 7], 3, 35)); // C(7,3) = 35
console.log(testCombinations([1, 2, 3, 4, 5, 6, 7, 8], 5, 56)); // C(8,5) = 56
console.log(
  testCombinations(
    [...Array(10).keys()].map((x) => x + 1),
    6,
    210,
  ),
); // C(10,6) = 210
console.log(
  testCombinations(
    [...Array(20).keys()].map((x) => x + 1),
    10,
    184756,
  ),
); // C(20,10) = 184,756
