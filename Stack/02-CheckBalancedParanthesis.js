/*
Problem - Check Balanced Parentheses
'()'       → true
'()[]{}'   → true
'({[]})'   → true

'(]'       → false
'([)]'     → false
'((('      → false
*/

function checkIsBalancedParanthesis(str){
    let st = [];
    for(let i = 0; i < str.length;i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            st.push(str[i]);
        }
        // console.log(str[i],st[st.length - 1])
        else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
            if(st.length === 0) return false;
            const top = st[st.length - 1];
            if(str[i] === ")" && top === "(" || str[i] === "}" && top === "{" || str[i] === "]" && top === "["){
                st.pop();
            }else{
                return false;
            }
        }
    }
    return st.length === 0;
}

const str = '()[]{}';
console.log(checkIsBalancedParanthesis(str));