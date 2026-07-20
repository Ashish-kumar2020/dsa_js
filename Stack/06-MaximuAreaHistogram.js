/*
    1. Find the indexes of all the nextSmallestElement at left
    2. Find the indexes of all the nextSmallestElement at right

    3. Then find the width of the from the arrays
      ---->>. NSR[i] - NSL[i] - 1;

    4. then find the area using arr[i] * width[i];
    5. Then return the maximum area from the area array


*/


function nextSmallestElementLeft(arr, n) {
  let res = [];
  let st = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (st.length === 0) res.push(-1);
    else if (st.length > 0 && arr[st[st.length - 1]] < arr[i]) {
      res.push(st[st.length - 1]);
    } else if (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
        st.pop();
      }
      if (st.length === 0) res.push(-1);
      else res.push(st[st.length - 1]);
    }
    st.push(i);
  }

  return res;
}

function nextSmallestElementRight(arr, n) {
  let res = [];
  let st = [];
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    if (st.length === 0) res.push(-1);
    else if (st.length > 0 && arr[st[st.length - 1]] < arr[i]) {
      res.push(st[st.length - 1]);
    } else if (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
        st.pop();
      }
      if (st.length === 0) res.push(-1);
      else res.push(st[st.length - 1]);
    }
    st.push(i);
  }
  for (let i = 0; i < n; i++) {
    if (res[i] === -1) {
      res[i] = n;
    }
  }
  return res.reverse();
}

function maximuAreaHistogram(arr, n) {
  let widthArr = [];
  let areaArr = [];
  let maxArea = 0;

  let NSL = nextSmallestElementLeft(arr, n);
  let NSR = nextSmallestElementRight(arr, n);

  //  find the width
  for (let i = 0; i < n; i++) {
    widthArr[i] = NSR[i] - NSL[i] - 1;
  }
  //   console.log(widthArr);

  // Area of the Histogram
  for (let i = 0; i < n; i++) {
    areaArr[i] = arr[i] * widthArr[i];
  }
  //   Finding Maximum
  for (let i = 0; i < areaArr.length; i++) {
    if (areaArr[i] > maxArea) {
      maxArea = areaArr[i];
    }
  }
  return maxArea;
}

const arr = [6, 2, 5, 4, 5, 1, 6, 0];
// const arr = [1,3,0,0,1,2,4]

const n = arr.length;
console.log(maximuAreaHistogram(arr, n));

