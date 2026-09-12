
function merge(left,right){
    let res = [];
    let i = 0;
    let r =0;
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
        res.push(right[r]);
        r++;
    }
    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const arr = [
  2, 4, 5, 6,
  7, 8, 9, 1
]
console.log(mergeSort(arr));