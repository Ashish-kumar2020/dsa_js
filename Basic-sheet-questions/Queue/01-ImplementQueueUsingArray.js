/*
    Problem - Implement a Queue
    Queue → FIFO

    Operations: 
        enqueue(value) → add an element at the rear
        dequeue()      → remove an element from the front
        front()/peek() → see the front element without removing it
        isEmpty()      → check whether the queue is empty
*/


class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
    }

    dequeue(){
        if(this.queue.length === 0) return -1;
        return this.queue.shift();
    }

    front(){
        if(this.queue.length === 0) return -1;
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }
};

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.dequeue();
console.log(q.front());