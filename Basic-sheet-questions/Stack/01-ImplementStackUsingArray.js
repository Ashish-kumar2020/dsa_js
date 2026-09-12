
/*
    Implemnet Stack using Array
*/

class Stack{
    constructor(){
        this.st = [];
    }

    // Push
    push(value){
        this.st.push(value);
    }

    // Pop
    pop(){
        if(this.st.length === 0) return -1;
        return this.st.pop();
    }

    // peek - top element
    peek(){
        if(this.st.length === 0) return -1;
        return this.st[this.st.length - 1];
    }

    // isEmpty
    isEmpty(){
        return this.st.length === 0;
    }
};
const st = new Stack();
st.push(10);
st.push(30);
st.push(20);
console.log(st.peek())