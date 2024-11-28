"use strict";
// A puppy named Chaos is eager to reach a bowl of
// treats at the top of a series of n stacks of
// crates. Each stack is higher by one crate than
// the previous one, forming a structure similar
// to stairs. Each time, Chaos can hop either one
// stack or two stacks upward in his excitement. In
// how many distinct ways can Chaos reach the bowl?

// Write a function `hoppingChaos` that, given a
// number `N` as the input, determines the number
// of distinct ways Chaos can reach the bowl.

// The minimum amount of stacks is one, and the maximum is 50.

// Example 1:

// Input: 2
// Output: 2

// Chaos can reach the top of the stack in two distinct ways:

// 1. Hop 1 stack, then hop 1 more stack.
// 2. Hop 2 stacks in one go.

// Example 2:

// Input: 4
// Output: 5

// Chaos can reach the top of the stack in five distinct ways:

// 1. Hop 1 stack, hop 1 stack, hop 1 stack, then hop 1 stack.
// 2. Hop 1 stack, hop 1 stack, then hop 2 stacks in one go.
// 3. Hop 1 stack, then hop 2 stacks in one go, then hop 1 stack.
// 4. Hop 2 stacks in one go, hop 1 stack, then hop 1 stack.
// 5. Hop 2 stacks in one go, then hop 2 stacks in one go again.

// number of ways chaos can reach 0 from 1 = 1
// number of ways chaos can reach 0 from 2 = 2
// number of ways chaos can reach 0 from 3 = 1 + 2
// number of ways chaos can reach 0 from n =
//  number of ways to reach n-1 + number of ways to reach n-2

// function hoppingChaos(
//   n,
//   memo = new Map([
//     [1, 1],
//     [2, 2],
//   ]),
// ) {
//   if (memo.has(n)) return memo.get(n);
//
//   memo.set(n, hoppingChaos(n - 1, memo) + hoppingChaos(n - 2, memo));
//   return memo.get(n);
// }

function hoppingChaos(n) {
  let pathCounts = [0, 1, 2, 3];

  while (pathCounts.length <= n) {
    pathCounts.push(pathCounts.at(-1) + pathCounts.at(-2));
  }

  return pathCounts[n];
}
console.log(hoppingChaos(2) === 2);
console.log(hoppingChaos(3) === 3);
console.log(hoppingChaos(4) === 5);
console.log(hoppingChaos(8) === 34);
console.log(hoppingChaos(13) === 377);
console.log(hoppingChaos(17) === 2584);
console.log(hoppingChaos(21) === 17711);
console.log(hoppingChaos(50) === 20365011074);
// All test cases should log true.
