let minEle = 0;
let st = [];

function push(x) {
    if (st.length === 0) {
        st.push(x);
        minEle = x;
    } else {
        if (x >= minEle) {   
            st.push(x);
        } else {
            st.push(2 * x - minEle);
            minEle = x;
        }
    }
}

function minimumEle() {
    if (st.length === 0) return -1;
    return minEle;
}

function pop() {
    if (st.length === 0) return -1;

    let top = st[st.length - 1];

    if (top >= minEle) {   
        st.pop();
    } else {
        minEle = 2 * minEle - top;
        st.pop();
    }

    if (st.length === 0) {
        minEle = 0;
    }
}

function top() {
    if (st.length === 0) return -1;

    if (st[st.length - 1] >= minEle) {  
        return st[st.length - 1];
    } else {
        return minEle;
    }
}

// Test
push(10);
push(1);
push(3);
push(4);
push(5);
push(0);
push(1);

console.log(minimumEle()); // 0

pop();
console.log(minimumEle()); // 0

pop();
console.log(minimumEle()); // 1

console.log(top()); // 5