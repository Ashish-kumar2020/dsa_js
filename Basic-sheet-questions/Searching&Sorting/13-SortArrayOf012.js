

function sortArrayOf0s1s2s(arr){
    let n = arr.length;
    let start = 0;
    let end = n -1;
    let mid = 0;
    while(mid <= end){
        if(arr[mid] === 0){
            [arr[start],arr[mid]] = [arr[mid],arr[start]];
            start++;
            mid++;
        }  
        else if(arr[mid] === 1){
            mid++;
        }else{
            [arr[mid],arr[end]] =[arr[end],arr[mid]];
            end--;
        }
    }
    return arr;
}


let arr = [0, 1, 2, 0, 1, 2];
console.log(sortArrayOf0s1s2s(arr))