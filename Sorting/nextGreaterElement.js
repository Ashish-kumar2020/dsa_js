

function nextGreaterElement(n){
    let arr = n.toString().split('').map(Number);
    let pivot = -1;
    for(let i = arr.length - 2;i >= 0;i--){
        if(arr[i] < arr[i + 1]){
            pivot = i;
            break;
        }
    }

    if(pivot == -1){
        return -1;
    }

    for(let i = arr.length - 1;i > pivot;i--){
        if(arr[i] > arr[pivot]){
            [arr[i],arr[pivot]] = [arr[pivot],arr[i]];
            break;
        }
    }

    let left = pivot + 1;
    let right = arr.length - 1;
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    let ans = Number(arr.join(''));

    return ans;
}

console.log(nextGreaterElement(12543)); // 13245

console.log(nextGreaterElement(12));    // 21

console.log(nextGreaterElement(21));    // -1

console.log(nextGreaterElement(218765)); // 251678