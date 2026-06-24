/*
    Problem Description : Given a string, count the total number of vowels present in that string.
*/

function countVowels(word) {
    let vowel = 0;
    for(let i = 0; i < word.length;i++){
        if(word[i] == 'a' || word[i] == 'A' || word[i] == 'e' || word[i] == 'E' || word[i] == 'i' || word[i] == 'I' || word[i] == 'o' || word[i] == 'O' || word[i] == 'u' || word[i] == 'U'){
            vowel++;
        }
    }
    return vowel
}

// a e i o u
const word = "language";
console.log(countVowels(word))