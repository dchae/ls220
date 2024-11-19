"use strict";
// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

const BRACKET_PAIRS = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isOpeningBracket(char) {
  return /[([{]/.test(char);
}

function isValidBracketPair(opener, closer) {
  return closer === BRACKET_PAIRS[opener];
}

function areMatched(str) {
  let stack = [];

  for (let char of str) {
    if (isOpeningBracket(char)) {
      stack.push(char);
    } else if (!isValidBracketPair(stack.pop(), char)) return false;
    // assume it's a closing bracket
    // - it must close the last pushed opening bracket
  }

  return stack.length === 0;
}

console.log(areMatched("()")); // Output: true
console.log(areMatched("([()]{})")); // Output: true
console.log(areMatched("([((}]({}))")); // Output: false
console.log(areMatched("{{[[(())]]}}")); // Output: true
console.log(areMatched("")); // Output: true
console.log(areMatched("([)]")); // Output: false
console.log(areMatched("]")); // Output: false
