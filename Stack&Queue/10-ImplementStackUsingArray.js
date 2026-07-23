class ArrayStack {
   constructor() {
    this.st = [];
   }
    push(x) {
        this.st.push(x);
    }

    pop() {
        if(this.st.length === 0){
            return -1;
        }
        return this.st.pop();
    }

    top() {
        if(this.st.length === 0) return -1;
        return this.st[this.st.length - 1];
    }

    isEmpty() {
        return this.st.length === 0;
    }
}