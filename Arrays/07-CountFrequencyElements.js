//Count frequency of elements

function countFrequency(arr){
    let mpp = new Map();
    for(let num of arr){
        if(mpp.has(num)){
            mpp.set(num,mpp.get(num) + 1);
        }else{
            mpp.set(num,1);
        }
    }
    return mpp;
}

const arr = [1,2,2,2,3,3,3,3,4,5,6,8,7,7,7,7,8,9];
console.log(countFrequency(arr))
