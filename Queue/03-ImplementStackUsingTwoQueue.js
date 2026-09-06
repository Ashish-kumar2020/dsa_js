// Implement a Stack Using Two Queues

class StackUsingQueues {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  // Add element to stack
  push(value) {
    this.q1.push(value);
  }

  // Remove top element
  pop() {
    if (this.q1.length === 0) return -1;
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const top = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1];
    return top;
  }

  // Get top element without removing
  top() {
    if (this.q1.length === 0) return -1;
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const top = this.q1[this.q1.length - 1];
    this.q2.push(top);
    [this.q1, this.q2] = [this.q2, this.q1];
    return top;
  }

  // Check if stack is empty
  isEmpty() {
     return (this.q1.length === 0 && this.q2.length === 0)
  }
}

const st = new StackUsingQueues();
