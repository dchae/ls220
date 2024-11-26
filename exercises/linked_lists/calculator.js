"use strict";

// Create a function `calculator` that evaluates arithmetic
// expressions given as strings. The function should support
// basic arithmetic operations: addition (+), subtraction (-),
// multiplication (*), and division (/).

// The function should:
// 1. Accept a string input representing a valid arithmetic expression.
//    The input will consist of non-negative integers, arithmetic
//    operator(+, -, *, /), and may contain whitespace characters.
// 2. Evaluate the expression following the standard order of operations
//    (multiplication and division before addition and subtraction).
// 3. Return the result as an integer.

// For division operations, the result should be rounded down to
// the nearest integer (floor division).

// You can assume that the input will never contain division by zero.

// Note: Implement the calculation logic yourself without using
// any built-in expression evaluation functions.

// Examples:
//
// 1. Input: "4 + 3 * 2"
//    Output: 10
//    Explanation: 3*2 is evaluated first (6), then added to 4.
//
// 2. Input: "15 / 3 - 2"
//    Output: 3
//    Explanation: 15/3 is 5, then 2 is subtracted.
//
// 3. Input: "10 + 8 / 3"
//    Output: 12
//    Explanation: 8/3 is 2 (rounded down), then added to 10.

/*
-- Algo --
1. parse the input string into an array of digits/operators

OR

1. while the string contains operators
2. scan for atomic expressions in order of standard order of operations
3. replace atomic experssions with the result

this can be implemented recursively!
*/

function evaluate(exp) {
  let [a, b] = exp.match(/\d+/g).map(Number);
  let operator = exp.match(/[*/+-]/g)[0];

  switch (operator) {
    case "*":
      return a * b;
    case "/":
      return Math.floor(a / b);
    case "+":
      return a + b;
    case "-":
      return a - b;
  }
}

function calculator(expression) {
  for (let op of ["*/", "+-"]) {
    while (new RegExp(`[${op}]`).test(expression)) {
      let regexp = new RegExp(`\\d+\\s*[${op}]\\s*\\d+`);
      expression = expression.replace(regexp, (exp) => evaluate(exp));
    }
  }

  return +expression;
}

// function calculator(expression) {
//   expression = expression.replace(/\s+/g, "");
//   let addOpCount = expression.match(/[+-]/g)?.length ?? 0;
//   let multOpCount = expression.match(/[*/]/g)?.length ?? 0;
//
//   let res = evaluate(expression, multOpCount, addOpCount);
//   console.log(res);
//   return res;
// }
//
// function evaluateSimple(simpleExp) {
//   let [a, b] = simpleExp.match(/\d+/g).map(Number);
//   let operator = simpleExp.match(/[*/+-]/g)[0];
//
//   switch (operator) {
//     case "*":
//       return a * b;
//     case "/":
//       return Math.floor(a / b);
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//   }
// }
//
// function evaluate(expression, multOpCount, addOpCount) {
//   // base case: if expression contains only one operator,
//   // return the result of expression as a number
//   if (multOpCount + addOpCount === 1) return evaluateSimple(expression);
//
//   // if expression contains / or * operators, evaluate those subexpressions
//   if (multOpCount) {
//     expression = expression.replace(/\d+[*/]\d+/, (exp) =>
//       String(evaluateSimple(exp)),
//     );
//     return evaluate(expression, multOpCount - 1, addOpCount);
//   }
//
//   // if expression contains + or - operators, evaluate those subexpressions
//   if (addOpCount) {
//     expression = expression.replace(/\d+[+-]\d+/, (exp) =>
//       String(evaluateSimple(exp)),
//     );
//     return evaluate(expression, multOpCount, addOpCount - 1);
//   }
// }

// stack solution
// function calculator(expression) {
//   let stack = [];
//   let num = "";
//   let op = "";
//
//   for (let i = 0; i <= expression.length; i++) {
//     let char = expression[i] ?? "";
//     if (char === " ") {
//       continue;
//     } else if (/\d/.test(char)) {
//       num += char;
//     } else {
//       stack.push(+num);
//       num = "";
//
//       if (op === "-") {
//         stack.push(-stack.pop());
//       } else if (op === "*") {
//         stack.push(stack.pop() * stack.pop());
//       } else if (op === "/") {
//         stack.push(Math.floor((1 / stack.pop()) * stack.pop()));
//       }
//
//       op = char;
//     }
//   }
//
//   return stack.reduce((acc, x) => acc + x, 0);
// }

console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true.
