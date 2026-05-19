class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        
        const sMap = new Map();
        const tMap = new Map();

        for(const char of s){
            const prevVal = sMap.has(char) ? sMap.get(char) : 0;
            sMap.set(char, prevVal + 1);
        }

        for(const char of t){
            const prevVal = tMap.has(char) ? tMap.get(char) : 0;
            tMap.set(char, prevVal + 1);
        }

        for(const key of sMap.keys()){
            if(!tMap.has(key) || sMap.get(key) !== tMap.get(key)){
                return false;
            }
        }

        return true;

    }
}
