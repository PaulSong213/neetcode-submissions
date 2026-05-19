class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap = new Map();

        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            const difference = target - num;

            if(indexMap.has(difference)){
                return [i, indexMap.get(difference)];
            }

            indexMap.set(num, i);
        }

        throw new Error("Solution not found");
    }   
}
