"use strict";

/*
You have been given a JSON object that contains keys in 4 cases
(camelCase, snake_case, PascalCase, kebab-case). Your task is to
implement a function that will normalize all the keys to camelCase.

Write a function `normalizeKeys(jsonObject)` that takes a JSON object
as input and returns a new JSON object with all keys converted to
camelCase. You can assume that the input JSON object only contains
string keys, string values, and nested JSON objects as values (no arrays
or other types).

Notes
The function should maintain the structure of the input JSON while changing the keys.
You can assume that the input JSON is well-formed and the keys properly follow one of the 4
casing conventions (camelCase, snake_case, PascalCase, kebab-case).

Constraints:
The input JSON object will have at most 100 keys.
The input JSON object will be limited to a depth of 5.
The length of each key is at most 50 characters.
Don’t use regex - this makes the problem more challenging which results in better practice.
*/

function toNormalisedKey(key) {
  let mapped = key
    .split("-")
    .flatMap((str) => str.split("_"))
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1))
    .join("");
  let res = mapped.slice(0, 1).toLowerCase() + mapped.slice(1);
  return res;
}

function caseConvert(obj) {
  if (typeof obj === "string") obj = JSON.parse(obj);

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null)
      caseConvert(obj[key]);

    let normalisedKey = toNormalisedKey(key);
    obj[normalisedKey] = obj[key];
    if (normalisedKey !== key) delete obj[key];
  }

  return JSON.stringify(obj);
}

let obj = {
  first_name: "John",
  last_name: "Doe",
  contact_info: {
    email_address: "john@example.com",
    phone_number: "123-456-7890",
  },
};
// output: {
//   firstName: "John",
//   lastName: "Doe",
//   contactInfo: {
//     emailAddress: "john@example.com",
//     phoneNumber: "123-456-7890",
//   },
// },
// let input = JSON.stringify(obj);
// console.log(input);
// console.log(caseConvert(input));
//
let p = console.log;

p(
  caseConvert(
    JSON.stringify({
      first_name: "John",
      last_name: "Doe",
      contact_info: {
        email_address: "john@example.com",
        phone_number: "123-456-7890",
      },
    }),
  ),
); // test snake_case

p(
  caseConvert(
    JSON.stringify({
      "first-name": "John",
      "last-name": "Doe",
      "contact-info": {
        "email-address": "john@example.com",
        "phone-number": "123-456-7890",
      },
    }),
  ),
); // test kebab-case

p(
  1,
  caseConvert(
    JSON.stringify({
      firstName: "John",
      lastName: "Doe",
      contactInfo: {
        emailAddress: "john@example.com",
        phoneNumber: "123-456-7890",
      },
    }),
  ),
); // test: if already camelCase, leave as is

p(
  caseConvert(
    JSON.stringify({
      FirstName: "John",
      LastName: "Doe",
      ContactInfo: {
        EmailAddress: "john@example.com",
        PhoneNumber: "123-456-7890",
      },
      DeeplyNested: {
        FirstObj: {
          SecondObj: {
            ThirdObj: "done",
          },
        },
      },
    }),
  ),
); // test PascalCase & a deeply nested obj
