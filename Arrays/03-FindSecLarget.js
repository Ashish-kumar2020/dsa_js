// Find the second largest element

function secLargetElement(arr){
    let maxEle = -Infinity;
    let secLar = -Infinity;

    for(let i = 0; i < arr.length;i++){
        if(arr[i] > maxEle){
            secLar = maxEle;
            maxEle = arr[i];
        }else if(secLar < arr[i] && maxEle > arr[i]){
            secLar = arr[i];
        }

    }
    return secLar
}

const arr = [10, 5, 8, 3];
console.log(secLargetElement(arr))