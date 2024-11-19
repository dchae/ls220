"use strict";
/*
-- Problem --
Input:
- head, first node of a sorted singly linked list

Output:
- head, first node of same list after removing duplicates

-- Algo --
1. for each node:
  - init nextNode
  - iterate nextNode until nextNode.val !== cur.val
  - set cur.next to nextNode
  - iterate to next step (cur = cur.next)
2. return head


*/

// -- Code --
// function deleteDuplicates(head) {
//   let cur = head;
//   while (cur) {
//     let nextNode = cur.next;
//     while (nextNode && nextNode.val === cur.val) nextNode = nextNode.next;
//     cur.next = nextNode;
//     cur = cur.next;
//   }
//
//   return head;
// }

// recursive version
function deleteDuplicates(cur) {
  if (!cur || !cur.next) return cur;

  // set cur.next to the next node with unique value
  cur.next = deleteDuplicates(cur.next, cur);

  // out of cur and cur.next, return the "earliest" node with unique value
  return cur.val === cur.next.val ? cur.next : cur;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach((val) => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = "";
  while (currentNode !== null) {
    listStr += currentNode.val + " -> ";
    currentNode = currentNode.next;
  }
  listStr += "null"; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"
