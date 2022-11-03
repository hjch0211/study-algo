/**
 * Time : 38:50 런타임 에러 -> 콜 스택 에러
 * Title : 햄버거 만들기 by 프로그래머스
 * Approach : 재귀로 접근했었음. 쉽게 풀었는데 런타임에러...
 * Review : 재귀가 input이 크면 콜스택 에러를 많이 일으켰음
 */
function solution(ingredient) {
    var answer = 0;
    const stack = [];

    ingredient.forEach((ing) => {
        stack.push(ing);

        if (stack.length >= 4) {
            // [!] slice(-4) => slice(stack.length - 4)
            const target = stack.slice(-4).join("");
            if (target === "1231") {
                // stack = stack.slice(0,stack.length-4) 는 시간 초과
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                answer++;
            }
        }
    });

    return answer;
}
