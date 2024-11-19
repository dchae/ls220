"use strict";
// Given a string `str`, reverse only all the consonants in the string
// and return it.
// Consonants are all alphabetic characters except for the vowels
// `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/*
-- Problem --
Input: string
Output: string after "reversing all consonants"

Constraints:
Args
- Will always receive exactly one arg of type string

string
- can be empty
- will only contain alpha chars
  - lowercase and uppercase
- case insensitive
  - uppercase chars are not treated differently to their lowercase counterparts

Rules:
- replace the ith consonant with the m-ith consonant,
  - where m is the total number of consonants in the string

-- DS --
string
=> array of chars
=> string

-- Algo --
0.1. return empty string if empty string?
1. split string into array of chars
2. iterate through chars array with closing window,
   swapping pointer elements when both are consonants
    - init i, j to 0, str.length - 1
    - while i < j
      - if i and j both point to consonants
        - swap them
        - increment i
        - decrement j
      - if i does not point to a consonant, increment it
      - if j does not point to a consonant, decrement it
3. join chars array
4. return joined chars array

*/

// -- Code --

function isConsonant(char) {
  return /^[a-z]$/i.test(char) && !/[aeiou]/i.test(char);
}

function reverseConsonants(str) {
  let chars = str.split("");
  let [i, j] = [0, chars.length - 1];

  while (i < j) {
    if (isConsonant(chars[i]) && isConsonant(chars[j])) {
      [chars[i], chars[j]] = [chars[j], chars[i]];
      i++;
      j--;
    }
    if (!isConsonant(chars[i])) i++;
    if (!isConsonant(chars[j])) j--;
  }

  return chars.join("");
}
console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
