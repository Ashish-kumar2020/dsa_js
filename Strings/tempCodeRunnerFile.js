
function isSubstring(str1,str2){
   let startingPos = 0;
    for(let i = 0; i < str1.length ;i++){
        if(str1[i] === str2[0]){
            let j = 0;
            while(j < str2.length){
               if(str1[i+j] === str2[j]){
                // console.log(str1[i+j],str2[j]);
                j++;
               }else{
               break;
               }
               return true;
            }
            
        }
    }
  
    return false