

function nextSmallestElementRight(arr,n){
    let res = [];
    for(let i = 0; i < n;i++){
        let found = false;
        for(let j = i + 1;j < n;j++){
            if(arr[j] < arr[i]){
                res.push(arr[j]);
                found = true;
                break;
            }
        }

        if(!found) res.push(-1);
    }
    return res;
}

function nextSmallestElementRightOptimize(arr,n){
    let res = [];
    let st = [];
    for(let i = n - 1; i >= 0;i--){
        if(st.length === 0) res.push(-1);
        else if(st.length > 0 && st[st.length - 1] < arr[i]){
            res.push(st[st.length -1]);
        }else if(st.length > 0 && st[st.length - 1] >= arr[i]){
            while(st.length > 0 && st[st.length - 1] >= arr[i]){
                st.pop();
            }
            if(st.length === 0) res.push(-1);
            else res.push(st[st.length - 1]);
        }
        st.push(arr[i]);
    }
    return res.reverse();
}

const arr = [2,1,3,0];
// const arr = [1,3,0,0,1,2,4]
const n= arr.length ;
console.log(nextSmallestElementRightOptimize(arr,n))