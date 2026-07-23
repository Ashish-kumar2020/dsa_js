

function push(a , ss,s,){
    s.push(a);
    if(ss.length == 0 || ss[ss.length - 1] > a){
        ss.push(a);
    }
    return;
}

function pop(ss,s){
    if(s.length === 0) return -1;
    let ans = s.pop();
    if(ss[ss.length-1] === ans){
        ss.pop();
    }
    console.log(ss,s)
    return ans;
}

function getMin(){
    if(ss.length === 0) return -1;
    return ss[ss.length - 1];
}

const ss = [];
const s = [];
push(1,ss,s);
push(4,ss,s);
push(0,ss,s);
pop(ss,s);
pop(ss,s);
pop(ss,s);
console.log(getMin())