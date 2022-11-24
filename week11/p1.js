/**
 * Time : 43:20 -> 효율을 생각 못함
 * Title : 기사단원의 무기 by 프로그래머스
 * Approach : j = i + 1로 설정해서 j++로 탐색한게 문제였음
 * Review : 지금 생각하면 당연한건데, 왜 그 때 바로 생각을 못했을까
 */

function solution(number, limit, power) {
  var answer = 0;
  let dp = new Array(number + 1).fill(2);
  dp[0] = 0;
  dp[1] = 1;

  // [!] number / 2부터는 배수가 범위안에 없으므로
  for (let i = 2; i <= number / 2; i++) {
    if (dp[i] > limit) continue;
    // [!] 초반에 j = i + 1로 해버렸음. 생각해보니 배수만 돌아주면 되는 것... -> 너무 효율을 생각 못했나?
    for (let j = i + i; j <= number; j += i) dp[j] += 1;
  }

  dp = dp.map((x) => {
    if (x > limit) return power;
    else return x;
  });

  answer = dp.reduce((acc, cur) => acc + cur);
  return answer;
}
