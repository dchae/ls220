"use strict";
// Given the root node of a binary tree, implement a
// function `postorderTraversal` that returns an
// array containing the values of the nodes visited in
// an postorder traversal.

// Your task is to implement the function iteratively using a stack.

// function postorderTraversal(root) {
//   let stack = [root];
//   let res = [];
//
//   while (stack.length) {
//     let cur = stack.pop();
//
//     if (cur) {
//       res.push(cur.val);
//       stack.push(cur.left);
//       stack.push(cur.right);
//     }
//   }
//
//   return res.reverse();
// }

function postorderTraversal(root) {
  let stack = [];
  let lastVisited = null;
  let cur = root;

  let res = [];

  while (cur && lastVisited !== root) {
    while (cur && cur !== lastVisited) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (cur.right && lastVisited !== cur.right) {
      stack.push(cur);
      cur = cur.right;
    } else {
      // if we have processed both subtrees
      res.push(cur.val);
      lastVisited = cur;
    }
  }

  return res;
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]
