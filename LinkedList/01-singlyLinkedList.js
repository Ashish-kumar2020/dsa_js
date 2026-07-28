class Node {
  constructor(data) {
    this.data = data; // holds the data
    this.next = null; // Pointer to the next node
  }

  insertAtBeginning(head, data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }

  insertAtEnd(head, data) {
    const newNode = new Node(data);
    if (head == null) {
      return newNode;
    }
    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    return head;
  }

  insertAtPosition(head, position, data) {
    let count = 0;
    let curr = head;
    const newNode = new Node(data);
    if (count === position) {
      newNode.next = head;
      return newNode;
    }
    while (curr !== null && count < position - 1) {
      curr = curr.next;
      count++;
    }
    if (curr === null || curr.next === null) {
    return head; 
}
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
  }

  deleteLLAtBegning(head, position) {
    if (head === null) return null;
    return head.next;
  }

  deleteLLAtAnyPosition(head, position) {
    if (head === null) return null;
    if (position === 0) {
      return head.next;
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
    deleteNode.next = null;

    return head;
  }

  LLTraversal(head) {
    let res = [];
    while (head !== null) {
      res.push(head.data);
      head = head.next;
    }
    return res;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
console.log(head.LLTraversal(head));
head = head.insertAtBeginning(head, 50);
head = head.insertAtBeginning(head, 100);
head.insertAtEnd(head, 500);
head = head.insertAtPosition(head, 0, 700);
head = head.insertAtPosition(head, 2, 400);
// head = head.deleteLLAtBegning(head,0);
head = head.deleteLLAtAnyPosition(head, 800);
console.log(head.LLTraversal(head));
