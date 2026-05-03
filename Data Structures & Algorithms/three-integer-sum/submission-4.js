class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        for(let i = 0; i < sortedNums.length - 1; i++){
            const num = sortedNums[i];
            
            if(i > 0 && num === sortedNums[i - 1]){
                continue; // duplicate
            }

            let left = i + 1;
            let right = nums.length - 1;

            while(left < right){
                const currSum = num + sortedNums[left] + sortedNums[right];
                if(currSum === 0) {
                    res.push([num, sortedNums[left],  sortedNums[right]]);                    
                     left++;
    right--;

    // skip duplicates for left
    while (left < right && sortedNums[left] === sortedNums[left - 1]) {
        left++;
    }

    // skip duplicates for right
    while (left < right && sortedNums[right] === sortedNums[right + 1]) {
        right--;
    }
                }else{
                    if(currSum > 0){
                        right--;
                    }else{
                        left++;
                    }
                }
            }

        }

        return res;
    }
}





