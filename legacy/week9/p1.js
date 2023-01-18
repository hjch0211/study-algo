/**
 * Time : 9:37 -> 더 빨리 풀었어야 됨
 * Title : 폰텟몬 by 프로그래머스
 * Approach : 처음엔 일일히 다 세주어야겠다고 생각했음
 * Review : 생각해보니 Set으로 만들어주면 종류만 나옴 -> 어차피 리턴은 최대 종류수
 * @param {number[]} nums
 * @returns
 */
function solution(nums) {
    const numberOfTypes = Array.from(new Set(nums)).length;
    const select = nums.length / 2;

    if (select <= numberOfTypes) return select;
    else return numberOfTypes;
}
