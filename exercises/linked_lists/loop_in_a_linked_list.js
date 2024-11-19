"use strict";
/*
-- Problem --
Input: head of a singly linked list
Output: boolean representing whether the linked list contains a loop

*/

// O(n) time and space
// function hasCycle(head) {
//   let seen = new Set();
//   let cur = head;
//   while (cur) {
//     if (seen.has(cur)) return true;
//     seen.add(cur);
//     cur = cur.next;
//   }
//
//   return false;
// }

// O(n) time O(1) space; mutates nodes
// function hasCycle(head) {
//   let cur = head;
//   while (cur) {
//     if (cur.seen) return true;
//     cur.seen = true;
//     cur = cur.next;
//   }
//
//   return false;
// }

// slow/fast
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// -- Examples / Test Cases --
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)); // true
console.log(hasCycle(list2)); // true
console.log(hasCycle(list3)); // false
console.log(hasCycle(list4)); // true
console.log(hasCycle(list5)); // false
