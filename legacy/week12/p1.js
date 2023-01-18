/**
 * Time : 7:41
 * Title : 명예의 전당(1) by 프로그래머스
 * Approach : 그냥 말 그대로 구현
 * Review : 쉬움
 */

// 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당
// k일까지는 모든 출연 가수의 점수가 명예의 전당
// 최하위 점수를 발표
function solution(k, score) {
  var answer = [];
  let glory = [];
  for (let i = 0; i < score.length; i++) {
    if (glory.length < k) glory.push(score[i]);
    else {
      const bottom = glory.shift();
      glory.push(bottom < score[i] ? score[i] : bottom);
    }
    glory.sort((a, b) => a - b); // sort 디폴트가 문자열? 기준인 거 고려하기
    answer.push(glory[0]);
  }
  return answer;
}
