class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const word of strs){
            let totalCharCode = word.split('').sort().join('');
            const oldValue = !map.has(totalCharCode) ? [] : map.get(totalCharCode);
            oldValue.push(word);
            map.set(totalCharCode, oldValue);
        }

        const res = [];
        for(const [_, value] of map){
            res.push(value);
        }

        return res;
    }
}
