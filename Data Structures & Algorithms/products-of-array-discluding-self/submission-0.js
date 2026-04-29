class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     *  
     *  1 2 4 6 
     * 
     *  1  2  8  48
     *  48 48 24 6
     * 
     *  48 24
     * 
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);

        let prefix = 1;
        for(let i = 0; i < nums.length; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
