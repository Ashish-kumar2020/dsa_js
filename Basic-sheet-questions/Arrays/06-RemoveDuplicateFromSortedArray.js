// Remove duplicates from a sorted array


function removeDuplicate(arr){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === arr[i+1]){
            let j = i+1;
            while(arr[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}

function removeDuplicateUsingSet(arr){
    const res = new Set(arr);
    return res;
}

function removeDuplicateUsingTwoPointer(arr){
    let j = 0;
    for(let i =0; i < arr.length;i++){
        if(arr[i] !== arr[j]){
          [arr[i],arr[j+1]] = [arr[j+1],arr[i]];
          j++;
        }
    }
    return arr;
}
const arr = [1,2,2,2,3,4,5,5,5,7,8];
console.log(removeDuplicateUsingTwoPointer(arr))