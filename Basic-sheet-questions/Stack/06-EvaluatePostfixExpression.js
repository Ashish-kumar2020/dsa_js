

//Evaluate Postfix Expression 
//In postfix notation, the operator comes after the operands.


function evaluatePostFix(arr){
    let st = [];
    if(arr.length === 0) return -1;
   
    for(let i = 0;i < arr.length;i++){
        if(!isNaN(arr[i])){
            st.push(arr[i]);
        }else {
            let firstVal = st.pop();
            let secVal = st.pop();

            if(arr[i] === "+"){
                st.push(firstVal + secVal);
            }else if(arr[i] === "-"){
                st.push(secVal - firstVal);
            }else if(arr[i] === "*"){
                st.push(firstVal * secVal);
            }else if(arr[i] === "/"){
                st.push(Math.trunc(secVal / firstVal));
            }
        }
        
    }
   
    return st.pop();

}

const arr = [4, 13, 5, "/", "+"]
console.log(evaluatePostFix(arr));