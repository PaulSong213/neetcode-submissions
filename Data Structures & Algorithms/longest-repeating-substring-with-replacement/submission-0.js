class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let res = 0;

        let l = 0;

        for(let r = 0; r < s.length; r++){
            const prevVal = count.get(s[r]) ?? 0;
            count.set(s[r], 1 + prevVal)

            while( ((r - l + 1) - Math.max(...count.values()) ) > k){
                count.set(s[l], (count.get(s[l]) ?? 0) - 1  )
                l+= 1;
            }

            res = Math.max(res,  r - l + 1)

        }

        return res;

    }
}
