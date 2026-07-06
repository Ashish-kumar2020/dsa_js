function firstNegNumInEveryWindow(arr,k){
    let i = 0;
    let j = 0;
    let res = [];
    let output = [];
    while(j < arr.length){
        if(arr[j] < 0){
            res.push(arr[j]);
        }
        if(j- i + 1 < k){
            j++;
        } else if(j - i + 1 === k){
            if(res.length == 0){
                output.push(0);
            } else {
                output.push(res[0]);
            }
            if(arr[i] === res[0]){
                res.shift();
            }
             i++;
             j++
        }
    }
    return output;
}

const nums = [12 ,-1 ,-7, 8 ,-15, 30 ,16 ,28], k = 3; // output-1 -1 -7 -15 -15 0 
console.log(firstNegNumInEveryWindow(nums,k))