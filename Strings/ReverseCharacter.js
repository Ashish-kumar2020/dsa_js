
/*
    Problem Description : Write a program to reverse the words present in a sentence.

    Sample Input 1
        abc def ghi

    Sample Output 1
        cba fed ihg
*/



function reverseCharacters(str) {
    //implement this function
    let res = "";
    let finalStr = "";
    for(let i =0;i<str.length;i++){
        if(str[i] !== " "){
            res += str[i];
        } else {
            finalStr += res.split("").reverse().join("");
            finalStr += " ";
            res = "";
    }
    
    }
    if(res.length > 0){
        res = res.split("").reverse().join("");
        finalStr += res;
    }
    return finalStr;
}