/*
Problem Description
In Tribonacci sequence, the nth term Tn, is defined as follows:

T0 = 0,

T1 = 1,

T2 = 1,

and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.

Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …

Given n, return the value of Tn.

*/

function tribonacci(n) {
    //implement this function
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
}