"use strict";

// Write a function removeSecondToLast that removes the
// second-to-last node from a linked list. The function
// should take the head of the linked list as input and
// return the head of the modified list. The list is
// guaranteed to have at least two nodes. Implement the
// solution using only one pass through the list. If
// the list has exactly two nodes, the function should
// remove the head node and return the second node as
// the new head.

// Example 1:
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 1 -> 2 -> 3 -> 5

// Example 2:
// Input: 1 -> 2
// Output: 2

// Example 3:
// Input: 3 -> 2 -> 1
// Output: 3 -> 1

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/*
-- Algo --
1. init dummy
2. iterate through the LL until cur is the third to last
3. connect cur to cur.next.next
4. return dummy.next
*/

// function removeSecondToLast(head) {
//   let dummy = new ListNode(0, head);
//   let cur = dummy;
//   while (cur.next.next.next) {
//     cur = cur.next;
//   }
//   cur.next = cur.next.next;
//   return dummy.next;
// }

/*
-- Two-pointer Algo --
1. init dummy
2. init slow to dummy
3. init fast to dummy
4. step fast n times (n = 2)
5. step slow and fast until fast is last node
6. connect slow and fast
7. return dummy.next
*/

function removeSecondToLast(head) {
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = slow;

  for (let i = 0; i < 2; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = fast;
  return dummy.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = "";
  while (currentNode !== null) {
    listStr += currentNode.val + " -> ";
    currentNode = currentNode.next;
  }
  listStr += "null";
  console.log(listStr);
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

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([3, 2, 1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([10, 20, 30, 40, 50, 60]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);

console.log("\nAfter removing second-to-last node:");
printLinkedList(removeSecondToLast(list1)); // Expected: 1 -> 2 -> 3 -> 5 -> null
printLinkedList(removeSecondToLast(list2)); // Expected: 2 -> null
printLinkedList(removeSecondToLast(list3)); // Expected: 3 -> 1 -> null
printLinkedList(removeSecondToLast(list4)); // Expected: 1 -> 2 -> 4 -> null
printLinkedList(removeSecondToLast(list5)); // Expected: 10 -> 20 -> 30 -> 40 -> 60 -> null
