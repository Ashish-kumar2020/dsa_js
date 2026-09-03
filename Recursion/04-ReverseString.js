/*
Problem - Reverse a String Recursively
*/

function reverseString(str){
    if(str === "") return "";
    return reverseString(str.slice(1)) + str[0]
}

const str = "hello";
console.log(reverseString(str));