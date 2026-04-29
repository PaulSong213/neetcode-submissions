class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const colMap = new Map();
        const squareMap = new Map();

        for(let row = 0; row < board.length; row++){
            const rowArr = board[row];
            if(!rowMap.has(row)){
                rowMap.set(row, new Set([]))  
            }     
            for(let col = 0; col < rowArr.length; col++){
                const squareKey = Math.floor(Math.floor((row / 3)) * 3 + Math.floor((col / 3)));

                if(!colMap.has(col)){
                    colMap.set(col, new Set([]));
                }

                if(!squareMap.has(squareKey)){
                    squareMap.set(squareKey, new Set([]));
                }

                const currVal = rowArr[col];
                console.log(squareKey);
                if(currVal === ".") {
                    continue;
                }

                const rowSet = rowMap.get(row);
                const colSet = colMap.get(col);
                const squareSet = squareMap.get(squareKey);
                if(rowSet.has(currVal) || colSet.has(currVal) || squareSet.has(currVal) ){
                    return false;
                }
                rowSet.add(currVal);
                colSet.add(currVal);
                squareSet.add(currVal);

                rowMap.set(row, rowSet);
                colMap.set(col, colSet);
                squareMap.set( squareKey, squareSet);
            }
        }

        return true;
    }
}
