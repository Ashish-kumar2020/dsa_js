/*
    Problem Description : You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.
*/

function naturalSum(N) {
    let sum = 0;
    if(N <= 0){
        return sum;
    }
    return N + naturalSum(N - 1);
}


console.log(naturalSum(5))