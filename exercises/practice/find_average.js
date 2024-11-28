"use strict";

function findAverages(nums, k) {
  let res = [];
  let curSum = nums.slice(0, k).reduce((acc, x) => acc + x, 0);
  let left = 0;
  let right = k - 1;

  while (right < nums.length) {
    res.push(curSum / k);

    curSum -= nums[left];
    left++;
    right++;
    curSum += nums[right];
  }

  return res;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2)); // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1)); // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
