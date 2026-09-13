//Start with pointers at both ends. Calculate the current area using width × min(leftHeight, rightHeight). Move the pointer with the smaller height because keeping it cannot produce a larger area with a smaller width. Continue until the pointers meet.


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right){
        let width = right - left;
        let containerHeight = Math.min(height[left], height[right]);
        let area = width * containerHeight;
        if(maxArea < area){
            maxArea = area;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));