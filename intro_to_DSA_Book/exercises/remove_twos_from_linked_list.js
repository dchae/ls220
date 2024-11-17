"use strict";
// Given the head of a linked list, remove all
// occurrences of the value 2 from the linked list.

// Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
// Output: 1 -> 3 -> 4 -> null

// Input:  2 -> 3 -> 2 -> null
// Output: 3 -> null

// Input:  null
// Output: null

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// function deleteTwos(head) {
//   let prev = null;
//   let curr = head;
//
//   if (!head) {
//     return head;
//   }
//
//   while (curr) {
//     if (curr.val === 2) {
//       if (!prev) {
//         head = curr.next;
//       } else {
//         prev.next = curr.next;
//       }
//     } else {
//       prev = curr;
//     }
//     curr = curr.next;
//   }
//
//   return head;
// }

// function deleteTwos(head) {
//   let prev = null;
//   let cur = head;
//
//   while (cur) {
//     if (cur.val === 2) {
//       if (prev) {
//         prev.next = cur.next;
//       } else {
//         head = cur.next;
//       }
//     } else {
//       prev = cur;
//     }
//
//     cur = cur.next;
//   }
//
//   return head;
// }

function deleteTwos(head) {
  let dummy = new ListNode(null, head);
  let cur = dummy;

  while (cur && cur.next) {
    let next = cur.next;
    while (next && next.val === 2) {
      next = next.next;
    }
    cur.next = next;
    cur = cur.next;
  }

  return dummy.next;
}

// Helper function to format the linked list into a string
function stringifyList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(4);

console.log("Input: ", stringifyList(head1));
console.log("Output:", stringifyList(deleteTwos(head1)));
// Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
// Output: 1 -> 3 -> 4 -> null

// Test case 2
const head2 = new ListNode(2);
head2.next = new ListNode(3);
head2.next.next = new ListNode(2);

console.log("Input: ", stringifyList(head2));
console.log("Output:", stringifyList(deleteTwos(head2)));
// Input:  2 -> 3 -> 2 -> null
// Output: 3 -> null
