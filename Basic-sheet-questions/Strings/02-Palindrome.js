/*
Check if a String is a Palindrome

Problem Statement : Given a string, determine whether it is a palindrome.

A palindrome is a string that reads the same forward and backward.

Return true if the string is a palindrome; otherwise, return false.

*/

function isPalindrome(str){
    let currStr = str;
    let splittedStr = currStr.split("");
    let left = 0;
    let right = splittedStr.length - 1;
    while(left < right){
        [splittedStr[left],splittedStr[right]] = [splittedStr[right],splittedStr[left]];
        left++;
        right--;
    }
    let finalStr = splittedStr.join("");
    return finalStr === str;
}

function isPalindromeOptimize(str){
    
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const str = "madam";
// console.log(isPalindrome(str));
console.log(isPalindromeOptimize(str));
