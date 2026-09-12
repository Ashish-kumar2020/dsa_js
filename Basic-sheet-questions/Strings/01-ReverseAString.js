/*
Reverse a String

Problem Statement : Given a string, return the string with its characters in reverse order.

*/

function reverseAString(str){
    let convertedStr = str.split("");
    let left = 0;
    let right = convertedStr.length-1;
    // console.log(convertedStr[right])
    while(left < right){
        [convertedStr[left],convertedStr[right]] = [convertedStr[right],convertedStr[left]];
        left++;
        right--;
    }
    return convertedStr.join("");
}


const str =   "hello"
 console.log(reverseAString(str));
