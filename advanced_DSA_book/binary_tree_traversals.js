"use strict";

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function preorderTraverse(node) {
  if (!node) return;

  console.log(node.val);
  preorderTraverse(node.left);
  preorderTraverse(node.right);
}

function inorderTraverse(node) {
  if (!node) return;

  inorderTraverse(node.left);
  console.log(node.val);
  inorderTraverse(node.right);
}

function postorderTraverse(node) {
  if (!node) return;

  postorderTraverse(node.left);
  postorderTraverse(node.right);
  console.log(node.val);
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

const tree1 = buildTree([
  "A",
  "B",
  "W",
  "X",
  "S",
  "T",
  "C",
  "E",
  "M",
  null,
  null,
  "P",
  "N",
  "H",
  null,
]);
preorderTraverse(tree1);
console.log("-".repeat(10));
inorderTraverse(tree1);
console.log("-".repeat(10));
postorderTraverse(tree1);
console.log("-".repeat(10));
