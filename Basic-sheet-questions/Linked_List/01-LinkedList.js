class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let curr = this.head;
    let res = [];
    while (curr !== null) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  deleteFromBeginning() {
    if (this.head === null) return -1;
    const deletedValue = this.head.value;
    this.head = this.head.next;
    return deletedValue;
  }

  deleteAtEnd() {
    if (this.head === null) return -1;
    if (this.head.next === null) {
      const deletedValue = this.head.value;
      this.head = null;
      return deletedValue;
    }
    let curr = this.head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    let removedValue = curr.next.value;
    curr.next = null;
    return removedValue;
  }

  search(value) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  length() {
    let curr = this.head;
    let count = 0;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  insertAtPosition(value, index) {
    if (index < 0) {
      return -1;
    }
    const newNode = new Node(value);
    let count = 0;
    if (index === 0) {
      return this.insertAtBeginning(value);
    }
    let curr = this.head;

    while (curr !== null && count < index - 1) {
      curr = curr.next;
      count++;
    }
    if (curr === null) return -1;
    newNode.next = curr.next;
    curr.next = newNode;
  }

  deleteAtPosition(index) {
    if (index < 0) {
      return -1;
    }
    if (index === 0) {
      return this.deleteFromBeginning();
    }
    let curr = this.head;
    let count = 0;
    while (curr !== null && count < index - 1) {
      curr = curr.next;
      count++;
    }
    if (curr === null || curr.next === null) return -1;
    let deletedNode = curr.next;
    curr.next = deletedNode.next;
    deletedNode.next = null;
    return deletedNode;
  }

  reverseList() {
    let curr = this.head;
    let prev = null;
    let next;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  findMiddle() {
    let fastPtr = this.head;
    let slowPtr = this.head;
    while (fastPtr && fastPtr.next) {
      fastPtr = fastPtr.next.next;
      slowPtr = slowPtr.next;
    }
    return slowPtr;
  }

  hasCycle() {
    let fastPtr = this.head;
    let slowPtr = this.head;
    while (fastPtr && fastPtr.next) {
      fastPtr = fastPtr.next.next;
      slowPtr = slowPtr.next;
      if (fastPtr === slowPtr) {
        return true;
      }
    }
    return false;
  }

  cycleLength() {
    let fastPtr = this.head;
    let slowPtr = this.head;
    let count = 0;
    while (fastPtr && fastPtr.next) {
      fastPtr = fastPtr.next.next;
      slowPtr = slowPtr.next;
      if (fastPtr === slowPtr) {
        let curr = slowPtr;
        do {
          curr = curr.next;
          count++;
        } while (curr !== slowPtr);
        return count;
      }
    }
    return count;
  }

  removeDuplicates(){
      if(this.head === null) return null;
      let curr = this.head;
      while(curr && curr.next){
        if(curr.value === curr.next.value){
          curr.next = curr.next.next;
        }else{
          curr = curr.next;
        }
      }
      return this.head;
  }
}
