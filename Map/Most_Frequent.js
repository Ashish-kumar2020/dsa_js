/*
    Problem Description
You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.


*/


function mostFrequentDSA(text) {
   let mpp = new Map();
   for(let val of text){
       if(mpp.has(val)){
           mpp.set(val,mpp.get(val) + 1);
       } else {
           mpp.set(val, 1);
       }
   }

   let ans = "";
   let maxCount = 0;
   for(let [val,count] of mpp){
       if(count > maxCount){
           maxCount = count;
           ans = val 
       } else if(count === maxCount && val < ans){
          
           ans = val 
       }
       
   }
   
   return [ans, maxCount] 
//    console.log(ans + " " + maxCount)
}

console.log(mostFrequentDSA("Statements are unique."));
