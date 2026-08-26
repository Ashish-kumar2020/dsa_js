/*
Reverse Words in a String

Problem Statement : Given a string containing multiple words separated by spaces, reverse the order of the words while keeping the characters within each word unchanged.
*/

function reverseAWordInString(str){
    let splittedStr = str.split(" ");
    let left = 0;
    let right = splittedStr.length - 1;
    while(left < right){
        [splittedStr[left],splittedStr[right]] = [splittedStr[right],splittedStr[left]];
        left++;
        right--;
    }
    return splittedStr.join(" ");
}

const str = "I love javascript"
console.log(reverseAWordInString(str));