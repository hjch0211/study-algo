/**
 * time : 9:40
 * title : 1. 콜라 문제 by 프로그래머스
 * @param {number} a 빈 병 a당
 * @param {number} b 콜라 b 반환
 * @param {number} n
 * @returns
 * 일반화
 * a당 b, 빈 병 n <= 100만 -> input이 큼
 */
const recur = (a, b, n) => {
    if (n < a) return 0;
    const res = parseInt(n / a) * b;
    // remain이 남는다면, 다음에 넣어서 나눠주기
    const remain = n % a;

    return res + recur(a, b, remain + res);
};

function solution(a, b, n) {
    var answer = 0;

    answer = recur(a, b, n);

    return answer;
}
