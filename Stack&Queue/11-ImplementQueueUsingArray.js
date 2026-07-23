class ArrayQueue {
    constructor(){
       
        this.arr = [];
        this.size = 0;
    }
    push(x) {
        this.arr.push(x);
        this.size++;
    }

    pop() {
        if(this.size === 0){
            return -1;
        }
        let removedEle = this.arr[0];
        for(let i = 1; i < this.size;i++){
            this.arr[i-1] = this.arr[i];
        }
        this.size--;
        this.arr.pop();
        return removedEle;
    }

    peek() {
      if(this.size === 0) return -1;
      return this.arr[0];
    }

    isEmpty() {
        return this.size === 0;
    }
}