"use strict";
// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

// Example:
// Input: terrain = [1, 3, 2, 1, 4, 5]
// Output: 1 or 5
// Explanation: Both index 1 (elevation 3) and index 5
//              (elevation 5) are peaks.

/*
-- Problem --
Input: integer array
Output: integer (index of peak element)

Constraints:
args
- will always receive one array arg

array
- will not be empty or sparse
- will only contain integers (neg, pos, 0)
- can contain duplicates
- will not contain adjacent duplicates
- order matters
- do not mutate
- no obj props

Rules:
- return the index of any element for which:
  - the element to the left is not greater or equal to the element
  - the element to the right is not greater or equal to the element

-- DS --
array
=> int

-- Algo --

Linear Time
1. iterate through the array with i
  - if terrain[i-1] is not greater or equal to terrain[i]
  - and the same is true for terrain[i+1]
  - return true
2. return false

*/

// function findPeakInTerrain(terrain) {
//   for (let i = 0; i < terrain.length; i++) {
//     if (!(terrain[i - 1] >= terrain[i]) && !(terrain[i + 1] >= terrain[i]))
//       return i;
//   }
//   return -1;
// }

function findPeakInTerrain(terrain) {
  let left = 0;
  let right = terrain.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (
      !(terrain[mid - 1] >= terrain[mid]) &&
      !(terrain[mid + 1] >= terrain[mid])
    ) {
      return mid;
    } else if (!(terrain[mid + 1] >= terrain[mid])) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// All test cases should log true
