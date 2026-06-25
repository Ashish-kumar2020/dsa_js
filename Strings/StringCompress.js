
/*
Problem Description
Implement the function stringCompression() that:

Accepts a string s as an argument

Returns

a compressed string for each group of consecutive repeated characters by replacing the group with the character followed by the number of occurrences.

the original string if the compressed string is not shorter than the original string


Note
You can assume the string contains only uppercase and lowercase letters (a-z).


Input Format
A single line containing the string s.


Output Format
A single line representing the compressed string as specified. If compression does not reduce the size, return the original string.


Sample Input 1
aabccccc


Sample Output 1
a2b1c5




*/



function stringCompression(s) {
    if(s.length === 0) return s;
   let currAlph = s[0];
   let count = 1;
   let res = "";
   for(let i =1; i < s.length;i++){
       if(s[i] == currAlph){
           count++;
       } else {
           res = res + currAlph;
           res = res + count;
           currAlph = s[i];
           count = 1;
       }
   }
   res += currAlph;
   res += count;
   return res.length < s.length ? res : s;
}

const s = "aabccccc";
console.log(stringCompression(s))