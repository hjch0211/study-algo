/**
 * valid-parentheses by leetcode
 // 너무 유명한 문제를 가져와 버린 듯
 * @param {string} s
 * @return {boolean}
 */
module.exports = isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // 1. 그냥 단순하게 여는 괄호를 스택에 저장
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
        // 2. 그냥 단순하게 닫는 괄호를 스택에 저장
        else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
            const closedParentheses = stack.pop() || null;

            if (s[i] === ")" && closedParentheses !== "(") return false;
            if (s[i] === "}" && closedParentheses !== "{") return false;
            if (s[i] === "]" && closedParentheses !== "[") return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
};

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    const size = k + 1;  
    let data = new Array(k+1)
    let front = 0;
    let rear = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return -1
    if(this.front === 0) this.front = 
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1
    
    return this.data[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1
    
    return this.data[this.rear -1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear  
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.front - this.rear) === 1 || this.rear - this.front === this.size
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */