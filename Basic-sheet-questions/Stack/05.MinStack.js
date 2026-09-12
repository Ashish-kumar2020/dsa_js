// Implement Min Stack

class Stack {
    constructor() {
        this.st = [];
        this.minElement = Infinity;
    }

    push(value) {
        if (this.st.length === 0) {
            this.st.push(value);
            this.minElement = value;
        } else {
            if (value >= this.minElement) {
                this.st.push(value);
            } else if (value < this.minElement) {
                let flaggedValue = 2 * value - this.minElement;
                this.st.push(flaggedValue);
                this.minElement = value;
            }
        }
    }
    peek() {
        if (this.st.length === 0) return -1;
        else {
            if (this.st[this.st.length - 1] >= this.minElement) {
                return this.st[this.st.length - 1];
            } else if (this.st[this.st.length - 1] < this.minElement) {
                return this.minElement;
            }
        }
    }

    pop() {
        if (this.st.length === 0) return -1;
        const top = this.st.pop();
        let actualValue;
        if (top >= this.minElement) {
            actualValue = top;
        } else {
            actualValue = this.minElement;
            this.minElement = 2 * this.minElement - top;
        }
        if (this.st.length === 0) {
            this.minElement = Infinity;
        }
        return actualValue;
    }

    isEmpty() {
        return this.st.length === 0;
    }

    minEle() {
        if (this.st.length === 0) return -1;
        return this.minElement;
    }
}

const st = new Stack();
st.push(10);
st.push(30);
st.push(20);
st.pop();
st.pop();
st.pop();
console.log(st.peek());
console.log(st.minEle());