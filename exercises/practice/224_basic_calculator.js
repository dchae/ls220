"use strict";

// const PRECEDENCE = {"*": 2, "/": 2, '+': 1, '-': 1}
function toRPN(tokens) {
  let output = [];
  let stack = [];

  for (let i = 0; i <= tokens.length; i++) {
    let token = tokens[i];
    if (/\d/.test(token)) {
      output.push(+token);
    } else if (token === ")") {
      while (stack.length && stack.at(-1) !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else if (token === "(") {
      stack.push("(");
    } else {
      while (stack.length && stack.at(-1) !== "(") {
        output.push(stack.pop());
      }
      if (token) stack.push(token);
    }
  }

  while (stack.length) output.push(stack.pop());

  return output;
}

function processRPN(tokens) {
  let stack = [];
  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + (stack.pop() ?? 0));
    } else if (token === "-") {
      let sub = stack.pop();
      stack.push((stack.pop() ?? 0) - sub);
    } else {
      stack.push(token);
    }
  }

  return stack.at(-1);
}

function calculate(s) {
  let tokens = s.match(/((?<!\d|\))-)?\d+|[()+-]/g) ?? [];
  console.log(tokens);
  let rpn = toRPN(tokens);
  let result = processRPN(rpn);
  console.log(rpn);
  console.log(result);
  return result;
}

console.log(calculate("- (3 - (- (4 + 5) ) )") === -12);
console.log(calculate("- (3 + (4 + 5))") === -12);
console.log(calculate("1 + 1") === 2);
console.log(calculate(" 2-1 + 2 ") === 3);
console.log(calculate("(1+(4+5+2)-3)+(6+8)") === 23);
console.log(calculate("1-(     -2)") === 3);
