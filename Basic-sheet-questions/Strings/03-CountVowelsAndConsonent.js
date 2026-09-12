/*
Count Vowels and Consonants

Problem Statement : Given a string containing English alphabetic characters, count the number of vowels and consonants in the string.

*/

function countVowelAndConsonent(str){
    let vowelCount = 0;
    let consonantsCount = 0;
    for(let i = 0;i < str.length;i++){
        if(str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U" || str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            vowelCount++;
        }else{
            consonantsCount++;
        }
    }
    return {vowelCount,consonantsCount}

}

const str = "heloo";
console.log(countVowelAndConsonent(str))