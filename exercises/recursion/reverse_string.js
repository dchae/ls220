"use strict";
/*
-- Problem --
input:
- string
output:
- string

constraints
args
- will always receive one string arg

string
- can be empty
- can contain alpha chars (uppercase, lowercase), digits, spaces, special chars

Rules:
- return the reversed input string
- implement the reversing algorithm recursively

-- DS --
string
=> string

-- Algo --
1. reverse the string using a recursive algorithm
2. return the reversed string

HELPER
traverse(string)
- base case: string length is <= 1
  - return string
return traverse(string.slice(1)) + string[0]
*/

// function reverseString(string) {
//   if (string.length <= 1) return string;
//
//   return reverseString(string.slice(1)) + string[0];
// }

function reverseArr(arr, i = 0, j = arr.length - 1) {
  if (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    reverseArr(arr, i + 1, j - 1);
  }

  return arr;
}

function reverseString(string) {
  return reverseArr([...string]).join("");
}

function reverseStringIterative(string) {
  let chars = [...string];
  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    [chars[i], chars[j]] = [chars[j], chars[i]];
    i++;
    j--;
  }

  return chars.join("");
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.
