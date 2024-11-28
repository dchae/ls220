"use strict";
/*
-- Problem --
Input:
- nums
  - integer array
  - sorted in asc order
- target
  - integer

Output:
- boolean
  - whether target appears more than three times
    - i.e. whether the length of the contiguous
     subarray containing all elements equal to target
     is greater than 3

Constraints:
Args
- will always receive expected number and types of args

nums
- can be empty
- will not be sparse
- will only contain integers
  - neg, 0, pos
- can contain duplicates
- order: sorted asc
- do not mutate
- no obj props

target
- integer
  - neg, 0, pos

Rules:
- return true if the element at the minimal index i where (nums[i] >= target)
  AND the element at nums[i + 3] are both equal to target
- if nums is empty return false

-- DS --
sorted int array
=> boolean

-- Algo --
1. bsearch for the minimal index i where (nums[i] >= target) is true
2. return nums[i] === target && nums[i + 3] === target
*/

// -- Code --
function bsearchMin(nums, condition) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function isTargetFrequent(nums, target) {
  let targetIdx = bsearchMin(nums, (i) => nums[i] >= target);
  // console.log(nums, target);
  // console.log(nums[targetIdx], " at: ", targetIdx);
  return nums[targetIdx] === target && nums[targetIdx + 3] === target;
}

// Happy path
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// empty array
console.log(isTargetFrequent([], 3) === false);

// negatives
console.log(
  isTargetFrequent([-3, -3, -1, -1, -1, -1, 0, 0, 2, 3, 3, 3, 4], -1) === true,
);
console.log(
  isTargetFrequent([-3, -3, -2, -1, -1, -1, 0, 0, 2, 3, 3, 3, 4], -1) === false,
);

// 0
console.log(
  isTargetFrequent([-3, -3, -1, -1, -1, -1, 0, 0, 2, 3, 3, 3, 4], 0) === false,
);
console.log(
  isTargetFrequent([-3, -3, -1, -1, -1, -1, 0, 0, 0, 0, 2, 3, 3, 3, 4], 0) ===
    true,
);
