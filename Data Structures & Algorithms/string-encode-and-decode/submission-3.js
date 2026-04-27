class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedData = "";
        for(const str of strs){
            encodedData += `${str.length}#${str}`;
        }
        return encodedData;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        let currCharLength = "";
        while(i < str.length) {
            const char = str[i];
            if(!isNaN(Number(char))){
                currCharLength += char;
                i++;
                continue;
            }

            if(currCharLength && char === "#" ){
                let decoded = "";
                const charLength = Number(currCharLength) + 1;

                for(let k = i + 1; k < i + charLength; k++){
                    decoded += str[k];
                }

                res.push(decoded);
                i += charLength;
                currCharLength = "";
                continue;
            }

            i++;
        }

        return res;

    }
}
