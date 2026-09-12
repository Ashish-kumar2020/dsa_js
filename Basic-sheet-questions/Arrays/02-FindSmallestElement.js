// Find the smallest element

function findSmallestUsingInBuilt(arr){
    const minEle = Math.min(...arr);
    return minEle;
}

function findSmalledElement(arr){
    let minEle = Infinity;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] < minEle){
            minEle = arr[i];
        }
    }
    return minEle;
}

const arr = [4,3,2,4,6,79,87,1];
// console.log(findSmallestUsingInBuilt(arr));
console.log(findSmalledElement(arr))