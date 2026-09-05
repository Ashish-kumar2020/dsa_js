// Reverse a String Using a Stack


function reverseStringUsingStack(str){
    let st = [];
    let ans = "";
    for(let i = 0; i < str.length;i++){
        st.push(str[i]);
    }
    console.log(st);
    while(st.length > 0){
        ans += st.pop()
    }
    return ans;
}
const str = "hello";
console.log(reverseStringUsingStack(str));