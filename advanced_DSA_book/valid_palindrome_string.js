"use strict";

// function validPalindrome(str) {
//   if (str.length === 0) return true;
//
//   return (
//     str.at(0) === str.at(-1) && validPalindrome(str.slice(1, str.length - 1))
//   );
// }

function validPalindrome(str, i = 0, j = str.length - 1) {
  if (i >= j) return true;

  return str[i] === str[j] && validPalindrome(str, i + 1, j - 1);
}

console.log(validPalindrome(""));
console.log(validPalindrome("a"));
console.log(validPalindrome("aa"));
console.log(validPalindrome("aba"));
console.log(validPalindrome("racecar"));

// false
console.log(validPalindrome("abab"));
console.log(validPalindrome("aab"));
console.log(validPalindrome("racecars"));
