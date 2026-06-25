


function reverseWord(s){
    let str = "";
    let res = []
    for(let i = 0 ; i < s.length;i++){
       if(s[i] !== ' '){
        str += s[i];
       }else {
         res.push(str);
         str = ""
       }
    }
    if(str.length !== 0){
        res.push(str)
    }
    let left = 0;
    let right = res.length - 1;
    while(left < right){
      
           [res[left], res[right]] = [res[right],res[left]];
           left++;
           right--;
    }
    return res;
}

function reverseWordOptimize(s){
    let word = "";
    let result = "";
    for(let i = s.length - 1; i>=0;i--){
        if(s[i] !== " "){
            word = s[i] + word
        }else {
            if(word.length > 0){
                if(result.length > 0 ) result += " ";
                result += word;
                word = ""
            }
        }
        
    }
    if (word.length > 0) {
        if (result.length > 0) result += " ";
        result += word;
    }
    console.log(result)
}

const s = "I Love Javascript";
console.log(reverseWordOptimize(s))