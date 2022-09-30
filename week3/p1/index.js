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
