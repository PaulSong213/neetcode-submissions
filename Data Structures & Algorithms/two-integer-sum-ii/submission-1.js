class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const currResult = numbers[left] + numbers[right];
            if(currResult === target) {
                return [left + 1, right + 1];
            }
            
            if(currResult < target){
                left++;
            }else{
                right--;
            }
        }
        throw new Error("Solution not found");
    }
}
