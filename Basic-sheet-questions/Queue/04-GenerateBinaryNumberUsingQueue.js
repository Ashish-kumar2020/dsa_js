// Generate Binary Numbers Using a Queue



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

function generateBinaryNumbers(n) {
    let q = new Queue();
    let res = [];
    q.enqueue("1");
    for (let i = 0; i < n; i++) {

        // Remove front element
        let val1 = q.dequeue();
        // Add it to result
        res.push(val1);
        // Add current + "0"
        q.enqueue(val1 + "0");
        // Add current + "1"
        q.enqueue(val1 + "1");

    } 
    return res;

}

console.log(generateBinaryNumbers(5));