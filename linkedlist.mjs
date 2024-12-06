export class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
export class LinkedList {
  #head;
  constructor() {
    this.#head = null;
    this.size = 0;
  }
  getHead() {
    return this.#head;
  }
  link(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.size += this.size;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.size += 1;
    }
  }
  unlink(value) {
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode.data != value) {
      if (currentNode.next == null) return "Data not found in list";
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode == null) {
      prevNode.next = null;
    } else {
      prevNode.next = currentNode.next;
    }
    this.size -= 1;
    return "successfully removed from the list";
  }
  returnLinkNodeOfValue(value) {
    let currentNode = this.head;
    while (currentNode.data != value) {
      if (currentNode.next == null) return "Data not found in list";
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  printLinkedList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(`${currentNode.data}->\t`);
      currentNode = currentNode.next;
    }
    console.log("null"); // Indicate the end of the list
  }
}

let testList = new LinkedList();
testList.link(1);
testList.link(2);
testList.link(3);
testList.link(4);
testList.link(5);
testList.printLinkedList();
console.log(testList.unlink(2));
console.log(testList.unlink(5));
testList.link(10);


testList.printLinkedList();
