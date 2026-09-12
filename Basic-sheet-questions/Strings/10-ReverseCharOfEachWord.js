/*
Reverse Each Character of Every Word

Problem Statement : Given a string containing multiple words separated by spaces, reverse the characters of each individual word while keeping the order of the words unchanged.

*/

function reverseEachCharOfWord(str){
    let splittedStr = str.split(" ");
    let finalAns = "";
    for(let i = 0;i < splittedStr.length;i++){
        // console.log(splittedStr[i].split("").reverse().join(""));
        let res = splittedStr[i].split("");
            let left = 0;
            let right = res.length - 1;
            while(left < right){
                
                [res[left],res[right]] = [res[right],res[left]];
                left++;
                right--;
            }
           finalAns = finalAns + res.join("");
           if(i < splittedStr.length - 1){
            finalAns += " ";
           }
    }
    return finalAns;
};

const str = "I love javascript";
console.log(reverseEachCharOfWord(str));