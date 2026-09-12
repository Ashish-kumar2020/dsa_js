// Find the largest element

// using inBuilt Method

function findLargestUsingInbuilt(arr){
    const maxEle = Math.max(...arr);
    return maxEle;
}

function findLargetElement(arr){
    let maxEle = -Infinity;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > maxEle){
            maxEle = arr[i];
        }
    }
    return maxEle;
}

const arr = [4,3,2,4,6,79,87,1];
// console.log(findLargetElement(arr));
console.log(findLargestUsingInbuilt(arr))