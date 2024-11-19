"use strict";
/*
-- Problem --
Input:
- matrix: nested array
  - each subarray is sorted in ascending order
  - the first element of each subarray is greater than
    the final element of the preceding subarray
    - i.e., the flattened matrix would be sorted in ascending order
- target
  - integer

Output:
- Boolean representing whether target exists in the nested array

Constraints:
Args
- assume we always receive expected number and types

matrix
- can be empty
- cannot be sparse
- will only contain arrays
- no obj props
- order matters (subarrays are sorted)
- do not mutate
- cannot contain duplicate subarrays

subarrays
- cannot be empty or sparse
- will only contain integers
  - ints can be <= 0
- order matters
  - sorted
- first element of matrix[i] is strictly greater
  than last element of matrix[i-1]
- can contain duplicates
- do not mutate

target
- int
- can be <= 0

result
- bool

Rules:
- return true if target exists in some subarray of matrix
- Time complexity of solution should be O(log(M*N))
  - presumably M is length of the matrix
  - and N is length of the subarray which should contain target

-- DS --
matrix (2D Array), int
row (1D array)
=> bool

-- Algo --
- in order for a row to potentially contain target
  - row[0] must be less than or equal to target
  - if row matrix[k] bounds target, all rows matrix[0...k] also satisfy the
    condition (row[0] <= target)
  - therefore search for maximal row satisfying condition (row[0] <= target)

- within row, normal binary search for target

1. Binary search for the maximal index i such that matrix[i][0] <= target
2. Set candidate array to matrix[i] or empty array if no such i.
3. Binary search for maximal index j such that row[j] <= target
4. Set candidate element to candidate array[j]
5. Return true if element at index j of candidate array equals target
  - else false

*/

// -- Code --
function bsearchMaxIdx(iter, condition) {
  let left = -1;
  let right = iter.length - 1;

  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (condition(iter[mid])) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function findInNestedArray(matrix, target) {
  let candidateSubarray =
    matrix[bsearchMaxIdx(matrix, (row) => row[0] <= target)] ?? [];

  let candidate =
    candidateSubarray[bsearchMaxIdx(candidateSubarray, (e) => e <= target)];

  return candidate === target;
}

// -- Examples / Test Cases --
// All test cases should return true.
// Happy path
console.log(
  findInNestedArray(
    [
      [4, 8, 12],
      [16, 20, 24],
      [28, 32, 36],
    ],
    20,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [3, 6, 9],
      [12, 15, 18],
      [21, 24, 27],
    ],
    27,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [1, 3, 5],
      [7, 9, 11],
      [13, 15, 17],
    ],
    19,
  ) === false,
);
console.log(
  findInNestedArray(
    [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ],
    10,
  ) === true,
);
console.log(
  findInNestedArray(
    [
      [15, 25, 35],
      [45, 55, 65],
      [75, 85, 95],
    ],
    5,
  ) === false,
);

// empty matrix
console.log(findInNestedArray([], 20) === false);

// length 1 matrix
console.log(findInNestedArray([[1, 2, 3, 4]], 2) === true);
console.log(findInNestedArray([[1, 2, 3, 4]], 0) === false);
console.log(findInNestedArray([[1, 2, 3, 4]], 5) === false);

// negative elements
console.log(findInNestedArray([[-3, -1, 0, 1, 4]], 2) === false);
console.log(findInNestedArray([[-3, -1, 0, 1, 4]], -1) === true);
console.log(findInNestedArray([[-3, -1, 0, 1, 4]], 0) === true);
console.log(findInNestedArray([[-3, -1, 0, 1, 4]], 4) === true);
