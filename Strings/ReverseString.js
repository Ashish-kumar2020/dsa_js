/*
    Problem Description : Write a program that reverses a string.
*/


function reverseString(str) {
    //implement this function
    let res = str.split('');
    let leftPtr = 0;
    let rightPtr = res.length - 1;
    while(leftPtr < rightPtr){
        [res[leftPtr],res[rightPtr]] = [res[rightPtr],res[leftPtr]];
        leftPtr++;
        rightPtr--;
    }
    return res.join('');
}
const str = "abc";
console.log(reverseString(str))