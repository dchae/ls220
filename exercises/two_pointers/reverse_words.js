"use strict";
/*
-- Problem --
Input: string str representing a sequence of space-separated words
Output: string with each word reversed

Constraints:
Args
- will always receive one string arg

str
- can be empty
- can contain alpha chars (upper and lowercase)
- case matters and must be preserved

Rules:
- return the string with each word reversed
- "word": a space-separated sequence of characters
- do not use the Array#reverse method

-- DS --
string
=> stacks
=> string

-- Algo --
1. regex replace every word in the string with toReversed(word)
2. return the replaced string

HELPER
toReversed(str)
1. iterate through the string in reverse, populating an array
2. return joined array

*/

// function toReversed(str) {
//   let reversedChars = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedChars.push(str[i]);
//   }
//   return reversedChars.join("");
// }

function toReversed(str) {
  return [...str].map((_, i) => str[str.length - 1 - i]).join("");
}

function reverseWords(str) {
  return str.replace(/\S+/g, (word) => toReversed(word));
}

// -- Examples / Test Cases --
// Happy path
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

// length 1
console.log(reverseWords(" ") === " ");
console.log(reverseWords("a") === "a");
console.log(reverseWords("A") === "A");

// Empty input
console.log(reverseWords("") === "");
