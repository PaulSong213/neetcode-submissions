class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /**
     *  [1, 2, 3, 3]
     *            ^
     * 
     *  set([1, 2, 3])
     * 
     */

    hasDuplicate(nums) {
        const numSet = new Set([]);

        for(const num of nums){
            if(numSet.has(num)){
                return true;
            }
            numSet.add(num);
        }
        return false;
    }
}



