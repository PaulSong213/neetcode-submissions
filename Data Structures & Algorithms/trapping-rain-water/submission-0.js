class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft  = 0;
        let maxRight = 0;
        let res = 0;
        const leftArr = new Array(height.length).fill(0);
        const rightArr = new Array(height.length).fill(0);

        for(let i = 0; i < height.length; i++){
            leftArr[i] = maxLeft;
            maxLeft = Math.max(maxLeft, height[i]);
        }

        for(let i = height.length - 1; i >= 0; i--){
            rightArr[i] = maxRight;
            maxRight = Math.max(maxRight, height[i]);
        }
    

         for(let i = 0; i < leftArr.length; i++){
            const minVal = Math.min(leftArr[i], rightArr[i]);
            const currRes = Math.max(0, minVal - height[i]);
            res+= currRes;
         }

         return res;
    }
}
