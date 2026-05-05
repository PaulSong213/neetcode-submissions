class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while(left < right){
            const length = right - left;
            const height = Math.min(heights[left], heights[right]);
            const volume = length * height;
            max = Math.max(max, volume);
            if(heights[left] > heights[right]){
                right--;
            }else{
                left++;
            }
        }

        return max;
    }
}
