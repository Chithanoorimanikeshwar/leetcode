// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

import { LinkedList } from "./linkedlist.mjs";

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
var mergeTwoLists = function (list1, list2) {
  let combinedList = new LinkedList();
  list1Pointer = 0;
  list2Pointer = 0;
  list1TotalLen = list1.length;
  list2TotalLen = list2.length;
  while (list1Pointer < list1TotalLen && list2Pointer < list2TotalLen) {
    if (list1[list1Pointer] < list2[list2Pointer]) {
      combinedList.link(list1[list1Pointer]);
      list1Pointer++;
    } else if (list1[list1Pointer] > list2[list2Pointer]) {
      combinedList.link(list2[list2Pointer]);
      list2Pointer++;
    } else {
      combinedList.link(list1[list1Pointer]);
      combinedList.link(list2[list2Pointer]);
      list2Pointer++;
      list1Pointer++;
    }
  }
  combinedList.printLinkedList()
  return combinedList.getHead();
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
