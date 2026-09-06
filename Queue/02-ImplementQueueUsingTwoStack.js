class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Add element to queue
  enqueue(value) {
    this.stack1.push(value);
  }

  // Remove element from queue
  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0) return -1;
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        let removedEle = this.stack1.pop();
        this.stack2.push(removedEle);
      }
    }
    return this.stack2.pop();
  }

  // Get front element
  front() {
    if(this.stack1.length === 0 && this.stack2.length === 0) return -1;
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            let removedele = this.stack1.pop();
            this.stack2.push(removedele);
        }
    }
    return this.stack2[this.stack2.length - 1];
  }

  // Check if queue is empty
  isEmpty() {
    return (this.stack1.length === 0 && this.stack2.length === 0)
  }
}

const q = new QueueUsingStacks();
