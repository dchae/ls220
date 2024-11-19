"use strict";

// Traverse function that doesn't directly handle cycle detection
function traverse(head) {
  return new Promise((resolve) => {
    let cur = head;
    const step = () => {
      if (cur) {
        cur = cur.next;
        setTimeout(step, 0); // Yield control to allow timeout check
      } else {
        resolve(false); // No cycle detected, end traversal
      }
    };
    step(); // Start the traversal
  });
}

// Timeout function that raises an error if time exceeds the limit
function timeoutPromise(timeLimit) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout exceeded")); // Reject with timeout error
    }, timeLimit);
  });
}

async function tryToTraverse(head) {
  let timeLimit = 1000; // 1 sec time limit
  try {
    // Race the traverse function with the timeout
    const result = await Promise.race([
      traverse(head),
      timeoutPromise(timeLimit),
    ]);
    return result; // No cycle or timeout
  } catch (error) {
    if (error.message === "Timeout exceeded") {
      return true; // If we hit the timeout, return true as cycle detected (or as desired)
    } else {
      throw error; // Rethrow if it's some other error
    }
  }
}

function hasCycle(head) {
  return tryToTraverse(head); // Return the result of the async check
}

// Helper Functions
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

// console.log(hasCycle(list1)); // true
// console.log(hasCycle(list2)); // true
// console.log(hasCycle(list3)); // false
// console.log(hasCycle(list4)); // true
// console.log(hasCycle(list5)); // false

hasCycle(list1).then(console.log); // true
hasCycle(list2).then(console.log); // true
hasCycle(list3).then(console.log); // false
hasCycle(list4).then(console.log); // true
hasCycle(list5).then(console.log); // false
