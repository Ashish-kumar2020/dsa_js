

function merge(left,right){
    let res = [];
    let i = 0;
    let r = 0;
    while(i < left.length && r < right.length){
        if(left[i] <= right[r]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[r]);
            r++;
        }
    }
    while(i < left.length){
        res.push(left[i]);
        i++;
    }
     while(r < right.length){
        res.push(right[i]);
        r++;
    }
    return res;
}


function mergeSort(arr,n){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left  = arr.slice(0,mid);
    let right = arr.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left,right);
}

const arr = [8, 3, 5, 4]
const n = arr.length;
console.log(mergeSort(arr,n))