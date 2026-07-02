/*
Problem Description
You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

Note: You may not slant the container and n is at least 2.


*/


function maxArea(height) {
   let maxWater = 0;
   let left = 0;
   let right = height.length - 1;
   let area = 0;

   while(left < right){
       area = Math.min(height[left],height[right]) * (right - left);
       maxWater = Math.max(maxWater,area);

       if(height[left] < height[right]){
           left++;
       }else{
           right--;
       }
   }
   return maxWater;
    
}