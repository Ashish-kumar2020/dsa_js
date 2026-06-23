/*
    Problem Description
        Write a program to calculate the simple interest based on the given principal amount, rate of interest, and time period.

        The formula to calculate simple interest is as follows:

        Simple Interest = (Principal × Rate × Time) / 100

*/


function simpleInterest(P, R, T) {
    let si = (P * R * T) / 100;
    return si;
}

const P = 1000;
const R = 5;
const T = 2;
console.log(simpleInterest(P,R,T)) 