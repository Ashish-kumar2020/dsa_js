//Use two pointers from opposite ends while maintaining leftMax and rightMax. Process the side with the smaller maximum boundary because that side’s trapped water is already determined. Add the difference between the boundary maximum and current height to the total, then move that pointer.

var trap = function(height) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;
    let maxVal =0;
    let currHeight = 0;
    while(left < right){
        if(leftMax < height[left]) leftMax = height[left];
        if(rightMax < height[right]) rightMax = height[right];
        if(leftMax < rightMax) {
            currHeight = height[left];
        }else if(rightMax <= leftMax){
            currHeight = height[right];
        }
        maxVal+= Math.min(leftMax,rightMax) - currHeight;

        if(leftMax < rightMax){
            left++;
        }else if(rightMax <= leftMax){
            right--;
        }
    }
    return maxVal;
};