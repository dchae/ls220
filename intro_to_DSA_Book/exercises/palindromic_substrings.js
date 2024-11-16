"use strict";
// Given a string, write a function, `palindromeSubstrings`, that returns
// all the substrings from the given string that are palindromes and have
// a minimum length of two.

// function substrings(str) {
//   return [...str].flatMap((_, i) => {
//     return [...str.slice(i + 1)].map((_, j) => {
//       return str.slice(i, i + j + 2);
//     });
//   });
// }

function substrings(str) {
  let res = [];

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      res.push(str.slice(i, j + 1));
    }
  }

  return res;
}

console.log(substrings("halo"));

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function palindromeSubstrings(str) {
  let substringsArr = substrings(str);

  let result = substringsArr.filter(isPalindrome);

  return result;
}

function unpadStr(str) {
  // let unpaddedPalindrome = paddedPalindrome.replace(PAD_CHAR, "");
  return [...str].map((char, i) => (i % 2 === 0 ? char : "")).join("");
}

// function palindromeSubstrings(str) {
//   let PAD_CHAR = " ";
//   let paddedStr = str.split("").join(PAD_CHAR);
//   let res = [];
//
//   for (let i = 0; i < paddedStr.length; i++) {
//     let offset = 1;
//     if (i % 2 === 0) offset++;
//
//     while (
//       paddedStr[i - offset] &&
//       paddedStr[i + offset] &&
//       paddedStr[i - offset] === paddedStr[i + offset]
//     ) {
//       let paddedPalindrome = paddedStr.slice(i - offset, i + offset + 1);
//       res.push(unpadStr(paddedPalindrome));
//       offset += 2;
//     }
//   }
//
//   return res;
// }

// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]

console.log(palindromeSubstrings("abcDDcbA"));
// should return: ["bcDDcb", "cDDc", "DD"]

console.log(palindromeSubstrings("palindrome"));
// should log: []

console.log(palindromeSubstrings(""));
// should log: []
