/**
 * Time : 16:59
 * Title : 점 찍기
 * Approach : 처음에 이중 포문 터질 것같아서 최적화할 부분 생각하다가 y의 최댓값을 구하면 될 것같다고 생각
 */
// dp도 될라나? -> 필요 없음
// 효율성 문제
function solution(k, d) {
  var answer = 0;
  for (let x = 0; x <= d; x += k) {
    // y 최대값 구하면 될 듯
    const mx = ~~Math.sqrt(d ** 2 - x ** 2);
    answer += ~~(mx / k) + 1;
  }
  return answer;
}
