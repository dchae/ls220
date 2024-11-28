"use strict";
/*
-- Problem --
Input: ordered integer array nums
Output: boolean whether one element is 3 times the value of another

Constraints:
args
- will always receive one array arg

nums array
- can be empty
- cannot be sparse
- will only contain integers (pos, neg, 0)
- ordered in non-decreasing order
- can contain duplicates
- do not mutate
- no obj props

Rules:
- if there exists i, j such that nums[i] != nums[j] && nums[i] * 3 == nums[j]) return true
- else return false

- empty or length 1 array should return false;

- don't use filter, map, reduce, find, includes, indexOf, lastIndexOf
- O(N) solution

-- DS --
array
=> some traversal
=> bool

-- Algo --
1. init seen set
2. iterate through array, updating seen
  - if num * 3 in seen or num / 3 in seen and the seen value !== num, return true
3. return false

*/

// code
// function checkTripleMatch(nums) {
//   let seen = new Set();
//   for (let x of nums) {
//     if (x && (seen.has(x * 3) || seen.has(x / 3))) return true;
//     seen.add(x);
//   }
//   return false;
// }

// solution for only non-negative numbers
function checkTripleMatch(nums) {
  let left = 0;
  let right = left + 1;

  while (right < nums.length) {
    if (nums[left] * 3 === nums[right] && nums[left] !== nums[right])
      return true;
    if (nums[left] * 3 > nums[right]) {
      right++;
    } else {
      left++;
    }
  }

  return false;
}

console.log(checkTripleMatch([]) === false);
console.log(checkTripleMatch([1]) === false);
// console.log(checkTripleMatch([-3, -1]) === true);
console.log(checkTripleMatch([1, 1, 1]) === false);
console.log(checkTripleMatch([0, 1, 1]) === false);
console.log(checkTripleMatch([0, 0, 1]) === false);
console.log(checkTripleMatch([1, 3]) === true);
console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.
