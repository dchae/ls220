"use strict";
// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

// Example:
// Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
// Output: [1, 7, 5, 3, 9]
// Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
//              is reversed to (7 -> 5 -> 3).

/*
-- Problem --
Input: head of a singly linked list, start, end
Output: head of the linked list after reversing
        elements from start to end (inclusive)

-- DS --
Linked list
=> linked list

-- Algo --
1. iterate through the linked list until start
2. iterate until end, storing nodes in a stack
3. pop through stack, adding nodes to the tail
4. connect tail to rest of linked list

1. init cur to head
2. init curPos to 1
3. move cur forward while incrementing curPos until
   curPos === start - 1
4. init tail to cur
5. move cur forward while incrementing curPos and
   pushing cur to stack until curPos === end + 1
6. while stack is not empty
  - tail = stack.pop; tail = tail.next
7. tail.next = cur
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
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

// function reverseSegment(head, start, end) {
//   let dummy = new ListNode(0, head);
//   let cur = dummy;
//   let curPos = 0;
//   let stack = [];
//
//   while (curPos < start - 1) {
//     cur = cur.next;
//     curPos++;
//   }
//   let tail = cur;
//   cur = cur.next;
//   curPos++;
//
//   while (curPos <= end) {
//     stack.push(cur);
//     cur = cur.next;
//     curPos++;
//   }
//
//   while (stack.length) {
//     tail.next = stack.pop();
//     tail = tail.next;
//   }
//
//   tail.next = cur;
//   return dummy.next;
// }

// function reverseSegment(head, start, end) {
//   let dummy = new ListNode(0, head);
//   let tail = dummy;
//   let cur = dummy;
//   let curPos = 0;
//   let stack = [];
//
//   while (curPos <= end) {
//     if (curPos < start) {
//       tail = cur;
//     } else if (curPos >= start) {
//       stack.push(cur);
//     }
//
//     cur = cur.next;
//     curPos++;
//   }
//
//   while (stack.length) tail = tail.next = stack.pop();
//   tail.next = cur;
//
//   return dummy.next;
// }

// no stack version
function reverseSegment(head, start, end) {
  let dummy = new ListNode(0, head);
  let tail = dummy;
  let prev = dummy;
  let cur = head;
  let curPos = 1;

  while (curPos <= end) {
    let next = cur.next;
    if (curPos < start) {
      tail = cur;
    } else {
      cur.next = prev;
    }

    prev = cur;
    cur = next;
    curPos++;
  }

  tail.next.next = cur;
  tail.next = prev;

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null
