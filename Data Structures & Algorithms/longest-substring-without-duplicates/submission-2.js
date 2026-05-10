class Solution {
    /**
     * @param {string} s
     * @return {number}
     *  1
     *  dvdf
     *      
     */
    lengthOfLongestSubstring(s) {
        let seenSet = new Set();
        let left = 0;
        let right = 0;
        let max = 0;

        for(const char of s){
            while(seenSet.has(char)){
                seenSet.delete(s[left]);
                left++;
            }
            seenSet.add(char);
            right++;
            max = Math.max(max, right - left);
        }

        return max;
    }
}
