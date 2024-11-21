"use strict";

function quicksort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    if (arr[left] < arr[pivot]) {
      left++;
    } else if (arr[right] >= arr[pivot]) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  [arr[pivot], arr[right]] = [arr[right], arr[pivot]];

  quicksort(arr, start, right);
  quicksort(arr, left, end);
}

let arr = [2, 0, 5, 4, 1, 3];
// arr = [2, 1];

quicksort(arr);
console.log(arr);
