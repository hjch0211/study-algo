/**
 * Time : 16:08 -> 좀 더 빨리 풀었으면 좋았을 것같네
 * Title : 과일 장수
 * Approach : 그리디? 일단 그리디 해봄
 * Review : 이게 그리디인가? 일단 그냥 큰거부터 때려박기
 * score <= 백만
 * 가장 낮은 점수의 사과 * m개 = 가격
 */
function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  let cnt = 0;
  let apples = [];
  score.forEach((x) => {
    if (cnt < m) {
      apples.push(x);
      cnt++;
    } else {
      answer += Math.min(...apples) * m;
      cnt = 1;
      apples = [];
      apples.push(x);
    }
  });
  if (cnt === m) answer += Math.min(...apples) * m;
  return answer;
}
