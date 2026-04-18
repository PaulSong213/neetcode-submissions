class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const charMap = new Map();

        for(const char of s){
            const oldValue = charMap.has(char) ? charMap.get(char) : 0;
            charMap.set(char, oldValue + 1);
        }

        for(const char of t){
            const oldValue = charMap.has(char) ? charMap.get(char) : 0;
            if(oldValue <= 0) return false;
            charMap.set(char, oldValue - 1);
        }

        return true;
    }
}
