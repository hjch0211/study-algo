/**
 * Time : 41:34 1문제 실패
 * Title : k진수에서 소수 개수 구하기 by 카카오
 * Approach : 소수 구하기 + dp...
 * Review1 : dp top-down 방식으로 하면 배열 length 초과 때문에 막힘...
 */
// P는 각 자릿수에 0을 포함하지 않는 소수
// 1은 소수가 아님
function solution(n, k) {
  var answer = 0;
  const maxLen = 3 ** Number(1000000).toString(3).length;

  // dp를 어디까지 잡아줘야 될까
  let dp = Array.from({ length: maxLen }, () => 1);
  dp = dp.map((x, i) => {
    if (i <= 1) return 0;
    if (x === 1) {
      for (let j = 2 * i; j * j < maxLen; j += i) {
        dp[j] = 0;
        dp[maxLen / j] = 0;
      }
      return 1;
    } else return 0;
  });

  const arrParsedN = n
    .toString(k)
    .split("0")
    .filter((x) => x !== "");
  arrParsedN.forEach((x) => {
    if (dp[x]) answer++;
  });

  return answer;
}
