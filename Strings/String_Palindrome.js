/*
    Problem Description : Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.
*/

function stringPalindrome(str){
    let res = str.split('');
    let leftPtr = 0;
    let rightPtr = str.length - 1;
    while(leftPtr < rightPtr){
        [res[leftPtr],res[rightPtr]] = [res[rightPtr],res[leftPtr]];
        leftPtr++;
        rightPtr--;
    }
    return res.join('') === str
}

const str = 'madam';
console.log(stringPalindrome(str))