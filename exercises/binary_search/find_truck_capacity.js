"use strict";
// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters

/*
-- Problem --
Input:
- integer array orderVolumes
- integer maxTrips
Output:
- integer representing the minimum capacity needed
  to deliver all orders in maxTrips trips

-- DS --
integer array
=> int

-- Algo --
1. binary search for the minimal capacity that satisfies the condition:
 , capacity =   tripsNeeded(orderVolumes, capacity) <= maxTrips

HELPER
tripsNeeded(orderVolumes, capacity): int
1. init tripCount to 0
2. init curVolume to 0
3. for orderVolume in orderVolumes
  - if adding orderVolume to curVolume would exceed capacity
    - increment tripCount
    - reset curVolume
    - add orderVolume to curVolume
  - else
    - add orderVolume to curVolume
4. return tripCount

*/

function getMaxAndSum(nums) {
  let max = nums[0];
  let sum = 0;
  for (let x of nums) {
    max = Math.max(max, x);
    sum += max;
  }

  return [max, sum];
}

function tripsNeeded(orderVolumes, capacity) {
  let tripCount = 0;
  let curVolume = 0;

  for (let i = 0; i < orderVolumes.length; i++) {
    // we are guaranteed to be able to add any orderVolume to an empty truck
    curVolume += orderVolumes[i];
    // if we don't have space for the next orderVolume or this is the last trip,
    // end the current trip
    if (!(curVolume + orderVolumes[i + 1] <= capacity)) {
      tripCount++;
      curVolume = 0;
    }
  }

  return tripCount;
}

function bsearchMin(left, right, condition) {
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

function findTruckCapacity(orderVolumes, maxTrips) {
  let [maxVolume, volumeSum] = getMaxAndSum(orderVolumes);
  let minCapacity = bsearchMin(maxVolume, volumeSum, (capacity) => {
    return tripsNeeded(orderVolumes, capacity) <= maxTrips;
  });

  return minCapacity;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
