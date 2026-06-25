/*
    *
    * *
    * * *
    * * * *
    * * * * *
*/

function printPatter(row){
    for(let i = 0; i < row ;i++){
        let str = "";
        for(let j = row - i; j <= row;j++){
            str += "*";
        }
        console.log(str)
    }
    
}

console.log(printPatter(4))