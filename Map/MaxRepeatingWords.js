function maxRepeatingWord(N, arr) {
  //implement this function
  let hashMap = new Map();
  for (let val of arr) {
    if (hashMap.has(val)) {
      hashMap.set(val, hashMap.get(val) + 1);
    } else {
      hashMap.set(val, 1);
    }
  }
  let maxCount = 0;
  let ans = "";
  for (let [num, count] of hashMap) {
    if (count > maxCount) {
      maxCount = count;
      ans = num;
    } else if (count === maxCount && num < ans) {
      ans = num;
    }
  }
  return ans;
}

console.log(maxRepeatingWord(4, ["hello", "world", "crio", "crio"]));


/*
function intersectionOfTwoArrays(n, nums1, m, nums2) {
    let mpp = new Map();
    let ans = [];

    for (let num of nums1) {
        mpp.set(num, (mpp.get(num) || 0) + 1);
    }

    for (let val of nums2) {
        if (mpp.has(val) && mpp.get(val) > 0) {
            ans.push(val);
            mpp.set(val, mpp.get(val) - 1);
        }
    }

    return ans;
}


*/