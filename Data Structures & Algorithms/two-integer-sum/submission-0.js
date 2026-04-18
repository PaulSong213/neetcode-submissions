class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length <= 1) throw new Error("Nums length should be greater than 1");
        const resultMap = new Map();
        for(let i = 0; i < nums.length; i++){
            const difference = target - nums[i];
            if(resultMap.has(difference)){
                return[i, resultMap.get(difference)]
            }
            resultMap.set(nums[i], i);
        }
        throw new Error("Result not found");
    }
}
