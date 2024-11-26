"use strict";
// Write a function `rooms` that determines the minimum number of
// rooms required to handle a series of interviews given their
// time intervals.

// Each interval is represented as an array [start, end],
// where `start` is the start time and `end` is the end
// time of the interview.

// The function should return the number of conference rooms
// required to ensure no two interviews overlap in the same room.

// Example I:
// Input: intervals = [[20, 25], [10, 15], [0, 25]]
// Output: 2
// Explanation: The first interview is scheduled from
//              time 0 to 25. The second interview is
//              from time 10 to 15 and overlaps with
//              the first interview, requiring a second
//              room. The third interview from 20 to 25
//              also overlaps with the first. Thus, a
//              minimum of two rooms are required.

// Example II:
// Input: intervals = [[5, 9], [1, 3]]
// Output: 1
// Explanation: The first interview is scheduled from
//              time 5 to 9. The second interview is
//              from time 1 to 3. These two interviews
//              do not overlap, therefore only one
//              conference room is needed.

/*
-- Problem --
input: 2d array of length 2 integer subarrays
       representing interview start and end times
output: integer representing minimum number of rooms required to host interviews

Constraints
args
- will always receive one array argument

interviews (array)
- can be empty
- cannot be sparse
- will only contain length 2 subarrays
- can contain duplicates (interviews with the same start/end times)
- not ordered
- do not mutate
- no object properties

- interview (length 2 subarray)
- will always have length 2
- cannot be sparse
- will only contain non-negative ints (x >= 0)

- are the end times inclusive?
  - i.e. do [10, 15] and [15, 25] overlap?
    - NO, [10, 15] and [15, 25] do not overlap / only require one room

Rules:
- return the maximum number of overlaps that occur between interviews
- if no interviews, return 0

-- DS --
2d array
integer
=> [[1, 3], [3, 6], [4, 8], [10, 15]]
=> [[1, 3], [3, 6],
              [4, 8], [10, 15]] (largest overlap of two)
=> 2

-- Algo --
1. init best = 0;
2. iterate through minTime to maxTime
  - count how many interviews are currently happening
  - update best
3. return best

1. init best = 0;
2. sort the interviews by start time, end time
3. init left, right to 0, 0
4. while right < arr length
  - if left interview overlaps with right interview
    - update best
    - increment right
  - else
    - increment left
5. return best

HELPER
overlaps(range1, range2)
assume range1 start is less than or equal to range2 start
return true if end time of range1 is strictly greater than start time of range2

*/

// -- Code --
//
const sortRanges = (ranges) =>
  ranges.toSorted((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

function rooms(interviews) {
  interviews = sortRanges(interviews);
  let endTimes = [];
  let best = 0;

  for (let i = 0; i < interviews.length; i++) {
    let [startTime, endTime] = [...interviews[i]];
    endTimes.push(endTime);

    // remove all endtimes that are less than or equal to startTime
    endTimes = endTimes.filter((endTime) => endTime > startTime);

    // update best with the current length of endTimes
    best = Math.max(best, endTimes.length);
  }

  return best;
}

// [[0, 10],
//     [5, 15],
//        [10, 20],
//            [15, 25],
//                [20, 30]]
// [1,   5]
//   [2 , 6]
//     [4,   8]
//         [7,  9]
//                [10, 15]

console.log(
  rooms([
    [1, 5],
    [2, 6],
    [4, 8],
    [7, 9],
    [10, 15],
  ]) === 3,
);

console.log(
  rooms([
    [0, 10],
    [5, 15],
    [10, 20],
    [15, 25],
    [20, 30],
  ]) === 2,
);

// Test Cases:

console.log(
  rooms([
    [20, 25],
    [10, 15],
    [0, 25],
  ]) === 2,
);
console.log(
  rooms([
    [5, 9],
    [1, 3],
  ]) === 1,
);
console.log(
  rooms([
    [1, 2],
    [3, 4],
    [5, 6],
  ]) === 1,
);
console.log(
  rooms([
    [1, 4],
    [2, 5],
    [3, 6],
  ]) === 3,
);
console.log(
  rooms([
    [1, 3],
    [3, 6],
    [6, 8],
  ]) === 1,
);
console.log(rooms([[1, 10]]) === 1);
console.log(
  rooms([
    [1, 3],
    [2, 4],
    [4, 6],
  ]) === 2,
);
console.log(
  rooms([
    [1, 5],
    [2, 3],
    [4, 6],
    [5, 7],
  ]) === 2,
);
console.log(
  rooms([
    [0, 5],
    [1, 3],
    [2, 6],
    [4, 7],
    [5, 9],
    [8, 10],
  ]) === 3,
);
console.log(
  rooms([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]) === 1,
);
console.log(
  rooms([
    [1, 20],
    [5, 10],
    [11, 15],
    [16, 18],
  ]) === 2,
);
console.log(
  rooms([
    [1, 4],
    [1, 3],
    [1, 2],
    [1, 5],
  ]) === 4,
);
// All test cases should log true

// empty input
console.log(rooms([]) === 0);

// duplicates
console.log(
  rooms([
    [1, 3],
    [1, 3],
  ]) === 2,
);

console.log(
  rooms([
    [0, 100],
    [0, 10],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100],
    [10, 90],
    [20, 80],
    [30, 70],
    [40, 60],
  ]) === 6,
);

console.log(
  rooms([
    [0, 10],
    [0, 1],
    [1, 5],
    [5, 10],
    [1, 9],
  ]) === 3,
);

//[[0, 10], [0, 1], [1, 5], [1, 9], [5, 10]]
