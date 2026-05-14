class MinStack {
    stack;
    minStack;
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        const newMinimum = Math.min(val, this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity);
        
        this.minStack.push(newMinimum);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.minStack.length <= 0) return 0;

        return this.minStack[this.minStack.length - 1];
    }
}
