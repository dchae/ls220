"use strict";

// function countdown(n) {
//   for (let i = n; i >= 0; i--) {
//     console.log(i);
//   }
// }

function countdown(n) {
  console.log(n);
  if (n) countdown(n - 1);
}

countdown(10);
