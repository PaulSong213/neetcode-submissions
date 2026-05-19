class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenSet = new Set();
        for(const num of nums){
            if(seenSet.has(num)){
                return true;
            }
            seenSet.add(num);
        }
        return false;
    }
}
