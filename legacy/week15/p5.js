/**
 * Time : 49:59 실패 80점
 * Title : 억억단을 외우자
 * Approach : 약수 수 구하기 + dp. 근데 시간 초과. dp를 하나 더 만들어봤는데도 안됨
 * Review : 뭐로 최적화 해야 되냐...
 */
// s ~ e <= 500만. 중 억억단에서 가장 많이 등장한 수 return
// 같다면 작은 값 -> 그리디?
function solution(e, starts) {
  var answer = [];
  // 약수 수 구하기
  const dp = new Array(5000001).fill(2);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) for (let j = i * 2; j < dp.length; j += i) dp[j]++;

  // 여기서 시간 초과 해결해줘야 됨 -> 500만 * 10만
  // dp 하나 더? 정렬?
  const dp2 = []; // [s,v]
  starts.forEach((s, i) => {
    for (let j = 0; j < i; j++)
      if (dp2[0] == s) {
        answer.push(dp2[1]);
        return;
      } // 요걸로 80

    const curdp = dp.slice(s, e + 1);
    let maxIdx = -1;
    curdp.reduce((a, b, i) => {
      if (a < b) {
        maxIdx = i;
        return b;
      } else return a;
    }, 0);
    answer.push(maxIdx + s);
    dp2.push([s, maxIdx + s]);
  });

  return answer;
}
