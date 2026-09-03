/*
Sum of Numbers from 1 to N using Recursion

*/

function sumOneToN(n){
    if(n === 0) return 0;
    return n + sumOneToN(n-1);
}

const n = 5;
console.log(sumOneToN(n))