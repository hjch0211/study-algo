/**
 * Time : 47:34
 * Title : 귤 고르기
 * Approach : 그냥 빠르게 풀 수 있는 문제인 줄 알았는데 while에서 틀린 답이 나옴
 * Review1 : 처음 cnt를 Array.from(tangerine.at(-1)+1)로 두고 Math.max를 실행했을 때, 값이 NaN이 나옴
 * Review2 : 또한 같은 로직을 while로 돌렸을 때와 reduce로 돌릴 때 차이남
 */
function solution(k, tangerine) {
  var answer = 0;
  tangerine.sort();
  const set = Array.from(new Set(tangerine));
  const cnt = {};
  set.forEach((x) => {
    cnt[x] = 0;
  });
  tangerine.forEach((x) => cnt[x]++); // cnt 객체에 각 요소 개수 할당

  const arrCnt = [];
  set.forEach((x) => arrCnt.push(cnt[x]));

  arrCnt.sort((a, b) => b - a);
  let tmp = 0;
  answer = arrCnt.reduce((acc, cur) => {
    // [!] while은 틀리고, reduce는 맞았음
    if (tmp >= k) return acc;
    tmp += cur;
    return ++acc;
  }, 0);

  return answer;
}
