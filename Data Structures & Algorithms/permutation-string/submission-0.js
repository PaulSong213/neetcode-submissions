class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const need = new Map();
        const window = new Map();

        // Build frequency map for s1
        for (const char of s1) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            const rightChar = s2[right];

            // Add current char to window
            window.set(rightChar, (window.get(rightChar) || 0) + 1);

            // Keep window size fixed
            if (right - left + 1 > s1.length) {
                const leftChar = s2[left];

                window.set(leftChar, window.get(leftChar) - 1);

                if (window.get(leftChar) === 0) {
                    window.delete(leftChar);
                }

                left++;
            }

            // Compare maps when window size matches
            if (right - left + 1 === s1.length) {
                let same = true;

                for (let i = 0; i < 26; i++) {
                    const char = String.fromCharCode(97 + i);

                    if ((need.get(char) || 0) !== (window.get(char) || 0)) {
                        same = false;
                        break;
                    }
                }

                if (same) return true;
            }
        }

        return false;
    }
}