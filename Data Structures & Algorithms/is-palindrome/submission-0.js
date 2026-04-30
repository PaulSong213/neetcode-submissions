class Solution {

    

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (s)=> {
            const isLetter = (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z');
            const isNumber = s.charAt() >= '0' && s.charAt() <= '9';
            return isLetter || isNumber;
        }

        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(!isAlphanumeric(s[left])){
                left++;
                continue;
            }

            if(!isAlphanumeric(s[right])){
                right--;
                continue;
            }

            if(s[right].toLowerCase() !== s[left].toLowerCase()){
                return false;
            }

            left++;
            right--;
        }
        return true;
    }

}
