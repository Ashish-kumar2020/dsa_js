/*
Factorial using Recursion
Problem - Write a recursive function to calculate factorial.
*/

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n- 1);
}

const n = 5;
console.log(factorial(n))