class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  insertAtBegning(head, data) {
    const newNode = new Node(data);
    if (head == null) return newNode;
    newNode.next = head;
    newNode.prev = null;
    head.prev = newNode;
    return newNode;
  }

  insertAtEnd(head, data) {
    const newNode = new Node(data);
    if (head === null) return newNode;
    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
    newNode.next = null;
    return head;
  }

  insertAtPosition(head, data, position) {
    let count = 0;
    let curr = head;
    const newNode = new Node(data);
    if (count === position) {
      newNode.next = head;
      newNode.prev = null;
      head.prev = newNode;
      return newNode;
    }

    while (curr !== null && count < position - 1) {
      curr = curr.next;
      count++;
    }

    const nextNodePointer = curr.next;
    curr.next = newNode;
    newNode.next = nextNodePointer;
    newNode.prev = curr;
    nextNodePointer.prev = newNode;
    return head;
  }

  deleteNodeAtBegining(head) {
    if (head === null) {
      return null;
    }
    head = head.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }

  deleteNodeAtAnyPos(head, position) {
    if (head === null) return null;
    if (position === 0) {
      head = head.next;
      if (head !== null) {
        head.prev = null;
      }
      return head;
    }
    let curr = head;
    let count = 0;
    while (curr !== null && count < position - 1) {
      curr = curr.next;
      count++;
    }
    if (curr === null || curr.next === null) {
      return head;
    }
    const deleteNode = curr.next;
    curr.next = deleteNode.next;
    if (deleteNode.next !== null) {
      deleteNode.next.prev = curr;
    }
    deleteNode.next = null;
    deleteNode.prev = null;
    return head;
  }

  traverseDLL(head) {
    let res = [];
    let curr = head;
    while (curr !== null) {
      res.push(curr.data);
      curr = curr.next;
    }
    return res;
  }
}

let head = new Node(10);
head.next = new Node(30);
head.next.prev = head;

head.next.next = new Node(40);
head.next.next.prev = head.next;

head.next.next.next = new Node(50);
head.next.next.next.prev = head.next.next;

// Operations
head = head.insertAtBegning(head, 0);
head = head.insertAtEnd(head, 60);
head = head.insertAtPosition(head, 35, 3);

// Delete
// head = head.deleteNodeAtBegining(head);
head = head.deleteNodeAtAnyPos(head, 3);
console.log(head.traverseDLL(head));
