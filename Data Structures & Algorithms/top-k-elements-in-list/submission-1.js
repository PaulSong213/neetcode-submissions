class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // build frequency map
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // convert to array of [num, freq]
        const entries = Array.from(map.entries());

        // sort by frequency (descending)
        entries.sort((a, b) => b[1] - a[1]);

        // take top k numbers
        const res = new Array(k);

        for (let i = 0; i < k; i++) {
            res[i] = entries[i][0];
        }

        return res;
    }
}