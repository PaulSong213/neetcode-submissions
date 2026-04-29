class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let res = 0;
        
        for(const num of numSet){
            let currDeduct = 1;
            let maxConsecutive = 1;
            if(numSet.has(num - currDeduct)){
                continue;
            }
            while(numSet.has(num + currDeduct)){
                currDeduct++;
                maxConsecutive++;
            }
            res = Math.max(res,maxConsecutive );
        }
        return res;
    }
}
