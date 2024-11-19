"use strict";

/*
-- Problem --
input: integer array nums, integer target
output: maximum integer sum, where:
      - s = nums[i] + nums[j]
      - i != j
      - s < target

Constraints:
- Will always receive one array and one integer as args

nums (Array)
- Can be empty
- Cannot be sparse
- Will only contain integers
  - positive, negative, 0
- can contain duplicates
- order matters: return the first occuring pair with the max sum
- do not mutate
- will not have obj properties

nums elements, target (int)
- can be only non-negative integers
  - positive, 0
  - no NaN or +/- INF

Rules:
- Return the maximum twoSum that is less than target
- If array is empty, has length < 1, or otherwise
  does not contain a pair that sums to less than the target,
  return -1

-- DS --
Int Array, Int
=> Int

-- Algo --
1. sort array
2. closing window iterate through the array

1. for every possible return value,
   return it if a pair is found with that sum
  - for twoSum = target - 1; twoSum--
    - if pairExists(nums, twoSum) return twoSum
2. return -1

pairExists(nums, target)
1. init seen set
2. for x in nums
  - init complement
  if complement has been seen
  return true
3. return false

*/
// -- Code --
function pairExists(nums, target) {
  let seen = new Set();
  for (let x of nums) {
    if (seen.has(target - x)) return true;
    seen.add(x);
  }

  return false;
}

function twoSumLessThanTarget(nums, target) {
  let twoSum = target - 1;
  while (twoSum >= 0) {
    if (pairExists(nums, twoSum)) break;
    twoSum--;
  }

  return twoSum;
}

function twoSumLessThanTarget(nums, target) {
  let sorted = nums.toSorted((a, b) => a - b);
  let best = -1;
  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    let curSum = sorted[left] + sorted[right];
    if (curSum < target) {
      if (best < curSum) best = curSum;
      left++;
    } else {
      right--;
    }
  }

  return best;
}

// -- Examples / Test Cases --
console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);

// empty
console.log(twoSumLessThanTarget([], 5) === -1);
console.log(twoSumLessThanTarget([0], 5) === -1);
console.log(twoSumLessThanTarget([5], 5) === -1);
console.log(twoSumLessThanTarget([3], 6) === -1);
console.log(twoSumLessThanTarget([3, 3], 6) === -1);

console.log(twoSumLessThanTarget([3, 3], 7) === 6);
console.log(twoSumLessThanTarget([3, 0], 4) === 3);
console.log(twoSumLessThanTarget([0, 0], 0) === -1);
console.log(twoSumLessThanTarget([0, 1], 1) === -1);
console.log(twoSumLessThanTarget([0, 0], 1) === 0);
// All test cases should log true
