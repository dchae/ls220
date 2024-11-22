"use strict";
// Imagine a series of vertical barriers arranged in a straight
// line at equal distances across a flat field.
// These barriers have different heights. After a rainstorm,
// water collects between the barriers, forming reservoirs.
// Your task is to determine the maximum volume of rainwater
// that can be captured between any two barriers,
// without the water spilling over any of the tops.

// Write a function `maxRainwater` that takes an array of
// barrier `heights` and calculates the maximum volume
// of rainwater that can be harvested between any two barriers.

// The array `heights` represents the height of each barrier,
// where `heights[i]` is the height of the i-th barrier.
// The distance between each barrier is uniform.

// The input array will contain at least 2 values.

// Example:
// Input: [1, 2, 1]
// Output: 2
// Explanation: The distance between the first and
// third barrier is 2, and the height is 1, so
// the maximum amount of rainfall is 2 * 1 = 2

//   |    =>    |
// |_|_|      |*|*|

// Example:
// Input: [2, 3, 4, 2]
// Output: 6
// Explanation: The distance between the first and
// fourth barrier is 3, and the height is 2, so the
// maximum amount of rainfall is 3 * 2 = 6

//     |            |
//   | |    =>    | |
// | | | |      |*|*|*|
// |_|_|_|      |*|*|*|

/*
-- Problem --
Input: integer array representing heights
Output: integer representing maximum area between any two indices

- the base case is the area between the first and last barriers
  - min(height[0], height[length - 1]) * (length - 1 - 0)

- we want to iterate without missing potential cases that increase the area
- we can step the side which is lower (or equal)
  - since the area can only be increased by increasing the smaller height
    we should move the pointer referencing the smaller barrier

- each step decreases the area by the min height

-- Algo --
1. init best to 0
2. set left and right pointers
3. iterate while left < right; for each step
  - calculate area
  - update best
  - increment left if it is shorter
  - else decrement right
*/

function maxRainwater(heights) {
  let best = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let width = right - left;
    let smallerHeight = Math.min(heights[left], heights[right]);
    let area = width * smallerHeight;
    best = Math.max(best, area);

    if (heights[left] === smallerHeight) {
      left++;
    } else {
      right--;
    }
  }

  return best;
}

console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(
  maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44,
);
console.log(
  maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75,
);

// All test cases should log true