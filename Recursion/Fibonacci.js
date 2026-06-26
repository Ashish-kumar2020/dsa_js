/*
Problem Description
Given an integer n, you have to find the nth fibonacci number. The fibonacci sequence is given by 0,1,1,2,3,5,8,... where 0 and 1 are the 0th and 1st fibonacci numbers respectively and every consecutive number is the sum of the previous two numbers in the sequence.

*/

function nthFibonacci(n) {
    if(n === 0 || n === 1) return n;
    return nthFibonacci(n-1) + nthFibonacci(n - 2);
}


// const n = 10;
// let sequence = [];

// // Loop from 0 to n to collect all terms
// for (let i = 0; i <= n; i++) {
//     sequence.push(nthFibonacci(i));
// }

console.log(nthFibonacci(4))