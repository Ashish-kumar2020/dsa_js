/*
    Problem Description
Given a number n, you have to calculate the factorial of that number.

*/



function factorialDSA(n) {
    //implement this function
    if(n === 0) return 1;
    return n * factorialDSA(n-1)
}