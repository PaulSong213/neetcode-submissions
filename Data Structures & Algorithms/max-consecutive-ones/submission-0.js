class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let curr = 0;

        for(const num of nums){
            if(num === 1){
                curr += 1;
            }else{
                curr = 0;
            }

            max = Math.max(max, curr);
        }
        
        return max;
    }
}
