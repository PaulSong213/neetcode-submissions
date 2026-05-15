class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     * 50 5 /
     */
    evalRPN(tokens) {
        const stack = [];
        const operations = new Set(["+","-","*","/"]);

        for (const token of tokens){
            if(!operations.has(token)){
                stack.push(Number(token));
                continue;
            }

            const a = stack.pop();
            const b = stack.pop()
            switch(token){
                case "+": 
                    stack.push(a + b);
                break;
                case "*":
                    stack.push(a * b);
                break;
                case "-":
                    stack.push(b - a);
                break;
                case "/":
                    stack.push(Math.trunc(b / a));
                break;
            }
        }

        return stack.length > 0 ? stack[0] : 0;
    }
}
