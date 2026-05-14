class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * 
     * 
     * ([{}])
     * 
     */
    isValid(s) {
        const remaining = [];
        const pairMap = new Map([
            ['(',')'],
            ['{','}'],
            ['[',']'],
        ]);

        for(const char of s){
            if(pairMap.has(char)){
                remaining.push(pairMap.get(char));
                continue;
            }

            if(remaining[remaining.length - 1] !== char){
                return false;
            }else{
                remaining.pop();
            }
        }

        return remaining.length === 0;
    }
}
