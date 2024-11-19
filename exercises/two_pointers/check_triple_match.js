"use strict";

function checkTripleMatch(nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] * 3 === nums[right]) return true;
    if (left + 1 < right && nums[left] * 3 < nums[right]) {
      left++;
    } else {
      right++;
    }
  }

  return false;
}

// function checkTripleMatch(nums) {
//   let anchor = 0,
//     runner = 1;
//
//   while (runner < nums.length) {
//     if (nums[runner] === 3 * nums[anchor]) {
//       console.log(anchor, runner);
//       return true;
//     }
//
//     if (nums[runner] > 3 * nums[anchor]) {
//       anchor++;
//     } else {
//       runner++;
//     }
//   }
//   return false;
// }

// official solution fails in case where:
// nums[runner] > 3 * nums[anchor], and
// runner = anchor + 1, and
// nums[runner] == nums[runner] * 3
// e.g.:
console.log(checkTripleMatch([-1, 0, 1]) === false);

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.
