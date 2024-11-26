"use strict";
// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

// Example:
// Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
// Output: [1, 4]
// Explanation: The values 2, 3, and 5 appear multiple times, so
//              they are removed. Only 1 and 4 remain as unique
//              values.

/*

-- Problem --
only keep elements that appear exactly once
we can determine if an element appears exactly once
=> if node.val !== node.next.val

-- Algo --
1. init dummy node
2. init tail
3. iterate through linkedlist
  - if cur.val != cur.next.val or cur is last node
    add cur to tail
  iterate until new value
4. return dummy.next

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

// function removeDuplicates(head) {
//   let dummy = new ListNode();
//   let tail = dummy;
//   let cur = head;
//   let lastDup;
//
//   while (cur) {
//     if (cur.val !== lastDup && (!cur.next || cur.val !== cur.next.val)) {
//       tail.next = cur;
//       tail = tail.next;
//     } else {
//       lastDup = cur.val;
//     }
//     cur = cur.next;
//   }
//   tail.next = null;
//
//   return dummy.next;
// }

// "two pointer" type solution
function removeDuplicates(head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let cur = head;

  // iterate through ll, skipping elements that are duplicates
  while (cur) {
    // if cur is not a duplicate, slide both pointers
    if (!cur.next || cur.val !== cur.next.val) {
      prev = cur;
      cur = cur.next;
    } else {
      // iterate cur until it's pointing to the last duplicate
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      cur = cur.next;
      prev.next = cur;
    }
  }

  // prev.next = null;
  return dummy.next;
}

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null
